import LegalDoc, {
  LegalCallout,
  LegalCrossLink,
  LegalSection,
} from '../components/LegalDoc.jsx'
import { LEGAL } from '../data/legal.js'

export default function DisclosuresPage() {
  return (
    <LegalDoc
      title="Risk Disclosure & Disclaimers"
      description="Important risk disclosures, regulatory status, fees and performance disclaimers for Elite Trading's professional trading account management services."
      canonicalPath="/disclosures"
      jsonLdName="Risk Disclosure & Disclaimers"
      effectiveLabel={`Last updated: ${LEGAL.effectiveDate}`}
    >
      <LegalCallout>
        <strong>Trading involves substantial risk, including the possible loss of all the money you invest.</strong>{' '}
        Past performance is not indicative of, and does not guarantee, future results. No representation is
        made that any account will or is likely to achieve profits or losses similar to those discussed on
        this website or in our advertising. Only invest money you can afford to lose.
      </LegalCallout>

      <LegalSection id="1-who-we-are-and-regulatory-status" title="1. Who we are and regulatory status">
        <p>
          <strong className="text-ink-100">{LEGAL.companyName}</strong> provides discretionary trading
          account management services.
        </p>
        <p>{LEGAL.regulatoryStatus}</p>
      </LegalSection>

      <LegalSection id="2-how-our-service-works" title="2. How our service works">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Your account is held in <strong className="text-ink-100">your own name</strong> at a
            third-party broker/custodian: {LEGAL.brokerNames}. We do not take custody of your funds.
          </li>
          <li>
            With your written authorization, a professional trader places trades in your account under a
            limited trading authorization. We cannot withdraw your funds.
          </li>
          <li>
            You can view your account and every trade at any time through your broker, and you may revoke
            our authority or withdraw funds subject to your broker&apos;s terms.
          </li>
          <li>
            Fees: {LEGAL.feeModel}. Full terms are in the client agreement provided before you sign.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="3-key-risks" title="3. Key risks">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink-100">Market risk:</strong> prices of stocks, options, futures,
            currencies and crypto assets can fall quickly and unpredictably, especially in volatile
            markets.
          </li>
          <li>
            <strong className="text-ink-100">Leverage and margin:</strong> leveraged products (margin,
            futures, options, forex) can produce losses greater than your initial deposit.
          </li>
          <li>
            <strong className="text-ink-100">Strategy risk:</strong> no strategy, risk plan or stop-loss
            eliminates losses. Stop orders may not execute at the intended price.
          </li>
          <li>
            <strong className="text-ink-100">Liquidity and gap risk:</strong> markets can gap overnight or
            around news, and positions may be hard to exit.
          </li>
          <li>
            <strong className="text-ink-100">Technology and execution risk:</strong> platform outages,
            connectivity failures or broker errors can affect trades.
          </li>
          <li>
            <strong className="text-ink-100">Crypto assets:</strong> highly volatile, largely
            unregulated, and not protected by SIPC or FDIC.
          </li>
          <li>
            <strong className="text-ink-100">No guarantees:</strong> we do not guarantee profits or
            returns, or that past losses will be recovered.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="4-performance-and-testimonials" title="4. Performance and testimonials">
        <p>
          Any performance shown is {LEGAL.performanceType}, for the period stated, and may not reflect
          the results of every client. Hypothetical or simulated results have inherent limitations and do
          not represent actual trading. Testimonials, if any, reflect individual experiences, may not be
          representative of other clients, and are not a guarantee of future performance or success. Where
          a person giving a testimonial was compensated or is related to us, we say so next to the
          testimonial.
        </p>
      </LegalSection>

      <LegalSection
        id="5-not-personalized-advice-until-you-become-a-client"
        title="5. Not personalized advice until you become a client"
      >
        <p>
          Content on this website, in our ads, emails and social media is for general information and
          education only. It is not a recommendation to buy or sell any security or investment, and it is
          not tax, legal or accounting advice. A free account review is not investment advice; an advisory
          relationship begins only after you sign a client agreement.
        </p>
      </LegalSection>

      <LegalSection id="6-advertising-disclosure" title="6. Advertising disclosure">
        <p>
          Our advertising may describe market conditions such as volatility. These descriptions are not
          predictions or promises of results. Market figures cited come from third-party sources we believe
          to be reliable but cannot guarantee.
        </p>
      </LegalSection>

      <LegalSection id="7-where-our-services-are-available" title="7. Where our services are available">
        <p>
          Our Services are offered only where we are permitted to do business: {LEGAL.serviceArea}.
          Nothing on this website is an offer or solicitation in any jurisdiction where it would be
          unlawful.
        </p>
      </LegalSection>

      <LegalSection id="8-third-party-links" title="8. Third-party links">
        <p>
          Links to third-party websites are provided for convenience. We are not responsible for their
          content or privacy practices.
        </p>
      </LegalSection>

      <LegalSection id="9-limitation-of-liability" title="9. Limitation of liability">
        <p>
          To the fullest extent permitted by law, Elite Trading is not liable for losses arising from
          reliance on website content. Nothing here limits any rights you have under federal or state
          securities or commodities laws that cannot be waived.
        </p>
      </LegalSection>

      <LegalSection id="10-complaints-and-contact" title="10. Complaints and contact">
        <p>
          <strong className="text-ink-100">{LEGAL.companyName}</strong>
          <br />
          {LEGAL.address}
          <br />
          Support:{' '}
          <a
            href={LEGAL.supportTelegram}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-action-red hover:underline"
          >
            {LEGAL.supportTelegramLabel}
          </a>
          <br />
          Email: {LEGAL.complianceEmail} · Phone: {LEGAL.phone}
        </p>
      </LegalSection>

      <LegalCrossLink to="/privacy-policy" label="Privacy Policy" />
    </LegalDoc>
  )
}