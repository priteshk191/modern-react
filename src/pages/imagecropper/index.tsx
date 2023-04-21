import React from "react";
import BaseLayout from "@/layout/BaseLayout";
import { ImageCropper } from "@/Components/pages/ImageCropper/ImageCropper";
import PageLayout from "@/layout/PageLayout/PageLayout";

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
