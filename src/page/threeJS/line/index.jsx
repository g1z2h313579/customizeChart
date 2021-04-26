import React from 'react';
import * as THREE from 'three';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.container = React.createRef()
    }


    componentDidMount() {
        const scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(900, 700);
        this.container.current.appendChild( this.renderer.domElement );
        this.camera = new THREE.PerspectiveCamera(45, 900 / 700, 1, 500);
        this.camera.position.set(0, 0, 100);
        this.camera.lookAt(0, 0, 0);

        let material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        let geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
        geometry.vertices.push(new THREE.Vector3(0, 10, 0));
        geometry.vertices.push(new THREE.Vector3(10, 0, 0));

        var line = new THREE.Line(geometry, material);
        scene.add(line);
        this.renderer.render(scene, this.camera);
    }

    render() {
        return (
            <div ref = {this.container}>
                
            </div>
        )
    }

}


export default Index