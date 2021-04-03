import { Styles } from "./styles";
import { Flex } from "../../../UI_Components/Box/styles";
import { Paragraph, Header5, Span } from "../../../UI_Components/Fonts/styles";
import CustomTable from "../../../UI_Components/Table";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { formatDate } from "../../../../lib/factory.lib";

const Transactions = () => {
  const [transactionsData, setTransactions] = useState([]);
  const [moreDetail, setMoreDetails] = useState([]);

  const transactions = async () => {
    const data = await axios.get("http://localhost:3001/transactions");

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
        meta,
      }) => {
        let data = {
          status: status || "-",
          created_at: formatDate(created_at) || "-",
          amount: amount || "-",
          account_id: account_id || "-",
          name: meta?.name || "-",
        };

        let more = {
          more: (
            <Span colorTheme="primary.default" spacing=".025rem">
              {customer.name}, sent {currency}
              {amount} on {formatDate(created_at)}.
              <br /> Status: {status}
              <br /> Narration: {narration}
              <br /> Phone number: {customer.phone_number}.
              <br /> Customer email: {customer.email}.
            </Span>
          ),
        };
        return emptyMore.push(more) && arr.push(data);
      }
    );
    return setTransactions(arr) && setMoreDetails(emptyMore);
  };

  useLayoutEffect(() => {
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
          Transfers on this platform can be either directly, ie to another
          account user, or to the bank. Just fill in the form and you are good
          to go.
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
        <Span colorTheme="grey[400]" spacing=".025rem">
          Loading...
        </Span>
      )}
    </Styles>
  );
};

export default Transactions;
