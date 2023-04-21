import useDragAndDropContext from "./useDragAndDropContext";
import { DragEventHandler } from "react";

interface UseDraggableProps {
  data: any;
  type?: string;
  onDragStart?: DragEventHandler<HTMLDivElement>;
  onDragEnd?: DragEventHandler<HTMLDivElement>;
}

function useDraggable(props: UseDraggableProps) {
  const { data, type = "draggable", onDragStart, onDragEnd } = props;
  const { setDraggableType, setDragItemData } = useDragAndDropContext();

  const onDragStartHandler: DragEventHandler<HTMLDivElement> = (e) => {
    setDraggableType(type);
    e.dataTransfer.setData("text", JSON.stringify(data));
    e.dataTransfer.dropEffect = "move";
    setDragItemData(JSON.stringify(data)); // hold the item being dragged inside DragDropContext
    onDragStart && onDragStart(e);
  };

  const onDragEndHandler: DragEventHandler<HTMLDivElement> = (e) => {
    setDraggableType(undefined);
    onDragEnd && onDragEnd(e);
  };

  return {
    eventHandlers: {
      onDragStart: onDragStartHandler,
      onDragEnd: onDragEndHandler,
    },
  };
}

export default useDraggable;
