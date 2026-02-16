import { Routes, Route, Switch} from 'react-router-dom';
import Authorization from './Authorization/Authorization.jsx';
function App() {
    return (
        <div>
            <Switch>
                <Routes>
                    <Route path="./Authorization" element={<Authorization />} />
                </Routes>
            </Switch>
        </div>
    );
}
export default App;
