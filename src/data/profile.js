// ============================================================================
 // PERSONALIZE THIS FILE
 // 1. Choose a layout theme (editorial, developer, or professional)
 // 2. Replace the sample text with your real details
 // 3. Add a photo (optional): put photo.jpg in the public/ folder, then set photo below
 // Only publish information you are comfortable making public.
 // ============================================================================

export const profile = {
  // Visual layout. Download a pre-set theme ZIP from the workshop site, or change this value.
  theme: 'editorial',

  // Your photo. Put the file in public/ (example: public/photo.jpg).
  // Use '/photo.jpg' to show it, or '' to show your initials instead.
  photo: '/photo.svg',

  name: 'Alex Rivera',
  role: 'MIS Student · Workshop Demo Portfolio',
  location: 'Wichita, Kansas',
  tagline: 'Demo site for MIS Club Workshop 1 catch-up.',
  about:
    'This is the finished Workshop 1 demo portfolio. Late arrivals can inspect the repo, open an issue/PR practice path from here, or compare their local ZIP against a working example.',
  email: 'misclub-demo@example.com',
  github: 'https://github.com/skyeshanohan/workshop1-demo-portfolio',
  linkedin: 'https://www.linkedin.com/',

  skills: ['SQL', 'Python', 'Git & GitHub', 'Data analysis', 'Requirements', 'Documentation'],

  education: {
    school: 'Wichita State University',
    degree: 'B.B.A. Management Information Systems',
    detail: 'Expected graduation · 2027',
  },

  // Add more objects to this list for more roles. Delete objects you do not need.
  experience: [
    {
      title: 'Workshop Demo Role',
      organization: 'WSU MIS Club',
      date: '2026',
      summary:
        'Example experience entry for students catching up. Replace this with your real role before publishing your own site.',
    },
    {
      title: 'Student Project Lead',
      organization: 'MIS Course Project',
      date: '2025–2026',
      summary:
        'Organized team tasks, collected feedback, and checked the final work against agreed requirements.',
    },
  ],

  // Add more projects the same way. Class projects are fine if you describe your contribution honestly.
  projects: [
    {
      kind: 'WEB / UX',
      title: 'Workshop 1 Portfolio',
      summary: 'Published Astro portfolio used as the catch-up demo for Git, PR, and Pages practice.',
      skills: ['Git', 'GitHub', 'Astro'],
      link: 'https://github.com/skyeshanohan/workshop1-demo-portfolio',
    },
    {
      kind: 'DATA / AUTOMATION',
      title: 'Student Budget Analyzer',
      summary: 'A small tool concept for grouping sample spending and showing monthly patterns.',
      skills: ['Python', 'Data'],
      link: 'https://github.com/',
    },
    {
      kind: 'SECURITY / LEARNING',
      title: 'Secure Setup Checklist',
      summary: 'A short checklist for safer project setup and fewer common mistakes.',
      skills: ['Git', 'Documentation'],
      link: 'https://github.com/',
    },
  ],
};
