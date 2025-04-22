import { onRequest as __fetchFeeds_js_onRequest } from "/Users/kupteraz/Documents/Local Coding/threatfeed/functions/fetchFeeds.js"

export const routes = [
    {
      routePath: "/fetchFeeds",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__fetchFeeds_js_onRequest],
    },
  ]