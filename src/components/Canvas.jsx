import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Neptune from './Neptune';
import Earth from './earth';
import Saturn from './Saturn';
import Mars from './mars';
import Jupiter from './jupiter';

export default function Canvas_3(){
    return(
        <div className="w-screen h-screen bg-black">
            
            <Canvas camera={{ position: [0, 0, 30] }}>
                
                <Jupiter/>
               {/*<Neptune/>*/}
                <ambientLight intensity={0.8}/>
                <directionalLight position={[5,5,5]} intensity={1}/>
                <OrbitControls /> {/*Enables Mouse interation*/}
            </Canvas>
        </div>
    )
}