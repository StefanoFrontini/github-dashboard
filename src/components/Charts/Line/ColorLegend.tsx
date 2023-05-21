import type { ScaleOrdinal } from "d3";
import { Label } from "./index";

interface Props {
  tickSpacing: number;
  tickSize: number;
  tickTextOffset: number;
  colorScale: ScaleOrdinal<string, string>;
  title: string;
}

const ColorLegend: React.FC<Props> = ({
  colorScale,
  tickSpacing,
  tickSize,
  tickTextOffset,
  title,
}) => {
  const labels =
    title === "Pull Requests"
      ? colorScale.domain()
      : colorScale.domain().filter((el) => el !== "Merged");
  return (
    <>
      {labels.map((label, i) => {
        return (
          <g
            key={i}
            className="mt-4"
            transform={`translate(${i * tickSpacing}, 0)`}
          >
            <Label
              label={label}
              colorScale={colorScale}
              tickSize={tickSize}
              tickTextOffset={tickTextOffset}
            />
          </g>
        );
      })}
    </>
  );
};

export default ColorLegend;
