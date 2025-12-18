import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "unichat-78c9c.firebaseapp.com",
  projectId: "unichat-78c9c",
  storageBucket: "unichat-78c9c.firebasestorage.app",
  messagingSenderId: "818941162200",
  appId: "1:818941162200:web:6073576557ddabe8805dad"
};

const app = getApps.length == 0 ? initializeApp(firebaseConfig) : getApp();
const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);

export { auth, db };
