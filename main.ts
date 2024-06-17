import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xaa00aa);

const cam = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const canvas = document.getElementById("three");

if (!canvas) {
  console.error("Fuck that canvas can't be found");
} else {
  const render = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
  render.setSize(canvas.clientWidth, canvas.clientHeight);
  document.body.appendChild(render.domElement);

  const loader = new GLTFLoader();

  let toiletModel;
  // my swiftie mind gets WTF where type annotation, or Observability macro, or even an empty variable

  loader.load(
    "toilet.glb",
    function (gltf) {
      toiletModel = gltf.scene;
      // ok load this shit

      toiletModel.traverse((node) => {
        if (node.isMesh) {
          node.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        }
      });
      // some crazi shiz to make it white
      scene.add(toiletModel);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  ); //fallback i guess

  cam.position.z = 5;

  function animate() {
    if (toiletModel) {
      toiletModel.rotation.y -= 0.1;
    }

    render.render(scene, cam);
  }

  render.setAnimationLoop(animate);
}

// po twojej pysznej zupie nie ruszam dupy z klopa ta zupa była z mlekiem na mleko mam alergię
