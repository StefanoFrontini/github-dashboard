import { format } from "d3";
import type { ScaleLinear } from "d3";

const formatNumber = format(",d");

interface Props {
  yScale: ScaleLinear<number, number>;
  innerWidth: number;
  ticks: number;
}

const AxisLeft: React.FC<Props> = ({ yScale, innerWidth, ticks }) => {
  const ticksLeft = yScale.ticks(ticks);

  const borders = (ind: number) => {
    if (ind === 0 || ind === ticksLeft.length - 1) return "0";
    else return "1";
  };

  return (
    <>
      {ticksLeft.map((tickValue, index) => {
        return (
          <g transform={`translate(0,${yScale(tickValue)})`} key={index}>
            <line
              x1={0}
              x2={innerWidth}
              stroke="#ededed"
              strokeDasharray={borders(index)}
            ></line>
            <text
              // style={{ fontSize: 0.67 + "rem" }}
              fontSize="0.6rem"
              textAnchor="end"
              alignmentBaseline="middle"
              dx="-0.5em"
              fill="#6B6C7D"
            >
              {formatNumber(tickValue)}
            </text>
          </g>
        );
      })}
    </>
  );
};
export default AxisLeft;
