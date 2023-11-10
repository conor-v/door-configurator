import { Shape } from "three";
const VierRechthoeken = () => {
	const customShape = new Shape();
	customShape.moveTo(0, 0);
	customShape.lineTo(0.15, 0);
	customShape.lineTo(0.15, 1.4);
	customShape.lineTo(0, 1.4);
	customShape.closePath();

	// Definieer de extrude-instellingen voor de aangepaste vorm.
	const extrudeSettings = {
		depth: 0.03, // Diepte van de extrusie
		bevelEnabled: false, // Geen afgeschuinde randen
	};

	return <extrudeGeometry args={[customShape, extrudeSettings]} />;
};
export default VierRechthoeken;
