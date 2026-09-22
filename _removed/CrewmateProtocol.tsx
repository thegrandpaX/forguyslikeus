export default function CrewmateProtocol() {
  const steps = [
    {
      num: '1',
      title: 'Notice the Shift',
      desc: 'Spotting the telltale cues before an implosion happens.',
      details: [
        'Uncharacteristic sloppy work, dropped quality, or dull safety awareness.',
        'Sudden fire-sales of equipment, gear, or rigs.',
        'Pulling away from breakroom banter—sitting alone in the cab during lunch.',
        'Sudden, intense flashes of temper over normal job-site friction.',
      ],
    },
    {
      num: '2',
      title: 'Break the Ice',
      desc: 'Skip the clinical HR scripts; make it shoulder-to-shoulder.',
      details: [
        'Never corner a guy face-to-face in front of the crew.',
        'Bring it up while packing tools or walking to the truck:',
      ],
      quote: '"Hey, you seemed off on that last run. Everything straight with you lately?"',
      subnote: 'If he shrugs it off with "I\'m fine": "You just look like you\'re carrying 500 lbs on your shoulders. I\'m around if things are sideways."',
    },
    {
      num: '3',
      title: 'Listen Without Fixing',
      desc: 'Resist the trade instinct to immediately grab a wrench and troubleshoot.',
      details: [
        'Let him dump what is on his chest without jumping in to offer fixes.',
        'Validate the weight: "Yeah, man, that\'s heavy as hell. Anyone would be grinding teeth through that."',
        'Avoid comparisons like "it could be worse" or "at least you have work."',
      ],
    },
    {
      num: '4',
      title: 'Bridge to Real Support',
      desc: 'Walk alongside him—never just hand off a cold corporate brochure.',
      details: [
        'Corporate pamphlets end up in the glove box or trash.',
        'Offer to bridge the gap with someone who knows the reality:',
      ],
      quote: '"Look, I know a guy who\'s walked this exact custody and layoff grind and pulled through it. Let\'s give him a call together after shift."',
    },
  ];

  return (
    <section className="py-12 bg-neutral-950 text-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="border-b border-neutral-800 pb-6 mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-500">Field Protocol</span>
          <h2 className="text-3xl font-black text-white mt-1">The 4-Step Crewmate Protocol</h2>
          <p className="text-neutral-400 mt-2">
            How to check on a guy on your crew when he is going quiet or running hot—without the corporate awkwardness.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-900 border border-amber-500 flex items-center justify-center font-bold text-amber-500">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-neutral-100">{step.title}</h3>
                <p className="text-neutral-400 text-sm mt-0.5 mb-3">{step.desc}</p>
                <div className="bg-neutral-900/80 border border-neutral-800 p-4 rounded text-sm text-neutral-300 space-y-2">
                  <ul className="list-disc list-inside space-y-1 text-neutral-400">
                    {step.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  {step.quote && (
                    <blockquote className="border-l-2 border-amber-500 pl-3 italic text-neutral-200 mt-2">
                      {step.quote}
                    </blockquote>
                  )}
                  {step.subnote && (
                    <p className="text-xs text-neutral-400 pt-1">{step.subnote}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}