"use client";
import { useCompanyStore } from "@/stores/useCompanyStore";
import { Company } from "@/types/types";
import { useRouter } from "next/navigation";

interface boxProps {
  company: Company;
  emissions: number;
}
export default function OverviewBox({ company, emissions }: boxProps) {
  const setSelectedCompany = useCompanyStore(
    (state) => state.setSelectedCompany
  );
  const router = useRouter();
  const handleBoxClick = () => {
    setSelectedCompany(company);
    router.push("/dashboard");
  };
  return (
    <div
      onClick={handleBoxClick}
      className="flex justify-between w-full h-14 border-b border-gray-300 items-center cursor-pointer hover:bg-gray-100"
    >
      <p className="w-[30%] ">{company.name}</p>
      <p className="w-[30%] ">{company.country}</p>
      <p className="text-[#0180DA] font-semibold">{emissions}</p>
    </div>
  );
}
