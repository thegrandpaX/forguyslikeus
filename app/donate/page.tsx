import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate | For Guys Like Us",
};

const TIP_TITLE = "font-headline-sm text-headline-sm text-on-surface mb-space-sm";
const TIP_BODY = "font-body-md text-body-md text-on-surface-variant";

export default function DonatePage() {
  return (
    <div className="editorial-route flex flex-col w-full">
      <div className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <article className="max-w-3xl flex flex-col gap-space-md">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-space-sm">
            About that donate button
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface">
            Every site like this has a page asking for money. This is ours. We&apos;re not asking.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            If something here hit home and you felt like reaching for your wallet, leave it in your pocket. Do this
            instead:
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Next time you&apos;re on the job and a guy seems off (quieter than usual, short fuse, going through the
            motions), walk over and check in. Thirty seconds.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Sometimes that&apos;s all it takes for a guy who&apos;s been carrying something alone to set it down for a
            minute.
          </p>

          <h2 className="font-headline-md text-headline-md text-on-surface mt-space-lg">
            How to do it without making it weird
          </h2>
          <ul className="flex flex-col gap-space-md">
            <li className="bg-surface-container-low p-space-lg rounded-lg">
              <h3 className={TIP_TITLE}>Do it side-by-side.</h3>
              <p className={TIP_BODY}>
                Ask while you&apos;re doing something together: loading the truck, on break, walking out to the rig.
                Not a sit-down.
              </p>
            </li>
            <li className="bg-surface-container-low p-space-lg rounded-lg">
              <h3 className={TIP_TITLE}>Keep it plain.</h3>
              <p className={TIP_BODY}>
                <em className="text-on-surface">
                  &ldquo;Hey, you doing alright? You&apos;ve seemed kind of off lately.&rdquo;
                </em>
              </p>
            </li>
            <li className="bg-surface-container-low p-space-lg rounded-lg">
              <h3 className={TIP_TITLE}>If he says &ldquo;I&apos;m fine,&rdquo; let it go.</h3>
              <p className={TIP_BODY}>
                Say <em className="text-on-surface">&ldquo;Alright. Offer stands.&rdquo;</em> He&apos;ll remember you
                asked.
              </p>
            </li>
            <li className="bg-surface-container-low p-space-lg rounded-lg">
              <h3 className={TIP_TITLE}>If he opens up, you don&apos;t have to fix it.</h3>
              <p className={TIP_BODY}>
                Just listen. You&apos;re not his counselor. You&apos;re the guy who noticed.
              </p>
            </li>
            <li className="bg-surface-container-lowest p-space-lg rounded-lg border-l-4 border-secondary-container">
              <h3 className={TIP_TITLE}>If it&apos;s serious, don&apos;t sit on it.</h3>
              <p className={TIP_BODY}>
                If he talks about not wanting to be here or hurting himself, call or text{" "}
                <a className="text-on-surface font-bold underline decoration-secondary-container decoration-2" href="tel:988">988</a>{" "}
                with him, or make sure he has the number.{" "}
                <Link className="text-on-surface font-bold underline decoration-secondary-container decoration-2" href="/the-resources">
                  Resources →
                </Link>
              </p>
            </li>
          </ul>

          <p className="font-body-lg text-body-lg text-on-surface mt-space-lg">
            That&apos;s the donation. It costs nothing, and it might be worth more than anything you could send us.
          </p>
        </article>
      </div>
    </div>
  );
}
