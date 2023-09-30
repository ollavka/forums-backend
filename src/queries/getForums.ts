import { forums } from '../fixtures';
import { normalize } from '../utils/normalize';

type Args = {
  userId?: string;
  joinedOnly?: boolean;
  forumName?: string | null;
};

export const getForums = (_: any, args: Args) => {
  const { userId, joinedOnly, forumName } = args;

  const normalizedForumName = normalize(forumName || '');

  if (!userId) {
    return forums;
  }

  const targetForums = forums.filter(({ name, userIds }) => {
    const hasJoined = !!joinedOnly === userIds.includes(userId);

    return hasJoined && normalize(name).includes(normalizedForumName);
  });

  return targetForums;
};
