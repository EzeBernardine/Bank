import { Styles } from "./styles";
import { Flex } from "../../../UI_Components/Box/styles";
import { Paragraph, Header5, Span } from "../../../UI_Components/Fonts/styles";
import CustomTable from "../../../UI_Components/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { formatDate } from "../../../../lib/factory.lib";
import Loader from "../../../UI_Components/Loader";
import { theme } from "../../../../config/theme";

const Transactions = () => {
  const [transactionsData, setTransactions] = useState([]);
  const [moreDetail, setMoreDetails] = useState([]);

  useEffect(() => {
    const dev = process.env.NODE_ENV === "development";
    const url = dev
      ? "http://localhost:3001/"
      : "https://banktest-server-8080.herokuapp.com/";

    const transactions = async () => {
      const data = await axios.get(`${url}transactions`);

      let arr = [];
      let emptyMore = [];

      data.data.data.map(
        ({
          account_id,
          amount,
          created_at,
          status,
          customer,
          narration,
          currency,
          payment_type,
        }) => {
          let data = {
            status: (
              <Flex
                width="max-content"
                style={{
                  backgroundColor: `${
                    status === "successful"
                      ? theme.palette.success.main
                      : theme.palette.error.main
                  }`,
                  borderRadius: "4px",
                }}
              >
                <Span colorTheme="white">{status || "-"} </Span>
              </Flex>
            ),
            created_at: formatDate(created_at) || "-",
            amount: amount || "-",
            account_id: account_id || "-",
            name: customer.name || "-",
          };

          let more = {
            more: (
              <Span colorTheme="primary.default" spacing=".025rem">Payment type: {payment_type}
                <br /> Narration: {narration}
                <br /> Phone number: {customer.phone_number}.
                <br /> Recipient email: {customer.email}.
              </Span>
            ),
          };
          arr.push(data);
          return emptyMore.push(more);
        }
      );
      setMoreDetails(emptyMore);
      return setTransactions(arr);
    };
    transactions();
  }, []);

  const tableHead = ["Status", "Date", "Amount", "ID  ", "Recipient"];
  return (
    <Styles className="App">
      <Flex margin="0 0 30px 0" justify="flex-start">
        <Flex margin="0 0 30px 0" justify="flex-start">
          <Header5 colorTheme="grey[500]" spacing=".4rem" bold>
            Transactions
          </Header5>
        </Flex>

        <Paragraph colorTheme="grey[400]" spacing=".025rem" lineHeight="25px">
          Your recent transactions on this paltform.
        </Paragraph>
      </Flex>

      {transactionsData.length > 0 && moreDetail.length > 0 ? (
        <CustomTable
          gap="0px"
          tableHead={tableHead}
          tableBody={transactionsData}
          moreDetail={moreDetail}
          rowHovColor="#d2ccc626"
          rowClick={(data) => console.log(data)}
          handleReadAll={() => []}
          pageSize={5}
          paginator
        />
      ) : (
        <Loader />
      )}
    </Styles>
  );
};

export default Transactions;
