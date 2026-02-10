import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { OurWork } from "./pages/OurWork";
import { Booking } from "./pages/Booking";
import { ContactUs } from "./pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "our-work", Component: OurWork },
      { path: "booking", Component: Booking },
      { path: "contact", Component: ContactUs },
    ],
  },
]);