import { useNavigate } from "react-router-dom";

export const Cadastro = () => {
    const navigate = useNavigate();

    const handdleNext = () => {
        navigate("/");
    }
    
    
    return (
        <>
        <div className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300">
            <div className="flex lg:w-1/3 xl:w-1/3 2xl:w-1/3 md:w-1/2  flex-col shadow-xl">
                <div className="py-6 px-14 bg-gradient-to-tr from-orange-500 to-red-600 rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
                <h4 className="text-white text-center font-bold text-xl">
                  Bem-vindo amigo
                </h4>
                </div>

                <div className="flex flex-col py-6 px-8 space-y-5 bg-white">
                    <h2 className="text-black text-center text-xs uppercase">Vamos cadastrar sua empresa 😀</h2>
                    <label>Nome da empresa: 🏭 </label>
                    <input type="text" placeholder="Empresa" className="px-2  py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:border-orange-500 ease-in duration-300" />

                    <button onClick={handdleNext} type='button' className='flex break-inside bg-black rounded-full px-8 py-4 mb-4 w-full bg-gradient-to-tr from-orange-500 to-red-600 dark:text-white'>
                        <div className='flex items-center justify-center flex-1'>
                            <span className='text-lg font-medium text-white mr-4'>Próximo</span>
                            <svg className="animate-pulse" width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path fillRule='evenodd' clipRule='evenodd'
                                d='M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z'
                                fill='white' />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div> 
     </>
    )
}