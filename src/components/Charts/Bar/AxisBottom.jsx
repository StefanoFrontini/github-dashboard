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
              fontSize="0.5rem"
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
