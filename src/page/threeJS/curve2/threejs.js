import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
class boxGeometry {
    constructor() {
        this.init();
    }

    init() {
        this.scene = new THREE.Scene();//创建场景对象Scene


        // var geometry = new THREE.Geometry();//声明一个几何体对象
        // var R = 80;//圆弧半径
        // var arc = new THREE.ArcCurve(0, 0, R, 0, Math.PI, true);
        // // 半圆弧的一个端点作为直线的一个端点
        // var line1 = new THREE.LineCurve3(new THREE.Vector3(R, 200, 0), new THREE.Vector3(R, 0, 0));
        // var line2 = new THREE.LineCurve3(new THREE.Vector3(-R, 0, 0), new THREE.Vector3(-R, 200, 0));
        // // 创建组合曲线对象CurvePath
        // 创建多段线条的顶点数据
        var p1 = new THREE.Vector3(-85.35, -35.36)
        var p2 = new THREE.Vector3(-50, 0, 0);
        var p3 = new THREE.Vector3(0, 50, 0);
        var p4 = new THREE.Vector3(50, 0, 0);
        var p5 = new THREE.Vector3(85.35, -35.36);
        // 创建线条一：直线
        let line1 = new THREE.LineCurve3(p1, p2);
        // 重建线条2：三维样条曲线
        var curve = new THREE.CatmullRomCurve3([p2, p3, p4]);
        // 创建线条3：直线
        let line2 = new THREE.LineCurve3(p4, p5);
        var CurvePath = new THREE.CurvePath();
        // 把多个线条插入到CurvePath中
        CurvePath.curves.push(line1, curve, line2);
        var geometry = new THREE.TubeGeometry(CurvePath, 100, 5, 25, false);
        // //分段数200
        // var points = CurvePath.getPoints(200);
        // // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
        // geometry.setFromPoints(points);
        //创建管道成型的路径(3D样条曲线)
        // var path = new THREE.CatmullRomCurve3([
        //     new THREE.Vector3(-10, -50, -50),
        //     new THREE.Vector3(10, 0, 0),
        //     new THREE.Vector3(8, 50, 50),
        //     new THREE.Vector3(-5, 0, 100)
        // ]);
        // // path:路径   40：沿着轨迹细分数  2：管道半径   25：管道截面圆细分数
        // var geometry = new THREE.TubeGeometry(path, 1200, 20, 250);
        //材质对象
        var material = new THREE.LineBasicMaterial({
            color: 0x000000
        });
        //线条模型对象
        var line = new THREE.Line(geometry, material);
        this.scene.add(line); //线条对象添加到场景中




        var axisHelper = new THREE.AxisHelper(250);//红：x轴， 绿： y轴，蓝：z轴
        this.scene.add(axisHelper);
        //光源设置
        //点光源
        this.point = new THREE.PointLight('green');
        this.point.position.set(400, 200, 300); //点光源位置
        this.scene.add(this.point); //点光源添加到场景中
        //环境光
        this.ambient = new THREE.AmbientLight('blue');
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