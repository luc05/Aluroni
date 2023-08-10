import React from "react"
import filtros from "./filtros.json"
import styles from "./Filtros.module.scss"
import classNames from "classnames"
interface Props {
    filtro: number | null,
    setFiltros: React.Dispatch<React.SetStateAction<number | null>>;
}
export default function Filtros({filtro, setFiltros}: Props) {
    type IOpcao = typeof filtros[0]
    function selecionarFiltro(opcao: IOpcao) { 
        if(filtro === opcao.id){
            return setFiltros(null)
        }
        return setFiltros(opcao.id)
    }
    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={classNames({
                    [styles.filtros__filtro] : true,
                    [styles['filtros__filtro--ativo']] : filtro === opcao.id
                })} 
                key={opcao.id} onClick={() => selecionarFiltro(opcao)}>{opcao.label}
                </button>
            ))}
        </div>
    )
}