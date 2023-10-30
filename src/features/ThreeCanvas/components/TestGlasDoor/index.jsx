import { useStore } from "../../../../stores/appStore";
import { GlasDoorFrame } from "./GlasDoorModels/GlasDoorFrame";

const TestGlasDoor = ({ materialProps, handleGlassColor }) => {
	const { doorWidth, doorHeight } = useStore((state) => state.door.gekozendeur);
	return (
		<group position={[0, 0.036, 2.15]}>
			<mesh position={[0, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
				<boxGeometry args={[doorWidth / 1000 - 0.05, doorHeight / 1000 - 0.05, 0.02]} />
				<meshPhysicalMaterial {...materialProps} color={handleGlassColor()} />
			</mesh>
			<GlasDoorFrame scale={[22 * 2.7, 0.07, 0.07]} />
			<GlasDoorFrame scale={[22 * 2.7, 0.07, 0.07]} position={[0, 2.03, 0]} rotation={[Math.PI, 0, 0]} />
			<GlasDoorFrame
				scale={[21 * 2.7, 0.07, 0.07]}
				position={[doorWidth / 1000 - 1.13, 1.015, 0]}
				rotation={[0, 0, Math.PI / 2]}
			/>
			<GlasDoorFrame scale={[21 * 2.7, 0.07, 0.07]} position={[-1.07, 1.015, 0]} rotation={[0, 0, -Math.PI / 2]} />
		</group>
	);
};

export default TestGlasDoor;
