import { EllipseCurve, Shape } from "three";
const HalveMoon = () => {
	// Definieer de eigenschappen van de ovaal
	const x = 0; // x-coördinaat van het middelpunt
	const y = 0; // y-coördinaat van het middelpunt
	const radiusX = 0.35; // Straal in de x-richting
	const radiusY = 0.8; // Straal in de y-richting
	const startAngle = Math.PI / 1.74; // Beginhoek (in radialen)
	const endAngle = (Math.PI / 2) * 2.8; // Eindhoek (in radialen), halve cirkel

	// Maak een elliptische curve om de vorm van de ovaal te definiëren
	const curve = new EllipseCurve(x, y, radiusX, radiusY, startAngle, endAngle);

	// Genereer een 2D-vorm met behulp van de curve
	const points = curve.getPoints(50); // 50 punten voor een soepele curve
	const customShape = new Shape(points);

	// Definieer de extrude-instellingen voor de aangepaste vorm.
	const extrudeSettings = {
		depth: 0.03, // Diepte van de extrusie
		bevelEnabled: false, // Geen afgeschuinde randen
	};

	return <extrudeGeometry args={[customShape, extrudeSettings]} />;
};
export default HalveMoon;
