import { Route, Routes } from "react-router-dom"
import { routes } from "./routes/routes"
import { Toaster } from "./components/ui/toaster"

const App = () => {
  return (
   <>
   <Routes>
      {routes.map((route,index)=>{
        return <Route path={route.path} element={route.component} key={index}/>
      })}
    </Routes>
    <Toaster />
   </>
  )
}

export default App