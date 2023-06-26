import { arc, PieArcDatum, ScaleOrdinal } from "d3";
import { motion } from "framer-motion";

interface Props {
  index: number;
  // isInView: boolean;
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
  // isInView,
  width,
  height,
}) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, delay: index * 0.2 },
    },
  };

  return (
    <motion.g
      key={el.data.id}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <path fill={colorScale(el.data.id)} d={slicePath ?? undefined} />
      {index < 5 && (
        <>
          <motion.circle
            cx={centroid[0]}
            cy={centroid[1]}
            r={2}
            className="fill-black dark:fill-gray-300"
          />
          <motion.line
            x1={centroid[0]}
            y1={centroid[1]}
            x2={inflexionPoint[0]}
            y2={inflexionPoint[1]}
            className="stroke-black dark:stroke-gray-300"
            // stroke={"black"}
          />
          <motion.line
            x1={inflexionPoint[0]}
            y1={inflexionPoint[1]}
            x2={labelPosX}
            y2={inflexionPoint[1]}
            className="stroke-black dark:stroke-gray-300"
            // stroke={"black"}
            // fill={"black"}
          />
          <motion.text
            x={labelPosX + (isRightLabel ? 2 : -2)}
            y={inflexionPoint[1]}
            textAnchor={textAnchor}
            dominantBaseline="middle"
            fontSize={8}
            className="fill-black dark:fill-gray-300"
          >
            {label}
          </motion.text>
        </>
      )}
    </motion.g>
  );
};
export default Slice;
