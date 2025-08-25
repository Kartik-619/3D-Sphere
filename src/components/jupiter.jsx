import * as three from 'three';

//used to load textures and images
import { useTexture } from '@react-three/drei';
//it allows to create animations
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Jupiter() {
    //allows to create a reference to the mesh and modify it directly
    const meshRef = useRef();
    // Load texture(s) declaratively

    const jupiterTexture = useTexture('/jupiter.jpeg');

    //animate rotation
    useFrame(() => {
        //state: R3F render state
        //delta : time in seconds since last frame
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.012; // adjust speed here
        } //slow rotation
       
    })

    //load the geometry
    let radius = 10;
    //number of vertical segments..longitude lines
    let widthSegments = 64;
    //number of horizontal segments..latitude lines
    let heightSegments = 64;
    const geometry = new three.SphereGeometry(
        radius,
        widthSegments,
        heightSegments
    );
   
    //load the material
    const material = new three.MeshStandardMaterial({ color: '#D3D3D3' });
    //return the mesh (material+geometry)
    return (
<>
        <mesh ref={meshRef} geometry={geometry} material={material} >
            <meshPhongMaterial map={jupiterTexture} bumpMap={jupiterTexture} bumpScale={0.05} />
        </mesh>
       
        </>
    )
}
