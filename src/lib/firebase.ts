import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZkJVh8ayrD_adxkFCb151D1dNLuTwPJc",
  authDomain: "fir-auth-abda1.firebaseapp.com",
  projectId: "fir-auth-abda1",
  storageBucket: "fir-auth-abda1.firebasestorage.app",
  messagingSenderId: "515631717864",
  appId: "1:515631717864:web:a3a9e3259d07cd173f585d",
  measurementId: "G-G5PLK7ZSS6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

// Configure providers for better account selection
googleProvider.addScope('email');
googleProvider.addScope('profile');
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

githubProvider.addScope('user:email');
githubProvider.setCustomParameters({
  allow_signup: 'true'
});
