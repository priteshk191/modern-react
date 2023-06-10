import React from "react";
import BaseLayout from "@/layout/BaseLayout";
import PageLayout from "@/layout/PageLayout/PageLayout";
import Pagination from "@/Components/pages/Pagination/Pagination";

export default function Index() {
  
  // Sample data array
  const sampleData = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 3, name: "Item 3" },
  ];

  return (
    <>
      <BaseLayout>
        <PageLayout>
          <Pagination data={sampleData} itemsPerPage={5} pagesToShow={5} />
        </PageLayout>
      </BaseLayout>
    </>
  );
}
