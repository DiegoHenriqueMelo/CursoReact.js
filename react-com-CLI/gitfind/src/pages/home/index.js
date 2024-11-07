import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";
import ItenList from "../../components/ItenList";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;

      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }

    console.log(newUser);
  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="" backgound app />
        <div className="info">
          <div>
            <input
              name="usuario"
              placeholder="@username"
              calue={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="perfil">
                <img src={currentUser.avatar_url} className="profile" />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}

          {repos?.length ? (
            <>
              <div className="repositorios">
                <h4>Repositórios</h4>
                {/* {repos.map((iten) => {
                  <ItenList title={iten.name} description={iten.description} />;
                })} */}
                {repos.map((repo) => (
                  <ItenList title={repo.name} description={repo.description} />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
