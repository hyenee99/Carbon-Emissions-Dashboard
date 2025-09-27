"use client";
import { fetchCompanies, fetchCountries, fetchPosts } from "@/lib/api";
import { useCompanyStore } from "@/stores/useCompanyStore";
import { Company, Country, Post } from "@/types/types";
import { useEffect, useState } from "react";
import EmissionChart from "../_components/EmissionChart";

export default function Dashboard() {
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    async function loadCompanies() {
      try {
        const data = await fetchCompanies();
        setCompanies(data);
      } catch (error) {
        console.log(error);
      }
    }

    async function loadCountries() {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadCompanies();
    loadCountries();
  }, []);

  // 받아온 companies 데이터 중에 선택한 회사의 id 와 같은 회사 찾기
  const company = companies.find((c) => c.id === selectedCompany.id);
  const chartData = company ? company.emissions : [];
  const sumOfEmissions = chartData.reduce(
    (acc, item) => acc + item.emissions,
    0
  );
  const tax = countries.find((c) => c.code === company?.country)?.tax;
  const carbonTax = tax ? (sumOfEmissions * tax).toLocaleString() : 0;

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

      <div className="h-48">
        <h1 className="text-xl mb-2 text-[#1BAD70]">💰 Expected Carbon Tax</h1>
        <table className="table-auto border-collapse border border-gray-300 w-full mb-2">
          <thead>
            <tr>
              <th className="table-header">Year-Month</th>
              <th className="table-header">Source</th>
              <th className="table-header">Emissions</th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((item, idx) => (
              <tr key={idx} className="even:bg-gray-100">
                <td className="table-cell">{item.yearMonth}</td>
                <td className="table-cell">{item.source}</td>
                <td className="table-cell">{item.emissions}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          The expected carbon tax to be paid is{" "}
          <span className="font-semibold">{carbonTax}$</span>.
        </p>
      </div>
    </div>
  );
}
