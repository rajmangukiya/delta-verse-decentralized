import firebaseAdmin from "firebase-admin"
import { v4 } from 'uuid'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const serviceAccount = require("../serviceAccount.json")
import fs from "fs";

const admin = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

const storageRef = admin.storage().bucket(`gs://splitwise-cd2ff.appspot.com`);

export const uploadFile = async (file) => {
  try {
    const storage = await storageRef.upload(file.path, {
      public: true,
      destination: `/uploads/hashnode/${file.filename}`,
      metadata: {
        firebaseStorageDownloadTokens: v4(),
      }
    });
    fs.unlinkSync(file.path);

    return storage[0].metadata.mediaLink
  } catch (error) {
    throw error
  }
}