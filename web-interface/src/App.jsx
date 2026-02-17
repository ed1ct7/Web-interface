import { Routes, Route, Link } from 'react-router-dom'
import Authorization from './Authorization/Authorization.jsx'

function App() {
    return (
        <>
            <Link to="/authorization">Go to Authorization</Link>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/authorization" element={<Authorization />} />
            </Routes>
        </>
    )
}

export default App
