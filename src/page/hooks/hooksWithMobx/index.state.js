import { observable, action, configure,runInAction } from 'mobx';
import * as mobx from 'mobx'
// @ts-check
// useStrict(true);
// console.log(mobx)
configure({ enforceActions: 'always' })//5.x  区分严格模式  always observed never(默认)
class state {
    @observable num = 0;
    @observable setNum = null

    @action changeNum = () => {
        setInterval(this.setfn,1000)
    }

    @action setfn = () => {
        this.num++
    }

    // @action clearNum = () => {
    //     clearInterval(this.setNum)
    // }


    // @observable seeObject = {
    //     a : "string",
    //     b : 123,
    //     c : [1,2,3],
    //     d : {e : 1},
    //     f : Symbol('123'),
    //     g : () => {},
    //     h : true,
    //     i : null,
    //     j : undefined
    // }

    // @action changeObject = () => {
    //     this.seeObject.a = 'qwe';
    //     this.seeObject.b = 321;
    //     this.seeObject.c = [3,4,5];
    //     this.seeObject.d.e = 'zxc'
    // }
}


export default new state()