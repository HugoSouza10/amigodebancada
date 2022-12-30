import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const handdleHome = () => {
        navigate("/");
    }

    return (
       <>
        <div className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300">
            <div className="flex flex-col shadow-xl">
                <div className="py-6 px-14 bg-gradient-to-tr from-orange-500 to-red-600 rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
                <h4 className="text-white text-center font-bold text-xl">
                    Login 
                </h4>
                </div>
                <div className="flex flex-col py-6 px-8 space-y-5 bg-white">
                <h2 className="text-black text-center text-xs uppercase">Olá, tudo bem? 😀</h2>
                <label>Empresa: 🏭 </label>
                <input type="text" placeholder="Empresa" className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:border-orange-500 ease-in duration-300" />
                <label>Senha: 🔒</label>
                <input type="password" placeholder="Senha" className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:border-orange-500 ease-in duration-300" />
                <button onClick={handdleHome} className="w-full py-3 bg-gradient-to-tr from-orange-500 to-red-600 text-white rounded-full text-sm focus:outline-none focus:border-transparent shadow-lg">Login </button>
                </div>
            </div>
        </div>
        
       </>
    )
}