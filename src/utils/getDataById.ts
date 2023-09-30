type Params = {
  id: string;
}

export const getDataById = <T extends Params>(list: T[], dataId: string) => (
  list.find(({ id }) => id === dataId) || null
);
