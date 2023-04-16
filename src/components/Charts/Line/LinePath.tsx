import { Mark } from "./index";
import type { Line, ScaleTime, ScaleOrdinal, ScaleLinear } from "d3";
import type { Values } from "./Line";

interface Props {
  lineGenerator: Line<Values>;
  colorScale: ScaleOrdinal<string, string>;
  lineData: Values[];
  color: string;
  xScale: ScaleTime<number, number>;
  yScale: ScaleLinear<number, number>;
  xValue(d: Values): Date;
  yValue(d: Values): number;
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
}) => {
  return (
    <>
      <path
        fill="none"
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
          />
        );
      })}
    </>
  );
};
export default LinePath;
