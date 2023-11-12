import { useStore } from "../../../../../../stores/appStore";
import Shadermateriaal from "../../../../../../components/ShaderMateriaal";

const HoutDeur7 = ({ colorMap, colorMap2 }) => {
	const { doorWidth, doorHeight } = useStore((state) => state.door.gekozendeur);
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

	return (
		<>
			<mesh position={[-doorWidth / 1000 / 2 + 0.256, 0, 0]}>
				<boxGeometry args={[0.18, doorHeight / 1000, 0.04]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap2} />}
			</mesh>
			<mesh position={[0, 0, 0]}>
				<boxGeometry args={[0.188, doorHeight / 1000, 0.04]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap2} />}
			</mesh>
			<mesh position={[doorWidth / 1000 / 2 - 0.256, 0, 0]}>
				<boxGeometry args={[0.18, doorHeight / 1000, 0.04]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap} />}
			</mesh>
		</>
	);
};

export default HoutDeur7;
