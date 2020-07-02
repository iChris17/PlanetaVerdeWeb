import React, { useState, Fragment, useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Articulos from "./Articulos";

const Example = (props) => {
  const [totalPages, setTotalPages] = useState([]);
  const dataPerPage = 5;
  const [activePage, setActivePage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      let array = [];
      for (let index = 0; index < props.data.length / dataPerPage; index++) {
        array.push(index);
      }
      setTotalPages(array);
      setData(props.data);
    }

    return () => (mounted = false);
  }, [props.data]);

  return (
    <Fragment>
      <Articulos
        data={data.slice(
          (activePage - 1) * dataPerPage,
          activePage * dataPerPage
        )}
        history={props.history}
      />
      <Pagination
        className="pagination pagination-success"
        listClassName="pagination-success"
      >
        {totalPages.map((i) => {
          return (
            <PaginationItem
              className={activePage === i + 1 ? "active" : ""}
              key={i}
            >
              <PaginationLink
                href=" "
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage(i + 1);
                  window.scrollTo(0,window.innerHeight)
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </Pagination>
    </Fragment>
  );
};

export default Example;
