import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Código de error */}
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <div className="h-1 w-32 bg-gray-300 mx-auto rounded-full"></div>
        </div>

        {/* Mensaje principal */}
        <div className="space-y-3">
          <h2 className="text-4xl font-bold text-gray-900">
            Página no encontrada
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-md mx-auto">
            Lo sentimos, la página que estás buscando no existe :(
          </p>
        </div>

        {/* Botones de navegación */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Ir a Inicio
          </Link>
          <Link
            to="/docs/instalation"
            className="w-full sm:w-auto px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Ver Documentación
          </Link>
        </div>
      </div>
    </div>
  );
}