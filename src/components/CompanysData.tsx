import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import CompanysDataTable from "../shared/CompanysDataTable/CompanysDataTable";
import { ICompany } from "../models/ICompanys";

const CompanysData = () => {
  const [customerCompanies, setCustomerCompanies] = useState<ICompany[]>([]);
  const [filteredCustomerCompanies, setFilteredCustomerCompanies] = useState<
    ICompany[]
  >([]);

  const [customerSearchTerm, setCustomerSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}`).then((response) => {
      setCustomerCompanies(response.data);
    });
  }, []);

  /*   useEffect(() => {
    setFilteredCustomerCompanies(
      customerCompanies
        .filter(
          (company) =>
            company.name
              .toLowerCase()
              .includes(customerSearchTerm.toLowerCase()) &&
            (selectedType === "" || company.type === selectedType)
        )
        .sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id))
    );
  }, [customerCompanies, customerSearchTerm, sortOrder, selectedType]); */

  const filteredAndSortedCompanies = useMemo(() => {
    return customerCompanies
      .filter(
        (company) =>
          company.name
            .toLowerCase()
            .includes(customerSearchTerm.toLowerCase()) &&
          (selectedType === "" || company.type === selectedType)
      )
      .sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id));
  }, [customerCompanies, customerSearchTerm, sortOrder, selectedType]);

  return (
    <div>
      <div className="px-3 py-4">
        <div className="mb-4 flex justify-between">
          <input
            className="border rounded w-1/2 p-2 mr-4"
            type="text"
            value={customerSearchTerm}
            onChange={(e) => setCustomerSearchTerm(e.target.value)}
            placeholder="Search by company name"
          />

          <select
            className="border rounded w-1/4 p-2"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All types</option>
            <option value="AB">AB</option>
            <option value="EF">EF</option>
            <option value="HB">HB</option>
          </select>

          <div className="w-1/4 ml-4 flex">
            <button
              onClick={() => setSortOrder("asc")}
              className="bg-blue-500 border border-blue-500 rounded p-2 mr-2 text-white hover:bg-blue-600"
            >
              ASC
            </button>
            <button
              onClick={() => setSortOrder("desc")}
              className="bg-blue-500 border border-blue-500 rounded p-2 text-white hover:bg-blue-600"
            >
              DESC
            </button>
          </div>
        </div>
        <CompanysDataTable companies={filteredAndSortedCompanies} />
      </div>
    </div>
  );
};

export default CompanysData;
