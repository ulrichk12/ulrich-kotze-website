import { ExperienceItem, EducationItem, ProjectItem, SkillMetric } from './types';

export const NAV_LINKS = [
  { name: 'Profile', href: '#profile' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'My Story', href: '#my-story' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '1',
    role: 'Technical Director',
    company: 'Wimmy',
    period: 'July 2024 - Present',
    description: 'Leading technical innovation in the medical AI/ML space. Responsible for business strategy, executive decision-making, and aligning technical capabilities with organisational objectives.',
  },
  {
    id: '2',
    role: 'Data Science Team Lead & ML Engineer',
    company: 'Spatialedge',
    period: 'Nov 2021 - July 2024',
    description: 'Advanced from Junior ML Engineer to Team Lead. Worked across Retail, Credit, Supply Chain, Banking, and Healthcare. Built enterprise-level demand forecasting models, credit scoring engines, and cloud-based data platforms.',
  },
  {
    id: '3',
    role: 'Junior Lecturer',
    company: 'Stellenbosch University',
    period: '2021',
    description: 'Lectured Statistics and Data Science to first-year students within the Department of Statistics and Actuarial Sciences, fostering foundational understanding in future data professionals.',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: '1',
    degree: 'Master of Commerce (Statistics)',
    institution: 'Stellenbosch University',
    period: '2020 - 2021',
    details: 'Thesis on resampling algorithms for multi-label classification in highly imbalanced datasets.',
  },
  {
    id: '2',
    degree: 'Bachelor of Commerce Honors (Statistics)',
    institution: 'Stellenbosch University',
    period: '2019',
    details: 'Focused on multi-class classification of high-dimensional genomic data.',
  },
  {
    id: '3',
    degree: 'Bachelor of Commerce (BCom)',
    institution: 'Stellenbosch University',
    period: '2016 - 2019',
    details: 'Majors in Statistics, Economics, and Investment Management.',
  },
];

export const PROJECT_DATA: ProjectItem[] = [
  {
    id: 'new-1',
    title: 'AI Scribe',
    year: '2025',
    description: 'Next-generation automated documentation tool for healthcare professionals. Leverages advanced LLMs to listen, transcribe, and structure patient consultations in real-time, significantly reducing administrative burden.',
    tags: ['GenAI', 'Healthcare', 'NLP', 'Product'],
    type: 'demo',
    demoUrl: 'https://mediscribe-ai-774522090187.us-central1.run.app',
  },
  {
    id: 'new-2',
    title: 'Market Pulse',
    year: '2025',
    description: 'A comprehensive market intelligence platform that aggregates real-time financial data and news sentiment. Designed to provide investors with immediate, actionable insights through intuitive data visualization.',
    tags: ['FinTech', 'Analytics', 'React', 'Data Viz'],
    type: 'demo',
    demoUrl: 'https://market-pulse-774522090187.us-central1.run.app',
  },
  {
    id: 'new-3',
    title: 'Transcript Verify',
    year: '2025',
    description: 'A cloud-native demonstration project showcasing automated transcript verification and scoring. Built to handle high-concurrency evaluation environments with zero idle costs and infinite scalability.',
    tags: ['Serverless', 'Cloud Architecture', 'GenAI', 'Education'],
    type: 'demo',
    demoUrl: 'https://transcript-verify-774522090187.us-central1.run.app',
  },
  {
    id: '1',
    title: 'Healthcare Data Strategy',
    year: '2024-2025',
    description: 'Led a multidisciplinary team of engineers, doctors, and data scientists to implement strategic structures and a cloud data platform for a clinic group serving 2 million patients.',
    tags: ['Strategy', 'Healthcare', 'Cloud Platform', 'Leadership'],
    type: 'narrative',
    narrativeUrl: '#project-healthcare-data-strategy',
  },
  {
    id: '2',
    title: 'Enterprise Forecasting Models',
    year: '2021-2024',
    description: 'Developed two enterprise-level demand forecasting models and a propensity-to-take-up model integrated with bespoke communication strategies for a major retailer.',
    tags: ['ML', 'Retail', 'Forecasting', 'Python'],
    type: 'narrative',
    narrativeUrl: '#project-enterprise-forecasting',
  },
  {
    id: '3',
    title: 'Credit Scoring',
    year: '2021-2024',
    description: 'Built several credit scoring models for a leading retailer.',
    tags: ['Credit Risk', 'Classification'],
    type: 'narrative',
    narrativeUrl: '#project-credit-scoring',
  },
  {
    id: '4',
    title: 'Resampling Algorithms for Multi-class classification',
    year: '2020',
    description: 'Masters thesis research concentrating on resampling algorithms for multi-label classification in highly imbalanced datasets.',
    tags: ['Research', 'Statistics', 'R'],
    type: 'narrative',
    narrativeUrl: '#project-multi-class-classification',
  },
  {
    id: '5',
    title: 'Genomic Data Classification',
    year: '2019',
    description: 'Honors thesis research concentrating on multi-class classification of high-dimensional genomic data using sophisticated statistical methods.',
    tags: ['Research', 'Genomics', 'Statistics', 'R'],
    type: 'narrative',
    narrativeUrl: '#project-genomic-classification',
  },
];

export const SKILL_METRICS: SkillMetric[] = [
  { subject: 'Machine Learning', A: 95, fullMark: 100 },
  { subject: 'Data Strategy', A: 90, fullMark: 100 },
  { subject: 'Statistics', A: 95, fullMark: 100 },
  { subject: 'MLOps', A: 85, fullMark: 100 },
  { subject: 'Leadership', A: 80, fullMark: 100 },
  { subject: 'Cloud Eng', A: 85, fullMark: 100 },
];

export const SKILLS_LIST = [
  "Data Science", "Machine Learning", "Statistics", "Data Strategy", "MLOps",
  "Data Engineering", "Data Storytelling", "Leadership"
];

export const CONTACT_INFO = {
  email: 'ulrich.kotze@wimmy.com',
  phone: '+27 72 718 0888',
  website: 'www.wimmy.com',
  linkedin: 'linkedin.com/in/ulrich-kotze',
  location: '312 Equini road, Arena North, Milnerton',
};