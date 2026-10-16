import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  AnnouncementPill,
  ArtPanel,
  AssistantPanel,
  Button,
  ButtonLink,
  Eyebrow,
  FeatureCard,
  FeatureList,
  Footer,
  Heading,
  Icons,
  InkBurst,
  InkTooth,
  Lede,
  Mark,
  NavBar,
  PageFrame,
  QueueFilters,
  QuoteHighlight,
  SelectField,
  StatRow,
  StatusBoard,
  StatusChip,
  StepList,
  Tag,
  TeamCard,
  TextField,
  TrialBanner,
  VerificationQueue,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Design system · iCheck Solutions",
  robots: { index: false },
};

function Specimen({
  name,
  note,
  children,
  dark = false,
}: {
  name: string;
  note: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className="border-t border-rule py-10">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="m-0 font-display text-xl font-semibold">{name}</h2>
        <p className="m-0 max-w-[560px] text-[13px]">{note}</p>
      </div>
      <div
        className={
          dark
            ? "rounded-chip bg-navy p-6 text-white"
            : "rounded-chip border border-line bg-white p-6"
        }
      >
        {children}
      </div>
    </section>
  );
}

const swatches = [
  ["paper", "bg-paper"],
  ["sand", "bg-sand"],
  ["ink", "bg-ink"],
  ["navy", "bg-navy"],
  ["blue-700", "bg-blue-700"],
  ["blue-600", "bg-blue-600"],
  ["blue-400", "bg-blue-400"],
  ["blue-200", "bg-blue-200"],
  ["teal-700", "bg-teal-700"],
  ["teal-300", "bg-teal-300"],
  ["violet", "bg-violet"],
  ["orange", "bg-orange"],
  ["coral", "bg-coral"],
  ["pink", "bg-pink"],
  ["gold", "bg-gold"],
] as const;

