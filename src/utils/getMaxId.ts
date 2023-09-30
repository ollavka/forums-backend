type Params = {
  id: string;
};

export const getMaxId = <T extends Params>(list: T[]) => {
  const maxId = String((Math.max(...list.map(({ id }) => +id)) || 0) + 1);

  return maxId;
};
