import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
const customizeChart = lazy(() => import('../page/customizeChart/index/index.component'))
const showPage = lazy(() => import('../page/showPage/index.component'))


class Routes extends React.Component {


    render() {
        return (
            <Suspense fallback={<div>loading.....</div>}>
            
                    <Switch>
                        <Redirect from='/' exact strict to='/customizeChart' />

                        <Route exact strict component={showPage} path="/showPage" />
                        <Route exact strict component={customizeChart} path="/customizeChart" />

                    </Switch>

            </Suspense>

        )
    }
}


export default Routes