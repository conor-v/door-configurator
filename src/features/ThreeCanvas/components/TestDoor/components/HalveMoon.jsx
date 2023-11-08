import { Shape } from "three";
const HalveMoon = () => {
	// Definieer de punten voor de halve cirkel (halve maan).
	const halfMoonShape = new Shape();
	const radius = 0.5; // Straal van de halve maan

	// Draai de punten van de halve maan om 90 graden.
	for (let i = 0; i <= 180; i++) {
		const angle = ((i - 90) * Math.PI) / 180; // Rotatie van 90 graden
		const x = radius * Math.cos(angle);
		const y = radius * Math.sin(angle);
		halfMoonShape.lineTo(x, y);
	}

	// Definieer de punten voor de halve ovale cirkel.
	const halfOvalShape = new Shape();
	const width = 1; // Breedte van de halve ovale cirkel
	const height = 0.5; // Hoogte van de halve ovale cirkel
	halfOvalShape.ellipse(0, 0, width, height, 0, Math.PI, true);

	// Combineer de halve maan en de halve ovale cirkel in één vorm.
	halfOvalShape.holes.push(halfMoonShape);

	// Definieer de extrude-instellingen voor de aangepaste vorm.
	const extrudeSettings = {
		depth: 0.03, // Diepte van de extrusie
		bevelEnabled: false, // Geen afgeschuinde randen
	};

	const rotationInRadians = Math.PI / 2;

	return <extrudeGeometry args={[halfOvalShape, extrudeSettings, rotationInRadians]} />;
};
export default HalveMoon;
