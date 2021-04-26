import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
class boxGeometry {
    constructor() {
        this.init();
    }

    init() {
        this.scene = new THREE.Scene();//创建场景对象Scene


        var geometry = new THREE.Geometry();//声明一个几何体对象
        // ArcCurve( aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise )
        // aX,aY  圆弧圆心坐标
        // aRadius 圆弧半径
        // aStartAngle aEndAngle  起始和终止角度
        // aClockwise 是否顺时针绘制，默认false
        var arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI);
        //getPoints是基类Curve的方法，返回一个vector2对象作为元素组成的数组
        var points = arc.getPoints(50);//分段数50，返回51个顶点
        // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
        geometry.setFromPoints(points);
        //材质对象
        var material = new THREE.LineBasicMaterial({
            color: 0x000000
        });
        //线条模型对象
        var line = new THREE.Line(geometry, material);
        this.scene.add(line); //线条对象添加到场景中

        //-----------------绘制三维直线-----------------
        var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
        var p1 = new THREE.Vector3(50, 0, 20); //顶点1坐标
        var p2 = new THREE.Vector3(0, 70, 100); //顶点2坐标
        //顶点坐标添加到geometry对象
        geometry.vertices.push(p1, p2);
        var material = new THREE.LineBasicMaterial({
            color: 0xffff00,
        });//材质对象
        //线条模型对象
        var line = new THREE.Line(geometry, material);
        this.scene.add(line); //线条对象添加到场景中


        //---------------二维直线--------------------
        var geometry = new THREE.Geometry();
        var LineCurve = new THREE.LineCurve(new THREE.Vector2(50, 0), new THREE.Vector2(0, 70));
        var pointArr = LineCurve.getPoints(10);
        geometry.setFromPoints(pointArr);
        var material = new THREE.LineBasicMaterial({
            color: 0xffff00,
        });//材质对象
        //线条模型对象
        var line = new THREE.Line(geometry, material);
        this.scene.add(line); //线条对象添加到场景中


        //----------------样条曲线--------------------
        var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
        // 三维样条曲线  Catmull-Rom算法
        var curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-50, 20, 90),
            new THREE.Vector3(-10, 40, 40),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(60, -60, 0),
            new THREE.Vector3(70, 0, 80)
        ]);
        //getPoints是基类Curve的方法，返回一个vector3对象作为元素组成的数组
        var points = curve.getPoints(100); //分段数100，返回101个顶点
        // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
        geometry.setFromPoints(points);
        //材质对象
        var material = new THREE.LineBasicMaterial({
            color: 0x000000
        });
        //线条模型对象
        var line = new THREE.Line(geometry, material);
        this.scene.add(line); //线条对象添加到场景中


        //-------------贝赛尔曲线-----------------
        var p1 = new THREE.Vector3(-80, 0, 0);
        var p2 = new THREE.Vector3(-40, 100, 0);
        var p3 = new THREE.Vector3(40, 100, 0);
        var p4 = new THREE.Vector3(80, 0, 0);
        // 三维三次贝赛尔曲线
        var curve = new THREE.CubicBezierCurve3(p1, p2, p3, p4);
        var points = curve.getPoints(100); //分段数100，返回101个顶点
        // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
        geometry.setFromPoints(points);
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