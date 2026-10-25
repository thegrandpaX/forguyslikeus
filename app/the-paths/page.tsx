import Link from "next/link";
import type { Metadata } from "next";
import FirstStepsChecklist from "./PathsClient";

export const metadata: Metadata = {
  title: "What Actually Helps | For Guys Like Us",
};

const STEP_TITLE = "font-headline-md text-headline-md text-on-surface mb-space-sm";
const STEP_BODY = "font-body-md text-body-md text-on-surface-variant";

export default function PathsPage() {
  return (
    <div className="editorial-route flex flex-col w-full">
      <div className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="flex flex-col gap-space-md mb-space-xl max-w-3xl">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface">
            What actually helps
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Getting a handle on this doesn&apos;t mean sitting in a circle sharing feelings or changing who you are. It means
            practical steps, simplest first.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          <ol className="lg:col-span-8 flex flex-col gap-space-md">
            <li className="bg-surface-container-low p-space-lg md:p-space-xl rounded-lg">
              <h2 className={STEP_TITLE}>1. Rule out the physical first.</h2>
              <p className={STEP_BODY}>
                Get a basic checkup and bloodwork — thyroid, hormones, vitamin D, iron — and talk to the doctor
                honestly about sleep and drinking. Tell them straight: <em className="text-on-surface">&ldquo;My sleep is
                wrecked, my chest feels tight, and I can&apos;t turn my brain off.&rdquo;</em> Physical problems mimic
                mental ones word-for-word, and this is the simplest step on the list.
              </p>
            </li>

            <li className="bg-surface-container-low p-space-lg md:p-space-xl rounded-lg">
              <h2 className={STEP_TITLE}>2. Reset your system physically.</h2>
              <p className={STEP_BODY}>
                When your heart&apos;s racing and your chest is tight, your nervous system is sending emergency
                signals. A physical reset cuts it off: breathe in through your nose for 4 seconds, hold for 4, blow
                out slowly through your mouth for 6. Two minutes. It forces your heart rate down — no mindset
                change required. Hard exertion works too. Burn off the adrenaline instead of carrying it.
              </p>
            </li>

            <li className="bg-surface-container-low p-space-lg md:p-space-xl rounded-lg">
              <h2 className={STEP_TITLE}>3. Cut back the chemical fuel.</h2>
              <p className={STEP_BODY}>
                Energy drinks and coffee after noon feed straight into jitters and chest tightness. Alcohol feels
                like an off-switch, but as your body processes it overnight it spikes stress hormones — that&apos;s
                the 3 AM wake-up with your heart pounding. Try cutting back on weeknights and see how much of the
                anxiety is actually the alcohol.
              </p>
            </li>

            <li className="bg-surface-container-low p-space-lg md:p-space-xl rounded-lg">
              <h2 className={STEP_TITLE}>4. Talk to one person.</h2>
              <p className={STEP_BODY}>
                You don&apos;t need a speech. One guy you trust — a buddy, a brother, a coworker — and one line:{" "}
                <em className="text-on-surface">&ldquo;Work and life have been beating the hell out of me lately.&rdquo;</em>{" "}
                You&apos;ll be surprised how often the answer is &ldquo;me too.&rdquo;
              </p>
            </li>

            <li className="bg-surface-container-low p-space-lg md:p-space-xl rounded-lg">
              <h2 className={STEP_TITLE}>5. Find a professional who gets it.</h2>
              <p className={STEP_BODY}>
                Good therapy for men looks like tactical problem-solving, not rambling about childhood. Look for
                someone experienced with trades, veterans, or first responders — someone who won&apos;t flinch at
                rough language. And if one talks down to you, swap them out. They&apos;re a tool. A bad tool gets
                replaced.
              </p>
            </li>

            <li className="bg-surface-container-low p-space-lg md:p-space-xl rounded-lg">
              <h2 className={STEP_TITLE}>6. Know your protections.</h2>
              <p className={STEP_BODY}>
                Worrying about your job is what keeps guys from step 5. Most employers offer a few free confidential EAP sessions. Most
                trade unions have member assistance programs separate from management. Federal medical privacy law
                bars your providers from sharing diagnoses with your foreman or dispatcher without your written
                consent. One honest caveat: if you hold a CDL, the DOT medical exam does ask about mental health
                history — talk to a medical professional about your specific situation instead of guessing. Getting
                help early is what keeps you working, not what ends careers.
              </p>
            </li>

            <li className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg border-l-4 border-secondary-container">
              <h2 className={STEP_TITLE}>7. If you&apos;re in crisis.</h2>
              <p className={STEP_BODY}>
                Thinking about ending it, or feeling like you can&apos;t trust yourself tonight — call or text{" "}
                <a className="text-on-surface font-bold underline decoration-secondary-container decoration-2" href="tel:988">988</a>{" "}
                now. Free, confidential, 24/7. You can also text HOME to{" "}
                <a className="text-on-surface font-bold underline decoration-secondary-container decoration-2" href="sms:741741?body=HOME">741741</a>.
                Reaching out isn&apos;t weakness. It&apos;s staying alive for the people counting on you.
              </p>
              <div className="flex flex-col sm:flex-row gap-space-sm mt-space-md">
                <a className="px-space-lg py-3 text-center bg-secondary-container hover:bg-error-container text-on-secondary-container font-label-badge text-label-badge uppercase tracking-wider transition-colors" href="tel:988">
                  Call 988
                </a>
                <a className="px-space-lg py-3 text-center bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-badge text-label-badge uppercase tracking-wider transition-colors" href="sms:988">
                  Text 988
                </a>
              </div>
            </li>
          </ol>

          <aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
            <figure className="editorial-image">
              <div
                className="editorial-image__visual editorial-image__visual--framing"
                role="img"
                aria-label="Construction worker framing a timber wall on site"
              />
              <figcaption>
                <span>One foot in front of the other.</span>
                <a href="https://unsplash.com/@josholalde" target="_blank" rel="noreferrer">Photo: Josh Olalde / Unsplash</a>
              </figcaption>
            </figure>

            <FirstStepsChecklist />

            <div className="bg-surface-container-low p-space-lg rounded-lg flex flex-col gap-space-sm">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Pocket card</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                The crisis numbers and the first steps on one page. Print it or keep it on your phone.
              </p>
              <a
                className="py-3 text-center bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-badge text-label-badge uppercase tracking-wider transition-colors"
                download="for-guys-like-us-pocket-card.txt"
                href="/downloads/field-card.txt"
              >
                Download pocket card
              </a>
            </div>

            <Link
              className="group bg-surface-container-low p-space-lg rounded-lg hover:bg-surface-container transition-colors"
              href="/the-resources"
            >
              <span className="block font-headline-sm text-headline-sm text-on-surface group-hover:text-primary">Resources →</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Hotlines, veterans support, help with drinking or drugs, and programs for the trades.
              </span>
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
