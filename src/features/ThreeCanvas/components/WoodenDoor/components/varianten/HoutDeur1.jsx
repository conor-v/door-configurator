import { useStore } from "../../../../../../stores/appStore";
import Shadermateriaal from "../../../../../../components/ShaderMateriaal";

const HoutDeur1 = ({ materialProps, handleGlassColor }) => {
	const { doorWidth, doorHeight } = useStore((state) => state.door.gekozendeur);
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

	return (
		<mesh position={[0, 0, 0]} receiveShadow castShadow>
			<boxGeometry args={[doorWidth / 1000 - 0.332, doorHeight / 1000 - 0.332, 0.01]} />
			{drawingplan ? <Shadermateriaal /> : <meshPhysicalMaterial {...materialProps} color={handleGlassColor()} />}
		</mesh>
	);
};

export default HoutDeur1;
