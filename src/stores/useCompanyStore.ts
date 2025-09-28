import { companies } from "@/data/companies";
import { Company } from "@/types/types";
import { create } from "zustand";

interface CompanyStore {
  myCompany: Company | null; // 내 회사 정보
  selectedCompany: Company | null; // 비교 대상 회사
  setMyCompany: (company: Company) => void;
  setSelectedCompany: (company: Company) => void;
}

export const useCompanyStore = create<CompanyStore>((set) => ({
  myCompany: companies.length > 0 ? companies[0] : null,
  selectedCompany: companies.length > 0 ? companies[0] : null,
  setMyCompany: (company) => set({ myCompany: company }),
  setSelectedCompany: (company) => set({ selectedCompany: company }),
}));
