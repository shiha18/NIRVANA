export interface NavItem {
  label: string;
  href: string;
}

export interface ValueItem {
  id: string;
  name: string;
  description: string;
}

export interface ChallengeItem {
  num: string;
  title: string;
  description: string;
}

export interface ApproachIdea {
  num: string;
  title: string;
  description: string;
  keyAspects: string[];
}

export interface RISEStage {
  letter: string;
  name: string;
  subhead: string;
  description: string;
  activities: string[];
  outcome: string;
}

export interface Programme {
  num: string;
  title: string;
  category: string;
  description: string;
  items: string[];
  pipeline?: string[];
}

export interface Policy {
  num: string;
  title: string;
  category: string;
  summary: string;
  keyProvisions: string[];
}

export interface StakeholderGroup {
  id: string;
  name: string;
  description: string;
  role: string;
  angle: number; // in degrees for circular layout
}

export interface Milestone2030 {
  index: string;
  title: string;
  description: string;
}