export default function DesignSystemPage() {
  return (
    <PageFrame>
      <NavBar />
      <main className="mx-auto max-w-page px-6 pt-16 pb-24">
        <Eyebrow>Internal · not linked from the site</Eyebrow>
        <Heading as="h1" hero className="mt-4">
          iCheck <strong>components</strong>
        </Heading>
        <Lede>
          Every building block for the landing page. Text is only ink or white;
          color lives in art, tags, chips and rules. Import from{" "}
          <code>@/components/ui</code>.
        </Lede>

        <Specimen name="Colors" note="Grounds, brand blues and art tones. Art tones never sit behind small text.">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-3">
            {swatches.map(([label, bg]) => (
              <div key={label}>
                <div className={`h-16 rounded-chip border border-line ${bg}`} />
                <p className="mt-1.5 mb-0 text-xs">{label}</p>
              </div>
            ))}
          </div>
        </Specimen>

        <Specimen name="Typography" note="Sora 300 headlines with one phrase at 600; DM Sans for everything else.">
          <Heading as="h3" hero>
            Verification <strong>done early</strong>
          </Heading>
          <Heading as="h3" className="mt-6">
            Checked by people, <strong>to the standard you set</strong>
          </Heading>
          <Lede>
            Body copy at 15px with a 1.65 line height and a 600px measure.
          </Lede>
        </Specimen>

        <Specimen name="Button" note="Primary (one per view), secondary, accent (product UI only), ghost; inverse and on-dark on navy.">
          <div className="flex flex-wrap items-center gap-2.5">
            <ButtonLink href="#contact">Start free trial</ButtonLink>
            <ButtonLink href="#how" variant="secondary">See how it works</ButtonLink>
            <Button variant="accent">Write back to PMS</Button>
            <Button variant="ghost">Contact sales</Button>
            <Button size="sm">Small</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Specimen>
        <Specimen name="Button on navy" note="Inverse as primary, outline as secondary." dark>
          <div className="flex flex-wrap gap-2.5">
            <Button variant="inverse">Start free trial</Button>
            <ButtonLink href="tel:+14696109328" variant="onDark">Call +1 (469) 610-9328</ButtonLink>
          </div>
        </Specimen>

        <Specimen name="Tag" note="Who does a workflow step. Only these three.">
          <div className="flex flex-wrap gap-2">
            <Tag kind="automated" />
            <Tag kind="ai" />
            <Tag kind="human" />
          </div>
        </Specimen>

        <Specimen name="StatusChip" note="The six patient statuses. The word always shows.">
          <div className="flex flex-wrap gap-2">
            <StatusChip status="eligible" />
            <StatusChip status="newPlan" />
            <StatusChip status="notEligible" />
            <StatusChip status="insufficient" />
            <StatusChip status="action" />
            <StatusChip status="none" />
          </div>
        </Specimen>

        <Specimen name="AnnouncementPill & FilterChip" note="One pill per page above the hero; filter chips only inside product UI.">
          <div className="flex flex-col items-start gap-4">
            <AnnouncementPill badge="NEW" href="#contact">
              Try iCheck free for 2 weeks on your own data
            </AnnouncementPill>
            <QueueFilters />
          </div>
        </Specimen>

        <Specimen name="FeatureList · StatRow · StepList" note="Content blocks that sit beside art panels.">
          <div className="grid gap-10 md:grid-cols-2">
            <FeatureList
              items={[
                { title: "Works in the background", detail: "Same-day and walk-in patients get an eligibility snapshot in under 2 minutes." },
                { title: "Reads the fine print", detail: "Coverage, waiting periods and age limits checked upfront." },
                { title: "Picks up the phone", detail: "For payers with no online portal, our team verifies by phone." },
              ]}
            />
            <StepList />
          </div>
          <StatRow
            className="mt-10"
            stats={[
              { value: "2 min", label: "Eligibility snapshot" },
              { value: "2 hrs", label: "Full verification PDF" },
              { value: "10%", label: "Audited by a person" },
              { value: "15 min", label: "Sync with your PMS" },
            ]}
          />
        </Specimen>

        <Specimen name="QuoteHighlight" note="iCheck's own statements; client quotes only with written approval.">
          <QuoteHighlight source="The iCheck approach" role="RCM, dental and AI experts on one team">
            “We pair AI speed with human oversight, so <Mark>one checks the other</Mark>, instead of replacing it.”
          </QuoteHighlight>
        </Specimen>

        <Specimen name="ArtPanel + product UI" note="Mixed palette for the hero. Cards float on art; text never sits on it directly.">
          <ArtPanel palette="mixed" seed={11} grain minHeight={520}>
            <div className="flex flex-wrap items-stretch gap-[18px]">
              <div className="min-w-0 flex-[999_1_520px]">
                <VerificationQueue />
              </div>
              <AssistantPanel className="min-w-0 flex-[1_1_300px]" />
            </div>
          </ArtPanel>
          <p className="mt-2.5 mb-0 text-center text-xs">Illustrative product view</p>
        </Specimen>

        <Specimen name="ArtPanel palettes" note="Ocean for integrations and security; Sunset for status, QA and people.">
          <div className="grid gap-4 md:grid-cols-2">
            <ArtPanel palette="ocean" seed={5}>
              <div className="mx-auto max-w-[320px] rounded-card bg-white p-4 text-[13px] shadow-float">
                <strong className="font-display">Write-back complete</strong>
                <p className="mt-1.5 mb-0">Patient B. · new plan attached to profile.</p>
              </div>
            </ArtPanel>
            <ArtPanel palette="sunset" seed={21}>
              <StatusBoard className="mx-auto" />
            </ArtPanel>
          </div>
        </Specimen>

        <Specimen name="TrialBanner" note="Once per page, after the intro.">
          <TrialBanner />
        </Specimen>

        <Specimen name="FeatureCard" note="Platform capabilities in an auto-fit grid.">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            <FeatureCard icon={<Icons.search />} title="Insurance verification">
              Automated eligibility and benefits checks across payers.
            </FeatureCard>
            <FeatureCard icon={<Icons.alert />} iconTone="navy" title="Denial management">
              Likely denial triggers flagged before submission.
            </FeatureCard>
            <FeatureCard icon={<Icons.trend />} iconTone="teal" title="A/R follow-up insights">
              Verified data feeds cleaner A/R and aging reports.
            </FeatureCard>
          </div>
        </Specimen>

        <Specimen name="InkIllustration" note="Black etched drawings, top right of a feature heading. Never colored.">
          <div className="flex flex-wrap items-center gap-10">
            <InkTooth />
            <InkBurst />
          </div>
        </Specimen>

        <Specimen name="TeamCard" note="Approved headshots, cropped to head and shoulders.">
          <div className="grid max-w-[460px] grid-cols-2 gap-[18px]">
            <TeamCard name="Paul K. Gurrapu" role="Co-Founder" photo="/team/paul-gurrapu.jpg" />
            <TeamCard name="Abel Aguilar" role="Co-Founder" photo="/team/abel-aguilar.jpg" />
          </div>
        </Specimen>

        <Specimen name="Forms" note="Every field has a visible label. Keep demo forms short.">
          <form className="flex max-w-[420px] flex-col gap-3.5">
            <TextField label="Work email" type="email" placeholder="you@yourpractice.com" hint="We'll reply within one business day." />
            <SelectField label="Practice software" />
            <Button type="submit">Book a demo</Button>
          </form>
        </Specimen>
      </main>
      <Footer />
    </PageFrame>
  );
}
