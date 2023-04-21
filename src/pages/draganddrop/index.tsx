import React from "react";
import BaseLayout from "@/layout/BaseLayout";
import PageLayout from "@/layout/PageLayout/PageLayout";
import DragAndDrop from "@/Components/pages/DragAndDrop/DragAndDrop";
import DragAndDropProvider from "@/Components/pages/DragAndDrop/DragDrop/DragAndDropProvider";

export default function Index(): JSX.Element {
  return (
    <>
      <BaseLayout>
        <PageLayout>
          <DragAndDropProvider>
            <DragAndDrop />
          </DragAndDropProvider>
        </PageLayout>
      </BaseLayout>
    </>
  );
}
