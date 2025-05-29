import "./index.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Dog from "../assets/cute-dog.jpg";
import Bowl from "../assets/svg/bowl-red.svg";
import Footer from "../components/Footer/Footer";
import dogTitle from "../assets/PNG/dogTitle.png";
import dogTitle1 from "../assets/PNG/dogTitle1.png";
import Contact from "../components/Contact/Contact";


import dog1 from "../assets/dog1.jpg";
import dog2 from "../assets/dog2.jpg"
import dog3 from "../assets/dog3.jpg";
import dog4 from "../assets/dog4.jpg";


function HomePage() {
  return (
    <>
      <Header />
      <Banner />

      <main className="container">
        <section className="content">
          <img src={Dog} alt="Cachorro fofo" className="image" />
          <div className="text">
            <div className="bowl-wrapper">
              <img
                className="bowl-image"
                src={Bowl}
                alt="Uma vasilha vermelha com ração de cachorro"
              />
            </div>
            <hr />
            <h1>Bem-vindo à 2Dogz!</h1>
            <p>
              Na 2Dogz, acreditamos que cada cão merece atenção, carinho e
              estímulos diários para viver com mais saúde e felicidade. Nossa
              creche foi criada para oferecer um ambiente seguro, divertido e
              educativo, onde os cães podem socializar, brincar e aprender ao
              lado de profissionais apaixonados pelo bem-estar animal. Com
              estrutura completa e uma rotina planejada, proporcionamos
              experiências enriquecedoras que contribuem para o equilíbrio
              físico, emocional e comportamental dos nossos hóspedes de quatro
              patas.
            </p>
            <hr className="bottom-line" />
          </div>
        </section>
      </main>

      <div className="services">
        <div className="services-text">
         <div className="services-title-wrapper">
          <img src= {dogTitle} alt="cachorro branco e peludo" />
          <h2 className="services-title">Nossos Serviços</h2>
           <img src= {dogTitle1} alt="cachorro branco e peludo" />
         </div>
          <p>
           Conheça todos os nossos serviços passando o mouse sobre as imagens!
          </p>
        </div>

       
        <div className="cards-container">
          <div className="card-container">

            <article
              className="card-article"
              style={{ backgroundImage: `url(${dog1})` }}
            >
              <div className="card-data">
                <span className="card-description">Espaço Gramado</span>
                <h2 className="card-title">Brincadeiras ao ar livre</h2>
                <a href="#" className="card-button">Saiba Mais</a>
              </div>
            </article>
             <article
              className="card-article"
              style={{ backgroundImage: `url(${dog3})` }}
            >
              <div className="card-data">
                <span className="card-description">Espaço Gramado</span>
                <h2 className="card-title">Brincadeiras ao ar livre</h2>
                <a href="#" className="card-button">Saiba Mais</a>
              </div>
            </article>

            <article
              className="card-article"
              style={{ backgroundImage: `url(${dog2})` }}
            >
              <div className="card-data">
                <span className="card-description">Área Interna</span>
                <h2 className="card-title">Conforto e Segurança</h2>
                <a href="#" className="card-button">Saiba Mais</a>
              </div>
            </article>

            <article
              className="card-article"
              style={{ backgroundImage: `url(${dog4})` }}
            >
              <div className="card-data">
                <span className="card-description">Banho & Tosa</span>
                <h2 className="card-title">Cuidado Especial</h2>
                <a href="#" className="card-button">Saiba Mais</a>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Contact/>
      <Footer />
    </>
  );
}

export default HomePage;
