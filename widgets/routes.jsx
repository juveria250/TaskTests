import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";



export const routes = [
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },



];

export default routes;
