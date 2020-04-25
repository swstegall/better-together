import { database } from './database';

export const setupDb = async () => {
  await database.sync();
};