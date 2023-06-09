import React, { useRef, useState } from "react";
import cn from "classnames";

import Draggable from "../DragDrop/Draggable";
import Droppable from "../DragDrop/Droppable";
import styles from "../draganddrop.module.scss";
import useDragAndDropContext from "../DragDrop/hooks/useDragAndDropContext";

type TeamMember = {
  id: string;
  // thumb: string;
  name: string;
  teamId: string;
};

type Props = {
  teamId: string;
  members: TeamMember[];
  onDrop: (data: TeamMember, teamId: string) => void;
  color: string;
  bgColor: string;
};

enum DragDropTypes {
  CARD = "CARD",
}

function TeamMembers({ teamId, members, onDrop, color, bgColor }: Props) {
  const [isHoveringDropzone, setIsHoveringDropzone] = useState(false);
  const dragCounter = useRef(0);
  const { dragItemData } = useDragAndDropContext();

  // fires when a dragged item enters a valid drop target
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // needed for IE
    dragCounter.current++;
    // does item being dragged, belongs to same team
    if (dragItemData.teamId === teamId) {
      return;
    }
    setIsHoveringDropzone(true);
  };

  // fires when a dragged item leaves a valid drop target.
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setIsHoveringDropzone(false);
    }
  };
  const onDropHandler = (data: any, e: any) => {
    dragCounter.current = 0;
    setIsHoveringDropzone(false);
    onDrop(data, teamId);
  };

  return (
    <div className={styles.teamWrapper}>
      <Droppable
        acceptedTypes={[DragDropTypes.CARD]}
        onDrop={onDropHandler}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        className={cn("droppable", {
          hovering: isHoveringDropzone,
        })}
      >
        <div className={styles.teamBodyWrapper}>
          <h2>
            {teamId} ({members.length})
          </h2>
          <div>
            {isHoveringDropzone && <span className={styles.loader}></span>}
          </div>
          <ul className={styles.characters}>
            {members.map((member, index) => {
              return (
                <Draggable
                  key={member.id}
                  type={DragDropTypes.CARD}
                  data={member}
                  onDragStart={(e: any) => console.log("onDragStart", e)}
                >
                  <li
                    key={member.id}
                    style={{ color: color, backgroundColor: bgColor }}
                  >
                    <div className={styles.charactersthumb}>
                      {/* <img src={member.thumb} alt={`${member.name} Thumb`} /> */}
                    </div>
                    <p>{member.name}</p>
                  </li>
                </Draggable>
              );
            })}
          </ul>
        </div>
      </Droppable>
    </div>
  );
}

export default TeamMembers;
export { DragDropTypes };
