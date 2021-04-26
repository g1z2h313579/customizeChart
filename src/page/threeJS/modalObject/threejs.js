import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
class boxGeometry {
    constructor() {
        this.init();
    }

    init() {
        this.scene = new THREE.Scene();//创建场景对象Scene

        var geometry = new THREE.BoxGeometry(100, 100, 100);
        // 三角形面渲染模式  
        var material = new THREE.MeshLambertMaterial({
            color: 0x0000ff, //三角面颜色
            wireframe:true,//网格模型以线条的模式渲染
        }); //材质对象
        

        var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
        //设置位置；
        mesh.position.y = 50;
        mesh.position.x = 50;
        mesh.position.z = 50;
        //平移
        mesh.translateX(100);
        //旋转
        mesh.rotateX(Math.PI/4);//绕x轴旋转π/4
        this.scene.add(mesh);

        


        var axisHelper = new THREE.AxisHelper(250);//红：x轴， 绿： y轴，蓝：z轴
        this.scene.add(axisHelper);
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
        // this.renderbox();


        // this.r();
        this.renderer.render(this.scene, this.camera)

        this.controls = new OrbitControls(this.camera, this.canvas);//创建控件对象
        this.controls.addEventListener('change', () => { this.renderer.render(this.scene, this.camera) });//监听鼠标、键盘事件
    }

    r() {
        this.renderer.render(this.scene, this.camera);//执行渲染操作
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