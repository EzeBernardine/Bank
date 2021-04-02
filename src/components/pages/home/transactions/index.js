import { Styles } from "./styles";
import { Flex } from "../../../UI_Components/Box/styles";
import { Paragraph, Header5 } from "../../../UI_Components/Fonts/styles";
import CustomTable from "../../../UI_Components/Table";

const Deposit = () => {
  const tableContent = [
    {
      firstCol: "Deposit",
      secondCol: "100000",
      thirdCol: "8/21/2018",
      fourthCol: "02/07/2020",
      fothCol: "kfkskkn",
    },
    {
      firstCol: "Transfer",
      secondCol: "100000",
      thirdCol: "8/21/2018",
      fourthCol: "02/07/2020",
      fothCol: "flkkskfknk",
    },
    {
      firstCol: "Withdrawal",
      secondCol: "100000",
      thirdCol: "8/21/2018",
      fourthCol: "02/07/2020",
      fothCol: "kfkskkn",
    },
    {
      firstCol: "Withdrawal",
      secondCol: "100000",
      thirdCol: "8/21/2018",
      fourthCol: "02/07/2020",
      fothCol: "flkkskfknk",
    },
    {
      firstCol: "Deposit",
      secondCol: "100000",
      thirdCol: "8/21/2018",
      fourthCol: "02/07/2020",
      fothCol: "kfkskkn",
    },
    {
      firstCol: "Deposit",
      secondCol: "20000",
      thirdCol: "8/21/2018",
      fourthCol: "02/07/2020",
      fothCol: "flkkskfknk",
    },
  ];
  const showMore = [
    {
      showMore: "showMore",
    },
    {
      showMore: "showMore",
    },
    {
      showMore: "showMore",
    },
    {
      showMore: "showMore",
    },
    {
      showMore: "showMore",
    },
    {
      showMore: "showMore",
    },
  ];
  const tableHead = ["Type", "Amount", "Status", "Date  ", "Recipient"];
  return (
    <Styles className="App">
      <Flex margin="80px 0 30px 0" justify="flex-start">
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

      <CustomTable
        gap="5px"
        tableHead={tableHead}
        tableBody={tableContent}
        tableBodyShowMore={showMore}
        rowHovColor="#d2ccc626"
        rowClick={(data) => console.log(data)}
        handleReadAll={() => []}
        pageSize={5}
        paginator
      />
    </Styles>
  );
};

export default Deposit;
