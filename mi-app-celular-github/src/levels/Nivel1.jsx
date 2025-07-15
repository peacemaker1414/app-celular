import AppIcon from '../components/AppIcon';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ChallengeDescription_Nivel_1({ onNivelCompletado }) {
    const renderContenido = () => {
        
        return (
            <div className="text-center">
                <h3>Conexión al WiFi</h3>
                <p>Conectémonos a la red WiFi correcta, <br></br> nos indicaron que la red se llama "MiCasa" y la contraseña es "12345".</p>
            </div>
        );
    }
    return renderContenido();
}

function EducationalContent_Nivel_1 ({ onNivelCompletado }) {
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

function GameFlow_Nivel_1({ onNivelCompletado, setFeedbackColor }) {
  const [pantalla, setPantalla] = useState('inicio');
  const [wifiSeleccionada, setWifiSeleccionada] = useState(null);
  const [password, setPassword] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [mensajesOk, setMensajeOk] = useState('');
  const [wifiActivo, setWifiActivo] = useState(false); // true = visible, false = oculto
 
  useEffect(() => {
    if (pantalla === 'ajustes' || pantalla === 'wifi') {
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
          <div className="d-flex justify-content-center gap-3">
            <AppIcon 
                label="WiFi" 
                onClick={() =>{
                 setPantalla('wifi');
                }} />
            <AppIcon label="Pantalla" onClick={MostrarAppSelectedError} />
            <AppIcon label="Sonido" onClick={MostrarAppSelectedError} />
            </div>
            {mensajesOk && <div className="alert alert-success">{mensajesOk}</div>}
            {mensajeError && <div className="alert alert-danger">{mensajeError}</div>}
          </>
          
        );
      case 'wifi':
        return (
          <>
          <div className="container">
          <li className="list-group-item fs-bold">Redes WiFi disponibles</li>
          <button 
            className={`btn ${wifiActivo ? 'btn-danger' : 'btn-success'}`}
            onClick={() => setWifiActivo(!wifiActivo)}
            >
            {wifiActivo ? 'Desactivar WiFi' : 'Activar WiFi'}
        </button>
        </div>
        {wifiActivo && (
          <ul className="list-group">
            <a className="list-group-item" onClick={() => {setWifiSeleccionada('MiCasa'); MostrarAppSelectedOk();}}>MiCasa</a>
            <a className="list-group-item" onClick={() => {setWifiSeleccionada('Vecino'); MostrarAppSelectedError();}}>Vecino</a>
            <a className="list-group-item" onClick={() => {setWifiSeleccionada('Libre'); MostrarAppSelectedError();}}>Libre</a>
          </ul>
        )}
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

export { GameFlow_Nivel_1, ChallengeDescription_Nivel_1, EducationalContent_Nivel_1 };
