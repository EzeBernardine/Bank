import React from "react";
import PropTypes from "prop-types";
import { PaginatorStyles, Paginator, ListItems } from "./styles";
import { LessThanIcon, GreaterThanIcon } from "../../assest/svg";
import { generateID } from "../../../lib/generateID";

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
};

const defaultProps = {
  initialPage: 1,
  pageSize: 5,
};

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    let { items, pageSize } = this.props;
    let pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    pager = this.getPager(items.length, page, pageSize);

    let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    this.setState({ pager: pager });
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;

    pageSize = pageSize || 10;

    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    let pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }

  render() {
    let pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    const { radius, color, firstLast, prevNext } = this.props;

    return (
      <PaginatorStyles>
        <Paginator radius={radius} color={color}>
          {firstLast && (
            <ListItems
              radius={radius}
              className={pager.currentPage === 1 ? "disabled" : ""}
            >
              <span onClick={() => this.setPage(1)}>First</span>
            </ListItems>
          )}
          {prevNext && (
            <ListItems
              radius={radius}
              className={pager.currentPage === 1 ? "disabled" : ""}
            >
              <span onClick={() => this.setPage(pager.currentPage - 1)}>
                <GreaterThanIcon />
              </span>
            </ListItems>
          )}
          {pager.pages.map((page, index) => (
            <ListItems
              onClick={() => this.setPage(page)}
              key={generateID(14)}
              className={pager.currentPage === page ? "active" : ""}
            >
              <span>{page}</span>
            </ListItems>
          ))}
          {prevNext && (
            <ListItems
              radius={radius}
              className={
                pager.currentPage === pager.totalPages ? "disabled" : ""
              }
            >
              <span onClick={() => this.setPage(pager.currentPage + 1)}>
                <LessThanIcon />
              </span>
            </ListItems>
          )}
          {firstLast && (
            <ListItems
              radius={radius}
              className={
                pager.currentPage === pager.totalPages ? "disabled" : ""
              }
            >
              <span onClick={() => this.setPage(pager.totalPages)}>Last</span>
            </ListItems>
          )}
        </Paginator>
      </PaginatorStyles>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
