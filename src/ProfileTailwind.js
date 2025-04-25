import React, { useEffect, useState } from "react";

function ProfileTailwind() {
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProfile = () => {
    if (!username) {
      setError("Por favor, insira um nome de usuário.");
      return;
    }
    setLoading(true);
    setError("");  // Resetando o erro

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Usuário não encontrado");
        }
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setProfile(null);
        setLoading(false);
      });
  };

  if (loading) {
    return <div className="text-center text-lg text-gray-600">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 flex items-center justify-center py-12">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Buscar perfil do GitHub</h2>
        
        {/* Input e Botão de Busca */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Digite o nome de usuário"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="px-4 py-2 w-2/3 rounded-3xl border-2 border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
          <button
            onClick={fetchProfile}
            className="ml-4 px-6 py-2 bg-indigo-500 text-white rounded-3xl hover:bg-indigo-400 transition-all duration-300"
          >
            Buscar
          </button>
        </div>

        {/* Exibição de erro */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Exibição do perfil */}
        {profile && (
          <div className="bg-white p-8 rounded-xl shadow-lg mt-6 border-2 border-indigo-100">
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
                src={profile.avatar_url}
                alt={profile.login}
              />
              <h2 className="text-2xl font-semibold text-gray-800 mt-6">{profile.name}</h2>
              <p className="text-gray-600 mt-2">{profile.bio}</p>
              <p className="text-indigo-500 mt-4">Repositórios públicos: {profile.public_repos}</p>
              <a
                href={profile.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 mt-6 inline-block"
              >
                Ver no GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileTailwind;
