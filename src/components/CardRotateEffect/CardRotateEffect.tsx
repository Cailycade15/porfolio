import React, { ReactNode } from "react";
import styles from "./CardRotateEffect.module.css";

interface Card3DProps {
  count: number;
  deg?: number;
  children?: ReactNode[] | ReactNode;
}

const CardRotateEffect: React.FC<Card3DProps> = ({ count, deg = 200, children }) => {
  const divs = Array.from({ length: count }, (_, i) => i);
  const totalAnimationDuration = 20; // seconds

  return (
    <div className={styles.card3d}>
      {divs.map((index) => {
        const rotationDeg = (360 / count) * index;
        const animationDelay = -(totalAnimationDuration / count) * index;

        const childContent = Array.isArray(children)
          ? children[index] || null
          : null;

        return (
          <div
            key={index}
            className={styles.childDiv}
            style={{
              transform: `translate(-50%, -50%) rotateY(${rotationDeg}deg) translateZ(${deg}px)`, //translateZ это диаметр круга
              animationDelay: `${animationDelay}s`,
            }}
          >
            {childContent}
          </div>
        );
      })}
    </div>
  );
};

export default CardRotateEffect;
