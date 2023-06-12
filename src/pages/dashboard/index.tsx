import React from "react";
import BaseLayout from "@/layout/BaseLayout";
import PageLayout from "@/layout/PageLayout/PageLayout";
import Dashboard from "@/Components/pages/Dashboard/Dashboard";

export default function index() {
  return (
    <>
      <BaseLayout>
        <PageLayout>
          <Dashboard />
        </PageLayout>
      </BaseLayout>
    </>
  );
}
