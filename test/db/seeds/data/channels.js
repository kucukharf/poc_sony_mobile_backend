const channels = [
  {
    id: 1,
    name: 'Sony Channel Turkiye',
    menu: ['programs', 'tv_guide', 'videos', 'live_feed', 'galleries'],
    locale: 'tr_TR',
    is_default: true,
    logo: 'https://www.sonychannelturkiye.com/sites/all/themes/responsive/responsive_sony_russia/logo.png',
    url: 'https://www.sonychannelturkiye.com',
  },
  {
    id: 2,
    name: 'Sony Crime Channel',
    menu: ['programs', 'tv_guide', 'galleries', 'news', 'games_and_more'],
    locale: 'en_GB',
    is_default: true,
    logo: 'https://vignette.wikia.nocookie.net/logopedia/images/8/87/SonyCrimeChannelUK.png/revision/latest/scale-to-width-down/140?cb=20180126010145',
    url: 'https://www.sonycrimechannel.com/',

  },
  {
    id: 3,
    name: 'Sony Movie Channel',
    menu: ['programs', 'tv_guide', 'galleries', 'quizzes', 'videos', 'news'],
    locale: 'en_GB',
    logo: 'https://www.sonymoviechannel.co.uk/sites/all/themes/responsive/responsive_smc_uk_2/logo.png',
    url: 'https://www.sonymoviechannel.com/',
  },
  {
    id: 4,
    name: 'Sony Channel Deutschland',
    locale: 'de_DE',
    menu: ['programs', 'tv_guide', 'videos', 'live_feed', 'galleries'],
    is_default: true,
    logo: 'https://www.sonychannel.de/sites/de.set/files/sony-channel-logo_0.png',
    url: 'https://www.sonychannel.de/',
  },
  {
    id: 5,
    name: 'Movies 4 Men',
    locale: 'en_GB',
    menu: ['programs', 'tvguide', 'galleries', 'quizzes', 'videos', 'news'],
    logo: 'https://www.sonymoviechannel.co.uk/sites/all/themes/responsive/responsive_smc_uk_2/logo.png',
    url: 'https://www.movies4men.co.uk/',
  },
];

module.exports = { channels };
