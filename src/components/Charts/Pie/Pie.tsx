import {
  pie,
  arc,
  // scaleSequential,
  scaleOrdinal,
  interpolatePurples,
  quantize,
} from "d3";
import { useGithubContext } from "../../../context/context";

interface Pull {
  id: number;
  value: number;
  username: string;
  avatar_url: string;
  html_url: string;
}

interface PullsAggregation {
  [key: string]: Pull;
}
// set the dimensions and margins of the graph
const width = 400,
  height = 200;
// margin = 180;

const MARGIN_X = 150;
const MARGIN_Y = 50;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
// const radius = Math.min(width, height) / 2 - margin;
const INFLEXION_PADDING = 20; // space between donut and label inflexion point
const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;

const Pie = () => {
  const { pulls } = useGithubContext();
  const aggregateContributors = pulls.reduce((acc: PullsAggregation, item) => {
    const { user } = item;
    if (!user) return acc;
    const { id, login, avatar_url, html_url } = user;
    if (!acc[id]) {
      acc[id] = {
        id,
        value: 1,
        username: login,
        avatar_url,
        html_url,
      };
    } else {
      acc[id] = { ...acc[id], value: acc[id].value + 1 };
    }
    return acc;
  }, {});
  const contributors = Object.values(aggregateContributors);
  console.log(contributors);
  const arcs = pie<Pull>().value((d) => d.value)(contributors);
  const names = contributors.map((el) => el.id);
  const colors = quantize(interpolatePurples, names.length);
  const colorScale = scaleOrdinal(names, colors);
  // const colorScale = scaleSequential(interpolateYlOrRd).domain([
  //   0,
  //   max(contributors, (d) => d.value),
  // ] as [number, number]);
  console.log(arcs);
  const arcGenerator = arc();

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((el) => {
          const sliceInfo = {
            innerRadius: 0,
            outerRadius: radius,
            startAngle: el.startAngle,
            endAngle: el.endAngle,
          };
          const centroid = arcGenerator.centroid(sliceInfo);
          const inflexionInfo = {
            innerRadius: radius + INFLEXION_PADDING,
            outerRadius: radius + INFLEXION_PADDING,
            startAngle: el.startAngle,
            endAngle: el.endAngle,
          };
          const inflexionPoint = arcGenerator.centroid(inflexionInfo);
          const isRightLabel = inflexionPoint[0] > 0;
          const labelPosX = inflexionPoint[0] + 50 * (isRightLabel ? 1 : -1);
          const textAnchor = isRightLabel ? "start" : "end";
          const label = el.data.username + " (" + el.value + ")";
          const slicePath = arcGenerator(sliceInfo);

          return (
            <g>
              <path
                key={el.data.id}
                fill={colorScale(el.data.id)}
                d={slicePath ?? undefined}
              />
              <circle cx={centroid[0]} cy={centroid[1]} r={2} />
              <line
                x1={centroid[0]}
                y1={centroid[1]}
                x2={inflexionPoint[0]}
                y2={inflexionPoint[1]}
                stroke={"black"}
                fill={"black"}
              />
              <line
                x1={inflexionPoint[0]}
                y1={inflexionPoint[1]}
                x2={labelPosX}
                y2={inflexionPoint[1]}
                stroke={"black"}
                fill={"black"}
              />
              <text
                x={labelPosX + (isRightLabel ? 2 : -2)}
                y={inflexionPoint[1]}
                textAnchor={textAnchor}
                dominantBaseline="middle"
                fontSize={8}
              >
                {label}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};
export default Pie;
