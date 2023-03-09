import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firebase'
 
const firebaseConfig = {
  apiKey: "AIzaSyCgsDBi80dPsFCyyYVDYQ0_9XHMTAHDgxc",
  authDomain: "miniblog-51bd7.firebaseapp.com",
  projectId: "miniblog-51bd7",
  storageBucket: "miniblog-51bd7.appspot.com",
  messagingSenderId: "970230033323",
  appId: "1:970230033323:web:b134052ba8b6dab12c40ee"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}