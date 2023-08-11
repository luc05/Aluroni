import Item from "./Item"
import itens from "./itens.json"
import styles from "./Itens.module.scss"
export default function Itens() {
    return(
        <div className={styles.itens}>
        {itens.map((item) => (
            <Item key={item.id}/>
        ))}
        </div>
    )
}