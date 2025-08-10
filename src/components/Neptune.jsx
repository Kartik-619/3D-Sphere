import * as three from 'three';
import { useTexture } from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import {useRef} from 'react';

export default function Neptune(){
    const meshRef=useRef();
    // Load texture(s) declaratively
    const jupiterTexture = useTexture('/neptunemap.jpg');
    //animate rotation
    useFrame(()=>{
        //state: R3F render state
        //delta : time in seconds since last frame
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01; // adjust speed here
          } //slow rotation
    })

    //load the geometry
    let radius=10;
    let widthSegments=64;
    let heightSegments=64;
    const geometry=new three.SphereGeometry(
        radius,
        widthSegments,
        heightSegments
    );
    //load the material
    const material=new three.MeshStandardMaterial({color: '#D3D3D3' });
    //return the mesh (material+geometry)
    return(
        
              <mesh ref={meshRef} geometry={geometry} material={material} >
                <meshPhongMaterial map={jupiterTexture} bumpMap={jupiterTexture} bumpScale={0.05}/>
              </mesh>
       
    )
}