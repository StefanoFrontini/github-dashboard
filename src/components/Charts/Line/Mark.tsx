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
      <circle
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={3}
        fill={colorScale(color)}
        strokeWidth={1}
      ></circle>
    </>
  );
};
export default Mark;
