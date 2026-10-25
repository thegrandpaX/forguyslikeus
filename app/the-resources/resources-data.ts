export type ResourceAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type Resource = {
  name: string;
  summary: string;
  actions: ResourceAction[];
};

export type ResourceGroup = {
  title: string;
  intro?: string;
  resources: Resource[];
};

export const RESOURCE_GROUPS: ResourceGroup[] = [
  {
    title: "Right now",
    intro: "If you're thinking about ending it, or you can't trust yourself tonight. All free, confidential, and open 24/7.",
    resources: [
      {
        name: "988 Suicide & Crisis Lifeline",
        summary: "Call or text 988 and you'll reach a trained counselor. You don't need the right words. You can also chat online.",
        actions: [
          { label: "Call 988", href: "tel:988" },
          { label: "Text 988", href: "sms:988" },
          { label: "988lifeline.org", href: "https://988lifeline.org", external: true },
        ],
      },
      {
        name: "Crisis Text Line",
        summary: "If talking out loud isn't going to happen, text HOME to 741741 (HOLA for Spanish) and a trained volunteer texts back. Message and data rates may apply.",
        actions: [
          { label: "Text HOME to 741741", href: "sms:741741?body=HOME" },
          { label: "Chat online", href: "https://connect.crisistextline.org/chat", external: true },
        ],
      },
    ],
  },
  {
    title: "Veterans",
    resources: [
      {
        name: "Veterans Crisis Line",
        summary: "Dial 988 and press 1, or text 838255. You don't have to be enrolled in VA benefits or health care to use it.",
        actions: [
          { label: "Dial 988, press 1", href: "tel:988" },
          { label: "Text 838255", href: "sms:838255" },
          { label: "veteranscrisisline.net", href: "https://www.veteranscrisisline.net", external: true },
        ],
      },
    ],
  },
  {
    title: "Drinking and drugs",
    resources: [
      {
        name: "SAMHSA National Helpline",
        summary: "Free, confidential, and open 24/7. They'll point you to treatment, support groups, and community services, even if you don't have insurance. English and Spanish.",
        actions: [
          { label: "Call 1-800-662-4357", href: "tel:18006624357" },
          { label: "FindTreatment.gov", href: "https://findtreatment.gov", external: true },
        ],
      },
    ],
  },
  {
    title: "Work and the trades",
    intro: "Your EAP and your union's member assistance program are usually the fastest way to a few free, confidential sessions. Check your benefits paperwork or ask HR or your business agent for the number.",
    resources: [
      {
        name: "Construction Industry Alliance for Suicide Prevention",
        summary: "Suicide prevention built for the construction industry: toolbox talks, crew resources, and materials for contractors and unions.",
        actions: [{ label: "preventconstructionsuicide.com", href: "https://preventconstructionsuicide.com", external: true }],
      },
      {
        name: "Construction Working Minds",
        summary: "Prevention tools, crisis-response guidance, grief support, and toolbox talks for building healthier job sites.",
        actions: [
          { label: "Prevention tools", href: "https://constructionworkingminds.com/prevention-resources", external: true },
          { label: "The toolbox", href: "https://constructionworkingminds.com/toolbox", external: true },
        ],
      },
    ],
  },
  {
    title: "Farm and ranch",
    intro: "For anybody who works the land: owners, hired hands, and family. These folks know what a bad year does to a man.",
    resources: [
      {
        name: "AgriStress Helpline",
        summary: "Free, 24/7, call or text. Built for farm, forestry, and fishing folks; anyone in the U.S. can call. Calls can get an interpreter in 185 languages; texts work in English and Spanish.",
        actions: [
          { label: "Call 833-897-2474", href: "tel:18338972474" },
          { label: "Text 833-897-2474", href: "sms:8338972474" },
          { label: "agrisafe.org", href: "https://www.agrisafe.org/agristress-helpline/", external: true },
        ],
      },
      {
        name: "Farm Aid hotline",
        summary: "A farm resource line, not a crisis line. Help when the trouble is the operation itself. Monday to Friday, 6am to 6pm Pacific (9am to 9pm Eastern). Not open nights or weekends; for a crisis, call or text 988.",
        actions: [
          { label: "Call 1-800-327-6243 (FARM-AID)", href: "tel:18003276243" },
          { label: "farmaid.org", href: "https://www.farmaid.org/our-work/resources-for-farmers/", external: true },
        ],
      },
    ],
  },
  {
    title: "Spokane and Washington",
    intro: "Help close to home. If you know a local program that actually works for guys like us, send it over using the form below.",
    resources: [
      {
        name: "NAMI Spokane",
        summary: "Support groups for adults dealing with mental health problems, and separate groups for their families. Office at 152 S Jefferson St, Suite 100, Spokane, WA 99201. Call for group times.",
        actions: [
          { label: "Call (509) 838-5515", href: "tel:5098385515" },
          { label: "namispokane.org", href: "https://www.namispokane.org/", external: true },
        ],
      },
      {
        name: "Peer Spokane",
        summary: "Peer support for addiction and mental health. Peer coaching is free, there are support groups every day of the week, and they offer employment support. 1222 N Post St, Spokane, WA 99201. Call for group times.",
        actions: [
          { label: "Call 509-867-3778", href: "tel:5098673778" },
          { label: "peerspokane.org", href: "https://www.peerspokane.org/services", external: true },
        ],
      },
    ],
  },
  {
    title: "Check yourself, talk to other guys",
    resources: [
      {
        name: "Man Therapy",
        summary: "A straight-talking site built for men, with an anonymous self-check and practical tips. No sign-up.",
        actions: [{ label: "mantherapy.org", href: "https://mantherapy.org", external: true }],
      },
      {
        name: "Face It Foundation",
        summary: "Free peer support groups and one-on-one mentoring for men dealing with depression.",
        actions: [{ label: "faceitfoundation.org", href: "https://faceitfoundation.org", external: true }],
      },
    ],
  },
];
