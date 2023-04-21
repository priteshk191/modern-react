import React from "react";
import PropTypes from "prop-types";
import { useDraggable } from "./hooks";

interface DraggableProps {
  className?: string;
  data: any;
  disabled?: boolean;
  onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (event: React.DragEvent<HTMLDivElement>) => void;
  style?: string | React.CSSProperties | false;
  type?: string;
  children?: React.ReactNode;
}

function Draggable(props: DraggableProps) {
  const { eventHandlers } = useDraggable(props);

  return (
    <div {...eventHandlers} draggable={true}>
      {props.children}
    </div>
  );
}

Draggable.propTypes = {
  className: PropTypes.string,
  data: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([false]),
    PropTypes.object,
  ]),
  type: PropTypes.string,
  children: PropTypes.node,
};

Draggable.defaultProps = {
  disabled: false,
  onDragEnd: noop,
  onDragStart: noop,
};

function noop() {}

export default Draggable;
