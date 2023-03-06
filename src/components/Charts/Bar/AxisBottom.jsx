const AxisBottom = ({ xScale, innerHeight, width }) => {
  const offset = 10;
  return (
    <>
      {xScale.domain().map((domainValue, index) => {
        return (
          <g
            transform={`translate(${xScale(domainValue) + width / 2}, ${
              innerHeight + offset
            })`}
            key={index}
          >
            <text
              alignmentBaseline="hanging"
              textAnchor="middle"
              fontSize="0.62rem"
              className="capitalize"
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
