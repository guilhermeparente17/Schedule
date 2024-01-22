import DashboardPages from "pages/DashboardPage";
import WriteNowPage from "pages/WriteNowPage";
import { Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DashboardPages />} />
      <Route path='/dashboard' element={<DashboardPages />} />
      <Route path='/escrever-agora' element={<WriteNowPage />} />
    </Routes>
  )
}