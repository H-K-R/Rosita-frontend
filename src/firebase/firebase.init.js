import { firebaseConfig } from "./firebase.config";
import { initializeApp } from "firebase/app";

const initFirebase = () => {
  return initializeApp(firebaseConfig);
};

export default initFirebase;
