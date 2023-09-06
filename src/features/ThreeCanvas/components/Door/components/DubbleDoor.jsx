import { useStore } from "../../../../../stores/appStore";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import Lines from "./Lines";
import { RepeatWrapping, TextureLoader, Vector2 } from "three";

const DubbleDoor = ({ handleGlassColor, materialProps, handleBorderColor }) => {
	const { doorWidth, doorHeight } = useStore((state) => state.door.gekozendeur);
	const singledoorwidth = doorWidth / 2;

	const doorOpen = useStore((state) => state.sidepanel.doorOpen);
	const { spring } = useSpring({
		spring: doorOpen,
		config: { mass: 5, tension: 100, friction: 50, precision: 0.0001 },
	});
	const rotationright = spring.to([0, 1], [0, 1.6]);
	const rotationleft = spring.to([0, 1], [0, -1.6]);

	const textureLoader = new TextureLoader();
	const grainTextureVer = textureLoader.load("./metaalTexture/noise2.jpg");
	const grainTextureHor = textureLoader.load("./metaalTexture/noise2.jpg");
	const grainTextureklink = textureLoader.load("./metaalTexture/noise2.jpg");

	grainTextureVer.repeat = new Vector2(1, 20);
	grainTextureVer.wrapS = RepeatWrapping;
	grainTextureVer.wrapT = RepeatWrapping;
	grainTextureVer.opacity = 0;
	grainTextureHor.repeat = new Vector2(10, 1);
	grainTextureHor.wrapS = RepeatWrapping;
	grainTextureHor.wrapT = RepeatWrapping;
	grainTextureHor.opacity = 0;
	grainTextureklink.repeat = new Vector2(2, 2);
	grainTextureklink.wrapS = RepeatWrapping;
	grainTextureklink.wrapT = RepeatWrapping;
	grainTextureklink.opacity = 0;

	return (
		<group position={[0, 0, 0]}>
			{/* Rechter deur */}
			<group position={[singledoorwidth / 1000 / 2, 0, 0]}>
				<a.group position={[singledoorwidth / 1000 / 2, 0, 2.22]} rotation-y={rotationright}>
					<group position={[-singledoorwidth / 1000 / 2, 0, 0]}>
						{/* DOOR */}
						<mesh position={[0, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
							<boxGeometry args={[singledoorwidth / 1000 - 0.05, doorHeight / 1000 - 0.05, 0.02]} />
							<meshPhysicalMaterial {...materialProps} color={handleGlassColor()} />
						</mesh>

						{/* DEUR KLINK */}
						<group position={[-singledoorwidth / 1000 / 2 + 0.025, doorHeight / 1000 / 2, 0.045]}>
							<mesh>
								<boxGeometry args={[0.03, 0.15, 0.05]} />
								<meshStandardMaterial
									color={handleBorderColor()}
									metalness={0.6}
									roughness={0.5}
									map={grainTextureklink}
								/>
							</mesh>
							<mesh position={[0.035, 0, 0.04]}>
								<boxGeometry args={[0.1, 0.15, 0.03]} />
								<meshStandardMaterial
									color={handleBorderColor()}
									metalness={0.6}
									roughness={0.5}
									map={grainTextureklink}
								/>
							</mesh>

							<mesh position-z={-0.08}>
								<boxGeometry args={[0.03, 0.15, 0.05]} />
								<meshStandardMaterial
									color={handleBorderColor()}
									metalness={0.6}
									roughness={0.5}
									map={grainTextureklink}
								/>
							</mesh>
							<mesh position={[0.035, 0, -0.12]}>
								<boxGeometry args={[0.1, 0.15, 0.03]} />
								<meshStandardMaterial
									color={handleBorderColor()}
									metalness={0.6}
									roughness={0.5}
									map={grainTextureklink}
								/>
							</mesh>
						</group>
						{/* BORDERS */}
						{/* TOP */}
						<mesh position={[0, doorHeight / 1000 - 0.025, 0]} receiveShadow castShadow>
							<boxGeometry args={[singledoorwidth / 1000 - 0.1, 0.05, 0.04]} />
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureHor} />
						</mesh>
						{/* BOTTOM */}
						<mesh position={[0, 0.025, 0]} receiveShadow castShadow>
							<boxGeometry args={[singledoorwidth / 1000 - 0.1, 0.05, 0.04]} />
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureHor} />
						</mesh>
						{/* LEFT */}
						<mesh position={[-(singledoorwidth / 1000) / 2 + 0.025, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
							<boxGeometry args={[0.05, doorHeight / 1000, 0.04]} />
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureVer} />
						</mesh>
						{/* RIGHT */}
						<mesh position={[singledoorwidth / 1000 / 2 - 0.025, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
							<boxGeometry args={[0.05, doorHeight / 1000, 0.04]} />
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureVer} />
						</mesh>

						<Lines />
					</group>
				</a.group>
			</group>

			{/* Linker deur */}
			<group position={[-singledoorwidth / 1000 / 2, 0, 4.44]} rotation={[0, Math.PI, 0]}>
				<a.group position={[singledoorwidth / 1000 / 2, 0, 2.22]} rotation-y={rotationleft}>
					<group position={[-singledoorwidth / 1000 / 2, 0, 0]}>
						{/* DOOR */}
						<mesh position={[0, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
							<boxGeometry args={[singledoorwidth / 1000 - 0.05, doorHeight / 1000 - 0.05, 0.02]} />
							<meshPhysicalMaterial {...materialProps} color={handleGlassColor()} />
						</mesh>

						{/* DEUR KLINK */}
						<group position={[-singledoorwidth / 1000 / 2 + 0.025, doorHeight / 1000 / 2, 0.045]}>
							<mesh>
								<boxGeometry args={[0.03, 0.15, 0.05]} />
								<meshStandardMaterial
									color={handleBorderColor()}
									metalness={0.6}
									roughness={0.5}
									map={grainTextureklink}
								/>
							</mesh>
							<mesh position={[0.035, 0, 0.04]}>
								<boxGeometry args={[0.1, 0.15, 0.03]} />
								<meshStandardMaterial
									color={handleBorderColor()}
									metalness={0.6}
									roughness={0.5}
									map={grainTextureklink}
								/>
							</mesh>

							<mesh position-z={-0.08}>
								<boxGeometry args={[0.03, 0.15, 0.05]} />
								<meshStandardMaterial
									color={handleBorderColor()}
									metalness={0.6}
									roughness={0.5}
									map={grainTextureklink}
								/>
							</mesh>
							<mesh position={[0.035, 0, -0.12]}>
								<boxGeometry args={[0.1, 0.15, 0.03]} />
								<meshStandardMaterial
									color={handleBorderColor()}
									metalness={0.6}
									roughness={0.5}
									map={grainTextureklink}
								/>
							</mesh>
						</group>
						{/* BORDERS */}
						{/* TOP */}
						<mesh position={[0, doorHeight / 1000 - 0.025, 0]} receiveShadow castShadow>
							<boxGeometry args={[singledoorwidth / 1000 - 0.1, 0.05, 0.04]} />
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureHor} />
						</mesh>
						{/* BOTTOM */}
						<mesh position={[0, 0.025, 0]} receiveShadow castShadow>
							<boxGeometry args={[singledoorwidth / 1000 - 0.1, 0.05, 0.04]} />
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureHor} />
						</mesh>
						{/* LEFT */}
						<mesh position={[-(singledoorwidth / 1000) / 2 + 0.025, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
							<boxGeometry args={[0.05, doorHeight / 1000, 0.04]} />
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureVer} />
						</mesh>
						{/* RIGHT */}
						<mesh position={[singledoorwidth / 1000 / 2 - 0.025, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
							<boxGeometry args={[0.05, doorHeight / 1000, 0.04]} />
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} map={grainTextureVer} />
						</mesh>

						<Lines />
					</group>
				</a.group>
			</group>
		</group>
	);
};

export default DubbleDoor;
