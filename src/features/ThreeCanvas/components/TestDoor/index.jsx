import { useStore } from "../../../../stores/appStore";
import { DoorFrameModel } from "../DoorFrameModel";
import { DoorFrameStop } from "../DoorFrameStop";
import Frame from "../Frame";

const TestDoor = () => {
	const { aluminium } = useStore((state) => state.door.gekozendeur);

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
	return (
		<group position={[0, 0.015, 2.19]}>
			<DoorFrameModel scaling={0.35} />
			<mesh rotation={[0, 0, Math.PI]} position={[0, 2, 0]}>
				<DoorFrameModel scaling={0.35} />
			</mesh>
			<mesh rotation={[0, -Math.PI * 2, -Math.PI / 2]} position={[-0.4, 1, 0]}>
				<DoorFrameModel scaling={0.95} />
			</mesh>
			<mesh rotation={[0, 0, Math.PI / 2]} position={[0.4, 1, 0]}>
				<DoorFrameModel scaling={0.96} />
			</mesh>

			<group>
				<mesh position={[0.376, 0.022, 0.025]} rotation={[0, Math.PI / 2, 0]}>
					<DoorFrameStop />
				</mesh>
				<mesh position={[0.376, 0.022, 0.025]} rotation={[0, -Math.PI / 2, Math.PI]}>
					<DoorFrameStop />
				</mesh>
			</group>

			<group position={[-0.752, 0, 0]} rotation={[0, 0, 0]}>
				<mesh position={[0.376, 0.022, 0.025]} rotation={[0, -Math.PI / 2, 0]}>
					<DoorFrameStop />
				</mesh>
				<mesh position={[0.376, 0.022, 0.025]} rotation={[0, Math.PI / 2, -Math.PI]}>
					<DoorFrameStop />
				</mesh>
			</group>

			<group position={[-0.752, 1.956, 0]}>
				<mesh position={[0.376, 0.022, 0.025]} rotation={[0, Math.PI / 2, 0]}>
					<DoorFrameStop />
				</mesh>
				<mesh position={[0.376, 0.022, 0.025]} rotation={[0, -Math.PI / 2, Math.PI]}>
					<DoorFrameStop />
				</mesh>
			</group>

			<group position={[0, 1.956, 0]}>
				<mesh position={[0.376, 0.022, 0.025]} rotation={[0, -Math.PI / 2, 0]}>
					<DoorFrameStop />
				</mesh>
				<mesh position={[0.376, 0.022, 0.025]} rotation={[0, Math.PI / 2, -Math.PI]}>
					<DoorFrameStop />
				</mesh>
			</group>

			<mesh position={[0, 1, 0.023]}>
				<boxGeometry args={[0.78, 1.95, 0.023]} />
				<meshStandardMaterial color={"#43464b"} />
			</mesh>

			<group position={[0, 0, -2.17]}>
				<Frame handleBorderColor={handleBorderColor} />
			</group>
		</group>
	);
};

export default TestDoor;
