import type { ScaleOrdinal } from "d3";

interface Props {
  tickSize: number;
  tickTextOffset: number;
  colorScale: ScaleOrdinal<string, string>;
  label: string;
}
const Label: React.FC<Props> = ({
  tickSize,
  tickTextOffset,
  colorScale,
  label,
}) => {
  return (
    <>
      <circle fill={colorScale(label)} r={tickSize} />
      <text
        className="text-xl sm:text-sm"
        x={tickTextOffset}
        dy=".32em"
        fill="#6B6C7D"
      >
        {label}
      </text>
    </>
  );
};
export default Label;
