import { ReactComponent as NotFoundImage } from "assets/not_found.svg";
import styles from "./NotFound.module.scss";
import stylesTema from "styles/Tema.module.scss";
import className from "classnames";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navegar = useNavigate();
  return (
    <div className={className({
      [styles.container]: true,
      [stylesTema.container]: true,
    })}>
      <NotFoundImage />
      <div className={styles.voltar}>
        <button onClick={() => navegar(-1)}>
          {" < Voltar"}
        </button>
      </div>
    </div>
  );
}