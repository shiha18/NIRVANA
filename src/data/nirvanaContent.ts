import {
  ApproachIdea,
  ChallengeItem,
  Milestone2030,
  Policy,
  Programme,
  RISEStage,
  StakeholderGroup,
  ValueItem,
} from '../types';

export const ORGANISATION_INFO = {
  name: 'NIRVANA',
  fullName: 'NIRVANA Centre for Youth & Public Policy',
  tagline: 'Young Minds. Better Communities.',
  heroSubtext:
    'Building informed, engaged and empowered communities where young citizens actively contribute to sustainable and inclusive development.',
  establishedYear: '2026',
  headquarters: 'Chennai, Tamil Nadu',
  location: 'Chennai, Tamil Nadu, India',
};

export const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'OUR WORK', href: '#approach' },
  { label: 'PROGRAMMES', href: '#programmes' },
  { label: 'POLICIES', href: '#policies' },
  { label: 'CAMPAIGN', href: '#campaign' },
  { label: 'GET INVOLVED', href: '#get-involved' },
  { label: 'CONTACT', href: '#contact' },
];

export const VISION_STATEMENT =
  'To build informed, engaged and empowered communities where young citizens actively contribute to sustainable and inclusive development.';

export const MISSION_POINTS = [
  'Promote civic & public-policy awareness',
  'Encourage meaningful youth participation',
  'Connect citizens with public institutions',
  'Support evidence-based community solutions',
  'Promote sustainable community practices',
  'Strengthen citizen–institution communication',
];

export const CORE_VALUES: ValueItem[] = [
  {
    id: 'integrity',
    name: 'Integrity',
    description:
      'Uncompromising commitment to truth, ethical conduct, and objective civic inquiry in all public initiatives.',
  },
  {
    id: 'inclusion',
    name: 'Inclusion',
    description:
      'Ensuring every young person regardless of background, gender, or geography has equal voice and civic opportunity.',
  },
  {
    id: 'transparency',
    name: 'Transparency',
    description:
      'Openness in methodology, public policy discourse, community interactions, and institutional operations.',
  },
  {
    id: 'participation',
    name: 'Participation',
    description:
      'Cultivating proactive, informed civic engagement rather than passive observation among youth citizens.',
  },
  {
    id: 'sustainability',
    name: 'Sustainability',
    description:
      'Advancing ecological responsibility and resilient community development for long-term collective wellbeing.',
  },
  {
    id: 'accountability',
    name: 'Accountability',
    description:
      'Taking ownership of community commitments, public dialogue standards, and responsive civic action.',
  },
];

export const WHY_NIRVANA_CHALLENGES: ChallengeItem[] = [
  {
    num: '01',
    title: 'Limited awareness of public services & schemes',
    description:
      'Widespread informational gaps prevent eligible citizens and young families from utilizing essential government schemes and welfare entitlements.',
  },
  {
    num: '02',
    title: 'Low youth participation in decision-making',
    description:
      'Young citizens form the demographic majority, yet lack institutional channels and formal platforms to contribute meaningfully to policy design.',
  },
  {
    num: '03',
    title: 'Communication gaps between citizens & institutions',
    description:
      'Fragmented channels and institutional distance make it difficult for grassroots public agencies and community members to collaborate constructively.',
  },
  {
    num: '04',
    title: 'Lack of accessible public-policy information',
    description:
      'Policy frameworks and civic documentation often remain opaque, complex, and linguistically inaccessible to ordinary community residents.',
  },
  {
    num: '05',
    title: 'Local issues not reaching relevant authorities',
    description:
      'Neighborhood civic issues often remain unresolved because residents lack structured avenues to report and escalate concerns effectively.',
  },
  {
    num: '06',
    title: 'Misinformation across digital platforms',
    description:
      'Rapid propagation of unverified civic and administrative claims obscures credible public information and creates citizen skepticism.',
  },
];

