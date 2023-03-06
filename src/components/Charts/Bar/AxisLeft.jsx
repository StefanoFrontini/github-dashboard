import { format } from "d3";
const formatNumber = format(",d");

const AxisLeft = ({ yScale, innerWidth }) => {
  const ticks = yScale.ticks(6);
  return (
    <>
      {ticks.map((tickValue, index) => {
        return (
          <g transform={`translate(0,${yScale(tickValue)})`} key={index}>
            <line
              x1={0}
              x2={innerWidth}
              stroke="#ededed"
              strokeDasharray="1"
            ></line>
            <text
              // style={{ fontSize: 0.67 + "rem" }}
              fontSize="0.67rem"
              textAnchor="end"
              alignmentBaseline="middle"
              dx="-0.5em"
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
