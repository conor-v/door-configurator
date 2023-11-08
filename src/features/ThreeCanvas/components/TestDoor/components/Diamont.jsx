import { Shape } from "three";
const Diamont = () => {
	const customShape = new Shape();
	customShape.moveTo(0, 0.225); // Punt aanpassen voor de breedte van de diamant
	customShape.lineTo(0.225, 0.45); // Punt aanpassen voor de hoogte van de diamant
	customShape.lineTo(0.45, 0.225);
	customShape.lineTo(0.225, 0);
	customShape.closePath();

	// Definieer de extrude-instellingen voor de aangepaste vorm.
	const extrudeSettings = {
		depth: 0.03, // Diepte van de extrusie
		bevelEnabled: false, // Geen afgeschuinde randen
	};

	return <extrudeGeometry args={[customShape, extrudeSettings]} />;
};
export default Diamont;
