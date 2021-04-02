import { Styles, Section, Nav } from "./styles";
import { Flex, Frame, Grid } from "../../UI_Components/Box/styles";
import {
  Paragraph,
  Header5,
  Bold,
  Span,
} from "../../UI_Components/Fonts/styles";
import Alert from "../../UI_Components/Alert";
import Transfer from "./transfer";
import Transactions from "./transactions";
import Header from "../../UI_Components/Header";
import { useRef } from "react";

const Home = () => {
  const transfer = useRef(null);
  const transactions = useRef(null);

  const scrollToRef = (ref) => ref.current.scrollIntoView();

  return (
    <Styles className="App">
      <Header />

      <Flex margin="30px  auto 0" width="80%">
        <Alert type="success">
          <Span>
            Welcome to this platform, hope you do have a great banking
            experience.
          </Span>
        </Alert>
      </Flex>

      <Section>
        <Flex align="flex-start">
          <Nav>
            <ul>
              <li onClick={() => scrollToRef(transfer)}>Transfer</li>
              <li onClick={() => scrollToRef(transactions)}>Transactions</li>
            </ul>
          </Nav>

          <Flex width="80%" padding="xlarge">
            <Flex justify="flex-start" ref={transfer}>
              <Transfer />
            </Flex>

            <Flex ref={transactions}>
              <Transactions />
            </Flex>
          </Flex>
        </Flex>
      </Section>
    </Styles>
  );
};

export default Home;
