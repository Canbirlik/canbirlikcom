// Single source of truth for site content. Edit here; components only render.

export const profile = {
  name: 'Can Birlik',
  firstName: 'Can',
  title: 'Senior Data & Cloud Solution Architect',
  location: 'Riga, Latvia',
  email: 'canbirlik@gmail.com',
  tagline: 'I design data platforms that scale.',
  summary:
    '15+ years in enterprise architecture, cloud platforms and technology consulting. I design lakehouse and data platforms on Snowflake and Databricks across AWS and Microsoft Azure, and translate complex business requirements into secure, scalable solutions.',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/canbirlik/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/Canbirlik', icon: 'siGithub' },
    { label: 'E-mail', href: 'mailto:canbirlik@gmail.com', icon: 'mail' },
  ],
  stats: [
    { value: '15+', label: 'years in cloud & data' },
    { value: '30+', label: 'professional certifications' },
  ],
} as const;

export type Experience = {
  company: string;
  role: string;
  start: string; // display form, e.g. "Jan 2026"
  end: string;
  location: string;
  highlights: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    company: 'EPAM Systems',
    role: 'Data Solution Architect',
    start: 'Jan 2026',
    end: 'Present',
    location: 'Riga, Latvia',
    highlights: [
      'Design multi-region Snowflake and Databricks data platforms for global enterprise clients across AWS and Microsoft Azure.',
      'Architect end-to-end data solutions covering data engineering, ETL/ELT, data modeling, security, governance and data sharing.',
      'Design multi-region resilience and disaster recovery strategies, including cross-region replication, failover and access synchronization.',
      'Subject Matter Expert for Snowflake SnowPro certification development and technical reviews across Core, Generative AI, AI Security and Data Governance.',
    ],
    stack: ['Snowflake', 'Databricks', 'Microsoft Fabric', 'AWS', 'Azure'],
  },
  {
    company: 'Accenture Baltics',
    role: 'Cloud & Data Platform Architect - Team Lead',
    start: 'Sep 2024',
    end: 'Jan 2026',
    location: 'Riga, Latvia',
    highlights: [
      'Architected and led the implementation of a Databricks-based data platform, enabling scalable analytics and enterprise data governance.',
      'Automated data ingestion and transformation workflows with AWS, Python and Terraform, reaching up to 90% automation in data pipelines.',
      'Established data governance and security frameworks using Collibra, Immuta and Fivetran across cloud, data engineering and DevOps teams.',
    ],
    stack: ['Databricks', 'Apache Spark', 'AWS', 'Python', 'Terraform', 'Docker', 'Jenkins', 'Fivetran', 'Collibra', 'Immuta'],
  },
  {
    company: 'Orange Business',
    role: 'Senior Presales Solutions Partner',
    start: 'Nov 2023',
    end: 'Sep 2024',
    location: 'Istanbul, Türkiye',
    highlights: [
      'Designed enterprise cloud, cybersecurity and connectivity solutions, contributing to multi-million-dollar digital transformation opportunities.',
      'Led presales activities, translating complex business and technical requirements into scalable solution architectures and proposals.',
    ],
    stack: ['Hybrid Cloud', 'Cybersecurity', 'Connectivity', 'Solution Architecture'],
  },
  {
    company: 'Hewlett Packard Enterprise',
    role: 'Senior Cloud Solutions Architect',
    start: 'Jan 2022',
    end: 'Nov 2023',
    location: 'Istanbul, Türkiye',
    highlights: [
      'Designed secure, scalable hybrid cloud architectures with HPE GreenLake, integrating on-premises infrastructure with public cloud.',
      'Advised enterprise customers on cloud modernization, hybrid adoption, high availability and business continuity.',
    ],
    stack: ['HPE GreenLake', 'Hybrid Cloud', 'Cloud Modernization', 'High Availability'],
  },
  {
    company: 'KoçSistem',
    role: 'Senior Cloud Solutions Presales Manager',
    start: 'Jul 2017',
    end: 'Jan 2022',
    location: 'Istanbul, Türkiye',
    highlights: [
      'Designed private, public and hybrid cloud solutions including managed services, virtualization, SAP Basis and container platforms.',
      'Led technical architectures, RFP responses and proposals for strategic enterprise accounts and large-scale transformation projects.',
    ],
    stack: ['Private Cloud', 'Hybrid Cloud', 'Virtualization', 'SAP Basis', 'Containers', 'Managed Services'],
  },
  {
    company: 'IBM Global Services',
    role: 'Cloud & Infrastructure Services Presales Specialist',
    start: 'May 2015',
    end: 'Jun 2017',
    location: 'Istanbul, Türkiye',
    highlights: [
      'Designed enterprise cloud, security and managed services solutions for public and private sector customers.',
      'Supported e-Transformation projects (e-Invoice, e-Ledger, e-Archive) through technical proposals and presales.',
    ],
    stack: ['Enterprise Cloud', 'Security', 'Managed Services', 'e-Invoice', 'e-Ledger', 'e-Archive'],
  },
  {
    company: 'KoçSistem',
    role: 'Cloud Solutions & Services Presales Specialist',
    start: 'Jul 2009',
    end: 'Apr 2015',
    location: 'Istanbul, Türkiye',
    highlights: [
      'Designed private, public and hybrid cloud and IT outsourcing solutions, from requirement analysis and solution design to proposal and contract.',
    ],
    stack: ['Private Cloud', 'Public Cloud', 'Hybrid Cloud', 'IT Outsourcing'],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: 'Data Platforms', items: ['Snowflake', 'Databricks', 'Apache Spark', 'Microsoft Fabric', 'dbt', 'Delta Lake', 'Apache Iceberg', 'Apache Airflow', 'Fivetran'] },
  { title: 'Cloud', items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Oracle Cloud', 'HPE GreenLake', 'Huawei Cloud'] },
  { title: 'Governance & Security', items: ['Unity Catalog', 'Snowflake Horizon Catalog', 'Collibra', 'Immuta'] },
  { title: 'DevOps & IaC', items: ['Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'Bitbucket', 'GitHub'] },
  { title: 'AI & GenAI', items: ['Claude', 'OpenAI Codex', 'Gemini', 'GitHub Copilot'] },
  { title: 'Languages', items: ['Python', 'SQL', 'Bash', 'Java'] },
];

// Logos in the Skills strip: the core stack. `icon` is a simple-icons export name
// or a key in brand-icons.ts for brands simple-icons no longer ships.
export const featuredTech: { name: string; icon: string }[] = [
  { name: 'Snowflake', icon: 'siSnowflake' },
  { name: 'Databricks', icon: 'siDatabricks' },
  { name: 'AWS', icon: 'siAws' },
  { name: 'Azure', icon: 'siAzure' },
  { name: 'Spark', icon: 'siApachespark' },
  { name: 'dbt', icon: 'siDbt' },
  { name: 'Python', icon: 'siPython' },
  { name: 'Claude', icon: 'siClaude' },
  { name: 'Codex', icon: 'siOpenai' },
  { name: 'Gemini', icon: 'siGooglegemini' },
];

export type CertCategory = 'Data' | 'AI' | 'Cloud' | 'Other';

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  category: CertCategory;
  url?: string; // public verification link (Credly, Microsoft Learn, Databricks credentials...)
};

export const certCategories: { id: CertCategory; label: string }[] = [
  { id: 'Data', label: 'Data Platforms' },
  { id: 'AI', label: 'AI & GenAI' },
  { id: 'Cloud', label: 'Cloud & Security' },
  { id: 'Other', label: 'Other' },
];

export const certifications: Certification[] = [
  { name: 'SnowPro Subject Matter Expert (SME)', issuer: 'Snowflake', date: 'Oct 2026', category: 'Data',
    url: 'https://achieve.snowflake.com/c25318b4-fb8a-4f46-a416-218f7a56ea25' },
  { name: 'SnowPro Core Certification', issuer: 'Snowflake', date: 'Nov 2025', category: 'Data',
    url: 'https://achieve.snowflake.com/35a6d5a9-ca0c-477a-ac0b-dd7f7581de3f' },
  { name: 'Databricks Certified Data Engineer Associate', issuer: 'Databricks', date: 'May 2025', category: 'Data',
    url: 'https://credentials.databricks.com/8a8cfd37-c27f-4045-98d1-322601b0e3ce' },
  { name: 'Databricks Accredited AWS Platform Architect', issuer: 'Databricks', date: 'Oct 2024', category: 'Data',
    url: 'https://credentials.databricks.com/7d038709-b2f3-4076-b56d-0cf7163c6bc4' },
  { name: 'Databricks Accredited Platform Administrator', issuer: 'Databricks', date: 'Sep 2024', category: 'Data',
    url: 'https://credentials.databricks.com/42583bfb-e1f9-4d04-83c2-5da89deebd88' },

  { name: 'OpenAI Cyber Solutions Practitioner', issuer: 'OpenAI', date: 'Aug 2026', category: 'AI' },
  { name: 'OpenAI Cyber Deployment Practitioner', issuer: 'OpenAI', date: 'Aug 2026', category: 'AI' },
  { name: 'Codex Solutions Practitioner', issuer: 'OpenAI', date: 'Aug 2026', category: 'AI' },
  { name: 'Codex Deployment Practitioner', issuer: 'OpenAI', date: 'Aug 2026', category: 'AI' },
  { name: 'OpenAI Consultative Solutions Practitioner', issuer: 'OpenAI', date: 'Aug 2026', category: 'AI' },
  { name: 'OpenAI Technical Practitioner', issuer: 'OpenAI', date: 'Aug 2026', category: 'AI' },
  { name: 'OpenAI Foundational Knowledge', issuer: 'OpenAI', date: 'Aug 2026', category: 'AI' },
  { name: 'Databricks Accredited Generative AI Fundamentals', issuer: 'Databricks', date: 'Aug 2026', category: 'AI' },
  { name: 'AWS Certified Generative AI Developer - Professional', issuer: 'AWS', date: 'Jul 2026', category: 'AI',
    url: 'https://www.credly.com/badges/a38b4629-11aa-4ee6-970e-3ef52e7f9053' },
  { name: 'Certified Partner Specialist: Gemini Enterprise Agent Development', issuer: 'Google', date: 'Jul 2026', category: 'AI',
    url: 'https://www.credly.com/badges/2c3a0cc9-7232-4605-846a-6ab031856cd2' },
  { name: 'Claude Certified Architect - Foundations', issuer: 'Anthropic', date: 'May 2026', category: 'AI',
    url: 'https://www.credly.com/badges/ec8ea370-3845-41a7-94cb-84936e098587' },
  { name: 'GitHub Copilot', issuer: 'Microsoft', date: 'May 2026', category: 'AI',
    url: 'https://learn.microsoft.com/en-gb/users/canbirlik-2080/transcript/71rr8s68eo30rz1?tab=credentials-tab' },
  { name: 'AWS Certified AI Practitioner', issuer: 'AWS', date: 'Feb 2025', category: 'AI',
    url: 'https://www.credly.com/badges/f675bb01-a99f-4d4e-88c1-3e1b81ad89a1' },

  { name: 'Huawei HCIA - Cloud Service', issuer: 'Huawei', date: 'Dec 2023', category: 'Cloud' },
  { name: 'Azure Security Engineer Associate', issuer: 'Microsoft', date: 'Jul 2021', category: 'Cloud',
    url: 'https://learn.microsoft.com/en-gb/users/canbirlik-2080/transcript/71rr8s68eo30rz1?tab=credentials-tab' },
  { name: 'Azure Solutions Architect Expert', issuer: 'Microsoft', date: 'Apr 2021', category: 'Cloud',
    url: 'https://learn.microsoft.com/en-gb/users/canbirlik-2080/transcript/71rr8s68eo30rz1?tab=credentials-tab' },
  { name: 'Oracle Cloud Infrastructure Foundations Associate', issuer: 'Oracle', date: 'Apr 2021', category: 'Cloud' },
  { name: 'Azure AI Fundamentals', issuer: 'Microsoft', date: 'Dec 2020', category: 'Cloud',
    url: 'https://www.credly.com/badges/1d6318b1-f793-48b0-a75f-ac3944ab72b5' },
  { name: 'Azure Data Fundamentals', issuer: 'Microsoft', date: 'Dec 2020', category: 'Cloud',
    url: 'https://www.credly.com/badges/0495fe37-c57d-42b3-b904-b595fe6f55d7' },
  { name: 'Azure Administrator Associate', issuer: 'Microsoft', date: 'Sep 2020', category: 'Cloud',
    url: 'https://learn.microsoft.com/en-gb/users/canbirlik-2080/transcript/71rr8s68eo30rz1?tab=credentials-tab' },
  { name: 'Azure Fundamentals', issuer: 'Microsoft', date: 'Jun 2020', category: 'Cloud',
    url: 'https://www.credly.com/badges/0448ac6a-ef96-4ad0-84e1-9bd48b1ca5a8' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'AWS', date: 'May 2020', category: 'Cloud',
    url: 'https://www.credly.com/badges/5d1a1235-2623-4ef8-9060-fb96ed9fa934' },

  { name: 'Linux Foundation Certified IT Associate (LFCA)', issuer: 'The Linux Foundation', date: 'Jun 2024', category: 'Other',
    url: 'https://www.credly.com/badges/2ad396f8-529e-475a-99cc-5089706bd90c' },
  { name: 'EXIN SIAM Foundation', issuer: 'EXIN', date: 'Mar 2024', category: 'Other',
    url: 'https://mylogin.exin.nl/polarserver.asp?Script=GetLinkedInPost&CandidateCertificateGUID=46CDA224-3F83-49DB-821F-569C195F5E2D' },
  { name: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org', date: 'Mar 2022', category: 'Other',
    url: 'https://www.credly.com/badges/21e311e8-9fc0-41da-b908-b79ea2056269' },
  { name: 'LPIC-1: Linux Administrator', issuer: 'Linux Professional Institute', date: 'Nov 2021', category: 'Other',
    url: 'https://www.credly.com/badges/ad4a4c1c-df10-47be-991d-6ad52d737230' },
  { name: 'Microsoft Certified Trainer (MCT)', issuer: 'Microsoft', date: 'Jul 2021 - Jun 2024', category: 'Other',
    url: 'https://www.credly.com/badges/c8fafa66-6bf9-42f0-8f67-ab28e7145d0b' },
];

export const education: { degree: string; school: string; period: string; note: string; completed?: false }[] = [
  { degree: 'M.Sc. Cyber Security', school: 'Gebze Technical University', period: '2023 - 2024', note: 'Studies discontinued', completed: false },
  { degree: 'B.Sc. Management Information Systems', school: 'Anadolu University', period: '2017 - 2021', note: 'GPA 3.70' },
  { degree: 'B.Sc. Industrial Engineering', school: 'Boğaziçi University', period: '2004 - 2009', note: 'GPA 3.50' },
];

export const accomplishments = [
  { year: '2009', text: 'Ranked 16th of 250k candidates in ALES (Academic Staff & Graduate Education Exam)' },
  { year: '2009', text: 'High Honors Certificate, Faculty of Engineering, Boğaziçi University (GPA 3.50)' },
  { year: '2004', text: 'Ranked 7th of 1.7M students in the Turkish University Entrance Exam (ÖSS)' },
  { year: '2004', text: 'Prime Ministry Honor Scholarship, 2004 - 2009' },
];

export const languages = [
  { name: 'Turkish', level: 'Native' },
  { name: 'English', level: 'C1' },
  { name: 'Latvian', level: 'A2' },
  { name: 'German', level: 'A1' },
];
