import "./index.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Dog from "../assets/cute-dog.jpg";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <main className="container">
        <section className="content">
          <img src={Dog} alt="Cachorro fofo" className="image" />
          <div className="text">
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
    </>
  );
}

export default HomePage;
