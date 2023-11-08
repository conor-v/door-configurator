import { RepeatWrapping, TextureLoader, Vector2 } from "three";
import { useStore } from "../../../../../stores/appStore";

const Lines = () => {
	const { doorWidth, doorHeight, aluminium, partitionGridHor, partitionGridVer, borderSize, doortype } = useStore(
		(state) => state.door.gekozendeur
	);

	const doorsizeWidth = doortype === "Vast raam" ? doorWidth : doorWidth / 2;

	const handleBorderColor = () => {
		switch (aluminium) {
			case "Black":
				return "#43464b";
			case "White":
				return "#eeeeee";
			default:
				return "#eeeeee";
		}
	};

	const textureLoader = new TextureLoader();
	const grainTextureVer = textureLoader.load("./metaalTexture/noise2.jpg");
	const grainTextureHor = textureLoader.load("./metaalTexture/noise2.jpg");

	grainTextureVer.repeat = new Vector2(1, 20);
	grainTextureVer.wrapS = RepeatWrapping;
	grainTextureVer.wrapT = RepeatWrapping;
	grainTextureHor.repeat = new Vector2(10, 1);
	grainTextureHor.wrapS = RepeatWrapping;
	grainTextureHor.wrapT = RepeatWrapping;

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
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} />
						</mesh>
					))}
			</group>

			<group position={[-doorsizeWidth / 1000 / 2, -0.1, 0]}>
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
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} />
						</mesh>
					))}
			</group>
		</>
	);
};

export default Lines;
