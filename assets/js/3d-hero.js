const container = document.getElementById('hero-3d-container');

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Object
const geometry = new THREE.TorusKnotGeometry( 1.5, 0.5, 100, 16 );
const material = new THREE.MeshNormalMaterial({ });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// Animation
function animate() {
    requestAnimationFrame(animate);

    torusKnot.rotation.x += 0.005;
    torusKnot.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();

// Handle mouse move
document.addEventListener('mousemove', (event) => {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    gsap.to(torusKnot.rotation, {
        x: mouseY * 0.5,
        y: mouseX * 0.5,
        duration: 1
    });
});
