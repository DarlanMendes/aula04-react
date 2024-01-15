import { useState } from "react"
import loginEmulate from "../../utils/loginEmulate"


export default function FormLogin(props) {
    const [ userLogin, setUserLogin] = useState({email:"", password:""})
    function handleSubmit(e){ 
     
        // Aqui você deve inserir a logica para conferir os campos de login 
      
    }

    function handleUserInfoChange(e){

        // Crie aqui a lógica para manipulação dos campos do input 

       
    }
    return (
        <form className="border rounded-md p-4 flex flex-col gap-10" onSubmit={''}>
            <h2 className="text-2xl font-semibold w-full text-center">Login</h2>
            <label htmlFor="email" className="flex gap-4 items-center  text-xl font-medium">
                Email:
                <input id="email" name="email"
                    type="email"
                    required
                    className="border w-full max-w-[400px] px-4 py-2 rounded-md" 
                  
                    />
            </label>
            <label htmlFor="password" className="flex gap-4 items-center text-xl font-medium">
                Senha:
                <input id="password" name="password"
                    type="password"
                    required
                    className="border w-full max-w-[400px] px-4 py-2 rounded-md" 
                   
                    />
            </label>
            <button className="text-2xl bg-facebook py-2 rounded-lg text-white font-semibold"
            type="submit"
            >
                Entrar
            </button>

        </form>
    )
}