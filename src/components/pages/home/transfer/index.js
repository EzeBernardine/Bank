import { Styles, Waiting } from "./styles";
import { Flex, Grid } from "../../../UI_Components/Box/styles";
import { Paragraph, Header5, Span } from "../../../UI_Components/Fonts/styles";
import { ArrowDownIcon, TransferIcon } from "../../../assest/svg";
import { InputStyles } from "../../../UI_Components/Input/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import { generateID } from "../../../../lib/generateID";
import Alert from "../../../UI_Components/Alert";
import { theme } from "../../../../config/theme";
import Bubbles from "../../../UI_Components/Bubbles";
import Loader from "../../../UI_Components/Loader";
import url from "../../../../config/baseURL";

const Transfer = () => {
  //hold the list of banks
  const [banks, setBanks] = useState([]);
  //Manage if users account is verified
  const [accountVerified, setAccountVerified] = useState(undefined);
  //manageloading period
  const [loading, setLoading] = useState(undefined);
  //manage all alerts
  const [alert, setAlert] = useState([]);
  //manage duration immediatly after typing
  const [waiting, setWaiting] = useState(false);
  //manage account details
  const [state, setState] = useState({
    accountnumber: "",
    bank: "",
    amount: "",
  });

  // handle all verified accounts
  const verifiedAccount = (data) => {
    // Call the alert component and return the details of the account
    setAlert([
      `success`,
      `Account Verified.`,
      `Recipent name: ${data.data.data.account_name}.`,
      `Recipient account number: ${data.data.data.account_number}`,
    ]);
    // sets verify state to true, thereby hidding the account number field and bank select form. this will display the amount field
    setAccountVerified(true);
    return setWaiting(false);
  };

  // handle all unverified accounts
  const unVerifiedAccount = (data) => {
    // set a warning if account number or bank nameis wrong
    setAlert([`error`, `${data.data.message}`]);
    return setWaiting(false);
  };

  // verify if users detail is coorrect
  const verify = async () => {
    const data = await axios.post(`${url}verify_account`, {
      account_number: state.accountnumber,
      account_bank: state.bank,
    });
    return data.data.status === "success"
      ? verifiedAccount(data)
      : unVerifiedAccount(data);
  };

  // check if user is typing
  const stopTyping = () => {
    if (state.bank.length > 0 && state.accountnumber.length === 10) {
      // call the waiting period
      setWaiting(true);
      //check if account details is verified
      return verify();
    } else {
      setAlert([]); //clear all alert
    }
  };

  // check when user stops typing
  const startTyping = () => setAlert([]); //clear all alert

  // handle all successfull transfers
  const transferSuccessful = () => {
    // Call the alert component and return a success transfer
    setAlert([`success`, `Transfer successful`]);
    // sets verify state to false. this will return the original fields that where visile.
    setAccountVerified(false);
    // reset loading state
    setLoading(false);
    return setState({
      // reset  form
      accountnumber: "",
      bank: "",
      amount: "",
    });
  };

  // handle all unsuccessful transfers
  const transferUnSuccessful = (data) => {
    // return error message if the transfer was not successful
    return setAlert([`error`, `${data.data.message}`]);
  };

  // handle transfers
  const transfer = async (e) => {
    e.preventDefault();
    const data = await axios.post(`${url}make_transfer`, {
      account_number: state.accountnumber,
      account_bank: state.bank,
      amount: state.amount,
    });
    return data.data.status === "success"
      ? transferSuccessful()
      : transferUnSuccessful(data);
  };

  useEffect(() => {
    const getBanks = async () => {
      const data = await axios.get(`${url}banks`);
      let banksrray = data.data.data;

      banksrray.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      });

      return setBanks(banksrray);
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

          <Bubbles
            up={-60}
            end={20}
            center={-60}
            down={-10}
            thickness={[8, 5, 80, 50]} // [UP, END, CENTER, DOWN]
          >
            <Paragraph
              colorTheme="grey[400]"
              spacing=".025rem"
              lineHeight="25px"
            >
              Transfers on this platform cannot be reversed.
            </Paragraph>
          </Bubbles>

          <Flex margin="30px 0 -30px">
            <Alert type={"warning"}>
              <Span size="14px">
                For the meantime, do select{" "}
                <Span size="14px" weight="600">
                  access bank
                </Span>{" "}
                as the reciepient bank, and{" "}
                <Span size="14px" weight="600">
                  0690000032
                </Span>{" "}
                for account number. We will do well to make it dynamic in our
                next release.
              </Span>
            </Alert>
          </Flex>
        </Flex>

        {alert.length > 0 ? (
          <Alert
            type={alert[0]}
            duration={alert[0] === "error" ? false : 10000}
          >
            <Span> {alert[1]}</Span>

            {alert.length > 2 ? (
              <Flex direction="column" align="flex-start">
                {alert.map((item, index) => {
                  return (
                    !(index === 0 || index === 1) && (
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
                      stopTyping();
                    }}
                  >
                    <option defaultValue="">Select</option>
                    {banks.length > 0 ? (
                      banks.map(({ name, code }) => (
                        <option value={code} key={generateID(16)}>
                          {name}
                        </option>
                      ))
                    ) : (
                      <option value="">Loading ...</option>
                    )}
                  </select>
                  <ArrowDownIcon width="15px" height="15px" color="#b2aabd" />
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
                        accountnumber: e.target.value.trim().slice(0, 10),
                      }));
                    }}
                    onKeyUp={stopTyping}
                    onKeyPress={startTyping}
                  />

                  {waiting ? (
                    <Waiting>
                      <Loader />
                    </Waiting>
                  ) : null}
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
                  />

                  {state.amount && state.amount < 100 ? (
                    <div>Amount is too small</div>
                  ) : state.amount > 10000000 ? (
                    <div>Amount is too big</div>
                  ) : null}
                </InputStyles>
              </Flex>
            ) : null}

            {/* ------------------button section-------------- */}
            {accountVerified ? (
              <Flex className="btn" justify="flex-end" margin="23px 0 0 0">
                <button
                  type="submit"
                  padding="15px 30px"
                  disabled={
                    loading ||
                    !(state.amount >= 100 && state.amount <= 10000000)
                  }
                  style={{
                    background: `${
                      loading ||
                      !(state.amount >= 100 && state.amount <= 10000000)
                        ? theme.palette.grey[100]
                        : theme.palette.primary.default
                    }`,
                    color: `${
                      loading ||
                      !(state.amount >= 100 && state.amount <= 10000000)
                        ? theme.palette.grey[200]
                        : theme.palette.common.white
                    }`,
                    cursor: `${
                      loading ||
                      !(state.amount >= 100 && state.amount <= 10000000)
                        ? "not-allowed"
                        : "pointer"
                    }`,
                  }}
                  onClick={(e) => {
                    transfer(e);
                    setLoading(true);
                  }}
                >
                  {loading ? (
                    <Span
                      lineHeight="15px"
                      color={"#fff"}
                      className="drawerText"
                    >
                      Loading...
                    </Span>
                  ) : (
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
                  )}
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
