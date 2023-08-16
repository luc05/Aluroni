import TagsPrato from "components/TagsPrato";
import styles from "./Item.module.scss";
import cardapio from "data/cardapio.json";
import { useNavigate } from "react-router-dom";
type Props = typeof cardapio[0]
export default function Item(props: Props) {
  const { id, title, description, photo } = props;
  const navegar = useNavigate();
  return (
    <div className={styles.item} onClick={() => navegar(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}