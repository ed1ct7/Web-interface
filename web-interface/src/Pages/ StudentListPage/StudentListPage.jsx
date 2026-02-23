import { useMemo, useState } from "react";
import "./StudentListPage.scss";
import {Header} from "../../Components/Header/Header.jsx";
import {StudentTable} from "../../Components/StudentsTable/StudentTable.jsx";

export default function StudentListPage() {
    const [rows, setRows] = useState(() => [
        {
            id: "1",
            groupNo: "ИВТ-21",
            number: "01",
            firstName: "Иван",
            lastName: "Петров",
            middleName: "Сергеевич",
            email: "petrov@uni.ru",
            networkFolder: "\\\\server\\students\\g21\\petrov",
        },
    ]);

    const title = useMemo(() => "Староста: Окно списка студентов", []);
    const userLogin = "Логин пользователя";

    return (
        <div className="slp">
            <div className="slp__card">
                <Header title={title} userLogin={userLogin} />
                <StudentTable
                    rows={rows}
                    onAdd={() => {
                        const id = String(Date.now());
                        setRows((p) => [
                            ...p,
                            {
                                id,
                                groupNo: "ИВТ-21",
                                number: String(p.length + 1).padStart(2, "0"),
                                firstName: "",
                                lastName: "",
                                middleName: "",
                                email: "",
                                networkFolder: "",
                            },
                        ]);
                    }}
                    onEdit={(r) => console.log("edit", r)}
                    onTransfer={(r) => console.log("transfer", r)}
                    onKick={(r) => {
                        if (confirm(`Удалить/кикнуть студента: ${r.lastName} ${r.firstName}?`)) {
                            setRows((p) => p.filter((x) => x.id !== r.id));
                        }
                    }}
                />
            </div>
        </div>
    )

}