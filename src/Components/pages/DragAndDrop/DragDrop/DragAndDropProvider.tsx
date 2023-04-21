import React, { useMemo, useState } from "react";

interface DragAndDropContextInterface {
  draggableType: string | undefined;
  setDraggableType: React.Dispatch<React.SetStateAction<string | undefined>>;
  dragItemData: Record<string, any> | undefined;
  setDragItemData: React.Dispatch<
    React.SetStateAction<Record<string, any> | undefined>
  >;
}

export const DragAndDropContext =
  React.createContext<DragAndDropContextInterface>({
    draggableType: undefined,
    setDraggableType: () => {},
    dragItemData: undefined,
    setDragItemData: () => {},
  });

interface DragAndDropProviderProps {
  children?: React.ReactNode;
}

const DragAndDropProvider: React.FC<DragAndDropProviderProps> = (props) => {
  // current item-type that is being dragged
  const [draggableType, setDraggableType] = useState<string | undefined>();
  const [dragItemData, setDragItemData] = useState<string | undefined>();

  const value = useMemo(() => {
    return {
      draggableType,
      setDraggableType,
      dragItemData: dragItemData && JSON.parse(dragItemData),
      setDragItemData: (data: Record<string, any> | undefined) =>
        setDragItemData(data ? JSON.stringify(data) : undefined),
    };
  }, [draggableType, dragItemData]);

  return (
    <DragAndDropContext.Provider value={value}>
      {props.children}
    </DragAndDropContext.Provider>
  );
};

export default DragAndDropProvider;
