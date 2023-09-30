import type { Forum, Message, User } from './types';
import { getImageUrl } from './utils/getImageUrl';
import { getRandomTimestamp } from './utils/getRandomTimestamp';

export const users: User[] = [
  {
    id: '1',
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    forumIds: ['1'],
    get photo() {
      return getImageUrl(this.username);
    },
  },
  {
    id: '2',
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    forumIds: ['1', '2'],
    get photo() {
      return getImageUrl(this.username);
    },
  },
  {
    id: '3',
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
    forumIds: ['3'],
    get photo() {
      return getImageUrl(this.username);
    },
  },
  {
    id: '4',
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    phone: '493-170-9623 x156',
    forumIds: ['5'],
    get photo() {
      return getImageUrl(this.username);
    },
  },
  {
    id: '5',
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    phone: '(254)954-1289',
    forumIds: ['2'],
    get photo() {
      return getImageUrl(this.username);
    },
  },
  {
    id: '6',
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    phone: '1-477-935-8478 x6430',
    forumIds: ['4'],
    get photo() {
      return getImageUrl(this.username);
    },
  },
  {
    id: '7',
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    phone: '210.067.6132',
    forumIds: ['5'],
    get photo() {
      return getImageUrl(this.username);
    },
  },
  {
    id: '8',
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    phone: '586.493.6943 x140',
    forumIds: ['1'],
    get photo() {
      return getImageUrl(this.username);
    },
  },
  {
    id: '9',
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    phone: '(775)976-6794 x41206',
    forumIds: ['3'],
    get photo() {
      return getImageUrl(this.username);
    },
  },
  {
    id: '10',
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    phone: '024-648-3804',
    forumIds: ['10'],
    get photo() {
      return getImageUrl(this.username);
    },
  },
];

export const forums: Forum[] = [
  { id: '1', name: 'Tech Discussion', userIds: ['1', '2', '8'] },
  { id: '2', name: 'General Chat', userIds: ['2', '5'] },
  { id: '3', name: 'Programming Q&A', userIds: ['3', '9'] },
  { id: '4', name: 'Science and Technology', userIds: ['6', '10'] },
  { id: '5', name: 'Gaming Zone', userIds: ['4', '7'] },
];

export const messages: Message[] = [
  {
    id: '1',
    text: 'Hello, everyone!',
    senderId: '1',
    forumId: '1',
    timestamp: getRandomTimestamp(),
  },
  {
    id: '2',
    text: 'How are you doing?',
    senderId: '2',
    forumId: '1',
    timestamp: getRandomTimestamp(),
  },
  {
    id: '3',
    text: 'Discussing the latest tech trends.',
    senderId: '1',
    forumId: '1',
    timestamp: getRandomTimestamp(),
  },
  {
    id: '4',
    text: 'Any movie recommendations?',
    senderId: '2',
    forumId: '2',
    timestamp: getRandomTimestamp(),
  },
  {
    id: '5',
    text: 'Programming languages debate!',
    senderId: '3',
    forumId: '3',
    timestamp: getRandomTimestamp(),
  },
  {
    id: '6',
    text: 'New gaming console launch soon!',
    senderId: '4',
    forumId: '5',
    timestamp: getRandomTimestamp(),
  },
  {
    id: '7',
    text: 'General Chat message.',
    senderId: '5',
    forumId: '2',
    timestamp: getRandomTimestamp(),
  },
  {
    id: '8',
    text: 'Discussing recent scientific discoveries.',
    senderId: '6',
    forumId: '4',
    timestamp: getRandomTimestamp(),
  },
  {
    id: '9',
    text: 'Anyone up for a game?',
    senderId: '7',
    forumId: '5',
    timestamp: getRandomTimestamp(),
  },
  {
    id: '10',
    text: 'Tech gadgets discussion.',
    senderId: '8',
    forumId: '1',
    timestamp: getRandomTimestamp(),
  },
  {
    id: '11',
    text: 'Hello world',
    senderId: '9',
    forumId: '3',
    timestamp: getRandomTimestamp(),
  },
  {
    id: '12',
    text: 'Hello world 2',
    senderId: '10',
    forumId: '4',
    timestamp: getRandomTimestamp(),
  },
];
