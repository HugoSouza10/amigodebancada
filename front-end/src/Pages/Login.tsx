export const Login = () => {
    return (
       <>
        <div className="container flex justify-center items-center mx-auto bg-gray-200 w-full max-w-full h-screen">
            <form className="flex flex-col w-96 justify-center items-center  bg-white rounded shadow-lg p-12">
                <label className="font-semibold self-start px-4 text-xs">Empresa</label>
                <input className="h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" placeholder="Informe a sua empresa" type="text"></input>
                <label className="font-semibold text-xs mt-3 self-start px-4">Senha</label>
                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" placeholder="Senha"></input>
                <button className=" h-12  w-64 bg-blue-600 mt-8 rounded font-semibold text-blue-100 hover:bg-blue-700">Login</button>

                <div className="flex mt-6 justify-center text-xs">
                    <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
                    <span className="mx-2 text-gray-300">/</span>
                    <a className="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
		        </div>
            </form>
        </div>
        
       </>
    )
}