export const APPROACH_IDEAS: ApproachIdea[] = [
  {
    num: '01',
    title: 'Civic Empowerment',
    description:
      'Awareness of constitutional values, civic responsibilities & institutions.',
    keyAspects: [
      'Constitutional rights & duties literacy',
      'Understanding local municipal & state bodies',
      'Responsible digital civic engagement',
    ],
  },
  {
    num: '02',
    title: 'Youth Participation',
    description:
      'Platforms for young people to discuss issues and contribute ideas.',
    keyAspects: [
      'Youth policy townhalls and consultancies',
      'Deliberative civic forums',
      'Structured youth recommendations to stakeholders',
    ],
  },
  {
    num: '03',
    title: 'Sustainable Communities',
    description:
      'Community-level action on environmental & social challenges.',
    keyAspects: [
      'Waste segregation & neighborhood cleanups',
      'Public green spaces preservation',
      'Local climate & ecological resilience audits',
    ],
  },
  {
    num: '04',
    title: 'Evidence-Based Policy',
    description:
      'Surveys, consultations & research before recommendations.',
    keyAspects: [
      'Rigorous grassroots field inquiries',
      'Transparent data collection methodologies',
      'Objective policy analysis and publication',
    ],
  },
  {
    num: '05',
    title: 'Citizen–Institution Connect',
    description:
      'Better communication between citizens and public institutions.',
    keyAspects: [
      'Constructive citizen–officer interface sessions',
      'Institutional service navigation guides',
      'Responsible grievance and solution routing',
    ],
  },
];

export const APPROACH_STATEMENT =
  'Awareness should lead to participation, and participation should lead to community improvement.';

export const RISE_STAGES: RISEStage[] = [
  {
    letter: 'R',
    name: 'REACH',
    subhead: 'Understand the Community',
    description:
      'Direct immersion and active listening within grassroots communities to map local realities, demographic needs, and systemic bottlenecks.',
    activities: [
      'Neighborhood listening sessions and community walks',
      'Ground-level youth surveys and demographic mapping',
      'Identifying underserved civic zones in Chennai and Tamil Nadu',
      'Assessing local public infrastructure accessibility',
    ],
    outcome: 'Deep, contextual understanding of authentic community challenges.',
  },
  {
    letter: 'I',
    name: 'INFORM',
    subhead: 'Create Awareness',
    description:
      'Demystifying public policy and government schemes through accessible, factual, and multilingual communication tools.',
    activities: [
      'Public policy explainers & government welfare scheme primers',
      'Constitutional and civic literacy workshops for youth',
      'Countering civic misinformation through verified facts',
      'Digital policy summaries and infographic briefs',
    ],
    outcome: 'An informed, discerning, and constitutionally aware youth populace.',
  },
  {
    letter: 'S',
    name: 'SUPPORT',
    subhead: 'Connect & Facilitate',
    description:
      'Providing the bridge, mentorship, and institutional linkages that young changemakers need to interface with governance.',
    activities: [
      'Facilitating roundtables between youth and civic officials',
      'Policy research mentoring through the NIRVANA Policy Lab',
      'Incubating youth-led community improvement initiatives',
      'Establishing institutional links with civic stakeholders',
    ],
    outcome: 'Constructive dialogue and collaborative problem-solving channels.',
  },
  {
    letter: 'E',
    name: 'EMPOWER',
    subhead: 'Enable Participation',
    description:
      'Translating knowledge and dialogue into sustained civic leadership and measurable community improvement.',
    activities: [
      'Publishing and submitting youth policy briefs to public authorities',
      'Mobilizing youth volunteer cohorts for local sustainability drives',
      'Hosting the flagship Youth Policy Forum idea competitions',
      'Sustaining community accountability mechanisms',
    ],
    outcome: 'Measurable community improvement and active young public leaders.',
  },
];

export const FLAGSHIP_PROGRAMMES: Programme[] = [
  {
    num: '01',
    title: 'Youth Policy Forum',
    category: 'Public Discourse & Deliberation',
    description:
      'Platform for young people to discuss public issues and develop policy suggestions.',
    items: [
      'Policy discussions on contemporary civic priorities',
      'Youth consultations across diverse demographics',
      'Expert interactions with administrators & policy scholars',
      'Idea competitions to prototype community solutions',
    ],
  },
  {
    num: '02',
    title: 'Civic Connect',
    category: 'Institutional Interface & Outreach',
    description:
      'Community programme focused on civic & public-service awareness.',
    items: [
      'Awareness camps in neighborhoods and colleges',
      'Government-service explainers demystifying official schemes',
      'Community interaction sessions connecting residents with civic bodies',
    ],
  },
  {
    num: '03',
    title: 'Policy Lab',
    category: 'Youth-Led Research Initiative',
    description:
      'A youth-led research initiative grounded in rigorous evidence and grassroots consultation.',
    items: [
      'Rigorous research methodology training for young fellows',
      'Ground-level field surveys and participatory research',
      'Comprehensive analytical whitepapers and policy briefs',
    ],
    pipeline: ['Identify', 'Research', 'Consult', 'Analyse', 'Recommend'],
  },
  {
    num: '04',
    title: 'Community Action',
    category: 'Grassroots Civic Mobilization',
    description:
      'Youth volunteers work with communities on local sustainability & civic initiatives.',
    items: [
      'Volunteer-led neighborhood transformation projects',
      'Community-driven waste management & public space audits',
      'Sustainability focused ecological conservation drives',
    ],
  },
];

