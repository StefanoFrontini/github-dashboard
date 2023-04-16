import type { ScaleOrdinal } from "d3";
import type { HoveredPoint } from "./Line";

interface Props {
  hoveredPoint: HoveredPoint;
  colorScale: ScaleOrdinal<string, string>;
  midPointX: number;
  title: string;
}

const Tooltip: React.FC<Props> = ({
  hoveredPoint,
  colorScale,
  midPointX,
  title,
}) => {
  const translateTooltip = () => {
    if (hoveredPoint.i) {
      if (hoveredPoint.i < midPointX) return 20;
      if (hoveredPoint.i >= midPointX) return -20 - 120;
    }
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
        {hoveredPoint.tooltipValues?.map((el, i: number) => {
          return (
            <g key={el[0] as string} transform={`translate(0,${i * 20 + 47})`}>
              <circle cy={-3} cx={3} fill={colorScale(el[0] as string)} r={3} />
              <text fontSize={10} dx="1.52em" fill="#282934">{`${el[0]}`}</text>
              <text fontSize={10} dx="7em" fill="#282934">{`${
                typeof el[1] === "object" && el[1].value
              }`}</text>
            </g>
          );
        })}
      </g>
    </g>
  );
};

export default Tooltip;
