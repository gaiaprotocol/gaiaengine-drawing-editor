import { BodyNode, el } from "@common-module/app";
const config = window.config;
const data = await fetch("/api/load-assets/assets/shape.json").then((response) => response.json());
BodyNode.append(el("#layout"));
//# sourceMappingURL=client.js.map