import styles from "./SignUp.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputControl } from "../InputControl/InputControl";

export function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: ""
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const registro = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Llena todos los campos");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate("/");
            })
            .catch((err) => {
                setErrorMsg(err.message);
            })
            .finally(() => {
                setSubmitButtonDisabled(false);
            });
    };

    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Registro</h1>
                <InputControl
                    label="Name"
                    placeholder="Ingrese un nombre"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, name: event.target.value }))
                    }
                />
                <InputControl
                    label="Email"
                    placeholder="Ingrese un correo"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                />
                <InputControl
                    label="Password"
                    placeholder="Ingrese una contraseña"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, pass: event.target.value }))
                    }
                />
                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={registro} disabled={submitButtonDisabled}>
                        Guardar
                    </button>
                    <p>
                        Si ya tienes una cuenta inicia sesión
                        <span>
                            <Link to="/login"> Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
