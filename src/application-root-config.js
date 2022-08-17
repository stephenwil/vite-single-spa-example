import preact from "preact";
import { App } from "./app";
import singleSpaPreact from "single-spa-preact";

const preactLifecycles = singleSpaPreact({
  preact,
  rootComponent: App,
});

export const bootstrap = async (props) => {
  console.log("vite single-spa bootstrap", props);
  return preactLifecycles.bootstrap();
};
export const mount = preactLifecycles.mount;
export const unmount = preactLifecycles.unmount;
