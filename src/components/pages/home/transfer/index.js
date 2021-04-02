import { Styles } from "./styles";
import { Flex, Grid } from "../../../UI_Components/Box/styles";
import { Paragraph, Header5, Span } from "../../../UI_Components/Fonts/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ArrowDownIcon, TransferIcon } from "../../../assest/svg";
import { InputStyles } from "../../../UI_Components/Input/styles";
// import { useState } from "react";

const Transfer = () => {
  // const [amount] = useState(false);

  const validationSchema = yup.object().shape({
    amount: yup.number().required("Provide an amount"),
    accountnumber: yup.number().min(2).required("Provide valid account number"),
    bank: yup.string().min(2).required("Provide valid bank name"),
  });
  return (
    <Styles>
      <Flex justify="flex-start">
        <Flex margin="0 0 30px 0" justify="flex-start" warning>
          <Flex margin="0 0 30px 0" justify="flex-start">
            <Header5 colorTheme="grey[500]" spacing=".4rem" bold>
              Transfers
            </Header5>
          </Flex>
          <Paragraph colorTheme="grey[400]" spacing=".025rem" lineHeight="25px">
            Transfers on this platform can be either directly, ie to another
            account user, or to the bank. Just fill in the form and you are good
            to go.
          </Paragraph>
        </Flex>

        <Formik
          initialValues={{
            amount: "",
            accountnumber: "",
            bank: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async () => []}
        >
          {({ handleChange, values: { accountnumber, bank, amount } }) => (
            <Form>
              <Grid className="input-container" gap="18px">
                <Flex className="input-wrap" justify="space-between">
                  <label htmlFor="bank">Select Bank</label>
                  <InputStyles>
                    <Field as="select" name="bank" id="bank" value={bank}>
                      <option defaultValue="">Select</option>
                      <option value="Access Bank Plc">Access Bank Plc</option>
                      <option value="Fidelity Bank Plc">
                        Fidelity Bank Plc
                      </option>
                      <option value="First City Monument Bank Limited">
                        First City Monument Bank Limited
                      </option>
                      <option value="First Bank of Nigeria Limited">
                        First Bank of Nigeria Limited
                      </option>
                      <option value="Guaranty Trust Bank Plc">
                        Guaranty Trust Bank Plc
                      </option>
                      <option value="Union Bank of Nigeria Plc">
                        Union Bank of Nigeria Plc
                      </option>
                      <option value="United Bank for Africa Plc">
                        United Bank for Africa Plc
                      </option>
                      <option value="Zenith Bank Plc">Zenith Bank Plc</option>
                    </Field>
                    <ArrowDownIcon
                      width="15px"
                      height="15px"
                      color=" #b2aabd"
                    />
                    <ErrorMessage name="bank" component="div" />
                  </InputStyles>
                </Flex>

                <Flex className="input-wrap" justify="space-between">
                  <label htmlFor="accountnumber">Recepient Account </label>
                  <InputStyles>
                    <Field
                      type="text"
                      name="accountnumber"
                      id="accountnumber"
                      placeholder="Account Number"
                      value={accountnumber}
                    />
                    <ErrorMessage name="accountnumber" component="div" />
                  </InputStyles>
                </Flex>

                {amount === true ? (
                  <Flex className="input-wrap" justify="space-between">
                    <label htmlFor="cardnumber">Amount</label>
                    <InputStyles>
                      <Field
                        type="text"
                        name="amount"
                        placeholder="Amount"
                        id="cardnumber"
                        value={amount}
                      />
                      <ErrorMessage name="amount" component="div" />
                    </InputStyles>
                  </Flex>
                ) : null}

                {/* ------------------button section-------------- */}
                <Flex className="btn" justify="flex-end" margin="23px 0 0 0">
                  <button type="submit" padding="15px 30px" onClick={() => []}>
                    <Flex>
                      <Span
                        lineHeight="15px"
                        color={"#fff"}
                        className="drawerText"
                      >
                        Transfer
                      </Span>

                      <Span lineHeight="15px" color={"#fff"}>
                        <TransferIcon width="20px" height="20px" />
                      </Span>
                    </Flex>
                  </button>
                </Flex>
              </Grid>
            </Form>
          )}
        </Formik>
      </Flex>
    </Styles>
  );
};

export default Transfer;
