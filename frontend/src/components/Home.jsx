import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-base-200">
      <h1 className="text-3xl font-bold text-center">Bienvenue sur ma plateforme</h1>
      <p className="text-gray-500 text-center max-w-md">
        Connecte-toi ou crée un compte pour accéder à nos cours et fonctionnalités.
      </p>

      {/* Boutons de navigation */}
      <div className="flex gap-4 mt-6">
        <Link
          to="/login"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Se connecter
        </Link>

        <Link
          to="/signup"
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          S’inscrire
        </Link>
      </div>
    </div>
  );
}
