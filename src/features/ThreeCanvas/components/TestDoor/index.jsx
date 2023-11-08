import { Base, Geometry, Subtraction } from "@react-three/csg";
import { useStore } from "../../../../stores/appStore";
import { DoorFrameModel } from "../DoorFrameModel";
import { DoorFrameStop } from "../DoorFrameStop";
import Frame from "../Frame";
import { DeurSlot } from "./DeurSlot";
import { useRef } from "react";
import { BoxGeometry } from "three";
import Shadermateriaal from "../../../../components/ShaderMateriaal";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import Rechthoek from "./components/Rechthoek";
import Diamont from "./components/Diamont";
import Vierkant from "./components/Vierkant";
import Cirkel from "./components/Cirkel";
import HalveMoon from "./components/HalveMoon";

const TestDoor = () => {
	const holeCut = useRef();
	const { aluminium } = useStore((state) => state.door.gekozendeur);
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);
	const doorOpen = useStore((state) => state.sidepanel.doorOpen);
	const { doorWidth } = useStore((state) => state.door.gekozendeur);

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

	const handleVariant = (name) => {
		switch (name) {
			case name === "verticaal venster":
				return Rechthoek;
			case name === "diamant venster":
				return Diamont;
			case name === "":
				return Vierkant;
			case name === "rond venster":
				return Cirkel;
			default:
				return Rechthoek;
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
					<mesh position={[0, 0.07, 0]}>
						<DoorFrameModel scaling={0.35} scalingTop={0.0015} />
					</mesh>
					<mesh rotation={[0, 0, Math.PI]} position={[0, 2, 0]}>
						<DoorFrameModel scaling={0.35} />
					</mesh>
					<mesh rotation={[0, -Math.PI * 2, -Math.PI / 2]} position={[-0.4, 1, 0]}>
						<DoorFrameModel scaling={0.95} />
					</mesh>
					<mesh rotation={[0, 0, Math.PI / 2]} position={[0.4, 1, 0]}>
						<DoorFrameModel scaling={0.96} />
					</mesh>

					<group position={[0.01, 0, 0]}>
						<mesh position={[0.376, 0.0215, 0.025]} rotation={[0, Math.PI / 2, 0]}>
							<DoorFrameStop />
						</mesh>
						<mesh position={[0.376, 0.0225, 0.025]} rotation={[0, -Math.PI / 2, Math.PI]}>
							<DoorFrameStop />
						</mesh>
					</group>

					<group position={[-0.76, 0, 0]} rotation={[0, 0, 0]}>
						<mesh position={[0.376, 0.0215, 0.025]} rotation={[0, -Math.PI / 2, 0]}>
							<DoorFrameStop />
						</mesh>
						<mesh position={[0.376, 0.0225, 0.025]} rotation={[0, Math.PI / 2, -Math.PI]}>
							<DoorFrameStop />
						</mesh>
					</group>

					<group position={[-0.76, 1.96, 0]}>
						<mesh position={[0.376, 0.0215, 0.025]} rotation={[0, Math.PI / 2, 0]}>
							<DoorFrameStop />
						</mesh>
						<mesh position={[0.376, 0.0225, 0.025]} rotation={[0, -Math.PI / 2, Math.PI]}>
							<DoorFrameStop />
						</mesh>
					</group>

					<group position={[0, 1.97, 0]}>
						<mesh position={[0.376, 0.0215, 0.025]} rotation={[0, -Math.PI / 2, 0]}>
							<DoorFrameStop />
						</mesh>
						<mesh position={[0.376, 0.0225, 0.025]} rotation={[0, Math.PI / 2, -Math.PI]}>
							<DoorFrameStop />
						</mesh>
					</group>

					<mesh>
						<Geometry>
							<Base
								position={[0, 1.013, 0.023]}
								geometry={
									new BoxGeometry(drawingplan ? 0.673 : 0.78, drawingplan ? 1.845 : 1.95, drawingplan ? 0.023 : 0.023)
								}></Base>

							<Subtraction ref={holeCut} name="cavity" position={[-0.07, 0.3, 0.01]}>
								<Rechthoek />
							</Subtraction>
						</Geometry>

						{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={"#43464b"} />}
					</mesh>

					<mesh position={[-0.07, 0.3, 0.01]}>
						<Rechthoek />
						{drawingplan ? <Shadermateriaal /> : <meshPhysicalMaterial {...materialProps} />}
					</mesh>

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
