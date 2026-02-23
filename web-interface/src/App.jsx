import { Routes, Route, Link } from 'react-router-dom'
import Authorization from './Pages/Authorization/Authorization.jsx'
import StudentListPage from "./Pages/ StudentListPage/StudentListPage.jsx";

function App() {
    return (
        <>
            <Link to="/authorization">Go to Authorization</Link>
            <Link to="/studentListPage">Go to StudentTable</Link>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/authorization" element={<Authorization />} />
                <Route path="/studentListPage" element={<StudentListPage />} />
            </Routes>
        </>
    )
}

export default App
