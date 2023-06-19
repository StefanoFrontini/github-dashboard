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
        className="fill-gray-700 dark:fill-gray-300 text-[10px]"
        x={tickTextOffset}
        dy=".32em"
      >
        {label}
      </text>
    </>
  );
};
export default Label;
