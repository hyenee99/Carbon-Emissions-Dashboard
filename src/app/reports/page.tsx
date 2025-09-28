"use client";
import { fetchCompanies, fetchCountries } from "@/lib/api";
import { Company, Country } from "@/types/types";
import { useEffect, useState } from "react";
import OverviewBox from "../_components/OverviewBox";
import { useCompanyStore } from "@/stores/useCompanyStore";

export default function Reports() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const myCompany = useCompanyStore((state) => state.myCompany);
  const compareCompany = useCompanyStore((state) => state.selectedCompany);

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

  const companiesWithTotalEmissions = companies.map((company) => ({
    ...company,
    totalEmissions: company.emissions.reduce(
      (acc, cur) => acc + cur.emissions,
      0
    ),
  }));

  // 탄소배출량을 기준으로 회사 오름차순 정렬
  const sortedCompanies = companiesWithTotalEmissions.sort(
    (a, b) => a.totalEmissions - b.totalEmissions
  );

  // 내 회사의 총 탄소배출량 및 탄소세 계산
  const myCompanyEmission = companiesWithTotalEmissions.find(
    (company) => company.id === myCompany?.id
  )?.totalEmissions;

  const myTax = countries.find((c) => c.code === myCompany?.country)?.tax;
  const mycarbonTax =
    myTax && myCompanyEmission !== undefined ? myCompanyEmission * myTax : 0;

  // 비교 회사의 총 탄소배출량 및 탄소세 계산
  const compareCompanyEmission = companiesWithTotalEmissions.find(
    (company) => company.id === compareCompany?.id
  )?.totalEmissions;

  const otherTax = countries.find(
    (c) => c.code === compareCompany?.country
  )?.tax;
  const othercarbonTax =
    otherTax && compareCompanyEmission !== undefined
      ? compareCompanyEmission * otherTax
      : 0;

  // 탄소량 및 탄소세 차이 계산
  const diffOfEmission =
    (myCompanyEmission ?? 0) - (compareCompanyEmission ?? 0);
  const diffOfCarbonTax = (mycarbonTax ?? 0) - (othercarbonTax ?? 0);
  const positiveFlag = diffOfEmission <= 0 ? true : false;

  return (
    <>
      <div className="space-y-2 mb-7">
        <h1 className="text-xl">📜 Reports</h1>
      </div>

      <div>
        <div className="w-full px-4 mb-4">
          <p className="mb-2">
            Click and check the ranking and compare your company’s performance
            with others!
          </p>
          <div className="font-semibold border-b border-gray-300 flex justify-between">
            <p className="w-[30%]">Rank</p>
            <p className="w-[30%]">name</p>
            <p className="w-[30%]">country</p>
            <p>emissions</p>
          </div>
          {sortedCompanies.map((item, idx) => {
            return (
              <OverviewBox
                key={item.id}
                rank={idx + 1}
                company={item}
                emissions={item.totalEmissions}
                clickable={false}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          <p className="mb-4">
            ✅ The total emissions for your company{" "}
            <span className="font-semibold">{myCompany?.name}</span>, are{" "}
            <span className="font-semibold">{myCompanyEmission}</span> tons and{" "}
            resulting in a carbon tax of{" "}
            <span className="font-semibold">
              {mycarbonTax.toLocaleString()}$
            </span>
            .
          </p>

          <div className="space-y-4 rounded-md p-2 border-2 border-[#1BAD70] bg-[#F6F6F6]">
            <p>
              When compared to{" "}
              <span className="font-semibold">{compareCompany?.name}</span>,{" "}
            </p>
            <p>
              the difference in carbon emissions is{" "}
              <span
                className={`font-semibold ${
                  positiveFlag ? "text-[#1BAD70]" : "text-red-500"
                }`}
              >
                {Math.abs(diffOfEmission)}
              </span>{" "}
              and the difference in carbon tax is{" "}
              <span
                className={`font-semibold ${
                  positiveFlag ? "text-[#1BAD70]" : "text-red-500"
                }`}
              >
                {Math.abs(diffOfCarbonTax).toLocaleString()}
              </span>{" "}
              dollars.
            </p>
            {positiveFlag ? (
              <p>
                👍🏻 Excellent work! Your carbon footprint is lower compared to
                others.
              </p>
            ) : (
              <p>
                👏🏻 Consider taking more steps to lower your carbon footprint.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
