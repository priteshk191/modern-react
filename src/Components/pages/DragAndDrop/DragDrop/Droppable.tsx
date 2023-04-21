import React, { useEffect, ReactNode } from "react";
import PropTypes from "prop-types";
import { useDroppable } from "./hooks";

interface DroppableProps {
  className?: string;
  onDragEnter?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void; // updated signature
  onDragOver?: () => void;
  onDrop: (data: any, e: any) => void;
  onDragChange?: (isDragging: boolean) => void;
  style?: object | false;
  acceptedTypes?: string | string[];
  children?: React.ReactNode;
}

function Droppable(props: DroppableProps) {
  const { onDragChange } = props;
  const { eventHandlers, isDragging } = useDroppable(props);

  // whenever isDragging is changed invoke onDropChange()
  useEffect(() => {
    onDragChange && onDragChange(isDragging);
  }, [isDragging, onDragChange]);

  return (
    <div
      className={props.className}
      style={props.style !== false ? { ...props.style } : undefined}
      {...eventHandlers}
    >
      {props.children}
    </div>
  );
}

const { string, object, arrayOf, oneOf } = PropTypes;

Droppable.propTypes = {
  className: string,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func.isRequired,
  onDragChange: PropTypes.func,
  style: PropTypes.oneOfType([object, oneOf([false])]),
  acceptedTypes: PropTypes.oneOfType([string, arrayOf(string)]),
  children: PropTypes.node,
};

Droppable.defaultProps = {
  onDragChange: noop,
  onDragEnter: noop,
  onDragLeave: noop,
  onDragOver: noop,
};

export default Droppable;

function noop() {}
