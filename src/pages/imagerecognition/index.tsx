import React from "react";
import BaseLayout from "@/layout/BaseLayout";
import PageLayout from "@/layout/PageLayout/PageLayout";
import ImageRecognition from "@/Components/pages/ImageRecognition/ImageRecognition";

export default function Index() {
  return (
    <>
      <BaseLayout>
        <PageLayout>
          <ImageRecognition />
        </PageLayout>
      </BaseLayout>
    </>
  );
}
