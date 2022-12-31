import React from "react";

function ProducSpecsTable({ tableName, tableData }) {
  return (
    <tr className="product-specs-detail">
      <td className="product-barnd">{tableName}</td>
      <td className="product-barnd-name">{tableData}</td>
    </tr>
  );
}

export default ProducSpecsTable;
