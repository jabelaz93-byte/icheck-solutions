import {
  ArtBlob,
  ArtPanel,
  ButtonLink,
  FeatureList,
  Footer,
  Heading,
  InkBurst,
  InkTooth,
  Lede,
  Mark,
  NavBar,
  PageFrame,
  ProductCard,
  QuoteHighlight,
  Section,
  SectionHeading,
  SculptureHero,
  StatRow,
  StatusBoard,
  StepList,
  TeamCard,
  TrialBanner,
  VerificationQueue,
} from "@/components/ui";

const practiceSoftware = ["Open Dental", "Dentrix", "CareStack", "Denticon"];

const safeguards = [
  {
    title: "Cloud-native",
    body: "Runs fully on Microsoft Azure. No on-site server to breach.",
  },
  {
    title: "Encrypted",
    body: "Patient and payer data protected in transit and at rest.",
  },
  {
    title: "Role-based access",
    body: "Only authorized staff can view or export data.",
  },
  { title: "Traceable outputs", body: "Every result carries an audit trail." },
];

export default function Home() {
  return (
    <PageFrame>
      <NavBar />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-page px-6 pt-[clamp(56px,8vw,104px)] text-center">
          <Heading as="h1" hero className="mx-auto max-w-[980px]">
            <strong>Verification</strong> that's done
            <br className="hidden md:block" /> before the patient sits down
          </Heading>
          <Lede large className="mx-auto">
            iCheck is the AI-powered verification and RCM partner for dental
            practices. It reads payer data in minutes, gets checked by real
            people, and writes results straight back to your practice
            software.
          </Lede>
          <div className="mt-[30px] flex flex-wrap justify-center gap-2.5">
            <ButtonLink href="#contact">Start your 2-week free trial</ButtonLink>
            <ButtonLink href="#how" variant="secondary">
              See how it works
            </ButtonLink>
          </div>
        </section>

        <section className="mx-auto max-w-page px-6 pt-[clamp(40px,8vw,128px)]">
          <SculptureHero
            footnote={
              <>
                <strong className="font-display">Patient B. · written back</strong>
                <br />
                Full benefits PDF · within 2 hrs
              </>
            }
          >
            <VerificationQueue />
          </SculptureHero>
          <p className="mt-3.5 mb-0 text-center text-xs">
            Illustrative product view · Michelangelo's David, marble, 1501–1504
          </p>
        </section>

        {/* Practice software */}
        <ul
          aria-label="Works with"
          className="mx-auto flex max-w-page list-none flex-wrap items-center justify-around gap-x-10 gap-y-[18px] px-6 py-12 font-display text-[clamp(1.1rem,2vw,1.5rem)] font-light tracking-[-0.02em]"
        >
          {practiceSoftware.map((name) => (
            <li key={name}>{name}</li>
          ))}
          <li className="font-sans text-sm tracking-normal">+ other major PMS</li>
        </ul>

        {/* Story */}
        <Section divider flushBottom>
          <Heading className="mx-auto max-w-[900px] text-center">
            Give every front desk a <strong>verification team</strong> that's
            one step ahead
          </Heading>
          <div className="mx-auto mt-10 grid max-w-[820px] gap-8 text-[15px] leading-[1.65] md:grid-cols-2">
            <p className="m-0">
              Most offices still verify insurance the way they did a decade
              ago: logging into payer portals, reading scanned PDFs and
              re-keying data field by field. It's slow, error-prone and costly
              to scale, and a single wrong field can ripple through the entire
              revenue cycle.
            </p>
            <p className="m-0">
              iCheck changes the model. AI tuned for dental insurance reads and
              structures payer data in a fraction of the time, a QA team
              audits the work, and results land in your practice software
              before the patient arrives.
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-page px-6 pt-[clamp(40px,6vw,72px)] pb-[clamp(56px,8vw,96px)]">
          <TrialBanner />
        </div>

        {/* Coverage */}
        <Section id="platform" tone="sand">
          <SectionHeading
            title={
              <>
                Full coverage, the moment{" "}
                <strong>an appointment is booked</strong>
              </>
            }
            lede="Tickets are picked up from your system every 15 minutes and worked in order of appointment date and time, so nothing is missed before the patient arrives."
            illustration={<InkTooth />}
          />
          <div className="mt-10 flex flex-wrap items-center gap-10">
            <ArtPanel
              palette="sunset"
              seed={21}
              minHeight={440}
              className="min-w-0 flex-[999_1_560px]"
            >
              <StatusBoard className="mx-auto" />
            </ArtPanel>
            <FeatureList
              className="min-w-0 flex-[1_1_300px]"
              items={[
                {
                  title: "Works in the background",
                  detail:
                    "Same-day and walk-in patients get an eligibility snapshot in under 2 minutes.",
                },
                {
                  title: "Reads the fine print",
                  detail:
                    "Active coverage, benefits, waiting periods and age limits checked upfront.",
                },
                {
                  title: "Picks up the phone",
                  detail:
                    "For payers with no online portal, our team verifies by phone.",
                },
              ]}
            />
          </div>
        </Section>

        {/* Statement */}
        <Section>
          <QuoteHighlight
            source="The iCheck approach"
            role="RCM, dental and AI experts on one team"
          >
            “We pair AI speed with human oversight, so{" "}
            <Mark>one checks the other</Mark>, instead of replacing it.”
          </QuoteHighlight>
        </Section>

        {/* How it works */}
        <Section id="how" tone="sand">
          <SectionHeading
            title={
              <>
                Connected to your software,{" "}
                <strong>so results land where you work</strong>
              </>
            }
            lede="From ticket to write-back, every step is automated, AI-powered or checked by a person, and you always know which."
            illustration={<InkBurst />}
          />
          <div className="mt-10 flex flex-wrap items-center gap-10">
            <StepList className="min-w-0 flex-[1_1_300px]" />
            <ArtPanel
              palette="ocean"
              seed={5}
              minHeight={440}
              className="min-w-0 flex-[999_1_560px]"
            >
              <div className="mx-auto flex max-w-[440px] flex-col gap-3">
                <ProductCard
                  title="Write-back complete"
                  meta={
                    <span className="rounded-chip bg-ink px-2 py-0.5 text-[11px] text-white">
                      Denticon
                    </span>
                  }
                >
                  <p className="m-0 px-[18px] py-3">
                    Patient B. · new plan attached to profile, remaining
                    benefits and fields updated.
                  </p>
                </ProductCard>
                <ProductCard title="Two PDFs, always" className="ml-6">
                  <p className="m-0 px-[18px] py-3">
                    Your customized office form plus the original payer page,
                    so every result can be cross-checked.
                  </p>
                </ProductCard>
                <ProductCard>
                  <div className="flex flex-wrap items-center gap-2 px-[18px] py-3.5">
                    <strong>Connected</strong>
                    {practiceSoftware.map((name) => (
                      <span key={name} className="rounded-chip bg-blue-100 px-2 py-0.5">
                        {name}
                      </span>
                    ))}
                  </div>
                </ProductCard>
              </div>
            </ArtPanel>
          </div>
        </Section>

        {/* Human QA */}
        <Section>
          <div className="flex flex-wrap items-center gap-12">
            <div className="min-w-0 flex-[1_1_420px]">
              <Heading>
                Checked by people, <strong>to the standard you set</strong>
              </Heading>
              <Lede>
                A random sample of every batch is pulled and reviewed by our QA
                team, across payers, operators and record types, not just the
                easy ones. Every rejection is tagged to a specific reason, and
                the findings feed straight back into the process.
              </Lede>
              <StatRow
                className="mt-7"
                stats={[
                  { value: "2 min", label: "Eligibility snapshot" },
                  { value: "2 hrs", label: "Full verification PDF" },
                  { value: "10%", label: "Audited by a person" },
                ]}
              />
            </div>
            <ArtPanel
              palette="sunset"
              seed={33}
              minHeight={420}
              className="min-w-0 flex-[1_1_420px]"
            >
              <div className="flex min-h-[340px] flex-col justify-between">
                <p
                  aria-hidden="true"
                  className="m-0 font-display text-[clamp(7rem,16vw,12rem)] font-extralight leading-none tracking-[-0.06em] text-white"
                >
                  10%
                </p>
                <ProductCard
                  tone="warm"
                  title="QA audit · today's batch"
                  meta={
                    <span className="rounded-chip bg-ink px-2 py-0.5 text-[11px] text-white">
                      Human review
                    </span>
                  }
                >
                  <p className="m-0 px-[18px] py-3">
                    Random 10% sample pulled across payers, operators and
                    record types. Denial reasons are checked before they reach
                    your team.
                  </p>
                </ProductCard>
              </div>
            </ArtPanel>
          </div>
        </Section>

        {/* Security */}
        <Section
          id="security"
          tone="navy"
          className="overflow-hidden bg-[radial-gradient(40rem_18rem_at_92%_10%,rgb(20_80_200/0.55),transparent_70%),radial-gradient(30rem_14rem_at_85%_95%,rgb(43_212_196/0.35),transparent_70%),radial-gradient(28rem_14rem_at_5%_95%,rgb(122_95_216/0.4),transparent_70%)]"
        >
          <Heading className="max-w-[760px]">
            Healthcare data deserves{" "}
            <strong>healthcare-grade safeguards</strong>
          </Heading>
          <Lede>
            Hosting, encryption and data handling are structured around HIPAA
            requirements, in transit and at rest.
          </Lede>
          <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-t border-white/50">
            {safeguards.map((s) => (
              <div key={s.title} className="pt-5 pr-5">
                <p className="m-0 font-display text-[17px] font-semibold">
                  {s.title}
                </p>
                <p className="mt-2 mb-0 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Team */}
        <Section id="team">
          <div className="flex flex-wrap items-end gap-12">
            <div className="min-w-0 flex-[1_1_420px]">
              <Heading>
                One team. <strong>Full-stack expertise.</strong>
              </Heading>
              <Lede>
                Dental RCM experts with 10+ years of hands-on experience, an IT
                and data team with 15+ years, and AI specialists with 5+ years
                in machine learning and LLM design. The same team that built
                the platform runs and supports it.
              </Lede>
            </div>
            <div className="grid min-w-0 flex-[1_1_420px] grid-cols-2 gap-[18px]">
              <TeamCard
                name="Paul K. Gurrapu"
                role="Co-Founder"
                photo="/team/paul-gurrapu.jpg"
              />
              <TeamCard
                name="Abel Aguilar"
                role="Co-Founder"
                photo="/team/abel-aguilar.jpg"
              />
            </div>
          </div>
        </Section>

        {/* Closing CTA */}
        <section
          id="contact"
          className="relative overflow-hidden border-t border-rule"
        >
          <ArtBlob
            palette="ocean"
            seed={2}
            className="absolute top-10 -left-20 h-[420px] w-[340px]"
          />
          <ArtBlob
            palette="sunset"
            seed={8}
            className="absolute top-2.5 -right-20 h-[440px] w-[340px]"
          />
          <div className="relative mx-auto max-w-[820px] px-6 py-[clamp(72px,10vw,128px)] text-center">
            <Heading size="display">
              Make verification <strong>effortless</strong>
            </Heading>
            <Lede large className="mx-auto">
              Start with a 2-week free trial on your own data. Discovery,
              configuration, pilot, scale: we stay hands-on the whole way.
            </Lede>
            <div className="mt-[30px] flex flex-wrap justify-center gap-2.5">
              <ButtonLink href="mailto:info@ichecksolutions.com">
                Start free trial
              </ButtonLink>
              <ButtonLink href="tel:+14696109328" variant="secondary">
                Call +1 (469) 610-9328
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageFrame>
  );
}
