import { forums, messages, users } from '../fixtures';
import type { Forum, Message, User } from '../types';
import { getDataById } from '../utils/getDataById';
import { getMaxId } from '../utils/getMaxId';

type Args = {
  forumId: string;
  userId: string;
  text: string;
};

type Result = {
  message: Message | null;
  error: string | null;
};

export const postMessage = (_: any, args: Args): Result => {
  const { forumId, userId, text } = args;

  const user = getDataById<User>(users, userId);
  const forum = getDataById<Forum>(forums, forumId);

  if (!user) {
    return {
      message: null,
      error: 'User not found',
    };
  }

  if (!forum) {
    return {
      message: null,
      error: 'Forum not found',
    };
  }

  if (!forum.userIds.includes(userId)) {
    return {
      message: null,
      error:
        'You have not joined this forum. To add posts to this forum, you must first join this forum',
    };
  }

  if (!text.trim()) {
    return {
      message: null,
      error: 'The message must contain at least 1 character',
    };
  }

  const newMessageId = getMaxId<Message>(messages);

  const newMessage: Message = {
    id: newMessageId,
    forumId,
    senderId: userId,
    text,
    timestamp: new Date().toISOString(),
  };

  messages.push(newMessage);

  return {
    message: newMessage,
    error: null,
  };
};
