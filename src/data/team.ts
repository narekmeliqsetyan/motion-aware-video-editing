export interface TeamMember {
  name: string;
  role: string;
  affiliation?: string;
  link?: string;
  bio?: string;
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
    bio:
      'Narek Meliksetyan is an AI researcher and student at the Physics and Mathematics ' +
      'Specialized School after A. Shahinyan (PhysMath) in Yerevan, Armenia. His work focuses ' +
      'on computer vision, large language model systems, and applied machine learning. He ' +
      'currently serves as a Software Engineer at StarsHunt AI, where he designs LLM pipelines ' +
      'with structured outputs, tool routing, and automated evaluation alongside full-stack ' +
      'production services. Previously, he was a Research Assistant in the Graphene Materials ' +
      'Group at the A. Alikhanyan National Science Laboratory (Yerevan Physics Institute), ' +
      'contributing sample synthesis and Raman and FTIR spectroscopy data to a ' +
      'proton-irradiation study. He completed the Armenian Code Academy machine learning ' +
      'program on a full scholarship and trains with the IOAI preparatory program.',
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
