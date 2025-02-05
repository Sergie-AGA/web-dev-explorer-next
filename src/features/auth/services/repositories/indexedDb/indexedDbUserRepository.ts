import {
  IAuthRepository,
  IAccountData,
  IUserData,
} from "../../IAuthRepository";
import { v4 as uuidv4 } from "uuid";

async function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("WebDevExplorer", 1);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = request.result;
      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { keyPath: "username" });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

export const indexedDBRepository: IAuthRepository = {
  async register(data: IAccountData): Promise<void> {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction("users", "readwrite");
      const objectStore = transaction.objectStore("users");
      const userID = uuidv4();
      const request = objectStore.add({ ...data, userID });

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  },

  async login(data: IAccountData): Promise<IUserData> {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction("users", "readonly");
      const objectStore = transaction.objectStore("users");
      const request = objectStore.get(data.username);

      request.onsuccess = () => {
        const result = request.result;
        if (result) {
          resolve({ userID: result.userID, username: result.username });
        } else {
          reject(new Error("Invalid username or password"));
        }
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  },

  async listUsers(): Promise<IUserData[] | null> {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction("users", "readonly");
      const objectStore = transaction.objectStore("users");
      const request = objectStore.getAll();

      request.onsuccess = () => {
        const result = request.result;
        if (result && result.length > 0) {
          resolve(
            result.map((user: any) => ({
              userID: user.userID,
              username: user.username,
            }))
          );
        } else {
          resolve(null);
        }
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  },

  logout: async () => {
    // logout logic
  },
};
