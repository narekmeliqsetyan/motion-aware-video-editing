export interface TeamMember {
  name: string;
  role: string;
  affiliation?: string;
  link?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Team Member 1',
    role: 'Researcher',
    affiliation: 'University',
  },
  {
    name: 'Team Member 2',
    role: 'Researcher',
    affiliation: 'University',
  },
  {
    name: 'Team Member 3',
    role: 'Advisor',
    affiliation: 'University',
  },
];
