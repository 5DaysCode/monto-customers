import React, { useState, useEffect } from "react";
import axios from "axios";

const CompanysData = () => {
  const [customerCompanies, setCustomerCompanies] = useState();

  const api_url =
    "https://my-json-server.typicode.com/capcito/frontend-ws/companies";

  useEffect(() => {
    axios.get(api_url).then((response) => {
      console.log("Data => ", response.data);
    });
  }, []);

  return <div>Company Data</div>;
};

export default CompanysData;
