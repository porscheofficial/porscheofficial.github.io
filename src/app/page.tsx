import { HeroSection } from "../components/03_organisms/heroSection/HeroSection";
import s from "./page.module.scss";

const Home: React.FC = () => {
  return (
    <main className={s.main}>
      <HeroSection
        title="Porsche Open Source Platform"
        subtitle="FOSS@Porsche"
        imageSrc="../../public/assets/heroImage2.png"
        imageAlt="AI generated Porsche Taycan"
      />
    </main>
  );
};

export default Home;
