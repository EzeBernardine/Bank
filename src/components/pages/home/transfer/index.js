import { Styles } from "./styles";
import { Flex, Grid } from "../../../UI_Components/Box/styles";
import { Paragraph, Header5, Span } from "../../../UI_Components/Fonts/styles";
import { ArrowDownIcon, TransferIcon } from "../../../assest/svg";
import { InputStyles } from "../../../UI_Components/Input/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import { generateID } from "../../../../lib/generateID";
import Alert from "../../../UI_Components/Alert";
import { theme } from "../../../../config/theme";

const Transfer = () => {
  const [accountVerified, setAccountVerified] = useState(false);
  const [alert, setAlert] = useState([]);
  // const [alert, setAlert] = useState({
  //   verify: false,
  //   transfered: false,
  // });

  const [banks, setBanks] = useState([]);
  const dev = process.env.NODE_ENV === "development";
  const url = dev
    ? "http://localhost:3001/"
    : "https://banktest-server-8080.herokuapp.com/";

  const [state, setState] = useState({
    accountnumber: "",
    bank: "",
    amount: "",
  });

  const verify = async () => {
    const data = await axios.post(`${url}verify_account`, {
      account_number: state.accountnumber,
      account_bank: state.bank,
      // account_number: "0690000032",
      // account_bank: "044",
    });

    console.log(data.data, "verifying");

    // Call the alert component and return the details of the account
    data.data.status === "success" &&
      setAlert([
        `Account Verified.`,
        ` Recipent name: ${data.data.data.account_name}.`,
        `  Recipient account number: ${data.data.data.account_number}`,
      ]);

    /**
     *  sets verify state to true, thereby hidding the account number and bank elect form.
     * this will display the amount field
     */
    return data.data.status === "success" && setAccountVerified(true);
  };

  const transfer = async (e) => {
    e.preventDefault();

    const data = await axios.post(`${url}make_transfer`, {
      account_number: state.accountnumber,
      account_bank: state.bank,
      amount: state.amount,
    });
    // clear the alert for a remount
    setAlert("");

    console.log(data.data, "transfering");

    // Call the alert component and return a success transsfer
    data.data.status === "success" && setAlert([`Transfer successful`]);

    /**
     *  sets verify state to false.
     * this will return the original fields that where visile.
     */
    return data.data.status === "success" && setAccountVerified(false);
  };

  useEffect(() => {
    const getBanks = async () => {
      const data = await axios.get(`${url}banks`);
      return setBanks(data.data.data);
    };

    getBanks();
  }, [url]);

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

        {alert.length > 0 ? (
          <Alert type="success" duration={10000}>
            <Span> {alert[0]}</Span>

            {alert.length > 1 ? (
              <Flex direction="column" align="flex-start">
                {alert.map((item, i) => {
                  return (
                    !(i === 0) && (
                      <Paragraph
                        weight="500"
                        key={generateID(13)}
                        style={{ color: `${theme.palette.grey[500]}` }}
                      >
                        {item}
                      </Paragraph>
                    )
                  );
                })}
              </Flex>
            ) : null}
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

            {accountVerified ? (
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
                </InputStyles>
              </Flex>
            ) : null}

            {/* ------------------button section-------------- */}
            {accountVerified &&
            state.amount >= 100 &&
            state.amount <= 10000000 ? (
              <Flex className="btn" justify="flex-end" margin="23px 0 0 0">
                <button
                  type="submit"
                  padding="15px 30px"
                  onClick={(e) => transfer(e)}
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
