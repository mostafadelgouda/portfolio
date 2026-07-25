// Static personal details. The dynamic lists (skills, projects, experience)
// come from the MongoDB-backed API instead — see src/api.ts.

export const profile = {
  name: 'Mostafa Adel',
  firstName: 'Mostafa',
  title: 'Software Engineer',
  tagline: 'I engineer software — not just code.',
  location: 'Egypt',
  email: 'mostafadelgouda@gmail.com',
  phone: '+20 1099768505',
  summary:
    'I turn complex problems into clean, dependable systems — from architecture and data design to the last edge case. Years of competitive programming taught me to think in trade-offs, prove correctness and build software that holds up under pressure.',
  resumeUrl: '', // optionally drop a /resume.pdf into client/public and set '/resume.pdf'

  socials: {
    github: 'https://github.com/mostafadelgouda',
    linkedin: 'https://www.linkedin.com/in/mostafadelgouda',
    email: 'mailto:mostafadelgouda@gmail.com',
    whatsapp: 'https://wa.me/201099768505',
  },

  stats: [
    { value: '4×', label: 'ACPC Finalist' },
    { value: '500+', label: 'Participants impacted as ECPC judge' },
    { value: '3 yrs', label: 'Mentoring & problem setting' },
  ],

  achievements: [
    {
      icon: '🏆',
      title: '4× ACPC Finalist',
      detail: 'Reached the Arab Collegiate Programming Contest finals four years running.',
    },
    {
      icon: '⚖️',
      title: 'Judge & Problem Developer — ECPC',
      detail:
        'Designed and tested algorithmic problems for the ECPC Qualification Days, impacting over 500 participants.',
    },
    {
      icon: '👥',
      title: 'Scientific Committee Lead — Benha ACPC',
      detail:
        'Led the scientific committee and volunteered as a problem setter and instructor for 3 years, mentoring students in algorithms and problem solving.',
    },
  ],

  education: [
    {
      degree: 'B.Sc. in Computer Science',
      school: 'Benha University',
      period: 'Oct 2018 — June 2022',
      coursework:
        'Algorithms, Data Structures, Software Engineering, OOP, Database Management Systems.',
    },
  ],
};
