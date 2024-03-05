import React from "react";
import { useTable, useSortBy, usePagination, useFilters } from "react-table";
import { PAGE_SIZES } from "../../../constants/pagesize.options";

  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter }
  }) {
    return (
      <input
        value={filterValue || ""}
        onChange={e => {
          setFilter(e.target.value || undefined); 
        }}
        placeholder={`Search for...`}
      />
    );
  }

export const TransactionsTable = ({data, columns, repeatTransaction}) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    pageCount,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      defaultColumn:  { Filter: DefaultColumnFilter },
      initialState: { pageIndex: 0, pageSize: 10 }
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };

  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };


    return <> 
    <table {...getTableProps()}>
        <thead>
       {headerGroups.map(headerGroup => (
         <tr {...headerGroup.getHeaderGroupProps()}>
           {headerGroup.headers.map(column => (
             <th {...column.getHeaderProps()}>{column.render("Header")}
             <span>{ column.isSorted 
                        ? column.isSortedDesc
                            ?' v'
                            : ' ^'
                        :""
                    }
            </span>
             <div>{column.canFilter ? column.render("Filter") : null}</div>
            </th>
           ))}
         </tr>
       ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
    </table>;
    
    <div className="table-controls-wrap"
    >
        <div className="previous-buttons-wrap" md={3}>
          <button
            type="button"
            className="btn btn-primary previous-button"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"|<"}
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-primary previous-button"
            onClick={previousPage}
            disabled={!canPreviousPage}
          >
            {"<"}
          </button>
        </div>
        <div className="current-page" md={2}>
          Page{" "}<input
                    type="number"
                    min={1}
                    max={pageOptions.length}
                    defaultValue={pageIndex + 1}
                    onChange={onChangeInInput}
                ></input>
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </div>
        <div className="page-size-select" md={2}>
          <select
            id="custom-select"
            value={pageSize}
            onChange={onChangeInSelect}
          >
            {PAGE_SIZES.map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div md={3}>
          <button
            type="button"
            className="btn btn-primary next-button"
            onClick={nextPage}
            disabled={!canNextPage}
          >
            {">"}
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-primary next-button"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">|"}
          </button>
        </div>
    </div>
    </>
}