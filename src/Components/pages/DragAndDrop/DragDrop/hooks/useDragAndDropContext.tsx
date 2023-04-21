import React from "react";
import { DragAndDropContext } from "../DragAndDropProvider";

interface DragAndDropContextType {
  draggableType: string | undefined;
  setDraggableType: React.Dispatch<React.SetStateAction<string | undefined>>;
  dragItemData: any;
  setDragItemData: React.Dispatch<React.SetStateAction<any>>;
}

export function useDragAndDropContext(): DragAndDropContextType {
  const value = React.useContext(DragAndDropContext);
  return value;
}

export default useDragAndDropContext;
