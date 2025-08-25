import * as three from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Saturn() {
    const meshRef = useRef();
    const ringRef = useRef();
    // Load texture(s) declaratively

    const saturnTexture = useTexture('/saturn.jpg');
    const ringTexture = useTexture('/saturn_ring.png');

    //animate rotation
    useFrame(() => {
        //state: R3F render state
        //delta : time in seconds since last frame
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.018; // adjust speed here
        } //slow rotation
        if (ringRef.current) {
            ringRef.current.rotation.y += 0.018; // Rotate rings with planet
        }
    })

    //load the geometry
    let radius = 9;
    let widthSegments = 64;
    let heightSegments = 64;
    const geometry = new three.SphereGeometry(
        radius,
        widthSegments,
        heightSegments
    );
    const ringsGeometry = new three.RingGeometry(
        radius + 1,     // inner radius (start just outside Saturn)
        radius + 6,     // outer radius (adjust size)
        64              // radial segments
      );
    const ringsMaterial = new three.MeshPhongMaterial({
        map: ringTexture,
        transparent: true,
        side: three.DoubleSide,        // rings are visible from both sides
        alphaMap: ringTexture,        // use alpha from texture
        depthWrite: false,             // prevent depth fighting
      });
    //load the material
    const material = new three.MeshStandardMaterial({ color: '#D3D3D3' });
    //return the mesh (material+geometry)
    return (
<>
        <mesh ref={meshRef} geometry={geometry} material={material} >
            <meshPhongMaterial map={saturnTexture} bumpMap={saturnTexture} bumpScale={0.05} />
        </mesh>
        <mesh
        ref={ringRef}
        geometry={ringsGeometry}
        material={ringsMaterial}
      />
        </>
    )
}
