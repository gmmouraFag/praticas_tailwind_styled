import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  background: #e6f7ff; /* Azul claro para o fundo */
  border-radius: 20px;
  box-shadow: 0 12px 36px rgba(0, 123, 255, 0.15);
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #a1c4fd;
  border-radius: 30px;
  margin-right: 15px;
  width: 70%;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  background-color: #eef8ff;

  &:focus {
    border-color: #57a3ff;
    box-shadow: 0 0 10px rgba(87, 163, 255, 0.5);
  }
`;

const Button = styled.button`
  padding: 12px 25px;
  background: #57a3ff;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: #007bb5;
  }
`;

const Card = styled.div`
  background: #ffffff; /* Fundo branco para a box */
  border-radius: 25px;
  padding: 30px;
  box-shadow: 0 12px 30px rgba(0, 123, 255, 0.1);
  margin-top: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #ffffff; /* Branco para a box */
  border: 2px solid #d1e8ff; /* Bordas suaves */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 123, 255, 0.2);
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid #f1f1f1;
`;

function ProfileStyled() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const fetchProfile = () => {
    if (!username) return;
    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (!res.ok) throw new Error("Usuário não encontrado");
        return res.json();
      })
      .then(data => {
        setProfile(data);
        setError("");
      })
      .catch(err => {
        setProfile(null);
        setError(err.message);
      });
  };

  return (
    <Container>
      <h2 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "20px" }}>
        Buscar perfil do GitHub
      </h2>
      <div>
        <Input
          type="text"
          placeholder="Digite o nome de usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Button onClick={fetchProfile}>Buscar</Button>
      </div>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {profile && (
        <Card>
          <Avatar src={profile.avatar_url} alt={profile.login} />
          <h2 style={{ fontSize: "24px", fontWeight: "500", color: "#333" }}>
            {profile.name}
          </h2>
          <p style={{ color: "#666", marginTop: "10px" }}>{profile.bio}</p>
          <p style={{ color: "#57a3ff", fontWeight: "500", marginTop: "10px" }}>
            Repositórios públicos: {profile.public_repos}
          </p>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#57a3ff",
              textDecoration: "none",
              fontWeight: "500",
              marginTop: "15px",
              display: "inline-block",
            }}
          >
            Ver no GitHub
          </a>
        </Card>
      )}
    </Container>
  );
}

export default ProfileStyled;
