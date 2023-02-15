import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanysDataTable from "../shared/CompanysDataTable/CompanysDataTable";
import { ICompany } from "../models/ICompanys";

const CompanysData = () => {
  const [customerCompanies, setCustomerCompanies] = useState<ICompany[]>([]);

  const api_url =
    "https://my-json-server.typicode.com/capcito/frontend-ws/companies";

  useEffect(() => {
    axios.get(api_url).then((response) => {
      setCustomerCompanies(response.data);
    });
  }, []);

  return (
    <div>
      <div className="px-3 py-4">
        <div className="mb-4 flex justify-between">
          <input
            className="border rounded w-1/2 p-2 mr-4"
            type="text"
            placeholder="Search by company name"
          />

          <select className="border rounded w-1/4 p-2">
            <option value="">All types</option>
            <option value="AB">AB</option>
            <option value="EF">EF</option>
            <option value="HB">HB</option>
          </select>

          <div className="w-1/4 ml-4 flex">
            <button className="bg-blue-500 border border-blue-500 rounded p-2 mr-2 text-white hover:bg-blue-600">
              ASC
            </button>
            <button className="bg-blue-500 border border-blue-500 rounded p-2 text-white hover:bg-blue-600">
              DESC
            </button>
          </div>
        </div>
        <CompanysDataTable companies={customerCompanies} />
      </div>
    </div>
  );
};

export default CompanysData;
