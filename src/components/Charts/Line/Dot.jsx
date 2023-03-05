const Dot = ({
  d,
  xScale,
  yScale,
  colorScale,
  color,
  // handleOnMouseEnter,
  // handleOnMouseOut,
  xValue,
  yValue,
  hoveredPoint,
  index,
}) => {
  return (
    <>
      <circle
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={4}
        fill={colorScale(color)}
        // fillOpacity={0.4}
        strokeWidth={1}
        stroke="white"
        opacity={index === hoveredPoint?.[3] ? 1 : 0}
        // onMouseEnter={(e) => handleOnMouseEnter(e)}
        // onMouseOut={handleOnMouseOut}
      ></circle>
    </>
  );
};
export default Dot;
