export interface Publication {
  id: string;
  title: string;
  authors: string;
  shortAuthors: string;
  journal: string;
  year: number;
  citation: string;
  url: string;
  summary?: string;
  coauthored?: boolean;
}

export const publications = {
  exploration: {
    id: 'exploration',
    title: 'Exploration-Exploitation and Suicidal Behavior in Borderline Personality Disorder and Depression',
    authors: 'Tsypes A, Hallquist MN, Ianni A, Kaurin A, Wright AGC, Dombrovski AY.',
    shortAuthors: 'Tsypes et al.',
    journal: 'JAMA Psychiatry',
    year: 2024,
    citation: 'JAMA Psychiatry. 2024;81(10):1010–1019.',
    url: 'https://doi.org/10.1001/jamapsychiatry.2024.1796',
    summary: 'In two clinical cohorts, individuals with high-lethality suicide attempts explored fewer alternatives because they were less likely to abandon unrewarded choices. Those with low-lethality attempts switched excessively after both rewarded and unrewarded choices. Restricted exploration also prospectively predicted suicidal ideation in a subsample.',
  },
  persistence: {
    id: 'persistence',
    title: 'When to quit: Calibration of voluntary persistence and attempted suicide in depression',
    authors: 'Tsypes A, McGuire JT, Dombrovski AY.',
    shortAuthors: 'Tsypes et al.',
    journal: 'Behaviour Research and Therapy',
    year: 2026,
    citation: 'Behaviour Research and Therapy. 2026;205:105148.',
    url: 'https://doi.org/10.1016/j.brat.2026.105148',
    summary: 'In a behavioral waiting task, individuals with suicide-attempt histories were especially likely to quit immediately following losses. Both attempters and depressed non-suicidal participants also persisted too long once waiting began, distinguishing re-engagement after setbacks from decisions about when to stop waiting.',
  },
  reward: {
    id: 'reward',
    title: 'Reward Responsiveness in Suicide Attempters: An Electroencephalography/Event-Related Potential Study',
    authors: 'Tsypes A, Owens M, Gibb BE.',
    shortAuthors: 'Tsypes et al.',
    journal: 'Biological Psychiatry: Cognitive Neuroscience and Neuroimaging',
    year: 2021,
    citation: 'Biological Psychiatry: Cognitive Neuroscience and Neuroimaging. 2021;6(1):99–106.',
    url: 'https://doi.org/10.1016/j.bpsc.2020.04.003',
    summary: 'Adults with suicide-attempt histories showed differences in specific EEG measures of reward anticipation and feedback processing, including reduced anticipatory cue-P3 and feedback-related delta activity. The conventional reward-positivity difference score did not significantly distinguish the groups.',
  },
  socialContext: {
    id: 'social-context',
    title: 'Social context in motion: The effects of personality traits on the dynamic links between interpersonal processes and suicidal ideation',
    authors: 'Tsypes A, Scott LN.',
    shortAuthors: 'Tsypes & Scott',
    journal: 'Journal of Psychiatric Research',
    year: 2026,
    citation: 'Journal of Psychiatric Research. 2026;197:133–142.',
    url: 'https://doi.org/10.1016/j.jpsychires.2026.02.049',
    summary: 'Repeated daily-life assessments revealed bidirectional temporal associations between suicidal ideation and perceived interpersonal strain and enrichment. Personality-related Detachment, particularly Anhedonia, was associated with stronger suicidal-ideation responses to these experiences and differences in other dynamic characteristics of suicidal thinking.',
  },
  autisticTraits: {
    id: 'autistic-traits',
    title: 'Integrating Dimensional Personality and Autistic Traits to Predict Suicidal Ideation, Suicide Attempts, and Nonsuicidal Self-Injury in Autistic Adults',
    authors: 'Tsypes A, Allen TA, Antezana L, Beck KB, Conner CM, Scott LN, Mazefsky CA.',
    shortAuthors: 'Tsypes et al.',
    journal: 'Autism Research',
    year: 2026,
    citation: 'Autism Research. 2026;19(4):e70202.',
    url: 'https://doi.org/10.1002/aur.70202',
    summary: 'Among autistic adults, dimensional personality and autism-related traits showed overlapping and distinct associations with suicidal ideation severity, lifetime suicide attempts, and nonsuicidal self-injury. Shared variance involving Anhedonia and Social Interactions was particularly important, alongside outcome-specific associations involving Emotional Lability and Self-Regulatory Behaviors.',
  },
  reasonsForLiving: {
    id: 'reasons-for-living',
    title: 'Protective effects of reasons for living against suicidal ideation in daily life',
    authors: 'Tsypes A, Kaurin A, Wright AGC, Hallquist MN, Dombrovski AY.',
    shortAuthors: 'Tsypes et al.',
    journal: 'Journal of Psychiatric Research',
    year: 2022,
    citation: 'Journal of Psychiatric Research. 2022;148:174–180.',
    url: 'https://doi.org/10.1016/j.jpsychires.2022.01.060',
    summary: 'Within individuals, greater daily endorsement of reasons for living was associated with lower suicidal ideation, although this association was not observed between individuals. The relationship remained among people with suicide-attempt histories and was particularly pronounced among those with higher average suicidal ideation.',
  },
  delayDiscounting: {
    id: 'delay-discounting',
    title: 'Delay discounting in suicidal behavior: Myopic preference or inconsistent valuation?',
    authors: 'Tsypes A, Szanto K, Bridge JA, Brown VM, Keilp JG, Dombrovski AY.',
    shortAuthors: 'Tsypes et al.',
    journal: 'Journal of Psychopathology and Clinical Science',
    year: 2022,
    citation: 'Journal of Psychopathology and Clinical Science. 2022;131(1):34–44.',
    url: 'https://doi.org/10.1037/abn0000717',
  },
  recentSelfInjury: {
    id: 'recent-self-injury',
    title: 'Recent Non-Suicidal Self-Injury in Autistic Adolescents and Adults: Characteristics, Clinical Correlates and Suicidal Thoughts and Behaviors',
    authors: 'Eldeeb S, Antezana L, Conner CM, Beck KB, Victor SE, Tsypes A, Scott LN, Mazefsky CA.',
    shortAuthors: 'Eldeeb et al.',
    journal: 'Autism Research',
    year: 2026,
    citation: 'Autism Research. 2026;e70370.',
    url: 'https://doi.org/10.1002/aur.70370',
    coauthored: true,
  },
  peerVictimization: {
    id: 'peer-victimization',
    title: 'Peer Victimization Mediates the Impact of Maternal Depression on Risk for Suicidal Ideation in Girls but not Boys: A Prospective Study',
    authors: 'Tsypes A, Gibb BE.',
    shortAuthors: 'Tsypes & Gibb',
    journal: 'Journal of Abnormal Child Psychology',
    year: 2015,
    citation: 'Journal of Abnormal Child Psychology. 2015;43(8):1439–1445.',
    url: 'https://doi.org/10.1007/s10802-015-0025-8',
  },
} satisfies Record<string, Publication>;

