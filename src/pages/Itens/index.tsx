import { useEffect, useState } from "react";
import Item from "./Item";
import cardapio from "assets/dados/cardapio.json";
import styles from "./Itens.module.scss";
interface IProps {
    busca: string,
    filtro: number | null,
    ordenador: string
}
export default function Itens(props: IProps) {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro, ordenador } = props;
  function testaBusca(title: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }
  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }
  function ordenar(novalista: typeof cardapio) {
    switch (ordenador) {
    case ("porcao"):
      return novalista.sort((a, b) => a.size > b.size ? 1 : -1);
    case ("qtd_pessoas"):
      return novalista.sort((a, b) =>  a.serving > b.serving ? 1 : -1);
    case ("preco"):
      return novalista.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return novalista;
    }
  }
  useEffect(() => {
    const novalista = cardapio.filter((item => testaBusca(item.title) && testaFiltro(item.category.id)));
    setLista(ordenar(novalista));
  }, [busca, filtro, ordenador]);
  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}