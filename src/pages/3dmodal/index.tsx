import React from "react";
import BaseLayout from "@/layout/BaseLayout";
import PageLayout from "@/layout/PageLayout/PageLayout";
import Modal from "@/Components/pages/3DModel/3DModal";

export default function Index() {
  return (
    <>
      <BaseLayout>
        <PageLayout>
          <Modal />
        </PageLayout>
      </BaseLayout>
    </>
  );
}
