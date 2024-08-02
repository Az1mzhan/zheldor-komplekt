import { Navbar } from "./layout/navbar/Navbar"
import { Footer } from "./layout/footer/Footer"
import { router } from "./Routes"
import { RouterProvider } from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  )
}

export default App
