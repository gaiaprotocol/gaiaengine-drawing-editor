import { BodyNode, el } from "@common-module/app";
import { SmoothVectorShapeData } from "@gaiaengine/2d";
import Config from "./Config.js";

const config = (window as any).config as Config;
const data: SmoothVectorShapeData = await fetch(
  "/api/load-assets/assets/shape.json",
).then((response) => response.json());

BodyNode.append(el("#layout"));
