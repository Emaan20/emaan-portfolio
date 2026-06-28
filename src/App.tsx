import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/common/Loader";
import SmoothScrollProvider from "./components/layout/SmoothScrollProvider";
import ScrollProgress from "./components/common/ScrollProgress";
import CursorGlow from "./components/common/CursorGlow";
import ScrollAnimations from "./components/common/ScrollAnimations";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <SmoothScrollProvider>
      <ScrollAnimations />
      <ScrollProgress />
      <CursorGlow />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </SmoothScrollProvider>
  );
}