import {Routes, Route} from 'react-router-dom';
import App from "../HomeComponent/App.jsx";
import MoreInfoApp from "../MoreInfoComponent/App.jsx";

function AppRouter({}) {

    return (
        <Routes>
            <Route path={`/`} element={<App/>}/>
            <Route path={`/`} element={<MoreInfoApp/>}/>
        </Routes>
    );
}
export default AppRouter;
