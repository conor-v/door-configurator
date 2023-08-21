import { useStore } from "../../../../stores/appStore";

const Wall = () => {
	const { doorHeight, doorWidth } = useStore((state) => state.door.gekozendeur);

	const widthCalc = doorWidth / 100;
	const heightCalc = doorHeight / 100;
	return (
		<group scale={0.09} position={[0, 0, 2.1]}>
			{/* RECHTER MUUR HORIZONTAAL */}
			<mesh position={[(30 + widthCalc / 2) / 2, heightCalc / 2, 0.6]}>
				<boxGeometry args={[29.5 - widthCalc / 2, heightCalc, 1.8]} />
				<meshStandardMaterial color={"#ffffff"} />
			</mesh>

			{/* LINKER MUUR HORIZONTAAL */}
			<mesh position={[(-30 - widthCalc / 2) / 2, heightCalc / 2, 0.6]}>
				<boxGeometry args={[29.5 - widthCalc / 2, heightCalc, 1.8]} />
				<meshStandardMaterial color={"#ffffff"} />
			</mesh>

			{/* BOVEN MUUR HORIZONTAAL */}
			<mesh position={[0, 15 + heightCalc / 2, 0.6]}>
				<boxGeometry args={[59.5, 30 - heightCalc, 1.8]} />
				<meshStandardMaterial color={"#ffffff"} />
			</mesh>
		</group>
	);
};

export default Wall;
