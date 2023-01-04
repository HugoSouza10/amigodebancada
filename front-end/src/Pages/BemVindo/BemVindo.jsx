export const BemVindo = () => {
    return (
    <div className="min-h-screen min-w-40 flex items-center justify-center bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300">
        <div className="flex flex-col shadow-xl">
            <div className="py-6 px-14 bg-gradient-to-tr from-orange-500 to-red-600 rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
            <h4 className="text-white text-center font-bold text-xl">
                Bem-vindo "Empresa tal" Redirecione para Home
            </h4>
            </div>
            <div className="flex justify-center items-center flex-col py-6 px-8 space-y-5 bg-white">
                <button className="w-40 py-3 bg-gradient-to-tr from-orange-500 to-red-600 text-white rounded-full text-sm focus:outline-none focus:border-transparent shadow-lg">Ir para Home </button>
            </div>
        </div>
    </div>
    )
}