export const featuredPublications: Publication[] = [
  publications.exploration,
  publications.persistence,
  publications.reward,
  publications.socialContext,
  publications.autisticTraits,
  publications.reasonsForLiving,
];

export interface ResearchQuestion {
  id: string;
  question: string;
  paragraphs: string[];
  publications: Publication[];
}

export const selectedResearchQuestions: ResearchQuestion[] = [
  {
    id: 'reward-processing',
    question: 'How do reward processing and decision-making relate to suicidal behavior?',
    paragraphs: [
      'My experimental research investigates how people respond to rewards and losses, evaluate alternatives, learn from feedback, and adjust their behavior. Across several studies, my colleagues and I have identified distinct patterns of valuation, exploration, and persistence associated with suicide-attempt history and medical lethality. These findings challenge broad accounts of suicidal behavior in terms of impulsivity or preference for immediate rewards and highlight the importance of identifying more specific decision processes.',
      'Complementary EEG research examines neural responses during reward anticipation and feedback processing, including differences associated with suicidal ideation, suicide attempts, and nonsuicidal self-injury.',
    ],
    publications: [
      publications.exploration,
      publications.persistence,
      publications.delayDiscounting,
      publications.reward,
    ],
  },
  {
    id: 'daily-life',
    question: 'How does suicidal ideation vary in everyday life?',
    paragraphs: [
      'Using ecological momentary assessment, I investigate how suicidal ideation changes within individuals and relates to everyday experiences. My research has examined the associations of suicidal ideation with reasons for living and perceived interpersonal strain and enrichment, distinguishing within-person fluctuations from differences between individuals. I also study how personality characteristics relate to the strength and temporal dynamics of these associations.',
      'This work informs a broader interest in understanding when suicidal thoughts intensify or diminish and which psychological and contextual characteristics are relevant to those changes.',
    ],
    publications: [publications.reasonsForLiving, publications.socialContext],
  },
  {
    id: 'individual-characteristics',
    question: 'Which individual characteristics are associated with distinct suicidal and self-injurious outcomes?',
    paragraphs: [
      'Another focus of my research is identifying clinically meaningful differences in suicidal ideation, suicide attempts, and nonsuicidal self-injury. My recent work with autistic adults examines how dimensional personality and autism-related characteristics relate to these distinct outcomes, including overlapping and outcome-specific associations involving anhedonia, emotional lability, and social-interaction characteristics.',
      'This builds on earlier research examining cognitive and interpersonal factors associated with the emergence of suicidal ideation in children, as well as research on the characteristics and functions of nonsuicidal self-injury across populations.',
    ],
    publications: [
      publications.autisticTraits,
      publications.recentSelfInjury,
      publications.peerVictimization,
    ],
  },
];
