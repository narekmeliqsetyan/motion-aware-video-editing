export interface TeamMember {
  name: string;
  role: string;
  affiliation?: string;
  link?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Stepan Goyunyan',
    role: 'Researcher',
    affiliation: 'Physmath School After Artashes Shahinyan, Yerevan, Armenia',
  },
  {
    name: 'Narek Meliksetyan',
    role: 'Researcher',
    affiliation: 'Physmath School After Artashes Shahinyan, Yerevan, Armenia',
  },
  {
    name: 'Arthur Tsaturyan',
    role: 'Researcher',
    affiliation: 'Evrika STEM Specialized School, Vanadzor, Armenia',
  },
  {
    name: 'Elizaveta Labazanova',
    role: 'Researcher',
    affiliation: 'Moscow, Russia',
  },
  {
    name: 'Zangir Iklassov',
    role: 'Advisor',
    affiliation: 'Mohammad Bin Zayed University of Artificial Intelligence (MBZUAI), UAE',
  },
  {
    name: 'Jorge Alejandro Amador Herrera',
    role: 'Advisor',
    affiliation: 'Mohammad Bin Zayed University of Artificial Intelligence (MBZUAI), UAE',
  },
];
