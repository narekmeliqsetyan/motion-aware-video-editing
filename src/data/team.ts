export interface TeamMember {
  name: string;
  role: string;
  affiliation?: string;
  link?: string;
  /** Author biography. Blank-line separated paragraphs. */
  bio?: string;
  /** Headshot path relative to public/, e.g. '/assets/images/name.jpg'. */
  photo?: string;
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
    photo: '/assets/images/narek-meliksetyan.jpg',
    bio: [
      'Narek Meliksetyan is a Forward Deployed Engineer and team lead at Starshunt AI, where he ' +
        'builds and delivers production AI systems. He joined as an intern and advanced through ' +
        'Junior AI Specialist and Software Engineer to his current role, shipping more than twelve ' +
        'production integrations and AI-enabled features across React, NestJS, and SQL. His applied ' +
        'work centers on large language model systems with structured outputs, tool routing, and ' +
        'guardrails, together with the evaluation pipelines that catch integration regressions ' +
        'before release. One such system reduced an internal task cycle from roughly a day to ' +
        'about ten minutes. He has also built call-analytics and observability infrastructure and ' +
        'voice-agent prototypes on LiveKit and Retell AI.',
      'He is a graduate of PhysMath School in Yerevan (shortlisted as one of ten finalists ' +
        "worldwide for the 2023 World's Best School Prizes). His technical foundation was built " +
        'through competitive mathematics and physics olympiads, a full-scholarship place on the ' +
        'Armenian Code Academy (ACA) machine learning program, and continuing study with the IOAI ' +
        'Preparatory Program. He previously served as a Research Assistant in the Graphene ' +
        'Materials Group at the A. Alikhanyan National Science Laboratory, synthesizing graphene ' +
        'by liquid-phase exfoliation and running FTIR and Raman spectroscopy for an ongoing ' +
        'proton-irradiation study that feeds into a peer-reviewed publication.',
      'His research interests include computer vision, video understanding, and the reliability ' +
        'and evaluation of large language model systems. He co-founded the PhysMath Academic ' +
        'Initiative, a student-led mentoring program whose five mentors support more than ninety ' +
        'students in mathematics, physics, and computer science, with tracked outcomes including ' +
        'sixteen prevented dropouts and more than ten admissions to leading universities.',
    ].join('\n\n'),
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
