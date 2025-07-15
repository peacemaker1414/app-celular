import AppIcon from '../components/AppIcon';
import { useState, useEffect } from 'react';

function ChallengeDescription_Nivel_2({ onNivelCompletado }) {
    const renderContenido = () => {
        
        return (
            <div className="text-center">
                <h3>Cambiar el tamaño de la letra</h3>
                <p>Cambiemos el tamaño de la fuente (fuente = letra) <br></br> ¿A qué pantalla debemos ir?.</p>
            </div>
        );
    }
    return renderContenido();
}

function EducationalContent_Nivel_2 ({ onNivelCompletado }) {
    const renderContenido = () => {
        return (
                <p class="text">
                Conectarnos al Wi-Fi nos da acceso a Internet,
                esto nos permite hacer comunicarnos, usar redes sociales
                y navegar en la web sin gastar nuestros datos móviles.</p>
        );
    }
    return renderContenido();
}

function GameFlow_Nivel_2({ onNivelCompletado, setFeedbackColor }) {
  const [pantalla, setPantalla] = useState('inicio');
  const [wifiSeleccionada, setWifiSeleccionada] = useState(null);
  const [password, setPassword] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [mensajesOk, setMensajeOk] = useState('');
  const [wifiActivo, setWifiActivo] = useState(false); // true = visible, false = oculto
 
  useEffect(() => {
    if (pantalla === 'ajustes' || pantalla === 'pantalla') {
        setMensajeError('');
        MostrarAppSelectedOk();
    }
    }, [pantalla]);

  useEffect(() => {
    if (pantalla === 'wifi' && wifiSeleccionada === 'MiCasa') {
      setPantalla('password');
    }
  }, [pantalla, wifiSeleccionada]);

  const MostrarAppSelectedError = () => {
    const mensajesError = [
      'Esa no es la app correcta.',
      'Probá con otra app.',
      '¿Y si probás con otra?',
    ];
    setFeedbackColor('bg-incorrect');
    setTimeout(() => setFeedbackColor(''), 2500);
    const random = Math.floor(Math.random() * mensajesError.length);
    setMensajeError(mensajesError[random]);
    setTimeout(() => setMensajeError(''), 2500);
    
  };

  const MostrarAppSelectedOk = () => {
    const mensajesOk = [
      '¡Vas muy bien!',
      'Seguí así, tecnonauta.',
      '¡Excelente elección!',
    ];
    const random = Math.floor(Math.random() * mensajesOk.length);
    setFeedbackColor('bg-correct');
    setTimeout(() => setFeedbackColor(''), 2500);
    setMensajeOk(mensajesOk[random])
    setTimeout(() => setMensajeOk(''), 2500);
  };
  

  const renderContenido = () => {
    switch (pantalla) {
      case 'inicio':
        return (

          <>
           <div className="d-flex justify-content-center gap-3">
            <AppIcon 
                label="Ajustes" 
                onClick={() => {
                  setPantalla('ajustes'); 
                  
                }} />
            <AppIcon 
                label="Fotos" 
                onClick={() => {
                    MostrarAppSelectedError();
                    
                }} />
            <AppIcon 
                label="Mapa"
                 onClick={() => {
                    MostrarAppSelectedError();
                    
                 }} />
            </div>
            
            {mensajeError && <div className="alert alert-danger">{mensajeError}</div>}

           
          </>
        );
      case 'ajustes':
        return (
          <>
          <div className="d-flex justify-content-center gap-1">
            <AppIcon 
                label="WiFi" 
                onClick={() =>{
                 MostrarAppSelectedError();
                }} />
            <AppIcon 
                label="Pantalla" 
                onClick={() => {
                    setPantalla('pantalla');
                }} />
            
            <AppIcon 
                label="Sonido" 
                onClick={() => {
                    MostrarAppSelectedError();
                }} />
            <AppIcon 
                label="Bluetooth" 
                onClick={() => {
                    MostrarAppSelectedError(); 
            }} />
            </div>
            {mensajesOk && <div className="alert alert-success">{mensajesOk}</div>}
            {mensajeError && <div className="alert alert-danger">{mensajeError}</div>}
          </>
        );
      case 'pantalla':
        return (
            <>
            <div className="d-flex justify-content-center gap-3">
          <AppIcon 
                label="Brillo" 
                onClick={() =>{
                 MostrarAppSelectedError();
                }} />
            <AppIcon 
                label="Tamaño del texto" 
                onClick={() => {
                    setPantalla('fuente');
                }} />
            
            <AppIcon 
                label="Tema" 
                onClick={() => {
                    MostrarAppSelectedError();
                }} />
            </div>
            {mensajesOk && <div className="alert alert-success">{mensajesOk}</div>}
            {mensajeError && <div className="alert alert-danger">{mensajeError}</div>}
          </>
          
        );
      case 'password':
        return (
          <div className="text-center">
            <p>Ingresá la contraseña para <strong>MiCasa</strong>:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
            <button
              className="btn btn-success mt-3"
              onClick={() => {
                if (password === '12345') {
                  onNivelCompletado();
                } else {
                  <div className="alert alert-danger"><p>Contraseña incorrecta</p></div>
                }
              }}
            >
              Conectar
            </button>
          </div>
        );
      default:
        return <p>Error</p>;
    }
    
  };

  return renderContenido();
}

export { GameFlow_Nivel_2, ChallengeDescription_Nivel_2, EducationalContent_Nivel_2 };
