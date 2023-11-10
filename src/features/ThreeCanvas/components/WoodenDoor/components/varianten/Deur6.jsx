import { useStore } from "../../../../../../stores/appStore";
import Shadermateriaal from "../../../../../../components/ShaderMateriaal";

const Deur6 = ({ colorMap4, colorMap }) => {
	const { doorWidth, doorHeight } = useStore((state) => state.door.gekozendeur);
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

	return (
		<>
			<mesh position={[0, 0.454, 0]}>
				<boxGeometry args={[doorWidth / 1000 - 0.166 * 2, 0.166, 0.04]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap4} />}
			</mesh>

			<mesh position={[0, 0, 0]}>
				<boxGeometry args={[doorWidth / 1000 - 0.166 * 2, 0.166, 0.04]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap4} />}
			</mesh>

			<mesh position={[0, -0.454, 0]}>
				<boxGeometry args={[doorWidth / 1000 - 0.166 * 2, 0.166, 0.04]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap4} />}
			</mesh>

			<mesh position={[0, 0, 0]} receiveShadow castShadow>
				<boxGeometry args={[doorWidth / 1000 - 0.332, doorHeight / 1000 - 0.332, 0.01]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial map={colorMap} />}
			</mesh>
		</>
	);
};
export default Deur6;
