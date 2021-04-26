import React,{lazy,Suspense} from 'react'
import {Route, Switch,Redirect} from 'react-router-dom';

const PartOne = lazy(() => import('../page/threeJS/line/index'));

const BoxGeometry = lazy(() => import('../page/threeJS/BoxGeometry/index'))
const BoxGeometry2 = lazy(() => import('../page/threeJS/BoxGeometry2/index'))
const ballGeometry = lazy(() => import('../page/threeJS/ballGeometry/index'));
const pointLearn = lazy(() => import('../page/threeJS/pointLearn/index'));
const modalObject = lazy(() => import('../page/threeJS/modalObject/index'));
const Light = lazy(() => import('../page/threeJS/light/index'));
const Curve = lazy(() => import('../page/threeJS/curve/index'));
const Curve2 = lazy(() => import('../page/threeJS/curve2/index'));

const intervalStack = lazy(() => import('../page/chart/intervalStack/index'));
const Home = lazy(() => import('../page/map/index'));
const Map_gaode = lazy(() => import('../page/map_gaode/index'));


const mixChart = lazy(() => import('../page/chart/mixchart/index'))
const hooks = lazy(() => import('../page/hooks/useStateAnduseEeffect/index.component'))
const hooksWithMobx = lazy(() => import('../page/hooks/hooksWithMobx/index.component.hooks'))
const classWithMobx = lazy(() => import('../page/hooks/hooksWithMobx/index.component.class'))
const useCallback_Memo = lazy(() => import('../page/hooks/useCallback&Memo/index.component'))
const customizeChart = lazy(() => import('../page/customizeChart/index/index.component'))
const myAlternativeHome = lazy(() => import('../page/myAlternativeHome/index.component'))
const monthHomePrice = lazy(() => import('../page/monthHomePrice/index.component'))

class Routes extends React.Component{


    render(){
        return (
            <Suspense fallback = {<div>loading.....</div>}>
                <Switch>
                    <Redirect from = '/' exact to = '/customizeChart' />
                    <Route exact strict component = {Home} path = '/map' />
                    <Route exact strict component = {Map_gaode} path = '/map_gaode' />
                    <Route exact strict component = {PartOne} path = "/line" />
                    <Route exact strict component = {BoxGeometry} path = "/boxGeometryAnimate" />
                    <Route exact strict component = {BoxGeometry2} path = "/boxGeometryMouseControl" />
                    <Route exact strict component = {ballGeometry} path = "/ballGeometry" />
                    <Route exact strict component = {pointLearn} path = "/pointLearn" />
                    <Route exact strict component = {modalObject} path = "/modalObject" />
                    <Route exact strict component = {Light} path = "/light" />
                    <Route exact strict component = {Curve} path = "/curve" />
                    <Route exact strict component = {Curve2} path = "/curve2" />
                    <Route exact strict component = {mixChart} path = "/mixChart" />
                    <Route exact strict component = {hooks} path = "/useState&useEffect" />
                    <Route exact strict component = {hooksWithMobx} path = "/hooksWithMobx" />
                    <Route exact strict component = {classWithMobx} path = "/classWithMobx" />
                    <Route exact strict component = {useCallback_Memo} path = "/useCallback&Memo" />
                    <Route exact strict component = {customizeChart} path = "/customizeChart" />
                    <Route exact strict component = {myAlternativeHome} path = "/myAlternativeHome" />
                    <Route exact strict component = {monthHomePrice} path = "/monthHomePrice" />
                    


                    

                    <Route exact strict component = {intervalStack} path = "/intervalStack" />
                </Switch>
            </Suspense>
            
        )
    }
}


export default Routes