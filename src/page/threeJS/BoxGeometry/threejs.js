import * as THREE from 'three';
class boxGeometry {
    constructor() {
        this.init();
    }

    init() {
        this.scene = new THREE.Scene();//创建场景对象Scene
        //创建网格模型
        // this.geometry = new THREE.SphereGeometry(100, 100, 100); //创建一个球体几何对象
        this.geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry

        this.material = new THREE.MeshLambertMaterial({
            color: "#86D24A"
        }); //材质对象Material
        this.mesh = new THREE.Mesh(this.geometry, this.material); //网格模型对象Mesh
        this.scene.add(this.mesh); //网格模型添加到场景中
        //光源设置
        //点光源
        this.point = new THREE.PointLight(0xffffff);
        this.point.position.set(400, 200, 300); //点光源位置
        this.scene.add(this.point); //点光源添加到场景中
        //环境光
        this.ambient = new THREE.AmbientLight(0x444444);
        this.scene.add(this.ambient);

        // 相机设置
        this.width = 900; //窗口宽度
        this.height = 700; //窗口高度
        this.k = this.width / this.height; //窗口宽高比
        this.s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大

        //创建相机对象
        this.camera = new THREE.OrthographicCamera(-this.s * this.k, this.s * this.k, this.s, -this.s, 1, 1000);
        this.camera.position.set(100, 100, 200); //设置相机位置
        this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)

        //创建渲染器对象
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);//设置渲染区域尺寸
        this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
        this.canvas = this.renderer.domElement; //body元素中插入canvas对象
        //执行渲染操作   指定场景、相机作为参数
        // setInterval(() => {
        //     this.renderer.render(this.scene, this.camera);
        //     this.mesh.rotateY(0.01)
        // },20)
        this.T0 = new Date();
        this.renderbox();
    }

    renderbox() {
        let T1 = new Date();//本次时间
        let t = T1 - this.T0;//时间差
        this.T0 = T1;//把本次时间赋值给上次时间
        this.renderer.render(this.scene, this.camera);
        this.mesh.rotateY(0.001 * t);
        requestAnimationFrame(this.renderbox.bind(this))

    }

}

export default boxGeometry