// import { useLoader } from 'react-three-fiber'
// import { TextureLoader, RepeatWrapping } from 'three'
import { useStore } from "../../../../../stores/appStore";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import Lines from "./Lines";

const GlassDoor = ({ handleGlassColor, materialProps, handleBorderColor }) => {
	const { doorWidth, doorHeight } = useStore((state) => state.door.gekozendeur);
	const doorOpen = useStore((state) => state.sidepanel.doorOpen);
	const { spring } = useSpring({
		spring: doorOpen,
		config: { mass: 5, tension: 100, friction: 50, precision: 0.0001 },
	});
	const rotation = spring.to([0, 1], [0, 1.6]);

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
						<meshBasicMaterial color={"black"} />
					</mesh>
					<mesh position={[0.035, 0, 0.04]}>
						<boxGeometry args={[0.1, 0.15, 0.03]} />
						<meshBasicMaterial color={"black"} />
					</mesh>

					<mesh position-z={-0.08}>
						<boxGeometry args={[0.03, 0.15, 0.05]} />
						<meshBasicMaterial color={"black"} />
					</mesh>
					<mesh position={[0.035, 0, -0.12]}>
						<boxGeometry args={[0.1, 0.15, 0.03]} />
						<meshBasicMaterial color={"black"} />
					</mesh>
				</group>
				{/* BORDERS */}
				{/* TOP */}
				<mesh position={[0, doorHeight / 1000 - 0.025, 0]} receiveShadow castShadow>
					<boxGeometry args={[doorWidth / 1000, 0.05, 0.04]} />
					<meshStandardMaterial color={handleBorderColor()} />
				</mesh>
				{/* BOTTOM */}
				<mesh position={[0, 0.025, 0]} receiveShadow castShadow>
					<boxGeometry args={[doorWidth / 1000, 0.05, 0.04]} />
					<meshStandardMaterial color={handleBorderColor()} />
				</mesh>
				{/* LEFT */}
				<mesh position={[-(doorWidth / 1000) / 2 + 0.025, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
					<boxGeometry args={[0.05, doorHeight / 1000, 0.04]} />
					<meshStandardMaterial color={handleBorderColor()} />
				</mesh>
				{/* RIGHT */}
				<mesh position={[doorWidth / 1000 / 2 - 0.025, doorHeight / 1000 / 2, 0]} receiveShadow castShadow>
					<boxGeometry args={[0.05, doorHeight / 1000, 0.04]} />
					<meshStandardMaterial color={handleBorderColor()} />
				</mesh>

				<Lines />
			</group>
		</a.group>
	);
};

export default GlassDoor;
