import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <h1 className="main-title">
          Seu <strong className="emp">sorriso</strong> merece cuidado de verdade <span className="emp-dot">.</span>
        </h1>
        <p className="slogan">Atendimento humanizado, tecnologia de ponta e um ambiente pensado para o seu conforto.</p>
        <div className="hero-nav">
          <button className="redirect-services">Ver especialidades</button>
          <button className="schedule">Agende sua consulta</button>
        </div>
      </section>
    </>
  )
}