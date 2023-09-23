import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout";

import HomePage from "./pages/HomePage";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Layout>
  )
}

export default App
