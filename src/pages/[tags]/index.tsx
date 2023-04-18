import Dashboard from "@/Components/Dashboard/Dashboard";
import { useRouter } from "next/router";
import React from "react";

const Tags = () => {
  const router = useRouter();
  const { tags } = router.query;

  return (
    <>
      <Dashboard />
    </>
  );
};
export default Tags;
