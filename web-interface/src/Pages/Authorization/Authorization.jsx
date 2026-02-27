// Authorization.jsx
import "./Authorization.scss"
import { useState } from "react"

function Authorization() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    return (
        <div className="base">
            <form className="base__card">
                <h1 className="base__header">Войти в сеть ФСПО</h1>

                <label className="base__label">
                    Логин
                    <input
                        className="base__input"
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="Введите логин"
                    />
                </label>

                <label className="base__label">
                    Пароль
                    <input
                        className="base__input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Введите пароль"
                    />
                </label>

                <label className="base__remember">
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                    />
                    <span>Запомнить меня</span>
                </label>

                <button className="base__button">
                    Авторизация
                </button>

            </form>
        </div>
    )
}
export default Authorization
