import { Styles } from "./styles";
import { Flex } from "../../../UI_Components/Box/styles";
import { Paragraph, Header5 } from "../../../UI_Components/Fonts/styles";
import CustomTable from "../../../UI_Components/Table";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { formatDate } from "../../../../lib/factory.lib";

const Transactions = () => {
  const [transactionsData, setTransactions] = useState([]);
  const transc = [
    {
      status: "defwe",
      created_at: "vdds",
      amount: "sdsdcw",
      account_id: "dewe",
      bank: "dwe",
    },
  ];
  const moreDetail = [
    {
      more: (
        <span>
          Transfers on this platform can be either directly, ie to another
          account user, or to the bank. Just fill in the form and you are good
          to go.
        </span>
      ),
    },
    {
      more: (
        <span>
          Transfers on this platform can be either directly, ie to another
          account user, or to the bank. Just fill in the form and you are good
          to go.
        </span>
      ),
    },
    {
      more: <span>T either direct the form and you are good to go.</span>,
    },
    {
      more: (
        <span>
          Taaaaaaaaaaa a a a a aI bank. Just fill in the form and you are good
          to go.
        </span>
      ),
    },
    {
      more: <span>e bank. Just fill d you are good to go.</span>,
    },
    {
      more: (
        <span>
          kaka jnajks jakj bank. Just fill in the form and you are good to go.
        </span>
      ),
    },
  ];

  const transactions = async () => {
    const data = await axios.get("http://localhost:3001/transactions");

    let arr = [];

    data.data.data.map(({ bank, account_id, amount, created_at, status }) => {
      let data = {
        status: status || "",
        created_at: formatDate(created_at) || "",
        amount: amount || "",
        account_id: account_id || "",
        bank: bank || "",
      };
      arr.push(data);
    });
    setTransactions(arr);
  };

  console.log(transactionsData, "transactionsData");
  useLayoutEffect(() => {
    transactions();
  }, []);

  const tableHead = ["Type", "Amount", "Status", "Date  ", "Recipient"];
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

    

      {transactionsData.length > 0 ? (
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
      ) : null}
    </Styles>
  );
};

export default Transactions;
