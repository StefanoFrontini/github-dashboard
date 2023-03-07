// import { timeFormat } from "d3";
// import { format } from "d3";
// const formatNumber = format(",d");

// const formatTime = timeFormat("%B");

const Tooltip = ({
  d,
  xScale,
  yScale,
  totalPullsBySize,
  hoveredPoint,
  width,
  xValue,
  yValue,
}) => {
  return (
    <g opacity={hoveredPoint === d.size ? 1 : 0}>
      <rect
        x={xScale(xValue(d)) + width / 6}
        y={yScale(yValue(d)) - 60}
        width={width / 1.5}
        height={50}
        fill="white"
        className="drop-shadow"
      />
      <g transform={`translate(${width / 2}, 0)`}>
        <text
          fontSize={10}
          x={xScale(xValue(d))}
          y={yScale(yValue(d)) - 40}
          // dx="1.52em"
          textAnchor="middle"
          fill="black"
          className="font-light text-[10px]"
        >{`Average Time ${d.value}h`}</text>
        <text
          fontSize={10}
          x={xScale(xValue(d))}
          y={yScale(yValue(d)) - 20}
          // dx="1.52em"
          textAnchor="middle"
          fill="black"
          className="font-light text-[10px]"
        >{`Pulls Requests ${totalPullsBySize[d.size]}`}</text>
      </g>
    </g>
  );
};

export default Tooltip;
