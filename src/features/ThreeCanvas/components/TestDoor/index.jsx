import { Base, Geometry, Subtraction } from "@react-three/csg";
import { useStore } from "../../../../stores/appStore";
import { DoorFrameModel } from "../DoorFrameModel";
import { DoorFrameStop } from "../DoorFrameStop";
import Frame from "../Frame";
import { DeurSlot } from "./DeurSlot";
import { useRef } from "react";
import { BoxGeometry } from "three";
import Shadermateriaal from "../../../../components/ShaderMateriaal";

const TestDoor = () => {
	const holeCut = useRef();
	const { aluminium } = useStore((state) => state.door.gekozendeur);
	const drawingplan = useStore((state) => state.sidepanel.drawingplan);

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
	return (
		<group position={[0, 0.015, 2.19]}>
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

			<mesh position={[0, 1.013, 0.023]}>
				<Geometry>
					<Base
						geometry={
							new BoxGeometry(drawingplan ? 0.673 : 0.78, drawingplan ? 1.845 : 1.95, drawingplan ? 0.023 : 0.023)
						}></Base>

					<Subtraction ref={holeCut} name="cavity" position={[0, 0, 0]} rotation-y={Math.PI / 2}>
						<boxGeometry args={[1, 1.3, 0.15]} scale={0.01} />
					</Subtraction>
				</Geometry>

				{drawingplan ? <Shadermateriaal /> : <meshStandardMaterial color={"#43464b"} />}
			</mesh>

			<mesh position={[0, 1.013, 0.023]}>
				<boxGeometry args={[0.15, 1.3, 0.03]} scale={0.01} />

				{drawingplan ? <Shadermateriaal /> : <meshPhysicalMaterial {...materialProps} />}
			</mesh>

			<group position={[0, 0, -2.17]}>
				<Frame handleBorderColor={handleBorderColor} />
			</group>
			<DeurSlot position={[0.03, -0.05, 0.03]} scale={1.2} rotation={[0, -Math.PI / 2, 0]} />
		</group>
	);
};

export default TestDoor;
