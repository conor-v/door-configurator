import { useRef } from "react";
import { BoxGeometry } from "three";
import { useStore } from "../../../../stores/appStore";
import { Base, Geometry, Subtraction } from "@react-three/csg";

const WallTest = () => {
	const { doorHeight, doorWidth } = useStore((state) => state.door.gekozendeur);
	const widthCalc = doorWidth / 1000;
	const heightCalc = doorHeight / 1000;
	const holeCut = useRef();
	// console.log(widthCalc);
	// console.log(heightCalc);

	const boxHeight = heightCalc; // Hoogte van de doos in de y-richting
	const minHeight = -0.451; // Minimale hoogte boven de vloer bij 1.8
	const maxHeight = -0.091; // Maximale hoogte boven de vloer bij 2.52

	// Bereken de y-positie van de doos met lineaire interpolatie
	const yPosition = minHeight + (boxHeight - 1.8) * ((maxHeight - minHeight) / (2.52 - 1.8));

	console.log(yPosition);

	return (
		<group>
			<mesh position={[0, 1.351, 2.15]}>
				<Geometry>
					<Base position={[0, 0, 0]} scale={1} geometry={new BoxGeometry(5, 2.7, 0.15)} />
					<Subtraction ref={holeCut} name="cavity" position={[0, yPosition, 0]}>
						<boxGeometry args={[widthCalc, heightCalc, 1]} scale={0.1} />
					</Subtraction>
				</Geometry>
				<meshStandardMaterial color={"#ffffff"} />
			</mesh>
		</group>
	);
};

export default WallTest;
