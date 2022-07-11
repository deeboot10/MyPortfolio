import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Who from "./components/Who";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0hKErGxY3Znkl6fythMQsHgTCCfijWb0",
  authDomain: "portfolio-193a1.firebaseapp.com",
  projectId: "portfolio-193a1",
  storageBucket: "portfolio-193a1.appspot.com",
  messagingSenderId: "527599476646",
  appId: "1:527599476646:web:9e7b20642b6dc9262ef967",
  measurementId: "G-433JYQKLRY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Who></Who>
      <Education></Education>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </>
  );
}

export default App;
