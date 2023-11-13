import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { Suspense } from "react";
import Lights from "./components/lights";
import Door from "./components/Door";
import Room from "./components/Room";
import TakeScreenshot from "@/components/TakeScreenshot";
import { useStore } from "../../stores/appStore";

const ThreeCanvas = () => {
	const screenshot = useStore((state) => state.pdf.screenshot);

	return (
		<Box w="100%" h="100vh" zIndex={0}>
			<Canvas
				shadows
				dpr={[1, 2]}
				gl={{ antialias: true, physicallyCorrectLights: true }}
				linear
				camera={{
					fov: 40,
					near: 1,
					far: 1000,
					position: [0, 1.65, 8],
					aspect: window.innerWidth / window.innerHeight,
				}}>
				<color attach="background" args={[0xe3ded9]} />
				<Lights />
				<Sky sunPosition={[0, 2, 2]} />
				<Suspense fallback={null}>
					<Room rotation-y={Math.PI / 2} position={[-0.46, 0.021, -1.05]} />
					<Door />
				</Suspense>
				<OrbitControls
					enablePan={false}
					target={[0, 1, 0]}
					dampingFactor={0.07}
					rotateSpeed={0.2}
					minPolarAngle={Math.PI / 2.2}
					maxPolarAngle={Math.PI / 2}
					minAzimuthAngle={-Math.PI / 5}
					maxAzimuthAngle={Math.PI / 5}
				/>

				{screenshot && <TakeScreenshot />}
			</Canvas>
		</Box>
	);
};

export default ThreeCanvas;
