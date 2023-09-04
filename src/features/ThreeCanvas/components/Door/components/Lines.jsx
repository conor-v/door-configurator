import { useStore } from "../../../../../stores/appStore";

const Lines = () => {
	const {
		doorWidth,
		doorHeight,
		aluminium,
		partitionGridHor,
		partitionGridVer,
		borderSize,
		aluminiumCustomColor,
		doortype,
	} = useStore((state) => state.door.gekozendeur);

	const doorsizeWidth = doortype === "Vast raam" ? doorWidth : doorWidth / 2;

	const handleBorderColor = () => {
		switch (aluminium) {
			case "Black":
				return "#43464b";
			case "Bronze":
				return "#cd7f32";
			case "Gold":
				return "#d4af37";
			case "Silver":
				return "#bed7eb";
			case "Stainless Steel":
				return "#5c6169";
			case "Custom":
				return aluminiumCustomColor;
			default:
				return "#43464b";
		}
	};

	console.log(borderSize);

	return (
		<>
			<group position={[0, 0, 0]}>
				{partitionGridHor.length > 0 &&
					partitionGridHor.map((line, index) => (
						<mesh
							key={index}
							position={[
								line.start === 0
									? 0
									: (doorsizeWidth * (line.size * 1000)) / 1000 / 1000 / 2 +
									  (doorsizeWidth * (line.start * 1000)) / 1000 / 1000,
								(doorHeight * (line.pos * 1000)) / 1000 / 1000 + line.fixed,
								0,
							]}>
							<boxGeometry args={[(doorsizeWidth * (line.size * 1000)) / 1000 / 1000, borderSize / 10, 0.04]} />
							<meshStandardMaterial color={handleBorderColor()} />
						</mesh>
					))}
			</group>

			<group position={[-doorsizeWidth / 1000 / 2, 0, 0]}>
				{partitionGridVer.length > 0 &&
					partitionGridVer?.map((line, index) => (
						<mesh
							key={index}
							position={[
								(doorsizeWidth * (line.pos * 1000)) / 1000 / 1000 + line.fixed,
								(doorHeight * (line.size * 1000)) / 1000 / 1000 / 2 + (doorHeight * (line.start * 1000)) / 1000 / 1000,
								0,
							]}>
							<boxGeometry args={[borderSize / 10, (doorHeight * (line.size * 1000)) / 1000 / 1000, 0.04]} />
							<meshStandardMaterial color={handleBorderColor()} />
						</mesh>
					))}
			</group>
		</>
	);
};

export default Lines;
