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
      <text x={tickTextOffset} dy=".32em" fontSize={10} fill="#6B6C7D">
        {label}
      </text>
    </>
  );
};
export default Label;
