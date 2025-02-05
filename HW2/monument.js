// import THREE
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
//import Orbit controls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
//scene.background = new THREE.Color(0x000000);
scene.background = new THREE.Color(0xffffff);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 1000;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new OrbitControls (camera, renderer.domElement);

/*
//example code from API document
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const geometry = new THREE.BufferGeometry();

const vertices = new Float32Array( [
	-1.0, -1.0,  1.0, // v0
	 1.0, -1.0,  1.0, // v1
	 1.0,  1.0,  1.0, // v2

	 1.0,  1.0,  1.0, // v3
	-1.0,  1.0,  1.0, // v4
	-1.0, -1.0,  1.0  // v5
] );

// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
const mesh = new THREE.Mesh( geometry, material );
scene.add(mesh);
*/

const face1 = new THREE.BufferGeometry();

const vertices = new Float32Array( [
	-27.5, 0, 27.5,
	 27.5, 0, 27.5,
	 17, 500, 17,

	 17, 500, 17,
	 -17, 500, 17,
	 -27.5, 0, 27.5,

]);

face1.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
const material = new THREE.MeshBasicMaterial( {color: 'rgb(115, 194, 251)', wireframe: false});
//face 1 is maya blue

const mesh = new THREE.Mesh(face1, material);
scene.add(mesh);

const tface1 = new THREE.BufferGeometry();
const tvertices = new Float32Array( [
	0, 555, 0,
	-17, 500, 17,
	17, 500, 17
])

tface1.setAttribute('position', new THREE.BufferAttribute(tvertices, 3));
const material2 = new THREE.MeshBasicMaterial( {color: 'yellow', wireframe: false, transparent: true});
//triangle face 1 is yellow
const mesh2 = new THREE.Mesh(tface1, material2);
scene.add(mesh2);


const face2 = new THREE.BufferGeometry();
const vertices2 = new Float32Array( [
	27.5, 0, 27.5,
	27.5, 0, -27.5,
	17, 500, -17,

	17, 500, -17,
	17, 500, 17,
	27.5, 0, 27.5

]);

face2.setAttribute('position', new THREE.BufferAttribute(vertices2, 3));
const material3 = new THREE.MeshBasicMaterial( {color: 'rgb(255, 0, 0)', wireframe: false});
//face 2 of monument is red
const mesh3 = new THREE.Mesh(face2, material3);
scene.add(mesh3);

const tface2 = new THREE.BufferGeometry();
const tvertices2 = new Float32Array([
	0, 555, 0,
	17, 500, 17,
	17, 500, -17
]);

tface2.setAttribute('position', new THREE.BufferAttribute(tvertices2, 3));
const material4 = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: false});
//pyramid face 2 is green
const mesh4 = new THREE.Mesh(tface2, material4);
scene.add(mesh4);

const face3 = new THREE.BufferGeometry();
const vertices3 = new Float32Array([
	27.5, 0, -27.5,
	-27.5, 0, -27.5,
	-17, 500, -17,

	-17, 500, -17,
	17, 500, -17,
	27.5, 0, -27.5
]);

face3.setAttribute('position', new THREE.BufferAttribute(vertices3, 3));
const material5 = new THREE.MeshBasicMaterial( {color: 0xCBC3E3, wireframe: false});
//face 3 of monument is light purple
const mesh5 = new THREE.Mesh(face3, material5);
scene.add(mesh5);

const tface3 = new THREE.BufferGeometry();
const tvertices3 = new Float32Array([
	0, 555, 0,
	17, 500, -17,
	-17, 500, -17
]);

tface3.setAttribute('position', new THREE.BufferAttribute(tvertices3, 3));
const material6 = new THREE.MeshBasicMaterial( {color: "rgb(0, 0, 0)", wireframe: false});
//pyramid face 3's color is black
const mesh6 = new THREE.Mesh(tface3, material6);
scene.add(mesh6);

const face4 = new THREE.BufferGeometry();
const vertices4 = new Float32Array([
	-27.5, 0, -27.5,
	-27.5, 0, 27.5,
	-17, 500, 17,

	-17, 500, 17,
	-17, 500, -17,
	-27.5, 0, -27.5
]);

face4.setAttribute('position', new THREE.BufferAttribute(vertices4, 3));
const material7 = new THREE.MeshBasicMaterial( {color: 0xEADDCA, wireframe: false});
//face 4 is a white-ish color
const mesh7 = new THREE.Mesh(face4, material7);
scene.add(mesh7);

const tface4 = new THREE.BufferGeometry();
const tvertices4 = new Float32Array([
	0, 555, 0,
	-17, 500, -17,
	-17, 500, 17
]);

tface4.setAttribute('position', new THREE.BufferAttribute(tvertices4, 3));
const material8 = new THREE.MeshBasicMaterial( {color: 'orange', wireframe: false});
//pyramid face 4 is orange
const mesh8 = new THREE.Mesh(tface4, material8);
scene.add(mesh8);

function animate() {
	
	mesh.rotation.y += 0.01;
	mesh2.rotation.y += 0.01;
	mesh3.rotation.y += 0.01;
	mesh4.rotation.y += 0.01;
	mesh5.rotation.y += 0.01;
	mesh6.rotation.y += 0.01;
	mesh7.rotation.y += 0.01;
	mesh8.rotation.y += 0.01;


	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
  
}

animate();
