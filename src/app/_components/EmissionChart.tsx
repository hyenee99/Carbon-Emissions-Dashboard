"use client";
import { fetchPosts } from "@/lib/api";
import { useCompanyStore } from "@/stores/useCompanyStore";
import { GhgEmission, Post } from "@/types/types";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomActiveDot from "./CustomActiveDot";

interface chartProps {
  data: GhgEmission[];
}
export default function EmissionChart({ data }: chartProps) {
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  const [posts, setPosts] = useState<Post[]>([]);
  const [detail, setDetail] = useState<Post | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadPosts();
  }, []);

  const companyPost = posts.filter(
    (post) => post.resourceUid === selectedCompany?.id
  );

  return (
    <div className="w-full flex mb-3 gap-4">
      <ResponsiveContainer width="70%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="yearMonth" style={{ fontSize: "0.8rem" }} />
          <YAxis style={{ fontSize: "0.7rem" }} />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <Line
            type="linear"
            dataKey="emissions"
            stroke="#0180DA"
            activeDot={(dotProps) => (
              <CustomActiveDot
                {...dotProps} // cx, cy, payload 등 모두 전달
                onClick={(payload) => {
                  const clickedDate = payload.yearMonth;
                  const activeDotDetail = companyPost.find(
                    (d) => d.dateTime === clickedDate
                  );
                  if (activeDotDetail) {
                    setDetail(activeDotDetail);
                  } else {
                    setDetail(null);
                  }
                }}
              />
            )}
          />{" "}
        </LineChart>
      </ResponsiveContainer>
      <div className="w-[30%]">
        <h1 className="text-xl mb-2 text-[#1BAD70]">✍🏻 Posts</h1>
        {detail ? (
          <div className="flex flex-col gap-2">
            <p>{detail.dateTime}</p>
            <p className="font-semibold">{detail.title}</p>
            <p>{detail.content}</p>
          </div>
        ) : (
          <p>
            No detailed information available. Try clicking on a dot in the
            chart to see more details.
          </p>
        )}
      </div>
    </div>
  );
}
