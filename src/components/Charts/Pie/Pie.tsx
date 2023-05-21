import {
  pie,
  // scaleSequential,
  scaleOrdinal,
  interpolatePurples,
  quantize,
} from "d3";
import { useGithubContext } from "../../../context/hookContext";
import Slice from "./Slice";

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

interface PropsPie {
  isInView: boolean;
  animate: any;
}

const Pie: React.FC<PropsPie> = ({ animate, isInView }) => {
  // const [pathIndex, setPathIndex] = useState(0);
  // const progress = useMotionValue(pathIndex);
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
  const contributors = Object.values(aggregateContributors).sort(
    (a, b) => b.value - a.value
  );
  // console.log("contributors", contributors);
  const arcs = pie<Pull>().value((d) => d.value)(contributors);
  const names = contributors.map((el) => el.id);
  const colors = quantize(interpolatePurples, names.length);
  const colorScale = scaleOrdinal(names, colors);
  // const colorScale = scaleSequential(interpolateYlOrRd).domain([
  //   0,
  //   max(contributors, (d) => d.value),
  // ] as [number, number]);
  // console.log("arcs: ", arcs);
  const width = 400,
    height = 200;

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((el, index) => {
          return (
            <Slice
              key={el.data.id}
              el={el}
              index={index}
              colorScale={colorScale}
              animate={animate}
              isInView={isInView}
              width={width}
              height={height}
              // progress={progress}
              // pathIndex={pathIndex}
            />
          );
        })}
      </g>
    </svg>
  );
};
export default Pie;
