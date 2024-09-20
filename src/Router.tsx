import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { IssuePage } from "./pages/IssuePage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issue/:issueId" element={<IssuePage />} />
    </Routes>
  )
}