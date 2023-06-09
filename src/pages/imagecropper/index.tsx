import React from "react";
import BaseLayout from "@/layout/BaseLayout";
import PageLayout from "@/layout/PageLayout/PageLayout";
import ImageCropper from "@/Components/pages/ImageCropper/ImageCropper";

export default function Index() {
  return (
    <>
      <BaseLayout>
        <PageLayout>
          <ImageCropper />
        </PageLayout>
      </BaseLayout>
    </>
  );
}
