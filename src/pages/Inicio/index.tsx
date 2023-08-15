import cardapio from "data/cardapio.json";
import styles from "./Inicio.module.scss";
import stylesTema from "styles/Tema.module.scss";
import nossaCasa from "assets/nossa_casa.png";
import { useNavigate } from "react-router-dom";
import { Prato } from "types/Prato";
export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navegar = useNavigate();
  function navegarParaDetalhes(prato: Prato){
    navegar(`/prato/${prato.id}`, { state: { prato }, replace:true});
  }
  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(prato => (
          <div key={prato.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={prato.photo} alt={prato.title}></img>
            </div>
            <button className={styles.recomendado__botao}
              onClick={() => navegarParaDetalhes(prato)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Aluroni"></img>
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}