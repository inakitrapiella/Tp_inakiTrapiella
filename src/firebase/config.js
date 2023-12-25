import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDf3zcVvDKo6_Zojmr7G42dU64LV3gq-5c",
  authDomain: "tp-finalreact.firebaseapp.com",
  projectId: "tp-finalreact",
  storageBucket: "tp-finalreact.appspot.com",
  messagingSenderId: "240033321262",
  appId: "1:240033321262:web:b59579321d814677596abf"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);