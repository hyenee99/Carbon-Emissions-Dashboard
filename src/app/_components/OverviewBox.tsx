"use client";
import { useCompanyStore } from "@/stores/useCompanyStore";
import { Company } from "@/types/types";
import { useRouter } from "next/navigation";

interface boxProps {
  rank?: number;
  company: Company;
  emissions: number;
  clickable?: boolean;
}
export default function OverviewBox({
  rank,
  company,
  emissions,
  clickable = true,
}: boxProps) {
  const setSelectedCompany = useCompanyStore(
    (state) => state.setSelectedCompany
  );
  const router = useRouter();
  const handleBoxClick = () => {
    setSelectedCompany(company);
    if (clickable) router.push("/dashboard");
  };
  return (
    <div
      onClick={handleBoxClick}
      className={`p-2 flex justify-between w-full h-14 border-b border-gray-300 items-center cursor-pointer hover:bg-gray-100 ${
        rank && [1, 2, 3].includes(rank) ? "bg-[#fffde3]" : ""
      }`}
    >
      {rank && (
        <p
          className={`w-[25%] ${
            rank && [1, 2, 3].includes(rank) ? "font-bold text-[#1BAD70]" : ""
          }`}
        >
          {rank}
        </p>
      )}
      <p className="w-[30%]">{company.name}</p>
      <p className="w-[30%]">{company.country}</p>
      <p className="text-[#0180DA] font-semibold">{emissions}</p>
    </div>
  );
}
