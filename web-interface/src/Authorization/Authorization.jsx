// Authorization.jsx
import "./Authorization.scss"
import { useState } from "react"

function Authorization() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    return (
        <div className="auth">
            <form className="auth__card">

                <h1 className="auth__header">Войти в сеть ФСПО</h1>

                <label className="auth__label">
                    Логин
                    <input
                        className="auth__input"
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="Введите логин"
                    />
                </label>

                <label className="auth__label">
                    Пароль
                    <input
                        className="auth__input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Введите пароль"
                    />
                </label>

                <label className="auth__remember">
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                    />
                    <span>Запомнить меня</span>
                </label>

                <button className="auth__button">
                    Авторизация
                </button>

            </form>
        </div>
    )
}
export default Authorization
