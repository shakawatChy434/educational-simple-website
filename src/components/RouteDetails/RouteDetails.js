import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Home from '../Home/Home';
import Service from '../Service/Service';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';

const RouteDetails = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><Home /> </Route>
                <Route path="/home"><Home /> </Route>
                <Route path="/about"><About /> </Route>
                <Route path="/service"><Service /> </Route>
                <Route path="/contact"><ContactUs /> </Route>
                <Route path="*"><NotFound /> </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default RouteDetails;