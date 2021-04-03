import { Styles } from "./styles";
import { Flex, Grid } from "../../../UI_Components/Box/styles";
import { Paragraph, Header5, Span } from "../../../UI_Components/Fonts/styles";
import { ArrowDownIcon, TransferIcon } from "../../../assest/svg";
import { InputStyles } from "../../../UI_Components/Input/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import { generateID } from "../../../../lib/generateID";
import Alert from "../../../UI_Components/Alert";

const Transfer = () => {
  const [accountVerified, setAccountVerified] = useState(false);
  const [status, setStatus] = useState(false);

  const [banks, setBanks] = useState([]);

  const [state, setState] = useState({
    accountnumber: "",
    bank: "",
    amount: "",
  });

  const getBanks = async () => {
    const data = await axios.get("http://localhost:3001/banks");
    // console.log(data.data.data);
    return setBanks(data.data.data);
  };

  const verify = async () => {
    const data = await axios.post("http://localhost:3001/verify_account", {
      account_number: state.accountnumber,
      account_bank: state.bank,
      // account_number: "0690000032",
      // account_bank: "044",
    });
    console.log(data.data);
    return data.data.status === "success"
      ? (setStatus("Account verified"), setAccountVerified(true))
      : null;

    // : null;
  };

  const transfer = async () => {
    const data = await axios.post("http://localhost:3001/make_transfer", {
      account_number: state.accountnumber,
      account_bank: state.bank,
      amount: 5500,
    });
    // console.log(data.data);
    return data.data.status === "success" && setStatus("Transfer sccuessful");
  };

  useEffect(() => {
    getBanks();
  }, []);

  return (
    <Styles>
      <Flex justify="flex-start">
        <Flex margin="0 0 30px 0" justify="flex-start" warning>
          <Flex margin="0 0 30px 0" justify="flex-start">
            <Header5 colorTheme="grey[500]" spacing=".4rem" bold>
              Transfer
            </Header5>
          </Flex>
          <Paragraph colorTheme="grey[400]" spacing=".025rem" lineHeight="25px">
            Transfers on this platform can be either directly, ie to another
            account user, or to the bank. Just fill in the form and you are good
            to go.
          </Paragraph>
        </Flex>

        {accountVerified ? (
          <Alert type="success" duration="4000">
            <Span>{status}</Span>
          </Alert>
        ) : null}

        <form>
          <Grid className="input-container" gap="18px">
            {!accountVerified ? (
              <Flex className="input-wrap" justify="space-between">
                <label htmlFor="bank">Select Bank</label>
                <InputStyles>
                  <select
                    as="select"
                    name="bank"
                    id="bank"
                    value={state.bank}
                    onChange={(e) => {
                      setState((prev) => ({
                        ...prev,
                        bank: e.target.value,
                      }));
                    }}
                    onKeyUp={verify}
                  >
                    <option defaultValue="">Select</option>
                    {banks ? (
                      banks.map(({ name, code }) => (
                        <option value={code} key={generateID(16)}>
                          {name}
                        </option>
                      ))
                    ) : (
                      <option value="">loading ...</option>
                    )}
                  </select>
                  <ArrowDownIcon width="15px" height="15px" color="#b2aabd" />
                  {/* <div name="bank" component="div" /> */}
                </InputStyles>
              </Flex>
            ) : null}

            {!accountVerified ? (
              <Flex className="input-wrap" justify="space-between">
                <label htmlFor="accountnumber">Recepient Account </label>
                <InputStyles>
                  <input
                    type="number"
                    name="accountnumber"
                    id="accountnumber"
                    placeholder="Account Number"
                    required
                    value={state.accountnumber}
                    onChange={(e) => {
                      setState((prev) => ({
                        ...prev,
                        accountnumber: e.target.value.trim(),
                      }));
                    }}
                    onKeyUp={verify}
                  />
                  {/* <div ng-message="min || max">Incorret account number</div> */}
                </InputStyles>
              </Flex>
            ) : null}

            {accountVerified === true ? (
              <Flex className="input-wrap" justify="space-between">
                <label htmlFor="cardnumber">Amount</label>
                <InputStyles>
                  <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    min="100"
                    max="10000000"
                    id="cardnumber"
                    value={state.amount}
                    onChange={(e) => {
                      setState((prev) => ({
                        ...prev,
                        amount: parseInt(e.target.value.trim()),
                      }));
                    }}
                    onKeyUp={verify}
                  />
                  {/* <div name="amount" component="div" /> */}
                  {/* <div ng-message="min || max">
                    please enter in between 0.1 to 30.
                  </div> */}
                </InputStyles>
              </Flex>
            ) : null}

            {/* ------------------button section-------------- */}
            {accountVerified === true &&
            state.amount >= 100 &&
            state.amount <= 10000000 ? (
              <Flex className="btn" justify="flex-end" margin="23px 0 0 0">
                <button
                  type="submit"
                  padding="15px 30px"
                  onClick={() => transfer()}
                >
                  <Flex>
                    <Span
                      lineHeight="15px"
                      color={"#fff"}
                      className="drawerText"
                    >
                      Transfer
                    </Span>

                    <Span lineHeight="15px" colorTheme={"white"}>
                      <TransferIcon width="20px" height="20px" />
                    </Span>
                  </Flex>
                </button>
              </Flex>
            ) : null}
          </Grid>
        </form>
      </Flex>
    </Styles>
  );
};

export default Transfer;
