import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }
  
  return (
    <div>
      <Head>
        <title>AWS Education</title>
      </Head>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">AWS Education</a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active disabled" aria-disabled="true">Perfil</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active disabled" aria-disabled="true">Tarefas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active disabled" aria-disabled="true">Relatório</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active disabled" aria-disabled="true">Correções</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active disabled" aria-disabled="true">Avaliações</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active disabled" aria-disabled="true">Agenda</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
      <header className="bg-secondary bg-gradient text-white">
        <div className="container px-4 text-center">
          <h1 className="fw-bolder">Bem-vindo a página de correções</h1>
          <p className="lead">Sinta-se livre para ter acesso ao nosso feedback ou tirar suas dúvidas</p>
          <a className="btn btn-lg btn-light disabled" aria-disabled="true">Vamos começar!</a>
        </div>
        <br></br>
      </header>
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Correções</h1>
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-success text-white mb-4">
                    <div className="card-body">Física</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">Mais detalhes</a>
                      <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-primary text-white mb-4">
                    <div className="card-body">Química</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">Mais detalhes</a>
                      <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-warning text-white mb-4">
                    <div className="card-body">Matemática</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">Mais detalhes</a>
                      <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-danger text-white mb-4">
                    <div className="card-body">Geografia</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">Mais detalhes</a>
                      <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <main className={styles.main}>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h3>Central de Dúvidas</h3>
              <form onSubmit={onSubmit} className={styles.centralizar}>
                <input
                  type="text"
                  name="animal"
                  placeholder="Insira sua mensagem"
                  value={animalInput}
                  onChange={(e) => setAnimalInput(e.target.value)}
                />
                <input type="submit" value="Resposta" />
              </form>
              <br></br>
              <div className={styles.answer}>
                <div className={styles.result}>
                A reposta está muito incompleta, falta adicionar algumas informações, como por exemplo a relação da corrente ser diretamente proporcional a tensão e inversamente proporcional a resistência, fora outros parâmetros e fórmulas que faltam.
                </div>
              </div>
            </div>
            <div className="col">
              <h3>Feedback</h3>
              <div className={styles.centralizar}>
                <div className={styles.perguntaProfessor}>
                  Defina o que é a lei de Ohm e sua relação
                </div>
                <br></br>
                <div className={styles.respostaAluno}>
                  A lei de Ohm é a relação entre corrente, resistência e tensão
                </div>
              </div>
              <br></br>
              <div className={styles.answer}>
                <div className={styles.result}>
                  A reposta está muito incompleta, falta adicionar algumas informações, como por exemplo a relação da corrente ser diretamente proporcional a tensão e inversamente proporcional a resistência, fora outros parâmetros e fórmulas que faltam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <br></br>
      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; AWS Education 2023</div></div>
            <div className="col-auto">
              <a className="link-light small disabled" aria-disabled="true">Privacade</a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small disabled" aria-disabled="true">Termos</a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small disabled" aria-disabled="true">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
