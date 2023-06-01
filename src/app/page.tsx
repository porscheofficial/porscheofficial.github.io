import { Heading } from "../components/01_atoms/Heading";
import s from "./page.module.scss";

const Home: React.FC = () => {
  return (
    <main className={s.main}>
      <Heading theme="dark">
        Coming soon
      </Heading>
    </main>
  );
};

export default Home;
