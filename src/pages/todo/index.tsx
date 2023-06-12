import React from "react";
import BaseLayout from "@/layout/BaseLayout";
import PageLayout from "@/layout/PageLayout/PageLayout";
import TodoList from "@/Components/pages/ToDo/TodoList";

export default function Index() {
  return (
    <>
      <BaseLayout>
        <PageLayout>
          <TodoList />
        </PageLayout>
      </BaseLayout>
    </>
  );
}
