"use client";
import { fetchCompanies } from "@/lib/api";
import { Company } from "@/types/types";
import { useEffect, useState } from "react";
import OverviewBox from "../_components/OverviewBox";

export default function EmissionOverview() {
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

  // 각 회사의 배출량 총 합 계산
  const sumOfEmissions = companies.map((company) =>
    company.emissions.reduce((acc, cur) => acc + cur.emissions, 0)
  );

  return (
    <div className="p-2">
      <div className="space-y-2 mb-7">
        <h1 className="text-xl">Emissions Overview</h1>
        <p>
          🔎 View other companies' carbon emissions! Click to check details.
        </p>
      </div>

      <div className="w-[95%] m-auto">
        <div className="font-semibold border-b border-gray-300 flex justify-between">
          <p className="w-[30%]">name</p>
          <p className="w-[30%]">country</p>
          <p>emissions</p>
        </div>

        {companies.map((item, idx) => (
          <OverviewBox
            key={item.id}
            company={item}
            emissions={sumOfEmissions[idx]}
          />
        ))}
      </div>
    </div>
  );
}
