"use client";
import { fetchCompanies } from "@/lib/api";
import { useCompanyStore } from "@/stores/useCompanyStore";
import { Company } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const validCompanies = ["c1", "c2", "c3", "c4", "c5", "c6"];
  const setMyCompany = useCompanyStore((state) => state.setMyCompany);
  const setSelectedCompany = useCompanyStore(
    (state) => state.setSelectedCompany
  );
  const router = useRouter();

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

  const myCompany = companies.find((company) => company.id === searchTerm);

  const handleButtonClick = () => {
    if (validCompanies.includes(searchTerm.toLowerCase())) {
      setError("");
      if (myCompany) {
        setMyCompany(myCompany);
        setSelectedCompany(myCompany);
      }
      router.push("/dashboard");
    } else {
      setError("Invalid company ID. Please enter only IDs from c1 to c6.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleButtonClick();
  };

  return (
    <div className=" flex flex-col gap-4 justify-center items-center h-full">
      <h1 className="text-2xl">Welcome, Please enter your company's ID!</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[40%] flex justify-center gap-4"
      >
        <input
          type="text"
          placeholder="ex) c1, c2, c3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mb-4 rounded-md w-[60%] h-full"
        />
        <button
          type="submit"
          className="w-[30%] rounded-md bg-[#0180DA] text-white cursor-pointer hover:bg-[#44b1ff]"
        >
          완료
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