export const CORE_POLICIES: Policy[] = [
  {
    num: '01',
    title: 'Youth Civic Participation Policy',
    category: 'Participation',
    summary:
      'Framework ensuring inclusive, structured avenues for young citizens to actively contribute to public decision-making.',
    keyProvisions: [
      'Youth representation in civic consultative committees',
      'Institutional facilitation for young voices in municipal processes',
      'Equitable access across socio-economic demographics',
    ],
  },
  {
    num: '02',
    title: 'Public Information Accessibility Policy',
    category: 'Information',
    summary:
      'Commitment to translating complex policy briefs and administrative notices into clear, plain language formats.',
    keyProvisions: [
      'Plain-language civic explainers and infographics',
      'Multilingual distribution with Tamil & English parity',
      'Digital and offline accessibility standards for all citizens',
    ],
  },
  {
    num: '03',
    title: 'Community Research Policy',
    category: 'Research',
    summary:
      'Ethical standards and methodological rigor for grassroots surveys, data stewardship, and evidence collection.',
    keyProvisions: [
      'Transparent field sampling and voluntary informed consent',
      'Protection of community participant privacy',
      'Public domain publication of non-sensitive findings',
    ],
  },
  {
    num: '04',
    title: 'Government-Scheme Awareness Policy',
    category: 'Public Services',
    summary:
      'Guidelines for accurate, non-partisan dissemination of state and central welfare schemes to grassroots communities.',
    keyProvisions: [
      'Factual, neutral, and verified eligibility criteria',
      'Navigation assistance for application procedures',
      'Periodic tracking of awareness bottlenecks in Chennai',
    ],
  },
  {
    num: '05',
    title: 'Digital Citizenship Policy',
    category: 'Civic Responsibility',
    summary:
      'Promoting responsible online civic engagement, critical media literacy, and countering digital misinformation.',
    keyProvisions: [
      'Verification protocols before sharing public administrative news',
      'Civic discourse guidelines emphasizing respect and evidence',
      'Capacity-building in digital safety and fact-checking',
    ],
  },
  {
    num: '06',
    title: 'Sustainable Community Policy',
    category: 'Environment',
    summary:
      'Integrating environmental sustainability, waste reduction, and climate resilience into neighborhood civic plans.',
    keyProvisions: [
      'Promotion of localized circular waste management',
      'Conservation of local water bodies and green public spaces',
      'Youth-led carbon & environmental footprint awareness',
    ],
  },
  {
    num: '07',
    title: 'Inclusion & Accessibility Policy',
    category: 'Inclusion',
    summary:
      'Mandating physical, digital, and social accommodation for persons with disabilities and underrepresented youth.',
    keyProvisions: [
      'Barrier-free physical venues for all NIRVANA sessions',
      'Accessible web and digital collateral standards',
      'Affirmative outreach to marginalized community cohorts',
    ],
  },
  {
    num: '08',
    title: 'Transparency & Accountability Policy',
    category: 'Governance',
    summary:
      'Operating with institutional openness regarding methodology, program outcomes, and organizational conduct.',
    keyProvisions: [
      'Open disclosure of research assumptions and data sources',
      'Periodic public reporting on initiative milestones',
      'Structured public feedback channels for continuous improvement',
    ],
  },
];

export const CAMPAIGN_INFO = {
  title: 'My Community, My Voice',
  heading: '“My Community, My Voice”',
  objective:
    'Encourage young people to identify local problems, communicate them responsibly, and participate in community improvement.',
  target: 'Youth aged 18–25',
  themes: [
    'Clean communities',
    'Public spaces',
    'Waste management',
    'Civic responsibility',
    'Digital citizenship',
    'Community participation',
  ],
  steps: [
    {
      num: '01',
      title: 'IDENTIFY A PROBLEM',
      desc: 'Observe neighborhood infrastructure, sanitation, or public service gaps in your local area.',
    },
    {
      num: '02',
      title: 'SHARE YOUR VOICE',
      desc: 'Document the issue responsibly using factual, constructive evidence and clear details.',
    },
    {
      num: '03',
      title: 'COMMUNITY DISCUSSION',
      desc: 'Engage with fellow residents, youth volunteers, and peers to deliberate on viable solutions.',
    },
    {
      num: '04',
      title: 'CONNECT WITH STAKEHOLDERS',
      desc: 'Route structured representations to appropriate administrative agencies and institutions.',
    },
    {
      num: '05',
      title: 'ENCOURAGE ACTION',
      desc: 'Participate alongside community members to sustain ground-level civic improvements.',
    },
  ],
};

