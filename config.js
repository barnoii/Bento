// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Barnoii',
  imageBackground: false,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Get some rest,',

  // Weather
  weatherKey: 'b4de0c948d7b7a596a37e97396a1d739',
  weatherIcons: 'White', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F',
  weatherLatitude: '32.391266',
  weatherLongitude: '-84.822906',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Netflix',
      icon: 'film',
      link: 'https://netflix.com/',
    },
    {
      id: '4',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'layout',
      link: 'https://reddit.com/',
    },
    {
      id: '6',
      name: 'Twitch',
      icon: 'twitch',
      link: 'https://twitch.tv/',
    },
  ],
 
  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘
 
  //Icons
  firstListIcon: 'book-open',
  secondListIcon: 'edit-3',
  
  // Links
  lists: {
    firstList: [
      {
        name: 'Epicurious',
        link: 'https://www.epicurious.com/',
      },
      {
        name: 'Vox',
        link: 'https://www.vox.com/',
      },
      {
        name: 'The New York Times',
        link: 'https://www.nytimes.com/',
      },
      {
        name: 'Techcrunch',
        link: 'https://techcrunch.com/,
      },
      {
        name: 'Engadget',
        link: 'https://www.engadget.com/',
      },
      {
        name: 'Windows Central',
        link: 'https://www.windowscentral.com/',
      }
    ],
    secondList: [
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/',
      },
      {
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'Dribbble',
        link: 'https://dribbble.com',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
    ],
  },
};
