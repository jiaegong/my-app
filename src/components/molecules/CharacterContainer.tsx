import { Canvas } from '@react-three/fiber';
import Character from './Character';
import { ContactShadows, Environment } from '@react-three/drei';

function CharacterContainer() {
  return (
    <Canvas shadows camera={{ fov: 100 }} gl={{ antialias: true }} dpr={[1, 2]}>
      <Environment preset='sunset' />
      <ambientLight intensity={5} />
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.8}
        blur={2.5}
        far={1.6}
      />
      <Character />
    </Canvas>
  );
}

export default CharacterContainer;
