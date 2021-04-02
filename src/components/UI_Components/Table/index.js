import React, { useState } from "react";
import {
  CustomTableMain,
  TableData,
  Paginator,
  Table,
  TableHead,
  TableRow,
  TableHeadContent,
} from "./styles";
import { generateID } from "../../../lib/generateID";
import PropTypes from "prop-types";
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import Pagination from "../Paginator";

const CustomTable = ({
  tableBody,
  tableHead,
  rowHovColor,
  gap,
  paginator,
  pageSize,
  firstLast,
  prevNext,
  tableBodyShowMore,
}) => {
  const [pageOfItems, setPageOfItems] = useState([]);
  const [isOpen, setIsOpen] = useState([]);
  const [tableData] = useState(tableBody);

  const onChangePage = (items) => setPageOfItems(items);

  const handleOpenTable = (idx) =>
    isOpen === idx ? setIsOpen(-1) : setIsOpen(idx);

  const returnTableRow = (data, idx, isOpen) => {
    let index = idx + 1;
    let __data = { ...data };
    delete __data._id;

    return (
      <>
        <TableRow key={generateID(17)} onClick={() => handleOpenTable(index)}>
          {Object.values(__data).map((item, i) => (
            <TableData
              head={(tableHead[i] && tableHead[i].replace(/'/g, "")) || ""}
              className={
                (Object.keys(data)[i] &&
                  Object.keys(data)[i].replace(/'/g, "")) ||
                ""
              }
              id={(tableHead[i] && tableHead[i].replace(/'/g, "")) || ""}
              key={generateID(14)}
            >
              {item}
            </TableData>
          ))}
        </TableRow>
        <TableRow
          key={generateID(12)}
          id="moreTableContent"
          className={`moreTableContent`}
          style={{
            display: `${isOpen === index ? "table-row" : "none"}`,
          }}
        >
          {Object.values(__data).map((item, i) => (
            <TableData
              head={(tableHead[i] && tableHead[i].replace(/'/g, "")) || ""}
              className={
                (Object.keys(data)[i] &&
                  Object.keys(data)[i].replace(/'/g, "")) ||
                ""
              }
              id={(tableHead[i] && tableHead[i].replace(/'/g, "")) || ""}
              key={generateID(14)}
            >
              {item}___
            </TableData>
          ))}
        </TableRow>
      </>
    );
  };
  return (
    <>
      {tableBody.length !== 0 ? (
        <CustomTableMain
          gap={gap}
          rowHovColor={rowHovColor}
          paginator={paginator}
        >
          <OverFlowScrollBar className="container">
            <Table>
              <TableHead>
                <TableRow>
                  {tableHead.map((head, i) => (
                    <TableHeadContent key={generateID(11)}>
                      {head.toUpperCase()}
                    </TableHeadContent>
                  ))}
                </TableRow>
              </TableHead>

              <tbody>
                {paginator
                  ? pageOfItems.map((data, idx) =>
                      returnTableRow(data, idx, isOpen)
                    )
                  : tableBody.map((data, idx) =>
                      returnTableRow(data, idx, isOpen)
                    )}
              </tbody>
            </Table>
          </OverFlowScrollBar>

          <Paginator className="paginator" paginator={paginator}>
            <Pagination
              items={tableData}
              pageSize={pageSize || 5}
              prevNext={prevNext || null}
              onChangePage={onChangePage}
              firstLast={firstLast || null}
            />
          </Paginator>
        </CustomTableMain>
      ) : (
        <p>No data</p>
      )}
    </>
  );
};

CustomTable.propTypes = {
  // tableBody: PropTypes.array.isRequired,
  tableHead: PropTypes.array.isRequired,
  rowClick: PropTypes.func,
  rowHovColor: PropTypes.string,
  gap: PropTypes.string,
  pageSize: PropTypes.number,
  firstLast: PropTypes.any,
  paginator: PropTypes.any,
  prevNext: PropTypes.any,
};

export default CustomTable;
