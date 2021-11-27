import { FirebaseApp } from '@firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { enableIndexedDbPersistence, getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const app: FirebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
});

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const functions = getFunctions(app);
enableIndexedDbPersistence(firestore).catch((err) => {
  if (err.code === 'failed-precondition') {
    // eslint-disable-next-line no-console
    console.warn(
      'Multiple tabs open, persistence can only be enabled in one tab at a a time'
    );
  } else if (err.code === 'unimplemented') {
    // eslint-disable-next-line no-console
    console.warn(
      'The current browser does not support all of the features required to enable persistence'
    );
  }
});

export default app;
