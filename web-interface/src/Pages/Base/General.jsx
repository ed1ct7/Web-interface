import "./General.scss";
import exitIcon from "../../Assets/exit.svg";
import folderIcon from "../../Assets/folder.svg";
import settingsIcon from "../../Assets/settings.svg";

function General() {
    return (
        <div className="base">
            <form className="base__card">
                <h1 className="base__header">Меню</h1>
                <div className="general__grid">
                    <div className="general__labels">
                        <label className="general__label">Имя</label>
                        <label className="general__label">Почта</label>
                        <label className="general__label">Пароль</label>
                        <label className="general__label">Группа</label>
                    </div>

                    <div className="general__textboxes">
                        <div className="general__row">
                            <label className="general__labelData">Антон Савельев</label>
                            <div className="general__line" />
                        </div>
                        <div className="general__row">
                            <label className="general__labelData">thenorthwizards@gmail.com</label>
                            <div className="general__line" />
                        </div>
                        <div className="general__row">
                            <label className="general__labelData">Password222</label>
                            <div className="general__line" />
                        </div>
                        <div className="general__row">
                            <label className="general__labelData">C326</label>
                            <div className="general__line" />
                        </div>

                    </div>
                </div>

                <div className="general__actions">
                    <button type="button" className="general__actionBtn">
                        <img src={settingsIcon} alt="" className="general__icon" />
                    </button>

                    <button type="button" className="general__actionBtn">
                        <img src={folderIcon} alt="" className="general__icon" />
                    </button>

                    <button type="button" className="general__actionBtn">
                        <img src={exitIcon} alt="" className="general__icon" />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default General;