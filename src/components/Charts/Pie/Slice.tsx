import { useState, useEffect } from "react";
import { arc, PieArcDatum, ScaleOrdinal } from "d3";
import { motion, useMotionValue } from "framer-motion";
import { useFlubber } from "../../../hooks/use-flubber";

interface Props {
  index: number;
  animate: any;
  isInView: boolean;
  colorScale: ScaleOrdinal<number, string, never>;
  el: PieArcDatum<Pull>;
  width: number;
  height: number;
}
interface Pull {
  id: number;
  value: number;
  username: string;
  avatar_url: string;
  html_url: string;
}
const MARGIN_X = 150;
const MARGIN_Y = 50;
// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
// const radius = Math.min(width, height) / 2 - margin;
const INFLEXION_PADDING = 20; // space between donut and label inflexion point

const Slice: React.FC<Props> = ({
  el,
  colorScale,
  index,
  animate,
  isInView,
  width,
  height,
}) => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;

  const arcGenerator = arc();

  const sliceInfo = {
    innerRadius: 0,
    outerRadius: radius,
    startAngle: el.startAngle,
    endAngle: el.endAngle,
  };
  const centroid = arcGenerator.centroid(sliceInfo);
  const inflexionInfo = {
    innerRadius: radius + INFLEXION_PADDING,
    outerRadius: radius + INFLEXION_PADDING,
    startAngle: el.startAngle,
    endAngle: el.endAngle,
  };
  const inflexionPoint = arcGenerator.centroid(inflexionInfo);
  const isRightLabel = inflexionPoint[0] > 0;
  const labelPosX = inflexionPoint[0] + 50 * (isRightLabel ? 1 : -1);
  const textAnchor = isRightLabel ? "start" : "end";
  const label = el.data.username + " (" + el.value + ")";
  const slicePath = arcGenerator(sliceInfo);
  const sliceInfoStart = {
    innerRadius: 0,
    outerRadius: radius,
    startAngle: el.startAngle,
    endAngle: el.startAngle,
  };
  const slicePathStart = arcGenerator(sliceInfoStart);
  const path = useFlubber(progress, [slicePathStart ?? "", slicePath ?? ""]);

  useEffect(() => {
    if (path && isInView) {
      animate(progress, pathIndex, {
        duration: 0.3,
        delay: 0.1 * index,
        ease: "easeInOut",
      });
      if (pathIndex === 0) {
        setPathIndex(1);
      }
    }
  }, [path, pathIndex, progress, index, animate, isInView]);
  // const animation = animate(progress, pathIndex, {
  //   duration: 0.8,
  //   ease: "easeInOut",
  // });

  return (
    <g key={el.data.id}>
      <motion.path fill={colorScale(el.data.id)} d={path ?? undefined} />
      {index < 5 && (
        <>
          <motion.circle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 2,
            }}
            cx={centroid[0]}
            cy={centroid[1]}
            r={2}
          />
          <motion.line
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 2,
            }}
            x1={centroid[0]}
            y1={centroid[1]}
            x2={inflexionPoint[0]}
            y2={inflexionPoint[1]}
            stroke={"black"}
            fill={"black"}
          />
          <motion.line
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 2,
            }}
            x1={inflexionPoint[0]}
            y1={inflexionPoint[1]}
            x2={labelPosX}
            y2={inflexionPoint[1]}
            stroke={"black"}
            fill={"black"}
          />
          <motion.text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 2,
            }}
            x={labelPosX + (isRightLabel ? 2 : -2)}
            y={inflexionPoint[1]}
            textAnchor={textAnchor}
            dominantBaseline="middle"
            fontSize={8}
          >
            {label}
          </motion.text>
        </>
      )}
    </g>
  );
};
export default Slice;
