import { ICompany } from "../../models/ICompanys";

export const filterAndSortCompanies = (
  companies: ICompany[],
  customerSearchTerm: string,
  selectedType: string,
  sortOrder: string
) => {
  return companies
    .filter(
      (company) =>
        company.name.toLowerCase().includes(customerSearchTerm.toLowerCase()) &&
        (selectedType === "" || company.type === selectedType)
    )
    .sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id));
};
