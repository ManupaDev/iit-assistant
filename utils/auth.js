// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaIcZltl8-BruDNVFbj1t6y_dfqYjeJu0",
  authDomain: "iit-assistant.firebaseapp.com",
  projectId: "iit-assistant",
  storageBucket: "iit-assistant.appspot.com",
  messagingSenderId: "228118001297",
  appId: "1:228118001297:web:984b44dfc1e215ddb07130",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//*User SignUp Utility
export const SignUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};
