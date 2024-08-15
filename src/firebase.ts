import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAIsoiVsVUFw4_GJZH5_YqDOFTr38RslnY",
    authDomain: "small-project-cdb06.firebaseapp.com",
    projectId: "small-project-cdb06",
    storageBucket: "small-project-cdb06.appspot.com",
    messagingSenderId: "171149745944",
    appId: "1:171149745944:web:ccde1457140ea6e86e886d",
    measurementId: "G-S3R69B43GX"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}