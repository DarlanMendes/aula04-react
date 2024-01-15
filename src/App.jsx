import FormLogin from "./components/FormLogin"
import PrivateContent from "./components/PrivateContent"
import PublicContent from "./components/PublicContent"
import {  useState } from "react"
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState()
 
  
  return (
    <>
    {isAuth?
      <PrivateContent user={user} setIsAuth={setIsAuth}/>      
  :
  <PublicContent>

  {/* Coloque o componente FormLogin aqui */}
  
  </PublicContent>}
    
    </>
  )
}

export default App
