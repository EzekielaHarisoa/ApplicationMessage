export default function Signin() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-gray-100 p-10">
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
          type="submit"
          className=" w-full bg-primary mt-2 text-white py-1 rounded-xl hover:bg-green-600"
        >
          
          Creer mon compte
        </button>
        <div className="border-2 border-t-pink-500 mt-5 flex justify-center items-center w-52 ml-16 ">
              
        </div>
                <p className="w-52 ml-32">ou</p>

        <button  className=" w-full bg-primary mt-2 text-white py-1 rounded-xl hover:bg-green-600">
          Login with Google
        </button>
        <button  className=" w-full bg-primary mt-2 text-white py-1 rounded-xl hover:bg-green-600">
           Login with GitHub
        </button>

        
      </form>
    </div>
  );
}