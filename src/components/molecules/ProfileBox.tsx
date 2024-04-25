import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { AnimatePresence, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Character from "./Character";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

function ProfileBox({ progress }: { progress: number }) {
  return (
    <AnimatePresence>
      <Layout
        initial={{ opacity: 0 }}
        animate={{ opacity: progress > 0.3 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Canvas
          shadows
          camera={{ fov: 100 }}
          gl={{ antialias: true }}
          dpr={[1, 2]}
        >
          <Environment preset="sunset" />
          <ambientLight intensity={5} />
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.8}
            blur={2.5}
            far={1.6}
          />
          <PerspectiveCamera />
          <OrbitControls />
          <Character />
        </Canvas>
      </Layout>
    </AnimatePresence>
  );
}

export default ProfileBox;

const Layout = styled(motion.div)`
  position: absolute;

  width: 600px;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 12px;
  border: 5px solid transparent;
  background: linear-gradient(${theme.colors.white}, ${theme.colors.white}),
    linear-gradient(
      92deg,
      ${theme.colors.pink} 0%,
      ${theme.colors.apricot} 100%
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;
