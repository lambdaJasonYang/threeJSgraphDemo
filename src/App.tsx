import React from 'react';
import './App.css';

import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import {useRef,useLayoutEffect} from 'react';
import { Line, Controls } from './Lines3';


type props = {
  start: number[],
  end: number[]
}
// function Line({ start, end }: props) {
//   const ref = useRef<THREE.Line>()
//   useLayoutEffect(() => {
//     if (ref.current){
//       ref.current.geometry.setFromPoints([start, end].map((point) => new THREE.Vector3(...point)))
//     }
//   }, [start, end])
//   return (
//     <line onClick={(e) => console.log('click')} ref={ref as any}>
//       <bufferGeometry />
//       <lineBasicMaterial color="hotpink" />
//     </line>
//   )
// }


function App() {
  return (

    <div style={{ position: "relative", width: 800, height: 800 }}>
        <Canvas orthographic={true} camera={{ left: -300, right: 300, top: 300, bottom: -300, near: 0, far: 5}}>
          <mesh >
            <ringBufferGeometry args={[10,20,32]} />
            <meshStandardMaterial />
            {/* <bufferGeometry position={[]}/> */}
          </mesh>
          {/* <Line start={[-100, 0, 0]} end={[100, 300, 0]} /> */}
          <Controls>
        <Line defaultStart={[-100, -100, 0]} defaultEnd={[0, 100, 0]} />
        <Line defaultStart={[0, 100, 0]} defaultEnd={[100, -100, 0]} />
      </Controls>
          {/* <lineCurve args={[{[0,0],[100,100]}]}/> */}
        </Canvas>
    </div>
  );
}

export default App;
