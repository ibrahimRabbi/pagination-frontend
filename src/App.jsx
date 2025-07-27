import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import TableCom from './table/TableCom'
import UserCard from './card/UserCard'
import ShapeCard from './card/ShapeCard'
import VIPPricingCard from './card/Subcription'
import GetInTuch from './getInTuch/GetInTuch'
import ProductCard from './card/ProductCard'
import Details from './Details/Details'



function App() {

  const routers = createBrowserRouter([
    {
      path: '/',
      element: <p>no content of page available in this page</p>,
      errorElement: <p>no content of page available in this page</p>
    },
    {
      path: '/table',
      element: <TableCom/>
    },
    {
      path: '/user-card',
      element: <UserCard/>
    },
    {
      path: '/shape-card',
      element: <ShapeCard/>
    },
    {
      path: '/subcription',
      element: <VIPPricingCard/>
    },
    {
      path: '/getIn-tuch',
      element: <GetInTuch/>
    },
    {
      path: '/products',
      element: <ProductCard/>
    },
    {
      path: '/details',
      element: <Details/>
    }
  ])

  return (
    <>
     <RouterProvider router={routers}/>
    </>
  )
}

export default App
