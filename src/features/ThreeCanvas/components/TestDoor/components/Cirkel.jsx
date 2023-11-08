import { Shape } from "three";
const Cirkel = () => {
	const customShape = new Shape();
	const radius = 0.2; // Straal van de cirkel

	// Teken een cirkel met een groot aantal segmenten (bijvoorbeeld 32).
	const segments = 32;
	for (let i = 0; i < segments; i++) {
		const theta = (i / segments) * Math.PI * 2;
		const x = radius * Math.cos(theta);
		const y = radius * Math.sin(theta);
		if (i === 0) {
			customShape.moveTo(x, y);
		} else {
			customShape.lineTo(x, y);
		}
	}

	// Definieer de extrude-instellingen voor de aangepaste vorm.
	const extrudeSettings = {
		depth: 0.03, // Diepte van de extrusie
		bevelEnabled: false, // Geen afgeschuinde randen
	};

	return <extrudeGeometry args={[customShape, extrudeSettings]} />;
};
export default Cirkel;
