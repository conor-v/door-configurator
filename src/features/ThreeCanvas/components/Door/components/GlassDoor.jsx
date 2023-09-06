import { useStore } from "../../../../../stores/appStore";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import Lines from "./Lines";
import { RepeatWrapping, TextureLoader, Vector2 } from "three";

const GlassDoor = ({ handleGlassColor, materialProps, handleBorderColor }) => {
	const { doorWidth, doorHeight } = useStore((state) => state.door.gekozendeur);
	const doorOpen = useStore((state) => state.sidepanel.doorOpen);
	const { spring } = useSpring({
		spring: doorOpen,
		config: { mass: 5, tension: 100, friction: 50, precision: 0.0001 },
	});
	const rotation = spring.to([0, 1], [0, 1.6]);

	const textureLoader = new TextureLoader();
	const grainTextureVer = textureLoader.load("./metaalTexture/noise2.jpg");
	const grainTextureHor = textureLoader.load("./metaalTexture/noise2.jpg");
	const grainTextureklink = textureLoader.load("./metaalTexture/noise2.jpg");

	grainTextureVer.repeat = new Vector2(1, 20);
	grainTextureVer.wrapS = RepeatWrapping;
	grainTextureVer.wrapT = RepeatWrapping;
	grainTextureHor.repeat = new Vector2(10, 1);
	grainTextureHor.wrapS = RepeatWrapping;
	grainTextureHor.wrapT = RepeatWrapping;
	grainTextureklink.repeat = new Vector2(2, 2);
	grainTextureklink.wrapS = RepeatWrapping;
	grainTextureklink.wrapT = RepeatWrapping;

	return (
		<a.group position={[doorWidth / 1000 / 2, 0, 2.22]} rotation-y={rotation}>
			<group position={[-doorWidth / 1000 / 2, 0, 0]}>
				{/* DOOR */}
				<mesh position={[0, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
					<boxGeometry args={[doorWidth / 1000 - 0.05, doorHeight / 1000 - 0.05, 0.02]} />
					<meshPhysicalMaterial {...materialProps} color={handleGlassColor()} />
				</mesh>

				{/* DEUR KLINK */}
				<group position={[-doorWidth / 1000 / 2 + 0.025, doorHeight / 1000 / 2, 0.045]}>
					<mesh>
						<boxGeometry args={[0.03, 0.15, 0.05]} />
						<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureklink} />
					</mesh>
					<mesh position={[0.035, 0, 0.04]}>
						<boxGeometry args={[0.1, 0.15, 0.03]} />
						<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureklink} />
					</mesh>

					<mesh position-z={-0.08}>
						<boxGeometry args={[0.03, 0.15, 0.05]} />
						<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureklink} />
					</mesh>
					<mesh position={[0.035, 0, -0.12]}>
						<boxGeometry args={[0.1, 0.15, 0.03]} />
						<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureklink} />
					</mesh>
				</group>
				{/* BORDERS */}
				{/* TOP */}
				<mesh position={[0, doorHeight / 1000 - 0.025, 0]} receiveShadow castShadow>
					<boxGeometry args={[doorWidth / 1000 - 0.1, 0.05, 0.04]} />
					<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureHor} />
				</mesh>
				{/* BOTTOM */}
				<mesh position={[0, 0.025, 0]} receiveShadow castShadow>
					<boxGeometry args={[doorWidth / 1000 - 0.1, 0.05, 0.04]} />
					<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureHor} />
				</mesh>
				{/* LEFT */}
				<mesh position={[-(doorWidth / 1000) / 2 + 0.025, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
					<boxGeometry args={[0.05, doorHeight / 1000, 0.04]} />
					<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureVer} />
				</mesh>
				{/* RIGHT */}
				<mesh position={[doorWidth / 1000 / 2 - 0.025, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
					<boxGeometry args={[0.05, doorHeight / 1000, 0.04]} />
					<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureVer} />
				</mesh>

				<Lines />
			</group>
		</a.group>
	);
};

export default GlassDoor;
