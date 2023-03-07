const ColorLegend = ({ colorScale, tickSpacing, tickSize, tickTextOffset }) => {
  return colorScale.domain().map((domainValue, i) => {
    return (
      <g transform={`translate(${i * tickSpacing}, 0)`} key={i}>
        <circle fill={colorScale(domainValue)} r={tickSize} />
        <text x={tickTextOffset} dy=".32em" fontSize={10} fill="#6B6C7D">
          {domainValue}
        </text>
      </g>
    );
  });
};

export default ColorLegend;
