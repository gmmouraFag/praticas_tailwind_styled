import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import ProfileStyled from "./ProfileStyled";
import ProfileTailwind from "./ProfileTailwind";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Cabeçalho com Links para Navegação */}
        <header className="p-4 bg-indigo-600 text-white text-center">
          <h1 className="text-2xl">Escolha o Estilo de Exibição</h1>
        </header>

        <div className="flex justify-center mt-8">
          {/* Links para Navegação entre as rotas */}
          <Link
            to="/styled"
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-400 mx-2 transition-all duration-300"
          >
            Estilo Styled
          </Link>
          <Link
            to="/tailwind"
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-400 mx-2 transition-all duration-300"
          >
            Estilo Tailwind
          </Link>
        </div>

        {/* Definição das Rotas */}
        <Routes>
          <Route path="/" element={<Navigate to="/styled" />} /> {/* Redireciona para /styled por padrão */}
          <Route path="/styled" element={<ProfileStyled />} />
          <Route path="/tailwind" element={<ProfileTailwind />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
