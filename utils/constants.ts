import { Emojis, Events } from '~/interfaces'
import ticketsData from '~/public/tickets.json'

export const BACKGROUND_CELL_VALUES = [
  { key: 'playerId:backgrounds.yellow', type: 'color', value: 'yellow' },
  { key: 'playerId:backgrounds.blue', type: 'color', value: 'blue' },
  { key: 'playerId:backgrounds.orange', type: 'color', value: 'orange' },
  { key: 'playerId:backgrounds.green', type: 'color', value: 'green' },
  {
    key: 'playerId:backgrounds.multicolor',
    type: 'color',
    value: ['indigo', 'pink', 'purple', 'teal'],
  },
  {
    key: 'playerId:backgrounds.pikachu',
    type: 'img',
    value: 'pokemon/025.png',
  },
  {
    key: 'playerId:backgrounds.pokemon',
    type: 'img',
    value: [
      'pokemon/001.png',
      'pokemon/004.png',
      'pokemon/007.png',
      'pokemon/129.png',
    ],
  },
  {
    key: 'playerId:backgrounds.cremona',
    type: 'img',
    value: 'cremona.png',
  },
  {
    key: 'playerId:backgrounds.covid-19',
    type: 'img',
    value: 'coronavirus.gif',
  },
  {
    key: 'playerId:backgrounds.clippy',
    type: 'img',
    value: 'clippy.png',
  },
  {
    key: 'playerId:backgrounds.ghana-pallbearers',
    type: 'img',
    value: [
      'pallbearers/pallbearer-1.png',
      'pallbearers/pallbearer-2.png',
      'pallbearers/pallbearer-3.png',
      'pallbearers/pallbearer-4.png',
    ],
  },
  {
    key: 'playerId:backgrounds.frameworks',
    type: 'img',
    value: [
      'frameworks/react.png',
      'frameworks/angular.png',
      'frameworks/vue.png',
      'frameworks/svelte.png',
    ],
  },
  {
    key: 'playerId:backgrounds.kun-aguero',
    type: 'img',
    value: 'kun-aguero.jpg',
  },
]
export const CODES: (keyof Emojis)[] = [
  'deciduous_tree',
  'snail',
  'game_die',
  'tornado',
  'airplane',
  'rainbow',
  'basketball',
  'volcano',
  'banana',
]
export const EVENTS: Events = {
  'coronabingo-solidario': {
    endpoints: {
      email: 'https://hooks.palabra.io/js?id=96',
    },
    roomId: 'PbE5z53GbmWVzKAOUayn',
    spreadsheetId: '1gwJIIPX2gs696_fq3HQQntXhg-mFwREVVyd831GWF8c',
    spreadsheetURL: 'https://forms.gle/FMxzniFaYw6jWLsW8',
    worksheetTitle: 'Respuestas de formulario 1',
  },
}
export const TICKET_NUMBERS = [...Array(90).keys()].map(n => n + 1)
export const DREAMS_EMOJIS: (keyof Emojis)[] = [
  'sweat_drops',
  'boy',
  'pray',
  'bed',
  'cat',
  'dog',
  'gun',
  'fire',
  'ocean',
  'glass_of_milk',
  'chopsticks',
  'male-guard',
  'cold_face',
  'beers',
  'girl',
  'ring',
  'man-facepalming',
  'syringe',
  'fish',
  'partying_face',
  'woman',
  'smirk',
  'butterfly',
  'horse',
  'chicken',
  'church',
  'man-getting-haircut',
  'mountain',
  'pray',
  'rain_cloud',
  'bulb',
  'moneybag',
  'pray',
  'exploding_head',
  'bird',
  'bread',
  'tooth',
  'oil_drum',
  'thunder_cloud_and_rain',
  'pray',
  'hocho',
  'athletic_shoe',
  'frame_with_picture',
  'x',
  'wine_glass',
  'tomato',
  'zombie',
  'male_zombie',
  'cut_of_meat',
  'baguette_bread',
  'toolbox',
  'pregnant_woman',
  'ship',
  'cow',
  'es',
  'hole',
  'dromedary_camel',
  'ambulance',
  'cactus',
  'angel',
  'gun',
  'rain_cloud',
  'couple_with_heart',
  'sob',
  'bow_and_arrow',
  'bug',
  'snake',
  'man-boy',
  'pill',
  'female_zombie',
  'hankey',
  'gift',
  'hospital',
  '8ball',
  'clown_face',
  'llama',
  'leg',
  'lips',
  'chains',
  'soccer',
  'bouquet',
  'boxing_glove',
  'cloud',
  'church',
  'flashlight',
  'wind_blowing_face',
  'guitar',
  'potato',
  'rat',
  'scream',
]
export const MAX_PLAYERS = ticketsData.length / 2
export const SOUNDS = [
  {
    name: 'Cardi B - Coronavirus',
    language: 'en',
    url: '/sounds/cardi-b/coronavirus.mp3',
  },
  {
    name: 'Chino cirujano - Pero pagaraprata',
    language: 'ar',
    url: '/sounds/chino-cirujano/pero-pagaraprata.mp3',
  },
  {
    name: 'Ghaneses del ataúd - Ghana pallbearers',
    language: 'world',
    url: '/sounds/funeral/dance-with-the-coffin.mp3',
  },
  {
    name: "Friends - Let's get ready to rumble",
    language: 'en',
    url: '/sounds/friends/lets-get-ready-to-rumble.mp3',
  },
  {
    name: 'Guido Kaczka  - Mirá la repe',
    language: 'ar',
    url: '/sounds/guido/mira-la-repe.mp3',
  },
  {
    name: 'Guido Kaczka - Preparado, listo, ya',
    language: 'ar',
    url: '/sounds/guido/preparado-listo-ya.mp3',
  },
  {
    name: 'Kun Agüero - Ojo al tejo',
    language: 'ar',
    url: '/sounds/kun-aguero/ojo-al-tejo.mp3',
  },
  {
    name: 'Los Simpsons - Hundiste mi acorazado',
    language: 'ar',
    url: '/sounds/simpsons/hundiste-mi-acorazado.mp3',
  },
  {
    name: 'Riverito - A cruzar los dedos',
    language: 'ar',
    url: '/sounds/riverito/cruzar-dedos.mp3',
  },
  {
    name: 'Susana - Correctou',
    language: 'ar',
    url: '/sounds/susana/correctou.mp3',
  },
  {
    name: 'Tano Pasman - Nooooo',
    language: 'ar',
    url: '/sounds/tano/nooooo.mp3',
  },
  {
    name: 'The Office - No, God, no',
    language: 'en',
    url: '/sounds/the-office/no-god-no.mp3',
  },
  {
    name: 'The Office - This is the worst',
    language: 'en',
    url: '/sounds/the-office/this-is-the-worst.mp3',
  },
  {
    name: 'The Simpsons - Bingo',
    language: 'en',
    url: '/sounds/simpsons/homer-bingo.mp3',
  },
  {
    name: 'Error de Windows - Windows Error',
    language: 'world',
    url: '/sounds/windows/windows-error.mp3',
  },
]
export const SOUNDS_EXTRAS = [
  ...SOUNDS,
  {
    name: 'Patao - Cartón',
    language: 'ar',
    url: '/sounds/patao/carton.mp3',
  },
  {
    name: 'Patao - Coronabingo',
    language: 'ar',
    url: '/sounds/patao/coronabingo.mp3',
  },
  {
    name: 'Patao - Ese bolillero papá',
    language: 'ar',
    url: '/sounds/patao/ese-bolillero-papa.mp3',
  },
  {
    name: 'Patao - Linea',
    language: 'ar',
    url: '/sounds/patao/linea.mp3',
  },
]
