import { Routes, Route, Link } from 'react-router-dom'
import Authorization from './Pages/Authorization/Authorization.jsx'
import StudentListPage from "./Pages/ StudentListPage/StudentListPage.jsx";
import General from "./Pages/Base/General.jsx";
import Settings from "./Pages/Settings/Settings.jsx";

function App() {
    return (
        <>
            <Link to="/authorization">Go to Authorization</Link>
            <Link to="/studentListPage">Go to StudentTable</Link>
            <Link to="/base">Go to Base</Link>
            <Link to="/settings">Go to Settings</Link>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/authorization" element={<Authorization />} />
                <Route path="/studentListPage" element={<StudentListPage />} />
                <Route path="/base" element={<General />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </>
    )
}

export default App
