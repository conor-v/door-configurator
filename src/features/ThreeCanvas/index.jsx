import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { Suspense } from "react";
import Lights from "./components/lights";
import { NewRoom } from "./components/NewRoom";
import Door from "./components/Door";

const ThreeCanvas = () => {
	return (
		<Box w="100%" h="100vh" zIndex={0}>
			<Canvas shadows>
				<color attach="background" args={[0xe3ded9]} />
				<PerspectiveCamera
					makeDefault
					aspect={window.innerWidth / window.innerHeight}
					near={1}
					far={1000}
					fov={45}
					position={[0, 1.65, 8]}
				/>
				<Lights />
				<Sky sunPosition={[0, 2, 2]} />

				<Suspense fallback={null}>
					<NewRoom rotation-y={Math.PI / 2} position={[0.41, 0, -1.05]} />
					<Door />
				</Suspense>

				<OrbitControls />
			</Canvas>
		</Box>
	);
};

export default ThreeCanvas;
