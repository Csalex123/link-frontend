import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home/index'
import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import ManagerLinks from './pages/Manage/Links/index';
import ManagerLinksCreate from './pages/Manage/Links/Create/index';
import ManagerLinksEdit from './pages/Manage/Links/Create/index';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul className="list-group list-group-horizontal d-flex justify-content-center mt-2">
                        <li className="list-group-item"><Link to="/sign-in" >Entrar</Link></li>
                        <li className="list-group-item"><Link to="/sign-up">Se Cadastrar</Link></li>
                        <li className="list-group-item"><Link to="/manage/links/create">Criar Link</Link></li>
                        <li className="list-group-item"><Link to="/manage/links/edit">Editar Link</Link></li>
                        <li className="list-group-item"><Link to="/manage/links">Links</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact><Home /></Route>
                    <Route path="/sign-in"><SignIn /></Route>
                    <Route path="/sign-up"><SignUp /></Route>
                    <Route path="/manage/links/create"><ManagerLinksCreate /></Route>
                    <Route path="/manage/links/edit"><ManagerLinksEdit /></Route>
                    <Route path="/"><ManagerLinks /></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;