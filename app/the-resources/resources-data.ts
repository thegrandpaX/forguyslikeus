export type ResourceAction = {
  label: string;
  href: string;
  icon: string;
  style: string;
  external?: boolean;
};

export type Resource = {
  name: string;
  tagline: string;
  category: "trades" | "veterans" | "addiction" | "peer" | "counseling";
  categoryLabel: string;
  status: string;
  statusColor: string;
  keywords: string;
  description: string;
  guarantee: string;
  actions: ResourceAction[];
  isEapGuide?: boolean;
};

export const RESOURCES: Resource[] = [
  {
    name: "CONSTRUCTION SUICIDE PREVENTION PARTNERSHIP (CIASP)",
    tagline: "STAND UP FOR SUICIDE PREVENTION",
    category: "trades",
    categoryLabel: "TRADES & SITES",
    status: "ACTIVE DISPATCH",
    statusColor: "tertiary",
    keywords: "construction trades ciasp stand suicide prevention contractor commercial industrial",
    description:
      "Dedicated mental health lifeline and suicide prevention campaign built strictly for the commercial, residential, and industrial construction industry. Provides job-site toolbox talks, peer crew guides, and direct crisis intervention.",
    guarantee: "100% OFF-RECORD & ANONYMOUS",
    actions: [
      { label: "CALL NOW: 988", href: "tel:988", icon: "call", style: "bg-secondary-container hover:bg-error-container text-on-secondary-container" },
      { label: "VISIT CIASP PORTAL", href: "https://preventconstructionsuicide.com", icon: "arrow_outward", style: "bg-surface-container-high hover:bg-surface-bright text-on-surface", external: true },
    ],
  },
  {
    name: "VETERANS CRISIS LINE",
    tagline: "DIAL 988, THEN PRESS 1 // TEXT 838255",
    category: "veterans",
    categoryLabel: "VETERANS & UNIFORM",
    status: "PRIORITY LINE",
    statusColor: "secondary",
    keywords: "veterans military first responders va ptsd combat crisis line 838255",
    description:
      "Trained veteran responders who understand military culture, deployment stress, civilian reintegration, and trauma. You do not need to be enrolled in VA benefits or healthcare to access this line.",
    guarantee: "NO VA RECORD CREATED WITHOUT CONSENT",
    actions: [
      { label: "DIAL 988 + PRESS 1", href: "tel:988", icon: "call", style: "bg-secondary-container hover:bg-error-container text-on-secondary-container" },
      { label: "TEXT TO 838255", href: "sms:838255", icon: "sms", style: "bg-surface-container-high hover:bg-surface-bright text-on-surface" },
    ],
  },
  {
    name: "MAN THERAPY (MANTHERAPY.ORG)",
    tagline: "THE 20-POINT HEAD INSPECTION",
    category: "counseling",
    categoryLabel: "SELF-INSPECTION & THERAPY",
    status: "ONLINE CHECK",
    statusColor: "primary",
    keywords: "man therapy head inspection self assessment tools coping depression straight talk",
    description:
      "High-impact, humor-infused, practical mental health tools designed by men for men. Take an anonymous self-check, inspect your mental transmission, and get concrete action plans without psycho-babble.",
    guarantee: "ZERO SIGN-UP REQUIRED",
    actions: [
      { label: "TAKE HEAD INSPECTION", href: "https://mantherapy.org", icon: "speed", style: "bg-primary-container text-on-primary-container hover:bg-primary", external: true },
      { label: "EXPLORE TOOL CHEST", href: "https://mantherapy.org", icon: "arrow_outward", style: "bg-surface-container-high hover:bg-surface-bright text-on-surface", external: true },
    ],
  },
  {
    name: "FACE IT FOUNDATION",
    tagline: "BROTHERHOOD & DEPRESSION RECOVERY",
    category: "peer",
    categoryLabel: "PEER-TO-PEER NETWORK",
    status: "FREE WEEKLY CIRCLES",
    statusColor: "tertiary",
    keywords: "face it foundation peer support men groups mentoring depression recovery weekly meetings",
    description:
      "Created to help men understand and recover from depression. Offers free peer support groups, 1-on-1 mentorship pairings, and outdoor men's retreats. No clinical labels, just brothers having your back.",
    guarantee: "PEER ACCOUNTABILITY PRIVACY",
    actions: [
      { label: "FIND A LOCAL GROUP", href: "https://faceitfoundation.org", icon: "groups", style: "bg-surface-container-high hover:bg-surface-bright text-on-surface", external: true },
      { label: "DIRECT: (651) 200-4081", href: "tel:6512004081", icon: "call", style: "bg-surface-container text-on-surface hover:bg-surface-bright" },
    ],
  },
  {
    name: "NATIONAL 988 & CRISIS HUBS",
    tagline: "IMMEDIATE CLINICAL ESCALATION",
    category: "counseling",
    categoryLabel: "CRISIS & COUNSELING",
    status: "24/7/365 UNRESTRICTED",
    statusColor: "secondary",
    keywords: "trevor project crisis helpline national suicide prevention text 988 youth young workers lgbtq",
    description:
      "The national universal standard for crisis triage. Also connects to specialized operators for youth, young apprentices, and LGBTQ+ tradesmen through integrated routing switches.",
    guarantee: "FEDERAL PRIVACY ENFORCED",
    actions: [
      { label: "TAP TO CALL: 988", href: "tel:988", icon: "call", style: "bg-secondary-container hover:bg-error-container text-on-secondary-container" },
      { label: "TEXT MESSAGE 988", href: "sms:988", icon: "sms", style: "bg-surface-container-high hover:bg-surface-bright text-on-surface" },
    ],
  },
  {
    name: "UNION ASSISTANCE PROGRAMS (EAP)",
    tagline: "STEWARD & BENEFIT DIRECTORY",
    category: "trades",
    categoryLabel: "UNION PROTOCOL & RIGHTS",
    status: "JOB PROTECTION",
    statusColor: "primary",
    keywords: "union assistance program eap benefits steward job protected fmla ibew liuna smart ironworkers pipefitters",
    description:
      "Guide to pulling confidential union resources without contractor retaliation. Learn how to speak with your business agent, claim short-term disability for mental health, and return safely to your union hall.",
    guarantee: "CBA & FMLA JOB-PRESERVED",
    actions: [],
    isEapGuide: true,
  },
  {
    name: "CONSTRUCTION WORKING MINDS",
    tagline: "PREVENTION TOOLS FOR CONSTRUCTION",
    category: "trades",
    categoryLabel: "CONSTRUCTION PREVENTION",
    status: "ONLINE TOOLKIT",
    statusColor: "primary",
    keywords: "construction working minds prevention toolbox talks workplace crisis response grief support checklists",
    description:
      "Construction-focused prevention materials, crisis-response guidance, grief support, and toolbox talks for building healthier job sites. Includes practical workplace checklists and a construction suicide-prevention blueprint.",
    guarantee: "GUIDES, TOOLBOX TALKS & CHECKLISTS",
    actions: [
      { label: "BROWSE PREVENTION TOOLS", href: "https://constructionworkingminds.com/prevention-resources", icon: "menu_book", style: "bg-primary-container text-on-primary-container hover:bg-primary", external: true },
      { label: "OPEN THE TOOLBOX", href: "https://constructionworkingminds.com/toolbox", icon: "build", style: "bg-surface-container-high hover:bg-surface-bright text-on-surface", external: true },
    ],
  },
  {
    name: "SAMHSA NATIONAL HELPLINE",
    tagline: "TREATMENT REFERRALS, DAY OR NIGHT",
    category: "addiction",
    categoryLabel: "MENTAL HEALTH & SUBSTANCE USE",
    status: "FREE / CONFIDENTIAL / 24-7",
    statusColor: "tertiary",
    keywords: "samhsa substance use mental health treatment recovery referral english spanish helpline 800 662 4357",
    description:
      "Free, confidential information and referrals to local mental-health and substance-use treatment, support groups, and community organizations. Available in English and Spanish, every day of the year.",
    guarantee: "NO COST; CONFIDENTIAL; 24/7",
    actions: [
      { label: "CALL 1-800-662-4357", href: "tel:18006624357", icon: "call", style: "bg-primary-container text-on-primary-container hover:bg-primary" },
      { label: "FIND LOCAL TREATMENT", href: "https://findtreatment.gov/", icon: "search", style: "bg-surface-container-high hover:bg-surface-bright text-on-surface", external: true },
    ],
  },
  {
    name: "CRISIS TEXT LINE",
    tagline: "TEXT HOME OR HOLA TO 741741",
    category: "counseling",
    categoryLabel: "TEXT-BASED CRISIS SUPPORT",
    status: "FREE / CONFIDENTIAL / 24-7",
    statusColor: "tertiary",
    keywords: "crisis text line text 741741 home hola counselor free confidential 24/7",
    description:
      "Text HOME or HOLA to connect with a live volunteer Crisis Counselor for free, confidential support, 24/7. Standard message and data rates may apply. For immediate danger, call 911.",
    guarantee: "FREE SERVICE; MESSAGE RATES MAY APPLY",
    actions: [
      { label: "TEXT HOME TO 741741", href: "sms:741741?&body=HOME", icon: "sms", style: "bg-primary-container text-on-primary-container hover:bg-primary" },
      { label: "CHAT ONLINE", href: "https://connect.crisistextline.org/chat", icon: "chat", style: "bg-surface-container-high hover:bg-surface-bright text-on-surface", external: true },
    ],
  },
];
