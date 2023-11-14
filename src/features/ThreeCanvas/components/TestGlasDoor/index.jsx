import Shadermateriaal from "../../../../components/ShaderMateriaal";
import { useStore } from "../../../../stores/appStore";
import Lines from "../Door/components/Lines";
import { GlasDoorFrame } from "./GlasDoorModels/GlasDoorFrame";
import { GlasDoorHoek1 } from "./GlasDoorModels/GlasDoorHoek1";
import { GlasDoorHoek2 } from "./GlasDoorModels/GlasDoorHoek2";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

const TestGlasDoor = ({ materialProps, handleGlassColor, handleBorderColor }) => {
	const { doorWidth, doorHeight } = useStore((state) => state.door.gekozendeur);
	const { doorOpen, drawingplan } = useStore((state) => state.sidepanel);

	const calcWidth = doorWidth / 1000;
	const calcHeight = doorHeight / 1000;
	const calcScale = (minScale, maxScale, minLength, maxLength, side) => {
		return minScale + ((maxScale - minScale) * (side - minLength)) / (maxLength - minLength);
	};

	const { spring } = useSpring({
		spring: doorOpen,
		config: { mass: 5, tension: 100, friction: 50, precision: 0.0001 },
	});
	const rotation = spring.to([0, 1], [0, 1.6]);

	return (
		<a.group rotation-y={rotation} position={[doorWidth / 1000 / 2 - 0.05, 0, 2.197]}>
			<group position={[-doorWidth / 1000 / 2 + 0.05, 0.036, 0]}>
				<mesh position={[0, calcHeight / 2 - 0.03, 0]} receiveShadow castShadow>
					<boxGeometry args={[calcWidth - 0.05, calcHeight - 0.05, 0.01]} />
					{drawingplan ? <Shadermateriaal /> : <meshPhysicalMaterial {...materialProps} color={handleGlassColor()} />}
				</mesh>

				{/* bottom frame */}
				<group>
					<GlasDoorFrame
						scale={[calcScale(19.5, 60.7, 0.8, 2.2, calcWidth), 0.06, 0.06]}
						position={[-0.002, -0.002, 0.001]}
						rotation={[0, 0, 0]}
						handleBorderColor={handleBorderColor}
					/>
					<GlasDoorHoek1
						scale={0.06}
						rotation={[0, 0, -Math.PI]}
						position={[-calcWidth / 2 + 0.056, 0.01, 0]}
						handleBorderColor={handleBorderColor()}
					/>
					<GlasDoorHoek2
						scale={0.06}
						rotation={[0, 0, -Math.PI]}
						position={[calcWidth / 2 - 0.056, 0.01, 0]}
						handleBorderColor={handleBorderColor()}
					/>
				</group>

				{/* top frame */}
				<group>
					<GlasDoorFrame
						scale={[calcScale(19.5, 60.7, 0.8, 2.2, calcWidth), 0.06, 0.06]}
						position={[-0.002, calcHeight - 0.0644, -0.0006]}
						rotation={[Math.PI, 0, 0]}
						handleBorderColor={handleBorderColor}
					/>
					<GlasDoorHoek1
						scale={0.06}
						rotation={[0, 0, 0]}
						position={[calcWidth / 2 - 0.056, calcHeight - 0.0767, 0]}
						handleBorderColor={handleBorderColor()}
					/>
					<GlasDoorHoek2
						scale={0.06}
						rotation={[0, 0, 0]}
						position={[-calcWidth / 2 + 0.056, calcHeight - 0.0767, 0]}
						handleBorderColor={handleBorderColor()}
					/>
				</group>

				{/* right frame */}
				<group>
					<GlasDoorFrame
						scale={[calcScale(19.5, 60.7, 0.8, 2.2, calcHeight), 0.06, 0.06]}
						position={[calcWidth / 2 - 0.03, calcHeight / 2 - 0.034, 0.001]}
						rotation={[0, 0, Math.PI / 2]}
						handleBorderColor={handleBorderColor}
					/>
					<GlasDoorHoek1
						scale={0.06}
						rotation={[0, 0, -Math.PI / 2]}
						position={[calcWidth / 2 - 0.043, 0.024, 0]}
						handleBorderColor={handleBorderColor()}
					/>
					<GlasDoorHoek2
						scale={0.06}
						rotation={[0, 0, -Math.PI / 2]}
						position={[calcWidth / 2 - 0.042, calcHeight - 0.088, 0]}
						handleBorderColor={handleBorderColor()}
					/>
				</group>

				{/* left frame */}
				<group>
					<GlasDoorFrame
						scale={[calcScale(19.5, 60.7, 0.8, 2.2, calcHeight), 0.06, 0.06]}
						position={[-calcWidth / 2 + 0.03, calcHeight / 2 - 0.03, 0]}
						rotation={[0, 0, -Math.PI / 2]}
						handleBorderColor={handleBorderColor}
					/>
					<GlasDoorHoek1
						scale={0.06}
						rotation={[0, 0, Math.PI / 2]}
						position={[-calcWidth / 2 + 0.042, calcHeight - 0.088, 0]}
						handleBorderColor={handleBorderColor()}
					/>
					<GlasDoorHoek2
						scale={0.06}
						rotation={[0, 0, Math.PI / 2]}
						position={[-calcWidth / 2 + 0.042, 0.024, 0]}
						handleBorderColor={handleBorderColor()}
					/>
				</group>

				{/* deur klink */}
				<group position={[-calcWidth / 2 + 0.03, calcHeight / 2, 0.04]}>
					<mesh>
						<boxGeometry args={[0.03, 0.15, 0.05]} />

						{drawingplan ? (
							<Shadermateriaal />
						) : (
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} />
						)}
					</mesh>
					<mesh position={[0.035, 0, 0.04]}>
						<boxGeometry args={[0.1, 0.15, 0.03]} />

						{drawingplan ? (
							<Shadermateriaal />
						) : (
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} />
						)}
					</mesh>

					<mesh position-z={-0.08}>
						<boxGeometry args={[0.03, 0.15, 0.05]} />

						{drawingplan ? (
							<Shadermateriaal />
						) : (
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} />
						)}
					</mesh>
					<mesh position={[0.035, 0, -0.12]}>
						<boxGeometry args={[0.1, 0.15, 0.03]} />

						{drawingplan ? (
							<Shadermateriaal />
						) : (
							<meshStandardMaterial color={handleBorderColor()} metalness={0.6} roughness={0.5} />
						)}
					</mesh>
				</group>

				<Lines />
			</group>
		</a.group>
	);
};

export default TestGlasDoor;
