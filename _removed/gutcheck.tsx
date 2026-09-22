'use client';

import { useState } from 'react';

interface QuestionOption {
  label: string;
  points: number;
}

interface Question {
  id: string;
  title: string;
  subtitle: string;
  options: QuestionOption[];
}

const questions: Question[] = [
  {
    id: 'sleep',
    title: '1. Sleep Quality & Morning Battery',
    subtitle: 'How are you waking up before your shift?',
    options: [
      { label: 'Resting decently; boots on and solid', points: 0 },
      { label: 'Waking up fragmented or drained', points: 2 },
      { label: 'Zombie mode; running on fumes & caffeine', points: 4 },
    ],
  },
  {
    id: 'temper',
    title: '2. The Fuse Length',
    subtitle: 'How quickly are minor hiccups turning into pure rage?',
    options: [
      { label: 'Normal patience with the crew/family', points: 0 },
      { label: 'Short fuse; snapping easily at work or home', points: 2 },
      { label: 'Constantly boiling; ready to throw tools or punch drywall', points: 4 },
    ],
  },
  {
    id: 'pain',
    title: '3. Physical Wear & Tear',
    subtitle: 'Back, joints, old injuries—how is the body holding up?',
    options: [
      { label: 'Standard stiffness; manageable', points: 0 },
      { label: 'Constant grinding ache that drains my mood', points: 2 },
      { label: 'Severe pain; barely getting through the shift', points: 4 },
    ],
  },
  {
    id: 'sedation',
    title: '4. Evening Sedation',
    subtitle: 'Using drinks, weed, or pills to turn off your brain or numb the ache?',
    options: [
      { label: 'Rarely or purely social', points: 0 },
      { label: 'Need a couple every evening to unwind', points: 2 },
      { label: "Can't shut the engine down without chemical shutoff", points: 4 },
    ],
  },
];

export default function GutCheck() {
  const [answers, setAnswers] = useState<Record<string, number>>({
    sleep: 0,
    temper: 0,
    pain: 0,
    sedation: 0,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qId: string, points: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: points }));
  };

  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);

  return (
    <section id="gut-check" className="py-12 bg-neutral-900 text-neutral-100 border-y border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-500">Preventive Maintenance</span>
          <h2 className="text-3xl font-extrabold tracking-tight mt-1 text-white">The 3-Minute Gut-Check</h2>
          <p className="text-neutral-400 mt-2 text-base">
            No login. No names recorded. Nobody calling your supervisor. Just an honest diagnostic gauge of how your engine is running right now.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {questions.map((q) => (
            <div key={q.id} className="bg-neutral-800/80 p-5 rounded-lg border border-neutral-700">
              <label className="block font-semibold text-neutral-200 mb-1">{q.title}</label>
              <p className="text-xs text-neutral-400 mb-3">{q.subtitle}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {q.options.map((opt, i) => {
                  const isChecked = answers[q.id] === opt.points;
                  return (
                    <label
                      key={i}
                      onClick={() => handleSelect(q.id, opt.points)}
                      className={`flex items-center space-x-2 text-sm p-3 rounded border cursor-pointer transition-colors ${
                        isChecked
                          ? 'border-amber-500 bg-amber-500/10 text-white'
                          : 'border-neutral-700 bg-neutral-900/60 text-neutral-300 hover:border-neutral-500'
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        checked={isChecked}
                        onChange={() => {}}
                        className="text-amber-500 focus:ring-amber-500"
                      />
                      <span>{opt.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 px-6 bg-amber-600 hover:bg-amber-500 text-neutral-950 font-bold uppercase tracking-wider rounded transition-colors"
          >
            Read Diagnostic Gauge
          </button>
        </form>

        {submitted && (
          <div className="mt-8">
            {totalScore <= 3 && (
              <div className="p-6 rounded-lg border border-emerald-600 bg-emerald-950/20">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">⚙️</span>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-emerald-400">
                    Engine Running Normal (Green Band)
                  </h3>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                  You're carrying standard job-site wear and tear, but your operational gauges are in spec. Keep an eye on sleep and joint health before minor aches turn chronic.
                </p>
                <div className="pt-4 border-t border-neutral-800">
                  <a href="/blog" className="text-amber-400 hover:underline text-sm font-semibold">
                    Explore field articles on staying sharp &rarr;
                  </a>
                </div>
              </div>
            )}

            {totalScore > 3 && totalScore <= 8 && (
              <div className="p-6 rounded-lg border border-amber-500 bg-amber-950/20">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">⚠️</span>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-amber-400">
                    Yellow Line: High Friction / RPMs Spiking
                  </h3>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                  You're running hot. Sleep loss and a shortening fuse mean internal pressure is mounting faster than you're venting it. Time for preventive maintenance before you blow a head gasket or take it out on the wrong person.
                </p>
                <div className="pt-4 border-t border-neutral-800">
                  <a href="/contact" className="inline-block bg-amber-500 text-neutral-950 font-bold px-4 py-2 rounded text-sm hover:bg-amber-400">
                    Reach Out to a Peer Specialist
                  </a>
                </div>
              </div>
            )}

            {totalScore > 8 && (
              <div className="p-6 rounded-lg border border-red-600 bg-red-950/30">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">🚨</span>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-red-400">
                    Warning: Redlining / Blown Gasket Risk
                  </h3>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                  You are redlining the engine. When sleep stops, pain peaks, and chemical shutoff becomes the default routine, the wheels are actively coming off. You don't have to carry this alone or risk your career to get leveled out.
                </p>
                <div className="pt-4 border-t border-neutral-800 space-y-3">
                  <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">Free, Confidential, Peer-to-Peer:</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="/contact" className="bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 rounded text-sm">
                      Connect with a Peer Counselor
                    </a>
                    <a href="tel:988" className="border border-neutral-600 hover:border-neutral-400 text-neutral-200 font-semibold px-4 py-2 rounded text-sm">
                      Call / Text 988 (Confidential)
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}