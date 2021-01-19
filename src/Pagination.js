import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && (
        <button onClick={gotoPrevPage} className="btn btn-primary btn-sm m-2">
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button onClick={gotoNextPage} className="btn btn-primary btn-sm m-2">
          Next
        </button>
      )}
    </div>
  );
}
