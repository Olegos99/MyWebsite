import {
	EventDispatcher,
	MOUSE,
	Quaternion,
	Spherical,
	TOUCH,
	Vector2,
	Vector3
} from '../../../build/three.module.js';
  
    let camera, scene, renderer, controls;
let geometry, material, mesh;

init();

function init() {



    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    //camera.position.set( 400, 200, 0 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    scene.background = new THREE.Color( 0xcccccc );//new
    scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );//new

    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
    scene.add( new THREE.AxesHelper( 20 ) );

   
    //controls = new OrbitControls( camera, renderer.domElement );//not definde

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio( window.devicePixelRatio );//new
    renderer.setAnimationLoop( animation );
    document.body.appendChild( renderer.domElement );

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    listenToKeyEvents(window);

}

function animation( time ) {

    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;

    renderer.render( scene, camera );

}
/* 
*/
