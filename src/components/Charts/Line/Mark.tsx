import type { ScaleOrdinal, ScaleTime, ScaleLinear } from "d3";
import type { Values } from "./Line";

interface Props {
  d: Values;
  colorScale: ScaleOrdinal<string, string>;
  color: string;
  xScale: ScaleTime<number, number>;
  yScale: ScaleLinear<number, number>;
  xValue(d: Values): Date;
  yValue(d: Values): number;
  isInView: boolean;
}

const Mark: React.FC<Props> = ({
  d,
  xScale,
  yScale,
  colorScale,
  color,
  xValue,
  yValue,
}) => {
  return (
    <>
      <path
        d={`M ${xScale(xValue(d))} ${yScale(yValue(d))} l 0.0001 0`}
        // vectorEffect="non-scaling-stroke"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        stroke={colorScale(color)}
      />
      {/* <motion.circle */}
      {/*   initial={{ opacity: 0 }} */}
      {/*   animate={{ opacity: isInView ? 1 : 0 }} */}
      {/*   transition={{ duration: 1 }} */}
      {/*   cx={xScale(xValue(d))} */}
      {/*   cy={yScale(yValue(d))} */}
      {/*   r={4} */}
      {/*   fill={colorScale(color)} */}
      {/*   strokeWidth={1} */}
      {/*   vectorEffect="non-scaling-stroke" */}
      {/* ></motion.circle> */}
    </>
  );
};
export default Mark;
