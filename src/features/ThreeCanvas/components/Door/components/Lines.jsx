import { useStore } from "../../../../../stores/appStore";

const Lines = () => {
	const { doorWidth, doorHeight, aluminium, partitionGridHor, partitionGridVer, borderSize, aluminiumCustomColor } =
		useStore((state) => state.door.gekozendeur);

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
									: (doorWidth * (line.size * 100)) / 100 / 100 / 2 + (doorWidth * (line.start * 100)) / 100 / 100,
								(doorHeight * (line.pos * 100)) / 100 / 100 + line.fixed,
								0,
							]}>
							<boxGeometry args={[(doorWidth * (line.size * 100)) / 100 / 100, borderSize, 0.4]} />
							<meshStandardMaterial color={handleBorderColor()} />
						</mesh>
					))}
			</group>

			<group position={[-doorWidth / 100 / 2, 0, 0]}>
				{partitionGridVer.length > 0 &&
					partitionGridVer?.map((line, index) => (
						<mesh
							key={index}
							position={[
								(doorWidth * (line.pos * 100)) / 100 / 100 + line.fixed,
								(doorHeight * (line.size * 100)) / 100 / 100 / 2 + (doorHeight * (line.start * 100)) / 100 / 100,
								0,
							]}>
							<boxGeometry args={[borderSize, (doorHeight * (line.size * 100)) / 100 / 100, 0.4]} />
							<meshStandardMaterial color={handleBorderColor()} />
						</mesh>
					))}
			</group>
		</>
	);
};

export default Lines;
