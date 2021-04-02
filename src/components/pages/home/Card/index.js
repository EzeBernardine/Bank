import { Styles } from "./styles";
import { Flex, Frame } from "../../../UI_Components/Box/styles";
import { Small, Bold, Header4 } from "../../../UI_Components/Fonts/styles";
import Image from "../../../assest/Icon awesome-sim-card.png";
import Image2 from "../../../assest/Group 810.png";
const Card = () => {
  return (
    <Styles className="App">
      <Flex className="balance" align="flex-start" maxWidth="350px">
        <Flex justify="space-between">
          <Flex width="max-content">
            <Bold colorTheme="primary/dark">Wallet: </Bold>
            <Flex width="max-content" margin="0 0 0 10px">
              <Small colorTheme="grey[300]"> Virtal Card</Small>
            </Flex>
          </Flex>
        </Flex>

        <Flex margin="10px 0 0 0" justify="flex-start" className="amount">
          <Frame width="35px" height="25px">
            <img src={Image} alt="icon" />
          </Frame>
          <Flex margin="0px 0 0 10px" width=" max-content" className="amount">
            <Header4 size="18px" colorTheme="primary/dark" bold>
              &#8358;10000
            </Header4>
          </Flex>
        </Flex>

        <Flex margin="5px 0 0 0" justify="space-between">
          <Header4 colorTheme="primary/dark">0000</Header4>
          <Header4 colorTheme="primary/dark">0000</Header4>
          <Header4 colorTheme="primary/dark">0000</Header4>
          <Header4 colorTheme="primary/dark">0000</Header4>
        </Flex>

        <Flex margin="10px 0 0 0" justify="flex-start">
          <Flex margin="0px 0 0 0" width=" max-content" className="amount">
            <Small colorTheme="primary/dark"> 12/12</Small>
          </Flex>
          <Flex margin="0px 0 0 50px" width=" max-content" className="amount">
            <Small colorTheme="primary/dark"> 16/14</Small>
          </Flex>
        </Flex>

        <Flex margin="10px 0 0 0" justify="space-between">
          <Flex margin="0px 0 0 0" width=" max-content" className="amount">
            <Bold colorTheme="primary/dark">Anonymous</Bold>
          </Flex>
          <Frame width="80px" height="40px" object="contain">
            <img src={Image2} alt="icon" />
          </Frame>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Card;
