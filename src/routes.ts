import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import FintechOnboarding from "./pages/case-studies/FintechOnboarding";
import EnterpriseAnalytics from "./pages/case-studies/EnterpriseAnalytics";
import CheckoutConversion from "./pages/case-studies/CheckoutConversion";
import TokenSyncPlugin from "./pages/case-studies/TokenSyncPlugin";

export const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      { path: "/", Component: Home },
      { path: "/case-study/fintech-onboarding", Component: FintechOnboarding },
      { path: "/case-study/enterprise-analytics", Component: EnterpriseAnalytics },
      { path: "/case-study/checkout-conversion", Component: CheckoutConversion },
      { path: "/case-study/tokensync-plugin", Component: TokenSyncPlugin },
    ],
  },
]);
