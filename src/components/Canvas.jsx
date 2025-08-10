import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Jupiter from './Jupiter';


export default function Canvas_3(){
    return(
        <div className="w-screen h-screen bg-black">
            
            <Canvas camera={{ position: [0, 0, 30] }}>

                <Jupiter/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[5,5,5]} intensity={1}/>
                <OrbitControls /> {/*Enables Mouse interation*/}
            </Canvas>
        </div>
    )
}