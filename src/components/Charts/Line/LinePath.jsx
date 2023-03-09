import Dot from "./Dot";

const LinePath = ({
  lineGenerator,
  colorScale,
  lineData,
  color,
  xScale,
  yScale,
  xValue,
  yValue,
  hoveredPoint,
}) => {
  return (
    <>
      <path
        fill="none"
        stroke={colorScale(color)}
        strokeWidth={1.5}
        d={lineGenerator(lineData) ?? undefined}
      />
      {lineData.map((d, index) => {
        return (
          <Dot
            d={d}
            key={index}
            xScale={xScale}
            yScale={yScale}
            color={color}
            colorScale={colorScale}
            xValue={xValue}
            yValue={yValue}
            hoveredPoint={hoveredPoint}
            index={index}
          />
        );
      })}
    </>
  );
};
export default LinePath;
