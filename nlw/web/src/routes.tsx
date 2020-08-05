import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Landing } /> {/* Tela Inicial */}
            <Route path="/study" component={ TeacherList } /> {/* Tela Aluno */}
            <Route path="/give-classes" component={ TeacherForm } /> {/* Tela Professor */}
        </BrowserRouter>
    )
}

export default Routes;