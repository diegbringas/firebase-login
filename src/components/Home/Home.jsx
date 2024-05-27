import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import styles from "./Home.module.css";

function Home(props) {
    const navigate = useNavigate();

    const salir = async () => {
        try {
            await auth.signOut();
            navigate("/");
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <div className={styles.inner2}>
                    <h1>
                        <Link to="/login">Login</Link>
                    </h1>
                    <br />
                    <h1>
                        <Link to="/signup">Registrar</Link>
                    </h1>
                </div>
            </div>
            <div className={styles.footer}>
                <h2>{props.name ? `Bienvenido - ${props.name}` : "Iniciar Sesion"}</h2>
                <button onClick={salir}>Salir</button>
            </div>
        </div>
    );
}

export default Home;
