import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Neptune from './Neptune';


export default function Canvas_3(){
    return(
        <div className="w-screen h-screen bg-black">
            
            <Canvas camera={{ position: [0, 0, 30] }}>

               <Neptune/>
                <ambientLight intensity={0.8}/>
                <directionalLight position={[5,5,5]} intensity={1}/>
                <OrbitControls /> {/*Enables Mouse interation*/}
            </Canvas>
        </div>
    )
}