import { useStore } from "../../../../stores/appStore";
import { GlasDoorFrame } from "./GlasDoorModels/GlasDoorFrame";

const TestGlasDoor = ({ materialProps, handleGlassColor, handleBorderColor }) => {
	const { doorWidth, doorHeight } = useStore((state) => state.door.gekozendeur);
	return (
		<group position={[0, 0.036, 2.197]}>
			<mesh position={[0, doorHeight / 1000 / 2 - 0.03, 0]} receiveShadow castShadow>
				<boxGeometry args={[doorWidth / 1000 - 0.05, doorHeight / 1000 - 0.05, 0.01]} />
				<meshPhysicalMaterial {...materialProps} color={handleGlassColor()} />
			</mesh>
			<GlasDoorFrame scale={[21.5 * 2.7, 0.06, 0.06]} rotation={[0, 0, 0]} handleBorderColor={handleBorderColor} />
			<GlasDoorFrame
				scale={[21.5 * 2.7, 0.06, 0.06]}
				position={[0, 2.036, 0]}
				rotation={[Math.PI, 0, 0]}
				handleBorderColor={handleBorderColor}
			/>
			<GlasDoorFrame
				scale={[20.5 * 2.7, 0.06, 0.06]}
				position={[1.07, 1.02, 0]}
				rotation={[0, 0, Math.PI / 2]}
				handleBorderColor={handleBorderColor}
			/>
			<GlasDoorFrame
				scale={[20.5 * 2.7, 0.06, 0.06]}
				position={[-1.07, 1.02, 0]}
				rotation={[0, 0, -Math.PI / 2]}
				handleBorderColor={handleBorderColor}
			/>
		</group>
	);
};

export default TestGlasDoor;
