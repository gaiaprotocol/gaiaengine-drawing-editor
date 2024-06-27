import { WebServerOptions } from "@common-module/server";

export default interface Config extends WebServerOptions {
  projectId: string;
  jsonPath: string;
}
