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
      <rect
        x={xScale(xValue(d)) + 100}
        y={yScale(yValue(d)) - 12}
        width={4}
        height={4}
        fill="white"
        transform="rotate(45)"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <g transform={`translate(${width / 2}, 0)`}>
        <text
          fontSize={10}
          x={xScale(xValue(d)) + 10}
          y={yScale(yValue(d)) - 40}
          // dx="1.52em"
          textAnchor="end"
          fill="black"
          className="font-light text-[10px]"
        >{`Average Time `}</text>
        <text
          fontSize={10}
          x={xScale(xValue(d)) + 50}
          y={yScale(yValue(d)) - 40}
          // dx="1.52em"
          textAnchor="end"
          fill="black"
          className="font-light text-[10px]"
        >{`${d.value}h`}</text>
        <text
          fontSize={10}
          x={xScale(xValue(d)) + 15}
          y={yScale(yValue(d)) - 20}
          // dx="1.52em"
          textAnchor="end"
          fill="black"
          className="font-light text-[10px]"
        >{`Pulls Requests `}</text>
        <text
          fontSize={10}
          x={xScale(xValue(d)) + 50}
          y={yScale(yValue(d)) - 20}
          // dx="1.52em"
          textAnchor="end"
          fill="black"
          className="font-light text-[10px]"
        >{`${totalPullsBySize[d.size]}`}</text>
      </g>
    </g>
  );
};

export default Tooltip;
