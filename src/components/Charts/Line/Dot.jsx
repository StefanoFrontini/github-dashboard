const Dot = ({
  d,
  xScale,
  yScale,
  colorScale,
  color,
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
        r={3}
        fill={colorScale(color)}
        strokeWidth={1}
        opacity={index === hoveredPoint?.[3] ? 1 : 0}
      ></circle>
    </>
  );
};
export default Dot;
