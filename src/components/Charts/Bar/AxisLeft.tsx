import { format } from "d3";
import type { ScaleLinear } from "d3";
const formatNumber = format(",d");

interface Props {
  yScale: ScaleLinear<number, number>;
  innerWidth: number;
}

const AxisLeft: React.FC<Props> = ({ yScale, innerWidth }) => {
  const ticks = yScale.ticks(innerWidth < 400 ? 5 : undefined);

  const borders = (ind: number) => {
    if (ind === 0 || ind === ticks.length - 1) return "0";
    else return "1";
  };
  return (
    <>
      {ticks.map((tickValue, index) => {
        return (
          <g transform={`translate(0,${yScale(tickValue)})`} key={index}>
            <line
              x1={0}
              x2={innerWidth}
              // stroke="#ededed"
              strokeDasharray={borders(index)}
              className="stroke-gray-200 dark:stroke-gray-700"
            ></line>
            <text
              // style={{ fontSize: 0.67 + "rem" }}
              fontSize="0.6rem"
              textAnchor="end"
              alignmentBaseline="middle"
              dx="-0.5em"
              // fill="#6B6C7D"
              className="fill-gray-500 dark:fill-gray-400"
            >
              {formatNumber(tickValue) + "h"}
            </text>
          </g>
        );
      })}
    </>
  );
};
export default AxisLeft;
