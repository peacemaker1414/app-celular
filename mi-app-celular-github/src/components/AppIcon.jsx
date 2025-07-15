import './AppIcon.css';
import  MapIcon from '../assets/map.svg';
import GearIcon from '../assets/gear.svg';
import CameraIcon  from '../assets/camera.svg';
import  SonidoIcon from '../assets/sound.svg';
import PantallaIcon from '../assets/sun-screen.svg';
import WifiIcon  from '../assets/wifi.svg';
import BluetoothIcon  from '../assets/bluetooth.svg';

function AppIcon({ label, onClick }) {
  const getIcon = () => {
    switch(label) {
      case 'Mapa':
        return <img src={MapIcon}  alt= "Mapa" className="app-svg" />; //
      case 'Fotos':
        return <img src={CameraIcon} alt="Cámara"  className="app-svg" />; 
      case 'Ajustes':
        return <img src={GearIcon} alt="Ajustes" className="app-svg" />;
        case 'WiFi':
        return <img src={WifiIcon}  alt= "Wifi" className="app-svg" />; //
      case 'Sonido':
        return <img src={SonidoIcon} alt="Sonido"  className="app-svg" />; 
      case 'Pantalla':
        return <img src={PantallaIcon} alt="Pantalla" className="app-svg" />;
      case 'Bluetooth':
        return <img src={BluetoothIcon} alt="Bluetooth" className="app-svg" />;
      default:
        return <span>📱</span>;
    }
  };
  return (
    <div className="app-icon" onClick={onClick}>
      {getIcon()}
      <span class="app-nombre">{label}</span>
    </div>
  );
}


export default AppIcon;
