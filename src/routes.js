import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from './Components/PropTypes/ParentPropType';
import Container from './Components/Presentational/Container';
import PhotoDisplay from './Components/HighOrderComponent/PhotoDisplay';
import ProductDisplay from './Components/HighOrderComponent/ProductDisplay';
import DataFetcher from './Components/RenderProps/DataFetcher';
import DisplayPhotosRender from './Components/RenderProps/DisplayPhotosRender';
import DisplayProductsRender from './Components/RenderProps/DisplayProductsRender';

export default (
    <Switch>
        {/* Prop Types */}
        <Route 
            path='/proptypes'
            component={PropTypes}
        />
        {/* Presentational */}
        <Route
            exact path="/"
            component={Container}
        />
        {/* Higher Order Components */}
        <Route
            path="/hocphotos"
            component={PhotoDisplay}
        />
        <Route
            path="/hocproducts"
            // component={ProductDisplay}
        />
        {/* Render Props */}
        <Route
        path='/renderphotos'
        render={() => {
            return (
                <DataFetcher
                    url="https://picsum.photos/v2/list"
                    renderMyComponent={data => {
                        return <DisplayPhotosRender
                                    data={data}
                                />
                    }}
                />
            )
        }}
        />
        <Route
        path='/renderproducts'
        render={() => {
            return (
                <DataFetcher
                    url="https://picsum.photos/v2/list"
                    renderMyComponent={data => {
                        return <DisplayProductsRender
                                    data={data}
                                />
                    }}
                />
            )
        }}
        />
    </Switch>
)