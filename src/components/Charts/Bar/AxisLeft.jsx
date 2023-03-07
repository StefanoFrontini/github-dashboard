import { format } from "d3";
const formatNumber = format(",d");

const AxisLeft = ({ yScale, innerWidth }) => {
  const ticks = yScale.ticks();
  const borders = (ind) => {
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
              stroke="#ededed"
              strokeDasharray={borders(index)}
            ></line>
            <text
              // style={{ fontSize: 0.67 + "rem" }}
              fontSize="0.5rem"
              textAnchor="end"
              alignmentBaseline="middle"
              dx="-0.5em"
              fill="#6B6C7D"
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
