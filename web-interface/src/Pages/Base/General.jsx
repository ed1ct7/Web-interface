import "./General.scss";
import exitIcon from "../../Assets/exit.svg";
import folderIcon from "../../Assets/folder.svg";
import settingsIcon from "../../Assets/settings.svg";

function General() {
    return (
        <div className="base">
            <form className="base__card">
                <h1 className="base__header">Меню</h1>

                <div className="general">
                    <div className="general__grid">
                        <div className="general__label">Имя</div>
                        <div>
                            <span className="general__value">Антон Савельев</span>
                        </div>

                        <div className="general__label">Почта</div>
                        <div>
                          <span className="general__value"> thenorthwizards@gmail.com</span>
                        </div>

                        <div className="general__label">Пароль</div>
                        <div>
                            <span className="general__value">Password222</span>
                        </div>

                        <div className="general__label">Группа</div>
                        <div>
                            <span className="general__value">C326</span>
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
                </div>
            </form>
        </div>
    );
}

export default General;