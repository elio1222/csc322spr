// import THREE
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
//import Orbit controls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 20;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new OrbitControls (camera, renderer.domElement);

const material = new THREE.LineBasicMaterial( { color: 0x000000 } );

const points = [];
               //THREE.Vector3(x, y, z);
points.push( new THREE.Vector3(-5, 0, 0));
points.push( new THREE.Vector3(0, 7, 0));
points.push( new THREE.Vector3(5, 0, 0));
points.push( new THREE.Vector3(-5, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add(line);

function animate() {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
  
}

animate();