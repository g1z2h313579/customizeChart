import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
const customizeChart = lazy(() => import('../page/customizeChart/index/index.component'))
const showPage = lazy(() => import('../page/showPage/index.component'))
const meetingConfig = lazy(() => import('../page/meetingConfig/index.component'))
const meetingList = lazy(() => import('../page/meetingList/index.component'))
const meetingDetail = lazy(() => import('../page/meetingDetail/index.component'))
const noPage = lazy(() => import('../page/404/index.component'))
const showPageWindow = lazy(() => import('../page/showPageWindow/index.component'))

class Routes extends React.Component {


    render() {
        return (
            <Suspense fallback={<div>loading.....</div>}>
            
                    <Switch>
                        <Redirect from='/' exact strict to='/meetingList' />
                        <Route exact strict component={showPage} path="/showPage" />
                        <Route exact strict component={customizeChart} path="/customizeChart" />
                        <Route exact strict component={meetingConfig} path="/meetingConfig" />
                        <Route exact strict component={meetingList} path="/meetingList" />
                        <Route exact strict component={meetingDetail} path="/meetingDetail" />
                        <Route exact strict component={noPage} path="/404" />
                        <Route exact strict component={showPageWindow} path="/showPageWindow" />
                    </Switch>

            </Suspense>

        )
    }
}


export default Routes
