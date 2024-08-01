import { Navbar } from "./layout/navbar/Navbar"
import { Footer } from "./layout/footer/Footer"
import { router } from "./Routes"
import { RouterProvider } from "react-router-dom"
import { Box } from "@mui/material"
import "../App.css"

const App = () => {
  return (
    <>
      <Box className="app-container">
        <Navbar />
        <RouterProvider router={router} />
      </Box>
      <Footer />
    </>
  )
}

export default App
