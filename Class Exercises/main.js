import * as THREE from 'three';

const scene = new THREE.Scene();//scene constructor 
scene.background = new THREE.Color(0x202020);

const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth/window.innerHeight, 0.1, 1000
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial({color:0xff0000});
const cubeMesh = new THREE.Mesh(geometry, material);
//scene.add(cubeMesh);

// Add a second blue cube
const blueMaterial = new THREE.MeshStandardMaterial({color:0x0000ff});
const blueCube = new THREE.Mesh(geometry, blueMaterial);
blueCube.position.set(-0.9, 0.9, 0.9); 
blueCube.scale.set(2,0.25,0.5);
blueCube.rotation.set(Math.PI * 1.25, Math.PI * 1.25, Math.PI * 0.25);
//scene.add(blueCube);

const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(2,2,5);
scene.add(light);

//move the cube x,y,z
//cubeMesh.position.x = 0.7;
//cubeMesh.position.y = -0.6;
//cubeMesh.position.z = 1;

//console.log(cubeMesh.position.distanceTo(camera.position));

//cubeMesh.position.set(0.7,-0.6,1);

//Axes helper
const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

//scale
//cubeMesh.scale.x=2;
//cubeMesh.scale.y=0.25;
//cubeMesh.scale.z=0.5;

//rotation 
//cubeMesh.rotation.x = Math.PI * 0.25;
//cubeMesh.rotation.y = Math.PI * 0.25;
//cubeMesh.rotation.z = Math.PI * 0.25;

//Combining transformations
cubeMesh.position.set(0.9,-0.9,0.9);
cubeMesh.scale.set(2,0.25,0.5);
cubeMesh.rotation.set(Math.PI * 1.25, Math.PI * 1.25, Math.PI * 0.25);

//Scene graph
const group = new THREE.Group();
group.scale.y=2;
group.rotation.y=0.2;
scene.add(group);

const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const ballMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 });
const ball = new THREE.Mesh(ballGeometry, ballMaterial);
ball.position.set(-2, 0, 0);
scene.add(ball);

// Square (Cube)
const squareGeometry = new THREE.BoxGeometry(1, 1, 1);
const squareMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const square = new THREE.Mesh(squareGeometry, squareMaterial);
square.position.set(0, 0, 0);
scene.add(square);

// Pyramid (Cone)
const pyramidGeometry = new THREE.ConeGeometry(0.7, 1.2, 4);
const pyramidMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
pyramid.position.set(2, 0, 0);
scene.add(pyramid);


function animate(){
    requestAnimationFrame(animate);
    //cubeMesh.rotation.x +=0.01;
    //cubeMesh.rotation.y +=0.01;
    renderer.render(scene,camera);

}
animate();