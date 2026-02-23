import "./StudentTable.scss";

export function StudentTable({ rows, onAdd, onEdit, onTransfer, onKick }) {
    return (
        <section className="st">
            <div className="st__wrap">
                <table className="st__table">
                    <thead className="st__thead">
                    <tr>
                        <th rowSpan={2} className="st__th st__th--narrow">н гр</th>
                        <th rowSpan={2} className="st__th">Номер</th>
                        <th rowSpan={2} className="st__th">Имя</th>
                        <th rowSpan={2} className="st__th">Фамилия</th>
                        <th rowSpan={2} className="st__th">Отчество</th>
                        <th rowSpan={2} className="st__th">Почта</th>
                        <th rowSpan={2} className="st__th">Сетевая папка</th>
                        <th colSpan={3} className="st__th st__th--group">
                            Функциональные возможности
                        </th>
                    </tr>
                    <tr>
                        <th className="st__th st__th--mini">ред</th>
                        <th className="st__th st__th--mini">пере<br />вод</th>
                        <th className="st__th st__th--mini">кик</th>
                    </tr>
                    </thead>

                    <tbody className="st__tbody">
                    {rows.length === 0 ? (
                        <tr>
                            <td colSpan={10} className="st__empty">Нет данных</td>
                        </tr>
                    ) : (
                        rows.map((r) => (
                            <tr key={r.id} className="st__tr">
                                <td className="st__td st__td--narrow">{r.groupNo}</td>
                                <td className="st__td">{r.number}</td>
                                <td className="st__td">{r.firstName}</td>
                                <td className="st__td">{r.lastName}</td>
                                <td className="st__td">{r.middleName}</td>
                                <td className="st__td st__td--mono">{r.email}</td>
                                <td className="st__td st__td--mono">{r.networkFolder}</td>

                                <td className="st__td st__td--action">
                                    <button className="st__btn" onClick={() => onEdit?.(r)}>✏️</button>
                                </td>
                                <td className="st__td st__td--action">
                                    <button className="st__btn" onClick={() => onTransfer?.(r)}>🔄</button>
                                </td>
                                <td className="st__td st__td--action">
                                    <button className="st__btn st__btn--danger" onClick={() => onKick?.(r)}>⛔</button>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>

            <button className="st__add" onClick={onAdd} aria-label="Добавить студента">
                +
            </button>
        </section>
    );
}