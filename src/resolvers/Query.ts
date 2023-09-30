import {
  getForums,
  getMessages,
  getUsers,
  getUsersByForum,
  getForum,
  getUser,
  getMessage,
} from '../queries';

export const Query = {
  users: getUsers,
  usersByForum: getUsersByForum,
  forums: getForums,
  messages: getMessages,
  user: getUser,
  forum: getForum,
  message: getMessage,
};
