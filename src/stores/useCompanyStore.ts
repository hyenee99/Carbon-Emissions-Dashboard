import { companies } from "@/data/companies";
import { Company } from "@/types/types";
import { create } from "zustand";

interface CompanyStore {
  selectedCompany: Company;
  setSelectedCompany: (company: Company) => void;
}

export const useCompanyStore = create<CompanyStore>((set) => ({
  selectedCompany: companies[0],
  setSelectedCompany: (company) => set({ selectedCompany: company }),
}));
