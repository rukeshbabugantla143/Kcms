import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration from your project settings
const firebaseConfig = {
  apiKey: "AIzaSyDxrnU5JXlW5VlE0B80Ko-z7keUvOG6H80",
  authDomain: "kcms-30125.firebaseapp.com",
  projectId: "kcms-30125",
  storageBucket: "kcms-30125.appspot.com",
  messagingSenderId: "1067451722708",
  appId: "1:1067451722708:web:5ae892a26c7b28ee18c441",
  measurementId: "G-S5BP3KXQE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth for use in other components
export const auth = getAuth(app);

// Initialize and export analytics (optional, but good practice)
export const analytics = getAnalytics(app);
