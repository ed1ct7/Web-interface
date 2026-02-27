import "./General.scss";

function General() {
    return (
        <div className="base">
            <form className="base__card general">
                <h1 className="base__header">Меню</h1>

                <button type="button" className="general__open">
                    Открыть папку
                </button>

                <div className="general__grid">
                    <div className="general__labels">
                        <label className="general__label">Имя</label>
                        <label className="general__label">Почта</label>
                        <label className="general__label">Пароль</label>
                        <label className="general__label">Группа</label>
                    </div>

                    <div className="general__values">
                        <div className="general__line" />
                        <div className="general__line" />
                        <div className="general__line" />
                        <div className="general__line" />
                    </div>
                </div>

                <div className="general__actions">
                    <button type="button" className="base__button">
                        Изм
                    </button>
                    <button type="button" className="base__button">
                        Выйти
                    </button>
                </div>
            </form>
        </div>
    );
}

export default General;