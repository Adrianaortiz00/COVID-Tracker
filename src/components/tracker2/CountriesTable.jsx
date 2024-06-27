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
    <div>
      <div className="title-container">
        <h2 className="font-semibold text-[22px] leading-[1.2] text-dark-blue-1 mb-0">
          Ajax Data Table - Covid-19 Country Wise State
        </h2>
      </div>
      <DebouncedInput value={filter ?? ""} onChange={value => setFilter(String(value))} placeholder="Search"/>
      <select
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
      <table className="text-left border-collapse">
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
                  {{ asc: "↑", desc: "↓" }[header.column.getIsSorted() ?? null]}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className=" text-purple-blue">
          {table.getRowModel().rows.map((row) => (
            <tr className="even:bg-gray-sidebar" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="px-2.5 py-2" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => table.firstPage()}>Primer página</button>
        <button onClick={() => table.previousPage()}>Página anterior</button>
        <button onClick={() => table.nextPage()}>Página siguiente</button>
        <button onClick={() => table.lastPage()}>Última página</button>
      </div>
      <div>
        Página {table.getState().pagination.pageIndex + 1} de{" "}
        {table.getPageCount()}
      </div>
      +
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
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></input>
  );
}

export default CountriesTable;
