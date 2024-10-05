import React from "react";

export default function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          <h4> {props.text}</h4>
        </li>
      </ol>
    </nav>
  );
}
