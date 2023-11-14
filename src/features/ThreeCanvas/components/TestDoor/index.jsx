import { Base, Geometry, Subtraction } from "@react-three/csg";
import { useStore } from "../../../../stores/appStore";
import { DoorFrameModel } from "./components/DoorFrameModel";
import Frame from "../Frame";
import { DeurSlot } from "./DeurSlot";
import { useRef } from "react";
import { BoxGeometry } from "three";
import Shadermateriaal from "../../../../components/ShaderMateriaal";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import Rechthoek from "./components/Variants/Rechthoek";
import Diamont from "./components/Variants/Diamont";
import Vierkant from "./components/Variants/Vierkant";
import Cirkel from "./components/Variants/Cirkel";
import { DoorFrameModelHoek1 } from "./components/DoorFrameModelHoek1";
import { DoorFrameModelHoek2 } from "./components/DoorFrameModelHoek2";
import VierRechthoeken from "./components/Variants/VierRechthoeken";
import HalveMoon from "./components/Variants/HalveMoon";

const TestDoor = () => {
	const holeCut = useRef();
	const { aluminium, doorWidth, doorVariant } = useStore((state) => state.door.gekozendeur);
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);
	const doorOpen = useStore((state) => state.sidepanel.doorOpen);

	const handleBorderColor = () => {
		switch (aluminium) {
			case "Black":
				return "#55585d";
			case "White":
				return "#eeeeee";
			default:
				return "#eeeeee";
		}
	};

	const handleVariant = (name) => {
		switch (name) {
			case "geen vensters":
				return <boxGeometry args={[0]} />;
			case "4 vensters":
				return <VierRechthoeken />;
			case "verticaal venster":
				return <Rechthoek />;
			case "diamant venster":
				return <Diamont />;
			case "vierkant venster":
				return <Vierkant />;
			case "rond venster":
				return <Cirkel />;
			case "halve maan venster":
				return <HalveMoon />;
			default:
				return <boxGeometry args={[0]} />;
		}
	};

	const materialProps = {
		thickness: 0.2,
		roughness: 0.7,
		metalness: 0.3,
		clearcoat: 1,
		clearcoatRoughness: 0.1,
		transmission: 0.9,
		ior: 1.4,
		envMapIntensity: 25,
		color: "#ffffff",
		attenuationTint: "#ffe79e",
		attenuationDistance: 0.06,
		reflectivity: 0.33,
	};

	const { spring } = useSpring({
		spring: doorOpen,
		config: { mass: 5, tension: 100, friction: 50, precision: 0.0001 },
	});
	const rotation = spring.to([0, 1], [0, -1.6]);

	return (
		<group position={[0, 0.015, 2.16]}>
			<a.group rotation-y={rotation} position={[-doorWidth / 1000 / 2 + 0.05, 0, 0.01]}>
				<group position={[doorWidth / 1000 / 2 - 0.05, 0, -0.01]}>
					<mesh position={[0, 0, 0]}>
						<DoorFrameModel scaling={0.3384} />
					</mesh>
					<mesh rotation={[0, 0, Math.PI]} position={[0, 2, 0]}>
						<DoorFrameModel scaling={0.3384} />
					</mesh>
					<mesh rotation={[0, -Math.PI * 2, -Math.PI / 2]} position={[-0.4, 1, 0]}>
						<DoorFrameModel scaling={0.9362} />
					</mesh>
					<mesh rotation={[0, 0, Math.PI / 2]} position={[0.4, 1, 0]}>
						<DoorFrameModel scaling={0.9362} />
					</mesh>

					<group position={[0.01, 0, 0]}>
						<DoorFrameModelHoek1 position={[0.3452, 0.031, 0.0304]} rotation={[0, 0, Math.PI]} />
						<DoorFrameModelHoek2 position={[0.3586, 0.048, 0.0304]} rotation={[0, 0, Math.PI]} />
					</group>

					<group position={[-0.76, 0, 0]} rotation={[0, 0, 0]}>
						<DoorFrameModelHoek1 position={[0.391, 0.0471, 0.0304]} rotation={[0, 0, Math.PI / 2]} />
						<DoorFrameModelHoek2 position={[0.406, 0.0315, 0.0304]} rotation={[0, 0, Math.PI / 2]} />
					</group>

					<group position={[-0.76, 1.96, 0]}>
						<DoorFrameModelHoek1 position={[0.405, 0.009, 0.0304]} rotation={[0, 0, 0]} />
						<DoorFrameModelHoek2 position={[0.3915, -0.008, 0.0304]} rotation={[0, 0, 0]} />
					</group>

					<group position={[0, 1.97, 0]}>
						<DoorFrameModelHoek1 position={[0.3694, -0.0172, 0.0304]} rotation={[0, 0, -Math.PI / 2]} />
						<DoorFrameModelHoek2 position={[0.3545, -0.0016, 0.0304]} rotation={[0, 0, -Math.PI / 2]} />
					</group>

					<mesh>
						<Geometry>
							<Base
								position={[0, drawingplan ? 1 : 1.013, 0.023]}
								geometry={
									new BoxGeometry(drawingplan ? 0.673 : 0.78, drawingplan ? 1.87 : 1.95, drawingplan ? 0.023 : 0.023)
								}></Base>

							<Subtraction ref={holeCut} name="cavity" position={doorVariant.position}>
								{handleVariant(doorVariant.value)}
							</Subtraction>
						</Geometry>

						{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={"#55585d"} />}
					</mesh>

					{doorVariant.value !== "geen vensters" && (
						<mesh position={doorVariant.position}>
							{handleVariant(doorVariant.value)}
							{drawingplan ? <Shadermateriaal /> : <meshPhysicalMaterial {...materialProps} />}
						</mesh>
					)}

					<DeurSlot position={[0.03, -0.05, 0.03]} scale={1.2} rotation={[0, -Math.PI / 2, 0]} />
				</group>
			</a.group>
			<group position={[0, 0, -2.17]}>
				<Frame handleBorderColor={handleBorderColor} />
			</group>
		</group>
	);
};

export default TestDoor;