export const STAKEHOLDER_GROUPS: StakeholderGroup[] = [
  {
    id: 'government',
    name: 'Government Institutions',
    role: 'Policy implementation, public services, administrative agencies, and municipal authorities.',
    description:
      'Engaging with state and local administrative departments to facilitate informed public feedback and responsive governance.',
    angle: 0,
  },
  {
    id: 'education',
    name: 'Educational Institutions',
    role: 'Universities, colleges, research scholars, and student unions.',
    description:
      'Partnering with higher education bodies to mobilize young thinkers, host policy debates, and embed civic literacy.',
    angle: 72,
  },
  {
    id: 'civil-society',
    name: 'Civil Society',
    role: 'Community organizations, grassroots groups, and non-partisan public interest entities.',
    description:
      'Collaborating with established ground organizations to align youth energy with ongoing community welfare priorities.',
    angle: 144,
  },
  {
    id: 'media',
    name: 'Media',
    role: 'Journalists, public interest broadcasters, and digital communications channels.',
    description:
      'Working with media practitioners to promote factual public policy reporting and spotlight youth civic solutions.',
    angle: 216,
  },
  {
    id: 'citizens',
    name: 'Citizens & Communities',
    role: 'Neighborhood residents, youth collectives, and local civic champions.',
    description:
      'The foundational core of NIRVANA’s mission, driving grassroots ownership and participatory community development.',
    angle: 288,
  },
];

export const ROADMAP_2030_ITEMS: Milestone2030[] = [
  {
    index: '01',
    title: 'Establish youth civic networks across Tamil Nadu',
    description:
      'Expand structured youth chapters and civic councils across districts, connecting young leaders from urban and rural communities.',
  },
  {
    index: '02',
    title: 'Develop community-policy research hubs',
    description:
      'Build localized civic policy labs equipped to conduct rigorous field research and evaluate public schemes on the ground.',
  },
  {
    index: '03',
    title: 'Partner with educational institutions',
    description:
      'Embed experiential public policy forums and civic governance curriculum modules in universities and colleges.',
  },
  {
    index: '04',
    title: 'Publish youth policy reports',
    description:
      'Release periodic, peer-reviewed youth whitepapers and evidence dossiers addressing key societal and developmental priorities.',
  },
  {
    index: '05',
    title: 'Build civil-society partnerships',
    description:
      'Foster formal coalitions with civic non-profits and community organizations to scale collective civic impact.',
  },
  {
    index: '06',
    title: 'Develop multilingual public-information resources',
    description:
      'Produce comprehensive, accessible digital repositories of policy primers and scheme guides in Tamil and English.',
  },
];

export const GET_INVOLVED_OPTIONS = [
  {
    id: 'volunteer',
    title: 'Become a Volunteer',
    badge: 'Grassroots Engagement',
    description:
      'Join our community volunteer cohort to lead local neighborhood audits, civic awareness camps, and sustainability drives.',
    cta: 'Apply as Volunteer',
  },
  {
    id: 'youth-programmes',
    title: 'Join Youth Programmes',
    badge: 'Capacity Building',
    description:
      'Participate in the Youth Policy Forum, deliberation cohorts, and policy ideation competitions with expert mentorship.',
    cta: 'Register for Programmes',
  },
  {
    id: 'partner',
    title: 'Partner With Us',
    badge: 'Institutional Linkages',
    description:
      'Collaborate as an educational institution, civic body, or community organization to expand public policy outreach.',
    cta: 'Initiate Partnership',
  },
  {
    id: 'community-issue',
    title: 'Submit a Community Issue',
    badge: 'My Community, My Voice',
    description:
      'Report a verified local civic or public service challenge to undergo structured community deliberation and routing.',
    cta: 'Submit Issue',
  },
  {
    id: 'collaborate',
    title: 'Collaborate With NIRVANA',
    badge: 'Research & Policy Lab',
    description:
      'Engage with our Policy Lab researchers on evidence-based policy briefs, surveys, and civic problem-solving initiatives.',
    cta: 'Collaborate With NIRVANA',
  },
];
