import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/MainLayout.tsx", [
    index("./routes/home.tsx"),
    route("/projects", "./routes/projects.tsx"),
    route("/blog", "./routes/blog.tsx"),
    route("/blog/:slug", "./routes/blog.$slug.tsx"),
    route("*", "./routes/notFound.tsx"),
  ]),
] satisfies RouteConfig;
