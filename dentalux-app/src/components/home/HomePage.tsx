import "./HomePage.css";

import toothIcon from "../../assets/icons/tooth.svg";
import cleanToothIcon from "../../assets/icons/clean-tooth.svg";
import labIcon from "../../assets/icons/lab.svg";
import knifeIcon from "../../assets/icons/knife.svg";
import implantIcon from "../../assets/icons/implant.svg";
import stethoscopeIcon from "../../assets/icons/stethoscope.svg";

interface Service {
  color: string;
  icon: string;
  label: string;
  name: string;
}

const SERVICES: Service[] = [
  {
    color: 'purple',
    icon: stethoscopeIcon,
    label: "Agende sua",
    name: "Consulta",
  },
  {
    color: 'purple',
    icon: labIcon,
    label: "Agende seus",
    name: "Exames",
  },
  {
    color: 'purple',
    icon: knifeIcon,
    label: "Agende sua",
    name: "Cirurgia",
  },
  {
    color: 'blue',
    icon: toothIcon,
    label: "Agende sua avaliação",
    name: "Odontológica",
  },
  {
    color: 'blue',
    icon: cleanToothIcon,
    label: "Agende seu",
    name: "Clareamento",
  },
  {
    color: 'blue',
    icon: implantIcon,
    label: "Agende seu",
    name: "Implante",
  },
];

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <h1 className="main-title">
          Seu <strong className="emp">sorriso</strong> merece cuidado de verdade{" "}
          <span className="emp-dot">.</span>
        </h1>
        <p className="slogan">
          Atendimento humanizado, tecnologia de ponta e um ambiente pensado para
          o seu conforto.
        </p>
        <div className="hero-nav">
          <button className="redirect-services">Ver especialidades</button>
          <button className="schedule">Agende sua consulta</button>
        </div>
      </section>

      <section id="services">
        <h1 className="services-title">Nossos Serviços: </h1>
        <div className="services-container">
          {SERVICES.map((service) => {
            return (
              <div className={`service ${service.color}`}>
                <img src={service.icon} alt="Service Icon" />
                <h5 className="label">Agende sua</h5>
                <h4 className="service-name">Consulta</h4>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
