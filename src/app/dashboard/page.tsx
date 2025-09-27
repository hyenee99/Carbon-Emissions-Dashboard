"use client";
import { useCompanyStore } from "@/stores/useCompanyStore";

export default function Dashboard() {
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return (
    <>
      <div className="text-xl flex flex-col gap-3">
        <p>Hello!🤚🏻 </p>
        <p>
          View <span className="font-semibold">{selectedCompany.name}</span> 's
          carbon emissions at a glance!
        </p>
      </div>
    </>
  );
}
