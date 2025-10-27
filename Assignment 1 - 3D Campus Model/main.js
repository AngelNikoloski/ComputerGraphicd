import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const cursor = {
    x: 0,
    y: 0
};

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / window.innerWidth - 0.5;
    cursor.y = -(event.clientY / window.innerHeight - 0.5);
});

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

//plane 
const width = 13;
const height = 10;
const planeGeometry = new THREE.PlaneGeometry(width, height);
const planeMaterial = new THREE.MeshStandardMaterial({color: 0x7CFC00, side: THREE.DoubleSide,});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2; 
scene.add(plane);




//Road1 
const roadWidth = 10;  
const roadLength = 1; 
const roadGeometry = new THREE.PlaneGeometry(roadWidth, roadLength);
const roadMaterial = new THREE.MeshStandardMaterial({
  color: 0x111111,         
  metalness: 0.1,
  side: THREE.DoubleSide
});
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.rotation.x = -Math.PI / 2;  
road.position.set(-1.5, 0.1, 1.5);
scene.add(road);

//road2
const road2 = new THREE.Mesh(roadGeometry, roadMaterial);
road2.rotation.x = -Math.PI / 2;  
road2.position.set(3.7, 0.1, 0);
road2.rotation.z = Math.PI / 2; 
scene.add(road2);



const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 200);
camera.position.set(0, 10, 10);
camera.lookAt(0, 0, 0);
scene.add(camera);


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 0, 0);
controls.update();

//lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 10, 7.5);
dirLight.castShadow = true;
dirLight.shadow.camera.top = 10;
dirLight.shadow.camera.bottom = -10;
dirLight.shadow.camera.left = -10;
dirLight.shadow.camera.right = 10;
scene.add(dirLight);


//805
const rectMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const rectWidth = 3;
const rectDepth = 1;
const rectHeight = 1; 
const boxGeo = new THREE.BoxGeometry(rectWidth, rectHeight, rectDepth);
const boxMesh = new THREE.Mesh(boxGeo, rectMaterial);
boxMesh.position.set(1.5, rectHeight / 2, 3); 
boxMesh.castShadow = true;
boxMesh.receiveShadow = true;
scene.add(boxMesh);

//806
const rectMaterial1 = new THREE.MeshPhysicalMaterial({ color: 0x0000ff });
const rectWidth1 = 3;
const rectDepth1 = 1;
const rectHeight1 = 1; 
const boxGeo1 = new THREE.BoxGeometry(rectWidth, rectHeight, rectDepth);
const boxMesh1 = new THREE.Mesh(boxGeo, rectMaterial);
boxMesh1.position.set(-1.6, rectHeight / 2, 3); 
boxMesh1.castShadow = true;
boxMesh1.receiveShadow = true;
scene.add(boxMesh1);

//815
const rectMaterial2 = new THREE.MeshPhysicalMaterial({ color: 0x0000ff });
const rectWidth2 = 1;
const rectDepth2 = 1;
const rectHeight2 = 3; 
const boxGeo2 = new THREE.BoxGeometry(rectWidth, rectHeight, rectDepth);
const boxMesh2 = new THREE.Mesh(boxGeo, rectMaterial);
boxMesh2.position.set(5,  rectHeight / 2, 0.4); 
boxMesh2.castShadow = true;
boxMesh2.receiveShadow = true;
boxMesh2.rotation.y = Math.PI / 2; 
scene.add(boxMesh2);

//814
const rectMaterial3 = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const rectWidth3 = 1;
const rectDepth3 = 1;
const rectHeight3 = 3; 
const boxGeo3 = new THREE.BoxGeometry(rectWidth, rectHeight, rectDepth);
const boxMesh3 = new THREE.Mesh(boxGeo, rectMaterial);
boxMesh3.position.set(5,  rectHeight / 2, -2.7); 
boxMesh3.castShadow = true;
boxMesh3.receiveShadow = true;
boxMesh3.rotation.y = Math.PI / 2; 
scene.add(boxMesh3);

//LH1
const rectMaterial4 = new THREE.MeshStandardMaterial({ color: 0x808080 });
const rectWidth4 = 3;
const rectDepth4 = 3;
const rectHeight4 = 1; 
const boxGeo4 = new THREE.BoxGeometry(rectWidth4, rectHeight4, rectDepth4);
const boxMesh4 = new THREE.Mesh(boxGeo4, rectMaterial4);
boxMesh4.position.set(0,rectHeight / 2, -1);
boxMesh4.castShadow = true;
boxMesh4.receiveShadow = true;
scene.add(boxMesh4);


const animate = () => {

    controls.update();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
});