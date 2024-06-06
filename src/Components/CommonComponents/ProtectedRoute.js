import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoute() {
    const account = useSelector((state)=>state.account)
  return (
    (account && account.usertype==="SupreAdmin")? <Outlet/> : <Navigate to="/"/>
  )
}

export default ProtectedRoute
