import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

// import { sin }
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.y = Math.sin(Date.now() * 0.001) * Math.PI * 0.2
  })
  return (
    <Float speed={1.75} rotationIntensity={1}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}
      ref={ref}
      position={[0,0,0]}
      >
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        />
        <Decal
        position={[0,0,1]}
        rotation={[2*Math.PI, 0, 6.25]}
        flatShading
        map={decal} />
      </mesh>
    </Float>
    
  );
};

const BallCanvas = ({ icon }) => {


  return (
    <Canvas
      // frameloop="demand"
      // gl={{preserveDrawingBuffer: true}}
      
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            enableZoom={false}
            // autoRotate
            // maxPolarAngle={Math.PI/2}
            // minPolarAngle={Math.PI/2}
            // maxAzimuthAngle={Math.PI/2}
          />
          <Ball imgUrl={icon}/>
        </Suspense>
        <Preload all/>
      
    </Canvas>
    
  );
};

export default BallCanvas;
