/* eslint-disable linebreak-style */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});

const FavoriteDataIdb = {
  async getData(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllDatas() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putData(data) {
    return (await dbPromise).put(OBJECT_STORE_NAME, data);
  },
  async deleteData(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteDataIdb;
