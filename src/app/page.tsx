import { HeroSection } from "../components/03_organisms/heroSection/HeroSection";
import s from "./page.module.scss";
import heroImg from "../assets/heroImage.png";

const Home: React.FC = () => {
  return (
    <main className={s.main}>
      <HeroSection
        title="Porsche Open Source Platform"
        subtitle="FOSS@Porsche"
        imageSrc={heroImg}
        imageAlt="AI generated 911"
      />
    </main>
  );
};

export default Home;
