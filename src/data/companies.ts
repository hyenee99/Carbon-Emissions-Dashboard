import { Company } from "@/types/types";

export const companies: Company[] = [
  {
    id: "c1",
    name: "Acme Corp",
    country: "US",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 120 },
      { yearMonth: "2024-02", source: "diesel", emissions: 110 },
      { yearMonth: "2024-03", source: "gasoline", emissions: 95 },
      { yearMonth: "2024-04", source: "diesel", emissions: 100 },
      { yearMonth: "2024-05", source: "diesel", emissions: 80 },
    ],
  },
  {
    id: "c2",
    name: "Globex",
    country: "DE",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 80 },
      { yearMonth: "2024-02", source: "lpg", emissions: 105 },
      { yearMonth: "2024-03", source: "diesel", emissions: 100 },
      { yearMonth: "2024-04", source: "lpg", emissions: 70 },
      { yearMonth: "2024-05", source: "diesel", emissions: 120 },
    ],
  },
  {
    id: "c3",
    name: "Toyota",
    country: "JP",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 90 },
      { yearMonth: "2024-02", source: "diesel", emissions: 85 },
      { yearMonth: "2024-03", source: "electric", emissions: 75 },
      { yearMonth: "2024-04", source: "gasoline", emissions: 80 },
      { yearMonth: "2024-05", source: "diesel", emissions: 70 },
    ],
  },
];
