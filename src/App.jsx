import { Suspense, useState } from "react"
import Heading from "./Components/Heading/Heading"
import Main from "./Components/Main/Main"
import Navbar from "./Components/Navbar/Navbar"
 import { toast, ToastContainer} from 'react-toastify';
import Fotter from "./Components/Fotter/Fotter";


const fetchData = async () => {
  const res = await fetch('/data.json')
  return res.json();
}

const loadData = fetchData()

function App() {

  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  const [CountResolved,setCountResolved]=useState(0)
  const [resolvedList, setResolvedList]=useState([])

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
      toast("In progress")
    }
    else {
      const findItem = cart.find(cart => cart.id === customer.id)
      if (!findItem) {
        setCart([...cart, customer])
        toast("In progress")
        const updateCoin = count + 1;
        setCount(updateCoin)
      }
      else{
        toast("Already Listed")
      }
    }
  }

  const resolved =(resolvedItem)=>{
      // console.log(resolved)

      setResolvedList([...resolvedList,resolvedItem])
      const removeItem = cart.filter(cart=> cart.id !== resolvedItem.id)
      setCart(removeItem)
      setCountResolved(CountResolved+1)
      setCount(count-1)
      toast("Completed")
      // console.log(removeItem)
      console.log(resolvedList)
  }
  return (
    <>
      <Navbar></Navbar>
      <Heading count={count} CountResolved={CountResolved}></Heading>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Main loadData={loadData} getCart={getCart} cart={cart} resolved={resolved}></Main>
      </Suspense>

      <Fotter></Fotter>
      <ToastContainer />
    </>
  )
}

export default App
