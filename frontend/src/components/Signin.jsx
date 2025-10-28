import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div className="flex m-10  flex-row-reverse bg-pink-500 shadow-md  items-center justify-center rounded-lg">
    <div className="w-full">

    </div> 
     
    <div className="flex flex-col flex-grow bg-gray-100 p-10 w-auto  ">
      <h2 className="text-xl font-bold pl-6 w-96">Creer mon compte</h2>
      <p className="pl-6 w-96  text-sm">Decriver-vous en quelques mots et inscrivez-vous sur <br /> Message</p>
      <form className="p-6  w-96  ">
        
        <div className="flex  gap-4  w-full">
         <div className="mb-1">
          <label className="block text-gray-700 " htmlFor="email">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            className=" w-40 py-1 border rounded "
            placeholder=""
          />
          </div>
          <div className="mb-1">
          <label className="block text-gray-700 " htmlFor="email">
            Prenom
          </label>
          <input
            type="text"
            id="prenom"
            className=" w-40 py-1 border rounded "
            placeholder=""
          />
        </div>
        </div>

        <div className="mb-1">
          <label className="block text-gray-700 " htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full py-1 border rounded"
            placeholder=""
          />
        </div>
        <div className="mb-1">
          <label className="block text-gray-700 " htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-1 border rounded"
            placeholder=""
          />
        </div>
        <button
          className=" w-full bg-primary mt-2 text-white py-1 rounded-xl hover:bg-green-600"
          type="submit"
          to="/home">          
         <Link to="/home"> Creer mon compte</Link>
        </button>
        <div className="border-2 border-t-pink-500 mt-5 flex justify-center items-center w-52 ml-16 ">
              
        </div>
                <p className="w-52 ml-32">ou</p>

        <button  className=" w-full bg-primary mt-2 text-white py-1 rounded-xl hover:bg-green-600">
         <Link> Login with Google</Link>
        </button>
        <button  className=" w-full bg-primary mt-2 text-white py-1 rounded-xl hover:bg-green-600">
          <Link>  Login with GitHub</Link>
        </button>

        
      </form>
    </div>
    </div>
  );
}