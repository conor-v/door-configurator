import { useStore } from "../../../../stores/appStore";
import Shadermateriaal from "../../../../components/ShaderMateriaal";

const Frame = ({ handleBorderColor }) => {
	const { doorHeight, doorWidth } = useStore((state) => state.door.gekozendeur);
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

	return (
		<group>
			{/* top bar */}
			<mesh position={[0, doorHeight / 1000 + 0.0201, 2.15]}>
				<boxGeometry args={[doorWidth / 1000 + 0.14, 0.07, 0.21]} />

				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={handleBorderColor()} />}
			</mesh>
			{/* top inner bar */}
			<mesh position={[0, doorHeight / 1000 - 0.0125, 2.16]}>
				<boxGeometry args={[doorWidth / 1000, 0.025, 0.025]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={handleBorderColor()} />}
			</mesh>

			{/* left bar */}
			<mesh position={[-doorWidth / 1000 / 2 - 0.034, doorHeight / 1000 / 2 - 0.015, 2.15]}>
				<boxGeometry args={[0.07, doorHeight / 1000, 0.21]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={handleBorderColor()} />}
			</mesh>
			{/* left inner bar */}
			<mesh position={[-doorWidth / 1000 / 2 + 0.0125, doorHeight / 1000 / 2, 2.16]}>
				<boxGeometry args={[0.025, doorHeight / 1000, 0.025]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={handleBorderColor()} />}
			</mesh>

			{/* right bar */}
			<mesh position={[doorWidth / 1000 / 2 + 0.0355, doorHeight / 1000 / 2 - 0.015, 2.15]}>
				<boxGeometry args={[0.07, doorHeight / 1000, 0.21]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={handleBorderColor()} />}
			</mesh>
			{/* right inner bar */}
			<mesh position={[doorWidth / 1000 / 2 - 0.0125, doorHeight / 1000 / 2, 2.16]}>
				<boxGeometry args={[0.025, doorHeight / 1000, 0.025]} />
				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={handleBorderColor()} />}
			</mesh>
		</group>
	);
};

export default Frame;
