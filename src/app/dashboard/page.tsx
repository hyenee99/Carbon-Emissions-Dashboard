"use client";
import { fetchCompanies, fetchPosts } from "@/lib/api";
import { useCompanyStore } from "@/stores/useCompanyStore";
import { Company, Post } from "@/types/types";
import { useEffect, useState } from "react";
import EmissionChart from "../_components/EmissionChart";

export default function Dashboard() {
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    async function loadCompanies() {
      try {
        const data = await fetchCompanies();
        setCompanies(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadCompanies();
  }, []);

  // 받아온 companies 데이터 중에 선택한 회사의 id 와 같은 회사 찾기
  const company = companies.find((c) => c.id === selectedCompany.id);
  const chartData = company ? company.emissions : [];

  return (
    <div className="p-2">
      <div className="text-xl flex flex-col gap-3 mb-5">
        <p>Hello!🤚🏻 </p>
        <p>
          View <span className="font-semibold">{selectedCompany.name}</span> 's
          carbon emissions at a glance!
        </p>
      </div>
      <div className="w-full">
        <EmissionChart data={chartData} />
      </div>
    </div>
  );
}
