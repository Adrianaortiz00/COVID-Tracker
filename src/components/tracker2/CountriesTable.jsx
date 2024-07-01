import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { PropTypes } from "prop-types";
import { rankItem } from "@tanstack/match-sorter-utils";

const fuzzyFilter = (row, id, value, addMeta) => {
  const rank = rankItem(row.getValue(id), value);
  addMeta({
    rank,
  });
  return rank.passed;
};

const CountriesTable = ({ data }) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [filter, setFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const columns = useMemo(
    () => [
      {
        header: "Flag",
        accessorKey: "flag",
        cell: ({ row }) => (
          <img
            src={row.original.flag}
            alt={`Flag of ${row.original.country}`}
            style={{ width: "50px" }}
          />
        ),
      },
      {
        header: "Country",
        accessorKey: "country",
      },
      {
        header: "Cases",
        accessorKey: "cases",
      },
      {
        header: "New Cases",
        accessorKey: "todayCases",
      },
      {
        header: "Deaths",
        accessorKey: "deaths",
      },
      {
        header: "Recovered",
        accessorKey: "recovered",
      },
      {
        header: "Active",
        accessorKey: "active",
      },
      {
        header: "Critical",
        accessorKey: "critical",
      },
      {
        header: "Tests",
        accessorKey: "tests",
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
      globalFilter: filter,
      sorting,
    },
    onGlobalFilterChange: setFilter,
    globalFilterFn: fuzzyFilter,
    onSortingChange: setSorting,
  });

  return (
    <div className="bg-[white] m-5 p-[30px] rounded-[5px] px-5 py-0 ">
      <div className="px-5 py-[15px] border-b-[rgba(0,0,0,0.12)] border-b border-solid">
        <h2 className="font-poppins font-normal text-[22px] leading-[1.2] text-dark-blue-1 mb-0">
          Ajax Data Table - Covid-19 Country Wise State
        </h2>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-between">
        <div className="font-poppins font-light flex p-2.5 items-center">
          <h4 className="">Show</h4>
          <select
            className="border h-10 mx-2.5 my-0 px-[15px] py-[5px] border-solid border-[#ccc]"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 25, 50, 100].map((size) => {
              return (
                <option key={size} value={size}>
                  {size}
                </option>
              );
            })}
          </select>
          <h4>entries</h4>
        </div>
        <div className="flex items-center">
          <h4 className="font-poppins font-light">Search:</h4>
          <DebouncedInput
            value={filter ?? ""}
            onChange={(value) => setFilter(String(value))}
          />
        </div>
      </div>
      <div className="overflow-x-scroll overflow-y-hidden">
        <table className="font-poppins font-light text-left border-collapse w-full">
          <thead className=" text-dark-blue-1">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {
                      { asc: "↑", desc: "↓" }[
                        header.column.getIsSorted() ?? null
                      ]
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className=" text-purple-blue">
            {table.getRowModel().rows.map((row) => (
              <tr
                className=" even:bg-gray-sidebar border-b-[#ccc] border-b border-solid font-poppins  font-weight"
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <td className="px-2.5 py-2" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center md:flex-row justify-between px-[0.8rem] py-5 font-poppins font-light">
        <div className="">
          Showing {table.getState().pagination.pageIndex + 1} to{" "}
          {table.getPageCount()}
        </div>
        <div className="flex gap-5">
          <button onClick={() => table.firstPage()}>First Page</button>
          <button onClick={() => table.previousPage()}>⭠ Previus</button>
          <button onClick={() => table.nextPage()}>Next ⭢</button>
          <button onClick={() => table.lastPage()}>Last Page</button>
        </div>
      </div>
    </div>
  );
};

CountriesTable.propTypes = {
  data: PropTypes.array,
};

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeOut);
  }, [value]);

  return (
    <input
      className="border h-10 max-w-[150px] ml-[0.5em] px-[15px] py-2.5 border-solid border-[#ccc]"
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></input>
  );
}

DebouncedInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.function,
  debounce: PropTypes.number,
};

export default CountriesTable;
