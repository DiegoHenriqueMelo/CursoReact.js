import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";
import ItenList from "../../components/ItenList"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="" backgound app />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/140443998?v=4"
              className="profile"
            />
            <div>
              <h3>Diego Henrique Melo</h3>
              <span>@diegohenriquemelo</span>
              <p>Descrição</p>
            </div>
          </div>
        <hr/>
        <div className="repositorios">
          <h4>Repositórios</h4>
          <ItenList  title="teste1" description="Teste de descrição"/>
          <ItenList  title="teste1" description="Teste de descrição"/>
          <ItenList  title="teste1" description="Teste de descrição"/>
          <ItenList  title="teste1" description="Teste de descrição"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
