import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

// Camera
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
camera.position.set(2, 2, 6);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(800, 600);
document.body.appendChild(renderer.domElement);

// === Floor (Plane) ===
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshStandardMaterial({
  color: 0x303030,
  roughness: 1,
});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // rotate to make it horizontal
floor.position.y = -1;
floor.receiveShadow = true;
scene.add(floor);

// === Object 1: Sphere ===
const sphereGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff4444 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(-2, -0.4, 0);
scene.add(sphere);

// === Object 2: Box ===
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshLambertMaterial({ color: 0x44ff44 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(0, -0.4, 0);
scene.add(box);

// === Object 3: Torus ===
const torusGeometry = new THREE.TorusGeometry(0.6, 0.2, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: 0x4488ff,
  metalness: 0.6,
  roughness: 0.3,
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.set(2, -0.4, 0);
scene.add(torus);

// === Lighting ===
// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

// Directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(3, 5, 2);
scene.add(directionalLight);

// Optional helper
const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.5);
scene.add(lightHelper);

// === Animation ===
function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.01;
  box.rotation.y += 0.01;
  torus.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
