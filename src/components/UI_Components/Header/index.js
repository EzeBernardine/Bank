import { Styles } from "./styles";
import { Flex, Frame, Grid } from "../../UI_Components/Box/styles";
import Image from "../../assest/banking.png";

const Home = () => {
  return (
    <Styles>
      <Frame height="400px" width="100%">
        <img src={Image} alt="banking experience" />
      </Frame>
    </Styles>
  );
};

export default Home;
