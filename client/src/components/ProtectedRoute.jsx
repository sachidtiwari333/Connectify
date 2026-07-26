import NotFound from "../pages/NotFound.jsx";


const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem("token")
  
  if(!token){
    return <NotFound />
  }

  return children
}

export default ProtectedRoute

