import React from "react";
import BaseLayout from "@/layout/BaseLayout";
import Dashboard from "@/Components/pages/Dashboard/Dashboard";

export default function index() {
  return (
    <>
      <BaseLayout>
        <Dashboard />
      </BaseLayout>
    </>
  );
}
