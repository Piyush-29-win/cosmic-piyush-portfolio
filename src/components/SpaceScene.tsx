
import { useRef, useEffect } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/contexts/ThemeContext';

const Planet = ({ position = [0, 0, 0] as [number, number, number], size = 1, rotationSpeed = 0.005, textureUrl = '' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/placeholder.svg');
  const { theme } = useTheme();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial 
        map={texture} 
        color={theme === 'light' ? '#cce6ff' : 'white'} 
        metalness={theme === 'light' ? 0.3 : 0.5}
        roughness={theme === 'light' ? 0.6 : 0.5}
      />
    </mesh>
  );
};

const FloatingRing = ({ 
  position = [0, 0, 0] as [number, number, number], 
  size = 3, 
  thickness = 0.2, 
  color = '#4CC9F0' 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.2) * 0.05;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[size, thickness, 16, 100]} />
      <meshStandardMaterial 
        color={theme === 'light' ? '#4361ee' : color} 
        emissive={theme === 'light' ? '#4361ee' : color}
        emissiveIntensity={theme === 'light' ? 0.4 : 0.5} 
        metalness={theme === 'light' ? 0.4 : 0.5}
        roughness={theme === 'light' ? 0.6 : 0.5}
      />
    </mesh>
  );
};

const SpaceScene = () => {
  const { theme } = useTheme();

  return (
    <div className="h-[25rem] w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={theme === 'light' ? 1.5 : 0.2} />
        <pointLight position={[10, 10, 10]} intensity={theme === 'light' ? 3 : 1} />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={theme === 'light' ? 1.5 : 0.5} 
          color={theme === 'light' ? '#4361ee' : '#7B2CBF'} 
        />
        
        <Planet position={[0, 0, 0]} size={1.5} rotationSpeed={0.003} />
        <FloatingRing 
          position={[0, 0, 0]} 
          size={2.5} 
          thickness={0.08} 
          color={theme === 'light' ? '#4361ee' : '#7B2CBF'} 
        />
        <FloatingRing 
          position={[0, 0, 0]} 
          size={3} 
          thickness={0.05} 
          color={theme === 'light' ? '#2196f3' : '#4CC9F0'} 
        />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={theme === 'light' ? 1000 : 5000} 
          factor={theme === 'light' ? 3 : 4} 
          saturation={theme === 'light' ? 0.2 : 0} 
          fade 
          speed={1} 
        />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default SpaceScene;
