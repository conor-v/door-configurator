import { useStore } from "../../../../stores/appStore";

const Frame = () => {
	const { doorWidth, doorHeight } = useStore((state) => state.door);

	return (
		<group>
			{/* top bar */}
			<mesh position={[0, doorHeight / 1000 - 0.203, 2.15]}>
				<boxGeometry args={[doorWidth / 1000 + 0.1, 0.1, 0.25]} />
				<meshStandardMaterial color={"#eeeeee"} />
			</mesh>
			{/* top bar */}
			<mesh position={[0, doorHeight / 1000 - 0.275, 2.15]}>
				<boxGeometry args={[doorWidth / 1000, 0.05, 0.05]} />
				<meshStandardMaterial color={"#eeeeee"} />
			</mesh>

			{/* left bar */}
			<mesh position={[-doorWidth / 1000 / 2, (doorHeight / 1000 - 0.253) / 2, 2.15]}>
				<boxGeometry args={[0.1, doorHeight / 1000 - 0.253, 0.25]} />
				<meshStandardMaterial color={"#eeeeee"} />
			</mesh>
			{/* left inner bar */}
			<mesh position={[-doorWidth / 1000 / 2 + 0.07, (doorHeight / 1000 - 0.253) / 2, 2.15]}>
				<boxGeometry args={[0.05, doorHeight / 1000 - 0.253, 0.05]} />
				<meshStandardMaterial color={"#eeeeee"} />
			</mesh>

			{/* right bar */}
			<mesh position={[doorWidth / 1000 / 2, (doorHeight / 1000 - 0.253) / 2, 2.15]}>
				<boxGeometry args={[0.1, doorHeight / 1000 - 0.253, 0.25]} />
				<meshStandardMaterial color={"#eeeeee"} />
			</mesh>
			{/* right bar */}
			<mesh position={[doorWidth / 1000 / 2 - 0.07, (doorHeight / 1000 - 0.253) / 2, 2.15]}>
				<boxGeometry args={[0.05, doorHeight / 1000 - 0.253, 0.05]} />
				<meshStandardMaterial color={"#eeeeee"} />
			</mesh>
		</group>
	);
};

export default Frame;
