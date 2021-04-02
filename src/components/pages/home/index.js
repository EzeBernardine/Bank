import { Styles, Section, Nav, TransactionDate } from "./styles";
import { Flex } from "../../UI_Components/Box/styles";
import { Span } from "../../UI_Components/Fonts/styles";
// import Alert from "../../UI_Components/Alert";
import Transfer from "./transfer";
import Transactions from "./transactions";
import Header from "../../UI_Components/Header";
import { useRef } from "react";
import BalanceCard from "./Card";

const Home = () => {
  const transfer = useRef(null);
  const transactions = useRef(null);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <Styles className="App">
      <Header />

      {/* <Flex margin="70px auto " width="80%">
        <Alert
          type="success"
          // duration="7000"
        >
          <Span>
            Welcome to this platform, hope you do have a great banking
            experience.
          </Span>
        </Alert>
      </Flex> */}

      <Section>
        <Flex align="flex-start">
          <Nav>
            <ul>
              <li onClick={() => scrollToRef(transfer)}>Transfer</li>
              <li onClick={() => scrollToRef(transactions)}>Transactions</li>
            </ul>
          </Nav>

          <Flex width="80%" padding="xlarge">
            <TransactionDate>
              <Flex justify="flex-start" margin="0 0 70px 0">
                <BalanceCard />

                <Flex
                  justify="space-between"
                  minWidth="max-content"
                  maxWidth="400px"
                  className="transaction-dates"
                  margin="0 0 0 30px"
                >
                  <Flex
                    flexDir="column"
                    align="flex-start"
                    width="calc( 50% - 25px)"
                    miWidth="max-content"
                  >
                    <Span color="#5b5551">Last Transfer</Span>
                    <Span color="#5b5551">Last Deposit</Span>
                    <Span color="#5b5551">Last Withdrawal</Span>
                  </Flex>
                  <Flex
                    flexDir="column"
                    align="flex-start"
                    width="calc( 50% - 25px)"
                    margin="0 0 0 15px"
                  >
                    <Span color="#5b5551"> 1-12-2021</Span>
                    <Span color="#5b5551"> 1-12-2021</Span>
                    <Span color="#5b5551"> 000000000</Span>
                  </Flex>
                </Flex>
              </Flex>
            </TransactionDate>

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
