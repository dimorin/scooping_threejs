import * as THREE from "three";
import WebGL from 'three/addons/capabilities/WebGL.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

if (WebGL.isWebGLAvailable()){ // WebGL이 호환 된다면,
    const $result = document.querySelector('#result');
    // scene : 화면에서 보여주려는 객체를 담는 공간
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffe287);

    // camera : scene을 바라볼 시점을 결정
    const camera = new THREE.PerspectiveCamera(50, $result.clientWidth / $result.clientHeight, 0.1, 1000);
    camera.position.set(2,2,2);
    camera.lookAt(0,0,0);
    // renderer : scene + camera, 화면을 그려주는 역할
    const renderer = new THREE.WebGLRenderer({canvas:$result, antialias:true, alpha:true});
    renderer.setSize($result.clientWidth, $result.clientHeight); // renderer 사이즈와 canvas 사이즈 맞춤
    //document.body.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(2,4,3);
    scene.add(light);

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshStandardMaterial({
        color:0x2e6ff2,
        //roughness:0.2,
        //metalness:0.8, 
        //side:THREE.DoubleSide, // 양면을 렌더링함, geometry가 plane일 때 더 극명하게 효과를 볼 수 있다.
        //map,
        //wireframe:true,
        //transparent:true,
        //opacity:0.8,
    });
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // mesh 위치
    //box.position.set(0,2,1);
    // mesh 회전
    //box.rotation.y = THREE.MathUtils.degToRad(30);
    // mesh 크기
    //box.scale.x = 1.2;
    //box.scale.z = 0.8;

    const controls = new OrbitControls(camera, $result);
    //조작 설정
    //controls.enableZoom = false;
    //controls.enableRotate = false;
    //controls.enablePan = false;
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI / 3;
    controls.autoRotate = true;
    controls.autoRotateSpeed = -10;
    controls.enableDamping = true;
    
    //axesHelper
    const axesHelper = new THREE.AxesHelper(10);
    scene.add(axesHelper);
    //box.add(axesHelper);  // mesh에도 축을 추가할 수 있다.
    //box.position.x = 3;

    function animate(){
        //box.rotation.y += 0.01;
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        // 1. 카메라 종횡비
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix(); //  카메라 업데이트
        // 2. 렌더러의 크기
        renderer.setSize(window.innerWidth, window.innerHeight);
    })

}else{
    document.body.appendChild(WebGL.getWebGLErrorMessage());
}

