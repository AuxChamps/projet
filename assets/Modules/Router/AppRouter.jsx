import {Routes, Route} from 'react-router-dom';
import App from "../HomeComponent/App.jsx";
import MoreInfoApp from "../MoreInfoComponent/App.jsx";
import Register from "../RegisterComponent/App.jsx";

function AppRouter({}) {

    return (
        <Routes>
            <Route path={`/`} element={<App/>}/>
            <Route path={`/`} element={<MoreInfoApp/>}/>
            <Route path={`/inscription`} element={<Register/>}/>
        </Routes>
    );
}
export default AppRouter;
