import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

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
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Equipe 1</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      
      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h1>AWS EDUCATION</h1>
        <h3>Correções</h3>
        
        {/* <p className={styles.paragrafo}>Paragrafo</p> */}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Insira sua mensagem"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Resposta" />
        </form>
        <div className={styles.result}>{result}</div>
        <div className={styles.answer}>
          <div className={styles.result}>A função de string python para conversão de letras minusculas para maiúsculas é a função upper(). Exemplo: string = "hello world" string_upper = string.upper() print(string_upper) Saída: HELLO WORLD</div>
        </div>
      </main>
    </div>
  );
}
