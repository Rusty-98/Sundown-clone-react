import { useEffect, useState } from "react"
import Loader from "./Components/Loader/Loader"
import Home from "./Components/Home/Home"
import RealHome from "./Components/RealHome"

function App() {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3200);
  }, [])

  return (
    <>
      {
        load? <Loader /> : <RealHome />
      }
    </>
  )
}

export default App
