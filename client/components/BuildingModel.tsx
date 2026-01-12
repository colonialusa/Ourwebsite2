import { Suspense, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PresentationControls } from '@react-three/drei';

const Model = memo(function Model() {
  const { scene } = useGLTF('/3d/modern-glass-office.glb');
  return <primitive object={scene} scale={3.5} position={[0, 0.5, 0]} />;
});

function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-colonial-navy/50 text-lg animate-pulse">
        Loading 3D Model...
      </div>
    </div>
  );
}

function BuildingModel() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [4.5, 3, 4.5], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={2} />
          <directionalLight position={[10, 10, 5]} intensity={2.5} />
          <directionalLight position={[-10, -10, -5]} intensity={1.5} />
          <directionalLight position={[0, 10, 0]} intensity={1} />
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.5, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 2, Math.PI / 2]}
          >
            <Model />
          </PresentationControls>
        </Suspense>
        <OrbitControls 
          enableZoom={true}
          minDistance={5}
          maxDistance={50}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}

export default memo(BuildingModel);
