import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    createColumnHelper,

  } from "@tanstack/react-table";
  import { useEffect, useMemo, useState, } from "react";
  import { PropTypes } from "prop-types";
  
 

  const Tiles = ({ data }) => {
  
    const columns = useMemo(
      () => [
        {
          header: "Top Cases",
          accessorKey: "TopCases",
        },
        {
          header: "Today Cases",
          accessorKey: "TodayCases",
        },
        {
          header: "Today Deaths",
          accessorKey: "TodayDeaths",
        },
        {
            header: "Today Deaths",
            accessorKey: "TodayDeaths",
        },
        {
            header: " Top Active",
            accessorKey: "TopActive",
        },
        {
          header: "Top Recover",
          accessorKey: "TopRecover",
        },

      ],
      []
    );
  

    const table = useReactTable({
        data,
        columns,
        getSortedRowModel: getSortedRowModel(),
        getCoreRowModel: getCoreRowModel(),
    })

   console.log(data);
    return (
      <div className="px-5 py-0 bg-gray-sidebar">
        <div className="px-5 py-[15px] border-b-[rgba(0,0,0,0.12)] border-b border-solid">
          <h2 className="font-poppins font-normal text-[22px] leading-[1.2] text-dark-blue-1 mb-0">
            Top 10 Country wise Covid-19 Updates - Tiles
          </h2>
        </div>
        <div className="flex justify-between">

        </div>
        <table className="text-left border-collapse w-full">
          <thead className=" text-dark-blue-1">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} >
                    {header.isPlaceholder
                        ? null
                        : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className=" text-purple-blue">
            {table.getRowModel().rows.map((row) => (
                 <tr className="" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td  key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr> 
            ))}
          </tbody>
        </table>
      </div>
    );
  };
   
  
  Tiles.propTypes = {
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

  
  export default Tiles;
  