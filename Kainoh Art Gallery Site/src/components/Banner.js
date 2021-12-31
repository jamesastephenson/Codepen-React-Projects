import "../styles/Banner.css";
import KaiBanner from "../images/kai-banner.jpg";

// static banner component
export default function Banner() {
  return (
    <div className="Banner">
      <div className="BannerText">
        <h2>@Cainomura</h2>
      </div>
      <img src={KaiBanner} alt="banner" />
    </div>
  );
}
