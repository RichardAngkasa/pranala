import { useEffect } from 'react';
import SceneInit from '../components/sceneInit';
import * as THREE from "three";



function Tiga() {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    const geometry = new THREE.ConeGeometry( 5, 5, 5 ); 
    const material = new THREE.MeshNormalMaterial( {color: 0xffff00} );
    const cone = new THREE.Mesh(geometry, material );
    test.scene.add(cone);
  }, []);
  return (
    <>

     <canvas id="myThreeJsCanvas" />

    </>
  )
}

export default Tiga
