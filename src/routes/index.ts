import { userRoutes } from "./user.routes";
import { projectRoutes } from "./project.routes";
import { authRoutes } from "./auth.routes";
import { subscribeRoutes } from "./subscribe.routes";

const routes = [userRoutes, projectRoutes, authRoutes, subscribeRoutes];

export { routes };
