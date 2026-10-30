const LEAD_NOTIFY_EMAIL = 'khanramish49@gmail.com'

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

function badRequest(res, message) {
  return res.status(400).json({ ok: false, error: message })
}

export default async function handler(req, res) {
  cors(res)

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return res.status(500).json({
      ok: false,
      error: 'WEB3FORMS_ACCESS_KEY is not configured on the server',
    })
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
  const firstName = String(body.firstName || '').trim()
  const lastName = String(body.lastName || '').trim()
  const email = String(body.email || '').trim()
  const whatsapp = String(body.whatsapp || '').trim()
  const investmentAmount = String(body.investmentAmount || '').trim()
  const source = String(body.source || '').trim()

  if (!firstName || !lastName || !email || !whatsapp || !investmentAmount) {
    return badRequest(res, 'Missing required fields')
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return badRequest(res, 'Invalid email')
  }

  const payload = {
    access_key: accessKey,
    subject: `Elite Trading VIP lead — ${firstName} ${lastName}`,
    from_name: 'Elite Trading Website',
    replyto: email,
    to: LEAD_NOTIFY_EMAIL,
    name: `${firstName} ${lastName}`,
    email,
    whatsapp,
    investmentAmount,
    source,
    createdAt: body.createdAt || new Date().toISOString(),
  }

  const upstream = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await upstream.json().catch(() => ({}))

  if (!upstream.ok || data.success === false) {
    return res.status(502).json({
      ok: false,
      error: data.message || 'Failed to deliver lead email',
    })
  }

  return res.status(200).json({ ok: true })
}
