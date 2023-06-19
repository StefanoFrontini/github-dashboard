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
  const filteredHoveredPoint = () => {
    if (title === "Pull Requests") return hoveredPoint;
    const newTooltipValues = hoveredPoint?.tooltipValues?.filter(
      (el) => el[0] !== "Merged"
    );
    const newHoveredPoint = {
      ...hoveredPoint,
      tooltipValues: newTooltipValues,
    };
    return newHoveredPoint;
  };
  return (
    <g
      transform={`translate(${translateTooltip() ?? 0}, 0)`}
      style={{ pointerEvents: "none" }}
    >
      <rect
        className="drop-shadow fill-white dark:fill-slate-900 "
        width="120"
        height="100"
      />
      <g transform={`translate(10, 0)`}>
        <text dy="2em" className="fill-black dark:fill-gray-300" fontSize="10">
          {title}
        </text>
        <line
          strokeWidth="1"
          className="stroke-gray-300 dark:stroke-gray-700"
          y2={30}
          y1={30}
          x1={-10}
          x2={110}
        ></line>
        {filteredHoveredPoint().tooltipValues?.map((el, i: number) => {
          return (
            <g key={el[0] as string} transform={`translate(0,${i * 20 + 47})`}>
              <circle cy={-3} cx={3} fill={colorScale(el[0] as string)} r={3} />
              <text
                fontSize={10}
                dx="1.52em"
                className="fill-black dark:fill-gray-300"
              >{`${el[0]}`}</text>
              <text
                className="fill-black dark:fill-gray-300"
                fontSize={10}
                dx="7em"
              >{`${typeof el[1] === "object" && el[1].value}`}</text>
            </g>
          );
        })}
      </g>
    </g>
  );
};

export default Tooltip;
