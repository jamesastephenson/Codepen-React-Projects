import "./styles.css";
import KaiBanner from "./kai-banner.jpg";

export default function Banner() {
  return (
    <div className="Banner">
      <div className="BannerText">
        <h2>@Cainomura</h2>
      </div>
      <img src={KaiBanner} />
    </div>
  );
}
