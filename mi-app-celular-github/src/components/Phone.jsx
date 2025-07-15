import './Phone.css';
import {EducationalContent_Nivel_1} from '../levels/Nivel1';
import 'bootstrap/dist/css/bootstrap.min.css';

function Phone({ children, feedbackColorClass }) {
  return (
    <div className="phone">
      <div className={`screen d-flex flex-column justify-content-between ${feedbackColorClass}`}>
        {children}

        <div className="alert alert-info mt-auto">
          <EducationalContent_Nivel_1 />
        </div>
      </div>
    </div>
  );
}


function ErrorJuego({ children }) {
  return (
    <div className="phone">
      <div className="screen">
        {children}
      </div>
    </div>
  );
}

export default Phone; ErrorJuego;
