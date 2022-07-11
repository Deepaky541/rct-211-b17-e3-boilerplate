import { useState } from "react";
import { PageCell } from "./PageCell";
export const Pagination = ({ total, selected, onPageChange }) => {
  const [page, setpage] = useState(selected);
  const [pages] = useState(new Array(total).fill(1));
  const handleClick=(data)=>{
    setpage(data);
  }
  return (
    <div
      className="pageContainer"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <button
        disabled={page <= 1}
        onClick={() => {
          setpage(page - 1);
        }}
      >
        {"<"}
      </button>
      {pages.map((el, index) => (
        <div style={{ margin: "20px" }} key={index}>
          <PageCell sel={page} num={index} onPageChange={handleClick} />
        </div>
      ))}
      <button
        disabled={page >= total}
        onClick={() => {
          setpage(page + 1);
        }}
      >
        {">"}
      </button>
    </div>
  );
};
