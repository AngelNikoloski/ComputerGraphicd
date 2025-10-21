import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

// Orthographic Camera
const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,  // left
  1 * aspectRatio,   // right
  1,                 // top
  -1,                // bottom
  0.1,               // near
  100                // far
);
camera.position.z = 3;
scene.add(camera);

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
const cubeMesh = new THREE.Mesh(geometry, material);
scene.add(cubeMesh);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cubeMesh.rotation.x += 0.05;
  cubeMesh.rotation.y += 0.05;
  renderer.render(scene, camera);
}

animate();
