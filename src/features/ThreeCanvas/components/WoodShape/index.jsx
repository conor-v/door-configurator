import { Shape } from "three";

const WoodShape = () => {
	// Definieer de punten voor de deurvorm, inclusief de kleine bult aan de bovenkant.
	const doorShape = new Shape();
	doorShape.moveTo(0.03, 1);
	doorShape.lineTo(0, 1);
	doorShape.lineTo(0, 0);
	doorShape.lineTo(0.5, 0);
	doorShape.lineTo(0.5, 1);
	doorShape.lineTo(0.47, 1);
	doorShape.bezierCurveTo(0.4, 1.08, 0.1, 1.08, 0.03, 1);
	doorShape.closePath();

	// Definieer de extrude-instellingen voor de deur.
	const doorExtrudeSettings = {
		depth: 0.15, // Diepte van de deur
		bevelEnabled: false, // Geen afgeschuinde randen
	};

	return <extrudeGeometry args={[doorShape, doorExtrudeSettings]} />;
};

export default WoodShape;
