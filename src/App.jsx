import { Suspense, useState } from "react"
import Heading from "./Components/Heading/Heading"
import Main from "./Components/Main/Main"
import Navbar from "./Components/Navbar/Navbar"

function App() {

  const fetchData = async () => {
    const res = await fetch('/data.json')
    return res.json();
  }

  const loadData = fetchData()
  const [cart,setCart]=useState([])
  const[count,setCount]=useState(0)
  return (
    <>
      <Navbar></Navbar>
      <Heading count={count}></Heading>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Main loadData={loadData} ></Main>
      </Suspense>

    </>
  )
}

export default App
