import { ExtrudeGeometry, MeshBasicMaterial, Shape } from "three";

const WoodShape = () => {
	// Definieer de punten voor de deurvorm, inclusief de kleine bult aan de bovenkant.
	const doorShape = new Shape();
	doorShape.moveTo(0, 0);
	doorShape.lineTo(1, 0);
	doorShape.lineTo(1, 2);
	doorShape.bezierCurveTo(0.8, 2.5, 0.2, 2.5, 0, 2);
	doorShape.closePath();

	// Definieer de extrude-instellingen voor de deur.
	const doorExtrudeSettings = {
		depth: 0.1, // Diepte van de deur
		bevelEnabled: false, // Geen afgeschuinde randen
	};

	// Genereer de geometrie voor de vlakte van de deur.
	const doorGeometry = new ExtrudeGeometry(doorShape, doorExtrudeSettings);
	const doorMaterial = new MeshBasicMaterial({ color: 0x00ff00 });

	// Definieer de punten voor de rechthoekige rand met dezelfde bovenste afronding als de deur.
	const borderShape = new Shape();
	borderShape.moveTo(-0.1, -0.1); // Linksbovenhoek van de rechthoekige rand
	borderShape.lineTo(1.1, -0.1); // Rechtsbovenhoek van de rechthoekige rand
	borderShape.lineTo(1.1, 2); // Rechtsonderhoek van de rechthoekige rand
	borderShape.bezierCurveTo(0.9, 2.6, 0.1, 2.6, -0.1, 2);
	borderShape.closePath();

	// Voeg het gat toe aan de rechthoekige rand ter grootte van de deurvorm.
	borderShape.holes.push(doorShape);

	// Definieer de extrude-instellingen voor de rechthoekige rand met afronding.
	const borderExtrudeSettings = {
		depth: 0.1, // Diepte van de rechthoekige rand
		bevelEnabled: false, // Geen afgeschuinde randen
	};

	// Genereer de geometrie voor de rechthoekige rand met afronding.
	const borderGeometry = new ExtrudeGeometry(borderShape, borderExtrudeSettings);
	const borderMaterial = new MeshBasicMaterial({ color: 0xff0000 });

	return (
		<group>
			<mesh geometry={doorGeometry} material={doorMaterial}>
				{/* Voeg hier andere eigenschappen en bewerkingen voor de oorspronkelijke deurvorm toe */}
			</mesh>
			<mesh geometry={borderGeometry} material={borderMaterial}>
				{/* Voeg hier andere eigenschappen en bewerkingen voor de rechthoekige rand met afronding toe */}
			</mesh>
		</group>
	);
};

export default WoodShape;
