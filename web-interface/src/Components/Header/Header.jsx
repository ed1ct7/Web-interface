export function Header({title, userLogin}) {
    return (
        <header className="header">
            <div className="header__title">{title}</div>
            <div className="header__user">
                <span className="header__login">{userLogin}</span>
                <button className="header__avatar" aria-label={"Профиль"} onClick={() => {onClickUserAvatar()}}>
                    <span className="header__icon"></span>
                </button>
            </div>
        </header>
    )

    function  onClickUserAvatar() {

    }
}