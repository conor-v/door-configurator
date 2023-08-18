// import { useLoader } from 'react-three-fiber'
// import { TextureLoader, RepeatWrapping } from 'three'
import { useStore } from "../../../../../stores/appStore";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

const GlassDoor = ({ handleGlassColor, materialProps, handleBorderColor }) => {
	const { doorWidth, doorHeight, doorPartitions } = useStore((state) => state.door.gekozendeur);
	const doorOpen = useStore((state) => state.sidepanel.doorOpen);
	const { spring } = useSpring({
		spring: doorOpen,
		config: { mass: 5, tension: 100, friction: 50, precision: 0.0001 },
	});
	const rotation = spring.to([0, 1], [0, 1.6]);

	return (
		<a.group position={[-0.05 + doorWidth / 1000 / 2, 0, 2.22]} scale={0.09} rotation-y={rotation}>
			{[...Array(doorPartitions)].map((door, index) => (
				<group key={index} position={[-doorWidth / 100 / 2, 0, 0]}>
					{/* DOOR */}
					<mesh
						position={[((doorWidth / 100 / doorPartitions) * index) / 2, doorHeight / 100 / 2, 0]}
						receiveShadow
						castShadow>
						<boxGeometry args={[doorWidth / 100 / doorPartitions, doorHeight / 100 - 0.25, 0.2]} />
						<meshPhysicalMaterial {...materialProps} color={handleGlassColor} />
					</mesh>

					{/* DEUR KLINK */}
					<group position={[-doorWidth / 100 / 2 - 0.1, doorHeight / 100 / 2, 0.45]}>
						<mesh>
							<boxGeometry args={[0.3, 1.5, 0.5]} />
							<meshBasicMaterial color={"black"} />
						</mesh>
						<mesh position={[0.35, 0, 0.4]}>
							<boxGeometry args={[1, 1.5, 0.3]} />
							<meshBasicMaterial color={"black"} />
						</mesh>

						<mesh position-z={-0.8}>
							<boxGeometry args={[0.3, 1.5, 0.5]} />
							<meshBasicMaterial color={"black"} />
						</mesh>
						<mesh position={[0.35, 0, -1.2]}>
							<boxGeometry args={[1, 1.5, 0.3]} />
							<meshBasicMaterial color={"black"} />
						</mesh>
					</group>
					{/* BORDERS */}
					{/* TOP */}
					<mesh
						position={[(doorWidth / 100 / doorPartitions) * index, doorHeight / 100 - 0.25, 0]}
						receiveShadow
						castShadow>
						<boxGeometry args={[doorWidth / 100 / doorPartitions, 0.5, 0.4]} />
						<meshStandardMaterial color={handleBorderColor} />
					</mesh>
					{/* BOTTOM */}
					<mesh position={[(doorWidth / 100 / doorPartitions) * index, 0.25, 0]} receiveShadow castShadow>
						<boxGeometry args={[doorWidth / 100 / doorPartitions, 0.5, 0.4]} />
						<meshStandardMaterial color={handleBorderColor} />
					</mesh>
					{/* LEFT */}
					<mesh
						position={[
							doorPartitions === 1
								? -(doorWidth / 100 / doorPartitions) / 2 - 0.2
								: -((doorWidth / 100 / doorPartitions) * index) / 2,
							doorHeight / 100 / 2,
							0,
						]}
						receiveShadow
						castShadow>
						<boxGeometry args={[0.5, doorHeight / 100, 0.4]} />
						<meshStandardMaterial color={handleBorderColor} />
					</mesh>
					{/* RIGHT */}
					<mesh
						position={[
							doorPartitions === 1
								? doorWidth / 100 / doorPartitions / 2
								: ((doorWidth / 100 / doorPartitions) * index) / 2,
							doorHeight / 100 / 2,
							0,
						]}
						receiveShadow
						castShadow>
						<boxGeometry args={[0.5, doorHeight / 100, 0.4]} />
						<meshStandardMaterial color={handleBorderColor} />
					</mesh>
				</group>
			))}
		</a.group>
	);
};

export default GlassDoor;
