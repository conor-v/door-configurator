import { useStore } from "../../../../stores/appStore";

const Frame = ({ handleBorderColor }) => {
	const { doorHeight, doorWidth } = useStore((state) => state.door.gekozendeur);

	return (
		<group>
			{/* top bar */}
			<mesh position={[0, doorHeight / 1000 - 0.203, 2.15]}>
				<boxGeometry args={[doorWidth / 1000 + 0.1, 0.1, 0.21]} />
				<meshStandardMaterial color={handleBorderColor()} />
			</mesh>
			{/* top inner bar */}
			<mesh position={[0, doorHeight / 1000 - 0.275, 2.15]}>
				<boxGeometry args={[doorWidth / 1000, 0.05, 0.05]} />
				<meshStandardMaterial color={handleBorderColor()} />
			</mesh>

			{/* left bar */}
			<mesh position={[-doorWidth / 1000 / 2, (doorHeight / 1000 - 0.253) / 2, 2.15]}>
				<boxGeometry args={[0.1, doorHeight / 1000 - 0.253, 0.21]} />
				<meshStandardMaterial color={handleBorderColor()} />
			</mesh>
			{/* left inner bar */}
			<mesh position={[-doorWidth / 1000 / 2 + 0.07, (doorHeight / 1000 - 0.253) / 2, 2.15]}>
				<boxGeometry args={[0.05, doorHeight / 1000 - 0.253, 0.05]} />
				<meshStandardMaterial color={handleBorderColor()} />
			</mesh>

			{/* right bar */}
			<mesh position={[doorWidth / 1000 / 2, (doorHeight / 1000 - 0.253) / 2, 2.15]}>
				<boxGeometry args={[0.1, doorHeight / 1000 - 0.253, 0.21]} />
				<meshStandardMaterial color={handleBorderColor()} />
			</mesh>
			{/* right inner bar */}
			<mesh position={[doorWidth / 1000 / 2 - 0.07, (doorHeight / 1000 - 0.253) / 2, 2.15]}>
				<boxGeometry args={[0.05, doorHeight / 1000 - 0.253, 0.05]} />
				<meshStandardMaterial color={handleBorderColor()} />
			</mesh>
		</group>
	);
};

export default Frame;
