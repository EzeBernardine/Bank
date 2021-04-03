import { Styles } from "./styles";
import { Flex, Frame, Grid } from "../../../UI_Components/Box/styles";
import { Header5, Span } from "../../../UI_Components/Fonts/styles";
import { CityIcon, LocationIcon, PhoneIcon } from "../../../assest/svg";
import Avatar from "../../../../components/assest/black.png";

const ProfileCard = () => {
  return (
    <Styles className="App">
      <Flex className="profile-card">
        <Flex className="image-section">
          <Frame height="120px" width="120px" className="image">
            <img src={Avatar} alt="" />
          </Frame>
        </Flex>

        <Flex margin="0" direction="column" className="name-section">
          <Header5 colorTheme="black" bold>
            Anonoymous
          </Header5>

          <Header5 colorTheme="primary/default"> Obinnna</Header5>
        </Flex>

        <Flex direction="column" className="location-details">
          <Grid direction="column" gap="0">
            <Flex
              justify="flex-start"
              margin="10px 0"
              align="baseline"
              flexWrap="nowrap"
            >
              <Flex width="1px" minWidth="15px">
                <CityIcon width="15px" height="15px"  />
              </Flex>
              <Span colorTheme="primary/dark" align="start">
                city
              </Span>
            </Flex>

            <Flex
              justify="flex-start"
              margin="10px 0"
              align="baseline"
              flexWrap="nowrap"
            >
              <Flex width="1px" minWidth="15px">
                <PhoneIcon width="15px" height="15px" />
              </Flex>
              <Span colorTheme="primary/dark" align="start">
                08000000000
              </Span>
            </Flex>

            <Flex
              justify="flex-start"
              margin="10px 0"
              align="baseline"
              flexWrap="nowrap"
            >
              <Flex width="16px" minWidth="16px">
                <LocationIcon width="16px" height="16px"  />
              </Flex>
              <Span colorTheme="primary/dark" align="start">
                Address
              </Span>
            </Flex>
          </Grid>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default ProfileCard;
