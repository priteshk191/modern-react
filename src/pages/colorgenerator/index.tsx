import React from "react";
import BaseLayout from "@/layout/BaseLayout";
import PageLayout from "@/layout/PageLayout/PageLayout";
import ColorGenerator from "@/Components/pages/ColorGenerator/ColorGenerator";

export default function Index() {
  return (
    <>
      <BaseLayout>
        <PageLayout>
          <ColorGenerator />
        </PageLayout>
      </BaseLayout>
    </>
  );
}
