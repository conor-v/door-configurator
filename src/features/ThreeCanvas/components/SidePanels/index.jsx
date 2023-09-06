import { useStore } from "../../../../stores/appStore";
import { RepeatWrapping, TextureLoader, Vector2 } from "three";

const SidePanels = ({ handleBorderColor, materialProps, handleGlassColor, side }) => {
	const { doorHeight, doorWidth, door } = useStore((state) => state.door.gekozendeur);
	const calcWidthDoor = doorWidth / 1000;
	const calcWidth = side === "left" ? door.sidepanel.widthLeft / 1000 : door.sidepanel.widthRight / 1000;

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
		<group
			position={[side === "left" ? -calcWidthDoor / 2 - calcWidth / 2 : calcWidthDoor / 2 + calcWidth / 2, 0, 2.22]}>
			{/* DOOR */}
			<mesh position={[0, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
				<boxGeometry args={[calcWidth - 0.05, doorHeight / 1000 - 0.05, 0.02]} />
				<meshPhysicalMaterial {...materialProps} color={handleGlassColor()} />
			</mesh>

			{/* BORDERS */}
			{/* TOP */}
			<mesh position={[0, doorHeight / 1000 - 0.025, 0]} receiveShadow castShadow>
				<boxGeometry args={[calcWidth - 0.1, 0.05, 0.04]} />
				<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureHor} />
			</mesh>
			{/* BOTTOM */}
			<mesh position={[0, 0.025, 0]} receiveShadow castShadow>
				<boxGeometry args={[calcWidth - 0.1, 0.05, 0.04]} />
				<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureHor} />
			</mesh>
			{/* LEFT */}
			<mesh position={[-calcWidth / 2 + 0.025, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
				<boxGeometry args={[0.05, doorHeight / 1000, 0.04]} />
				<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureVer} />
			</mesh>
			{/* RIGHT */}
			<mesh position={[calcWidth / 2 - 0.025, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
				<boxGeometry args={[0.05, doorHeight / 1000, 0.04]} />
				<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureVer} />
			</mesh>
		</group>
	);
};

export default SidePanels;
