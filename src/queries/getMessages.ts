import { forums, messages, users } from '../fixtures';
import type { Forum, User } from '../types';
import { getDataById } from '../utils/getDataById';
import { normalize } from './../utils/normalize';

type Args = {
  messageText?: string;
};

export const getMessages = (_: any, args: Args) => {
  const { messageText } = args;

  const normalizedMsgText = normalize(messageText || '');

  const preparedMessages = messages
    .filter((message) => {
      const { senderId, text, timestamp, forumId } = message;

      const normalizedText = normalize(text);

      const user = getDataById<User>(users, senderId);
      const forum = getDataById<Forum>(forums, forumId);

      if (!user || !forum) {
        return false;
      }

      const isValidMessage = normalizedText && timestamp && user.name;

      if (!isValidMessage) {
        return false;
      }

      return normalizedText.includes(normalizedMsgText);
    })
    .sort((a, b) => (
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
    );

  return preparedMessages;
};
