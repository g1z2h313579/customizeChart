import { observable, computed, action, decorate } from "mobx";


class IndexState {
    @observable.shallow tik = {    //将observable的值转换为浅引用
        a : {
            b : 0
        }
    }
    @observable tik2 = {        //默认是深引用
        a : {
            b : 0
        }
    }

    @action tiktok = () => {
        setInterval(() => {
            this.tik.a.b += 1;
        },1000)
    }
    @action tiktok2 = () => {
        setInterval(() => {
            this.tik2.a.b += 1;
        },1000)
    }
    tiktok3 = () => {
        setInterval(() => {
            this.tik2.a.b += 1;
        },1000)
    }


    @observable cityInfo = {}
}


export default new IndexState()