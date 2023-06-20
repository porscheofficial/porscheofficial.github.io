import { HeroSection } from "../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../public/assets/heroImage2.png";
import { Text } from "../components/01_atoms/Text";

const NotFound: React.FC = () => {
  return (
    <>
      <HeroSection
        title="404"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />
      <Text theme="dark" size="middle" align="center">
        This page could not be found.
      </Text>
      <Text theme="dark" size="middle" align="center">
        We can only apologize for the 404. Our favorite is 911.
      </Text>
    </>
  );
};

export default NotFound;
