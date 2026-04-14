import { Suspense, useState } from "react"
import Heading from "./Components/Heading/Heading"
import Main from "./Components/Main/Main"
import Navbar from "./Components/Navbar/Navbar"
 import { toast, ToastContainer} from 'react-toastify';


const fetchData = async () => {
  const res = await fetch('/data.json')
  return res.json();
}

const loadData = fetchData()

function App() {

  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)

  const getCart = (customer) => {
    // const updateCoin = count + 1;
    // setCount(updateCoin)

    // // setCart([...cart,customer])
    // // const newItem = cart.filter(cart=> cart.id !== customer.id)
    // if( cart.length === 0){
    //     setCart([...cart,customer])
    // }
    // else{
    //   const newItem = cart.filter(cart=> cart.id !== customer.id)
    //   setCart([...newItem,customer])
    // }
    if (cart.length === 0) {
      setCart([...cart, customer])
      const updateCoin = count + 1;
      setCount(updateCoin)
    }
    else {
      const findItem = cart.find(cart => cart.id === customer.id)
      if (!findItem) {
        setCart([...cart, customer])
        const updateCoin = count + 1;
        setCount(updateCoin)
      }
      else{
        toast("Already Listed")
      }
    }
  }
  return (
    <>
      <Navbar></Navbar>
      <Heading count={count}></Heading>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Main loadData={loadData} getCart={getCart} cart={cart}></Main>
      </Suspense>
      <ToastContainer />
    </>
  )
}

export default App
