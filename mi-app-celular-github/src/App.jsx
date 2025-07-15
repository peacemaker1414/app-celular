import {GameFlow_Nivel_1, ChallengeDescription_Nivel_1 } from './levels/Nivel1';
import {GameFlow_Nivel_2, ChallengeDescription_Nivel_2 } from './levels/Nivel2';
import { useState, useEffect } from 'react';
import {default as Phone} from './components/Phone';



function App() {
  const [nivel, setNivel] = useState(1);
  const [feedbackColor, setFeedbackColor] = useState('');

  const avanzarNivel = () => {
    setNivel(nivel + 1);
    setFeedbackColor('');
  };

  const renderNivel = () => {
    switch (nivel) {
      case 1:
        return <GameFlow_Nivel_1 onNivelCompletado={avanzarNivel} setFeedbackColor={setFeedbackColor} />;
      case 2:
        return <GameFlow_Nivel_2 onNivelCompletado={avanzarNivel} setFeedbackColor={setFeedbackColor} />;
      default:
        return <p>¡Felicidades! Completaste todos los niveles.</p>;
    }
  };

  const getChallengeDescription = () => {
    switch (nivel) {
      case 1:
        return <ChallengeDescription_Nivel_1 />;
      case 2:
        return <ChallengeDescription_Nivel_2 />;
      default:
        return <p>¡Has completado todos los niveles!</p>;
    }
  };

  return (
    <>
      <div className="alert alert-warning text-center container-mb-3">
        <h1>Nivel {nivel}</h1>
        {getChallengeDescription()}
      </div>

      <Phone feedbackColorClass={feedbackColor}>
        {renderNivel()}
      </Phone>
    </>
  );
}


export default App;
