import { Mark } from "./index";
import type { Line, ScaleTime, ScaleOrdinal, ScaleLinear } from "d3";
import type { Values } from "./Line";
import { motion } from "framer-motion";

interface Props {
  lineGenerator: Line<Values>;
  colorScale: ScaleOrdinal<string, string>;
  lineData: Values[];
  color: string;
  xScale: ScaleTime<number, number>;
  yScale: ScaleLinear<number, number>;
  xValue(d: Values): Date;
  yValue(d: Values): number;
  isInView: boolean;
}

const LinePath: React.FC<Props> = ({
  lineGenerator,
  colorScale,
  lineData,
  color,
  xScale,
  yScale,
  xValue,
  yValue,
  isInView,
}) => {
  return (
    <>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 1,
        }}
        fill="none"
        vectorEffect="non-scaling-stroke"
        stroke={colorScale(color)}
        strokeWidth={1.5}
        d={lineGenerator(lineData) ?? undefined}
      />
      {lineData.map((d, index) => {
        return (
          <Mark
            d={d}
            key={index}
            xScale={xScale}
            yScale={yScale}
            color={color}
            colorScale={colorScale}
            xValue={xValue}
            yValue={yValue}
            isInView={isInView}
          />
        );
      })}
    </>
  );
};
export default LinePath;
