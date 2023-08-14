import Buscador from "pages/Buscador";
import styles from "./Cardapio.module.scss";
import { useState } from "react";
import Filtros from "pages/Filtros";
import Ordernador from "pages/Ordernador";
import Itens from "pages/Itens";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltros] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.header__text}>
                    A casa do código e da massa
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltros={setFiltros} />
          <Ordernador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}