import { useMemo } from "react";
import useDragAndDropContext from "./useDragAndDropContext";

interface DroppableProps {
  onDragEnter?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (data: any, event: React.DragEvent<HTMLDivElement>) => void;
  acceptedTypes?: string | string[];
}

interface UseDroppableResult {
  eventHandlers: {
    onDragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
    onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  };
  isDragging: boolean;
}

function useDroppable(props: DroppableProps): UseDroppableResult {
  const { onDragEnter, onDragLeave, onDragOver, onDrop, acceptedTypes } = props;
  const { draggableType } = useDragAndDropContext();

  // check current item-type being dragged with acceptedTypes
  const isSupportedType = Array.isArray(acceptedTypes)
    ? draggableType !== undefined && acceptedTypes.includes(draggableType)
    : acceptedTypes === draggableType;

  const eventHandlers = useMemo(() => {
    return {
      onDragEnter(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        isSupportedType && onDragEnter && onDragEnter(e);
      },
      onDragLeave(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        isSupportedType && onDragLeave && onDragLeave(e);
      },
      onDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        isSupportedType && onDragOver && onDragOver(e);
      },
      onDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        // onDrop grab the item-information & pass to props.onDrop(data)
        const data = JSON.parse(e.dataTransfer.getData("text"));
        isSupportedType && onDrop && onDrop(data, e);
      },
    };
  }, [isSupportedType, onDragEnter, onDragLeave, onDragOver, onDrop]);

  return {
    eventHandlers: eventHandlers,
    isDragging: isSupportedType,
  };
}

export default useDroppable;
