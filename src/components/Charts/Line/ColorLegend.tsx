import type { ScaleOrdinal } from "d3";
import { Label } from "./index";

interface Props {
  tickSpacing: number;
  tickSize: number;
  tickTextOffset: number;
  colorScale: ScaleOrdinal<string, string>;
}

const ColorLegend: React.FC<Props> = ({
  colorScale,
  tickSpacing,
  tickSize,
  tickTextOffset,
}) => {
  const labels = colorScale.domain();
  return (
    <>
      {labels.map((label, i) => {
        return (
          <g key={i} transform={`translate(${i * tickSpacing}, 0)`}>
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
