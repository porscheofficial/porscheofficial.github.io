import { PText } from "@porsche-design-system/components-react/ssr";
import { HeroSection } from "../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../public/assets/heroImage2.png";

const NotFound: React.FC = () => {
  return (
    <>
      <HeroSection
        title="404"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />
      <PText theme="dark" size="medium" align="center">
        This page could not be found.
      </PText>
      <PText theme="dark" size="medium" align="center">
        We can only apologize for the 404. Our favorite is 911.
      </PText>
    </>
  );
};

export default NotFound;
