import React from "react";
import { ICompany } from "../../models/ICompanys";
import "./CompanysDataTable.css";

interface Props {
  companies: ICompany[];
}

const CompanysDataTable: React.FC<Props> = ({ companies }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => (
          <tr key={company.id}>
            <td>{company.id}</td>
            <td>{company.name}</td>
            <td>{company.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompanysDataTable;
