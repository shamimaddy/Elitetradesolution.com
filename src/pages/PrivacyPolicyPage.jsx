import LegalDoc, {
  LegalCallout,
  LegalCrossLink,
  LegalH3,
  LegalSection,
  LegalTable,
} from '../components/LegalDoc.jsx'
import { LEGAL } from '../data/legal.js'

export default function PrivacyPolicyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      description="How Elite Trading collects, uses and protects your personal information, your US state privacy rights, and our SMS/TCPA consent policy."
      canonicalPath="/privacy-policy"
      jsonLdName="Privacy Policy"
      effectiveLabel={`Effective date: ${LEGAL.effectiveDate} · Last updated: ${LEGAL.effectiveDate}`}
    >
      <div className="space-y-3 text-sm leading-relaxed text-ink-200/80 sm:text-[15px] sm:leading-[1.65]">
        <p>
          This Privacy Policy explains how <strong className="text-ink-100">{LEGAL.companyName}</strong>{' '}
          (&quot;Elite Trading&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, shares and
          protects personal information when you visit elitetradingsolution.com, submit a form
          (including lead forms on Facebook and Instagram), contact us, or use our account management
          services (together, the &quot;Services&quot;).
        </p>
      </div>

      <LegalCallout>
        <strong>Summary:</strong> We collect the details you give us — such as your name, email, phone
        and investing information — to respond to you, assess whether our Services fit you, and manage
        your account if you become a client. We do <strong>not sell</strong> your personal information.
        We will never ask for your brokerage login password by email, text or social media message.
      </LegalCallout>

      <LegalSection id="1-information-we-collect" title="1. Information we collect">
        <LegalH3>Information you provide</LegalH3>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink-100">Contact details:</strong> name, email address, phone
            number, state/country, preferred contact time.
          </li>
          <li>
            <strong className="text-ink-100">Investor profile:</strong> approximate account size, asset
            classes you trade, investing experience, goals and risk tolerance.
          </li>
          <li>
            <strong className="text-ink-100">Client onboarding information</strong> (only if you become
            a client): identity verification documents, date of birth, address, tax information,
            brokerage account details and signed agreements, as required by law or our broker partners.
          </li>
          <li>
            <strong className="text-ink-100">Communications:</strong> messages, call notes and call
            recordings (where we tell you a call is recorded), and survey answers.
          </li>
        </ul>

        <LegalH3>Information collected automatically</LegalH3>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Device and usage data: IP address, browser type, pages viewed, referring URL and time on
            page.
          </li>
          <li>
            Cookies, pixels and similar technologies, including the Meta Pixel / Conversions API and
            Google Analytics, used to measure ads and improve the site (see Section 6).
          </li>
        </ul>

        <LegalH3>Information from third parties</LegalH3>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink-100">Advertising platforms:</strong> when you submit a lead form
            on Facebook or Instagram, Meta Platforms, Inc. shares the information you entered in that
            form with us.
          </li>
          <li>
            <strong className="text-ink-100">Service providers and broker partners:</strong> account and
            transaction data needed to provide the Services.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="2-how-we-use-your-information" title="2. How we use your information">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            To respond to your request, schedule a free account review, and contact you by phone, email
            or text (with your consent).
          </li>
          <li>To assess whether our Services are suitable for you.</li>
          <li>
            To onboard you as a client, verify your identity, and provide account management and
            reporting.
          </li>
          <li>
            To send service updates and, where permitted, educational or marketing content (you can opt
            out at any time).
          </li>
          <li>To measure and improve our website and advertising.</li>
          <li>
            To detect fraud, protect our Services, and comply with legal, regulatory and record-keeping
            obligations.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="3-how-we-share-your-information" title="3. How we share your information">
        <p>
          We do <strong className="text-ink-100">not sell</strong> your personal information. We share
          it only with:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink-100">Service providers</strong> acting on our behalf — CRM and
            messaging tools (such as {LEGAL.crmTool}), email/SMS providers, scheduling, hosting,
            analytics and payment processors — who are contractually required to protect it.
          </li>
          <li>
            <strong className="text-ink-100">Broker, custodian or clearing partners</strong> that hold
            your account if you become a client: {LEGAL.brokerNames}.
          </li>
          <li>
            <strong className="text-ink-100">Advertising partners</strong> (such as Meta and Google) for
            ad measurement, as described in Section 6.
          </li>
          <li>
            <strong className="text-ink-100">Regulators, law enforcement or courts</strong> when required
            by law, and our professional advisers (lawyers, auditors).
          </li>
          <li>
            <strong className="text-ink-100">A buyer or successor</strong> in a merger, acquisition or
            sale of assets, under the same protections.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="4-text-messages-and-calls-tcpa" title="4. Text messages and calls (TCPA)">
        <p>
          If you provide your phone number and check the consent box, you agree that Elite Trading may
          call and text you, including by automated means, about your inquiry and our Services. Consent
          is not a condition of purchase. Message frequency varies. Message and data rates may apply.
          Reply <strong className="text-ink-100">STOP</strong> to opt out or{' '}
          <strong className="text-ink-100">HELP</strong> for help.{' '}
          <strong className="text-ink-100">
            We do not sell or share mobile numbers or SMS opt-in consent with third parties for their
            own marketing.
          </strong>
        </p>
      </LegalSection>

      <LegalSection id="5-email" title="5. Email">
        <p>
          Every marketing email includes an unsubscribe link. Unsubscribing from marketing does not stop
          service or account-related messages to clients.
        </p>
      </LegalSection>

      <LegalSection id="6-cookies-and-advertising-technologies" title="6. Cookies and advertising technologies">
        <p>
          We use cookies and pixels to understand site traffic and measure our ads, including the Meta
          Pixel and Conversions API and Google Analytics. These tools may collect your IP address,
          browser information and on-site activity.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Manage cookies in your browser settings or through our cookie banner (where shown).</li>
          <li>
            Meta ad preferences:{' '}
            <a
              className="text-action-red hover:underline"
              href="https://www.facebook.com/adpreferences"
              target="_blank"
              rel="noreferrer"
            >
              https://www.facebook.com/adpreferences
            </a>
          </li>
          <li>
            Google ad settings:{' '}
            <a
              className="text-action-red hover:underline"
              href="https://adssettings.google.com"
              target="_blank"
              rel="noreferrer"
            >
              https://adssettings.google.com
            </a>
          </li>
          <li>
            Google Analytics opt-out:{' '}
            <a
              className="text-action-red hover:underline"
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noreferrer"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
          </li>
          <li>
            We honor Global Privacy Control (GPC) browser signals as an opt-out of &quot;sharing&quot;
            where required by state law.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="7-how-we-protect-your-information" title="7. How we protect your information">
        <p>
          We use administrative, technical and physical safeguards, including encrypted connections
          (HTTPS), access controls and vendor due diligence. No method of transmission or storage is
          100% secure. We will never ask for your brokerage password through email, text, Messenger,
          Instagram or WhatsApp.
        </p>
      </LegalSection>

      <LegalSection id="8-how-long-we-keep-it" title="8. How long we keep it">
        <p>
          We keep prospect information for up to {LEGAL.prospectRetention} after our last contact unless
          you ask us to delete it sooner. Client records are kept for as long as required by applicable
          financial regulations, which is often five years or more after the relationship ends.
        </p>
      </LegalSection>

      <LegalSection id="9-your-privacy-rights" title="9. Your privacy rights">
        <p>
          Depending on your state (including California, Colorado, Connecticut, Virginia, Texas, Oregon
          and others), you may have the right to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Know and access the personal information we hold about you</li>
          <li>Correct inaccurate information</li>
          <li>Delete your information (subject to legal retention requirements)</li>
          <li>
            Opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information and of
            targeted advertising
          </li>
          <li>Limit the use of sensitive personal information</li>
          <li>Not be discriminated against for exercising these rights</li>
          <li>Appeal a decision we make about your request</li>
        </ul>
        <p>
          To make a request, contact us on{' '}
          <a
            href={LEGAL.supportTelegram}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-action-red hover:underline"
          >
            {LEGAL.supportTelegramLabel}
          </a>
          , email {LEGAL.privacyEmail}, or call {LEGAL.phone}. We will verify your identity before
          responding and reply within 45 days. You may use an authorized agent with your written
          permission.
        </p>

        <LegalH3>California notice at collection</LegalH3>
        <LegalTable>
          <thead>
            <tr className="border-b border-white/10 bg-base-900 text-ink-100">
              <th className="px-3 py-2 font-extrabold">Category</th>
              <th className="px-3 py-2 font-extrabold">Examples</th>
              <th className="px-3 py-2 font-extrabold">Purpose</th>
              <th className="px-3 py-2 font-extrabold">Sold / shared?</th>
            </tr>
          </thead>
          <tbody className="text-ink-200/80">
            <tr className="border-b border-white/10">
              <td className="px-3 py-2">Identifiers</td>
              <td className="px-3 py-2">Name, email, phone, IP address</td>
              <td className="px-3 py-2">Contact, services, ad measurement</td>
              <td className="px-3 py-2">Not sold; may be &quot;shared&quot; for ad measurement</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="px-3 py-2">Financial / commercial information</td>
              <td className="px-3 py-2">Account size, assets traded</td>
              <td className="px-3 py-2">Suitability and services</td>
              <td className="px-3 py-2">No</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="px-3 py-2">Internet activity</td>
              <td className="px-3 py-2">Pages viewed, clicks</td>
              <td className="px-3 py-2">Analytics, ad measurement</td>
              <td className="px-3 py-2">May be &quot;shared&quot; for ad measurement</td>
            </tr>
            <tr>
              <td className="px-3 py-2">Sensitive information (clients only)</td>
              <td className="px-3 py-2">Government ID, account numbers</td>
              <td className="px-3 py-2">Identity verification, account services</td>
              <td className="px-3 py-2">No</td>
            </tr>
          </tbody>
        </LegalTable>
      </LegalSection>

      <LegalSection id="10-financial-privacy-glba" title="10. Financial privacy (GLBA)">
        <p>
          If you become a client, information about your accounts is also protected under the
          Gramm-Leach-Bliley Act. We provide a separate client privacy notice at onboarding that
          describes that information and your choices.
        </p>
      </LegalSection>

      <LegalSection id="11-children" title="11. Children">
        <p>
          Our Services are for adults 18 and older. We do not knowingly collect information from anyone
          under 18.
        </p>
      </LegalSection>

      <LegalSection id="12-international-users" title="12. International users">
        <p>
          Our Services are directed at residents of {LEGAL.serviceArea}. If you access them from
          elsewhere, your information may be processed in the United States and in other countries where
          our providers operate.
        </p>
      </LegalSection>

      <LegalSection id="13-changes-to-this-policy" title="13. Changes to this policy">
        <p>
          We may update this policy from time to time. We will post the new version on this page with a
          new &quot;Last updated&quot; date and, for material changes, notify clients by email.
        </p>
      </LegalSection>

      <LegalSection id="14-contact-us" title="14. Contact us">
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
          Email: {LEGAL.privacyEmail}
          <br />
          Phone: {LEGAL.phone}
        </p>
      </LegalSection>

      <LegalCrossLink to="/disclosures" label="Risk Disclosure & Disclaimers" />
    </LegalDoc>
  )
}
