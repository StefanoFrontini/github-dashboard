// import { timeFormat } from "d3";
// import { format } from "d3";
// const formatNumber = format(",d");

// const formatTime = timeFormat("%B");

const Tooltip = ({ hoveredPoint, colorScale, midPointX, title }) => {
  const translateTooltip = () => {
    if (hoveredPoint[3] < midPointX) return 20;
    if (hoveredPoint[3] >= midPointX) return -20 - 120;
  };
  return (
    <g
      transform={`translate(${translateTooltip() ?? 0}, 0)`}
      style={{ pointerEvents: "none" }}
    >
      <rect className="drop-shadow " fill="white" width="120" height="100" />
      <g transform={`translate(10, 0)`}>
        <text dy="2em" fill="black" fontSize="10">
          {title}
        </text>
        <line
          style={{
            stroke: "#EEEEF2",
            strokeWidth: "1",
          }}
          y2={30}
          y1={30}
          x1={-10}
          x2={110}
        ></line>
        {hoveredPoint[2]?.map((el, i) => {
          // if (hoveredValue?.includes(el[0])) return;
          return (
            <g key={el[0]} transform={`translate(0,${i * 20 + 47})`}>
              <circle cy={-3} cx={3} fill={colorScale(el[0])} r={3} />
              <text fontSize={10} dx="1.52em" fill="#282934">{`${el[0]}`}</text>
              <text
                fontSize={10}
                dx="7em"
                fill="#282934"
              >{`${el[1].value}`}</text>
            </g>
          );
        })}
      </g>
    </g>
  );
};

export default Tooltip;
