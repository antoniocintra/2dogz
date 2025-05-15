import "./index.css";
import bannerImage from '../../assets/bannerImage.jpg';

function Banner() {
  return (
     <div className="banner">
      <img
        src={bannerImage}
        alt="Banner da creche pet"
        className="banner-image"
      />
      <div className="banner-text">
        <h2>Seu pet merece o melhor cuidado!</h2>
        <p>Creche, hotel e muito carinho para seu amiguinho. 🐾💜</p>
        <button className="banner-button">Saiba Mais</button>
      </div>
    </div>
    

    

  );
}

export default Banner;
