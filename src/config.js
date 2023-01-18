module.exports = {
  siteTitle: 'Abhishek Vayam | Developer',
  siteDescription:
    'Abhishek Vayam is a developer , who loves learning new things.',
  siteKeywords:
    'Abhishek Vayam, Abhishek, Vayam, Abhishekvayam, Blogger',
  siteUrl: 'https://github.com/abhishekvayam/abhishek.github.io',
  siteLanguage: 'en_US',
  name: 'Abhishek Vayam',
  location: 'Delhi, India',
  email: 'abhishekvayam9@gmail.com',
  github: 'https://github.com/abhishekvayam',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/abhishekvayam',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/abhishek-v-a60324148/',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@abhishekvayam9',
    },    
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
