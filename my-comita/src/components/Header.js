// import './scss/style.scss';
import '../scss/variables.scss';
import '../scss/style.scss'

import logo from '../img/comita-logo.svg';

function App() {
  return (
    <>
      <div className="header__logo">
        <a href="/"><img src={logo} alt="Комита" /></a>
      </div>
      <div className="header__badge badge">
        <div className="badge__text-block">
          <div className="badge__name">Раскольников Д.С.</div>
          <div className="badge__post">Менеджер организации</div>
        </div>
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.647 1.1684L6.95327 6.83691L1.28476 1.1684"
            stroke="#8B77EF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </>
  );
}

export default App;
