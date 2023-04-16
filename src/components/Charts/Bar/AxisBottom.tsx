import type { ScaleBand } from "d3";

interface Props {
  xScale: ScaleBand<string>;
  innerHeight: number;
  width: number;
}
const AxisBottom: React.FC<Props> = ({ xScale, innerHeight, width }) => {
  const offset = 10;
  return (
    <>
      {xScale.domain().map((domainValue, index) => {
        return (
          <g
            transform={`translate(${xScale(domainValue) ?? 0 + width / 2}, ${
              innerHeight + offset
            })`}
            key={index}
          >
            <text
              alignmentBaseline="hanging"
              textAnchor="middle"
              fontSize="0.6rem"
              className="capitalize"
              fill="#6B6C7D"
            >
              {domainValue}
            </text>
          </g>
        );
      })}
    </>
  );
};

export default AxisBottom;
