// Create the scene — like a stage
const scene = new THREE.Scene();

// Create a camera — what the viewer sees
const camera = new THREE.PerspectiveCamera(
  75,                             // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1,                            // Near clipping
  1000                            // Far clipping
);

// Create the renderer — draws the scene onto our canvas
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Create a cube
const geometry = new THREE.BoxGeometry(); // Cube shape
const material = new THREE.MeshStandardMaterial({ color: 0xff00ff }); // Magenta
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); // Add cube to the scene

// Add light so the cube is visible
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Animate the cube
function animate() {
  requestAnimationFrame(animate); // Keep running this loop

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera); // Draw the scene through the camera
}

animate(); // Start the animation