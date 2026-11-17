import { TELEGRAM_VIP_LINK } from './cta.js'

/**
 * Draft legal constants for preview.
 * REGULATORY_STATUS is intentionally non-registered wording — counsel must replace before Meta ads / go-live.
 * Do not invent SEC CRD or NFA ID numbers.
 */
export const LEGAL = {
  companyName: 'Elite Trading Solution LLC',
  address: '5976 Hunt Club Run, Norcross, GA 30093, United States',
  addressLines: {
    street: '5976 Hunt Club Run',
    city: 'Norcross',
    state: 'GA',
    postcode: '30093',
    country: 'US',
    contactName: 'Mikim Kokus',
  },
  phone: '+1 (770) 840-0432',
  phoneE164: '+17708400432',
  supportTelegram: TELEGRAM_VIP_LINK,
  supportTelegramLabel: 'Telegram Support',
  privacyEmail: 'info@elitetradingsolutions.com',
  complianceEmail: 'info@elitetradingsolutions.com',
  effectiveDate: 'November 17, 2026',
  regulatoryStatus:
    'Elite Trading Solution LLC provides educational trading information and community services. This draft does not assert SEC investment-adviser or CFTC/NFA registration. Counsel must replace this paragraph with the accurate registration line (or a confirmed non-registration disclosure) before production and Meta ads review.',
  regulatoryStatusShort: 'Educational services — registration pending counsel review',
  brokerNames:
    'the client’s own third-party broker or custodian (accounts remain in the client’s name)',
  feeModel:
    'Fees, if any, are disclosed in the applicable client or membership agreement before enrollment (for example, a membership fee and/or performance-related fee where permitted).',
  serviceArea: 'United States',
  crmTool: 'GoHighLevel',
  prospectRetention: '24 months',
  performanceType:
    'illustrative and/or hypothetical for the period stated, not net of all fees unless labeled otherwise',
}

export const TCPA_CONSENT_VERSION = 'v1-2026-11'

export const TCPA_CONSENT_TEXT =
  'I agree that Elite Trading may contact me by phone, text (including automated texts) and email about my inquiry and its services at the number and email provided. Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to opt out. See our Privacy Policy.'
