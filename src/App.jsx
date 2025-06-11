import { useRef } from "react";
import GameTitle from "./components/GameTitle.jsx";
import WelcomeScreen from "./components/WelcomeScreen.jsx";


export default function App() {
  return (
    <>
      <GameTitle /> 
      <main>
        <WelcomeScreen />
      </main>
    </>
  );
}
