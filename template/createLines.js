import { point_template_area } from "./pointTemplate.js";

export function createLines(paths, name, location, color = [226, 119, 40]) {
  return {
    type: "polyline",
    paths: paths,
    symbol: {
      type: "simple-line",
      color: color, // orange
      width: 2,
    },
    Name: name,
    Location: location,
    popupTemplate: point_template_area,
  };
}
