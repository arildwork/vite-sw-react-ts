import headerService from "./components/headerService.ts";
import { urlTest } from "./helperDir/helper.ts";

const sw = self as unknown as ServiceWorkerGlobalScope & typeof globalThis;

sw.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    sw.skipWaiting();
  }
});

headerService();

console.log("test", urlTest);
