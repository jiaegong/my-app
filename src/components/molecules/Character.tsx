import { Float, useFBX } from "@react-three/drei";

function Character() {
  const fbx = useFBX("/tokki.fbx");

  return (
    <Float
      speed={4} // Animation speed, defaults t 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <primitive object={fbx} />
    </Float>
  );
}

export default Character;
