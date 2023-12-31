import { useControls } from "leva";
import { useStore } from "../../../../stores/appStore";
import DubbleDoor from "./components/DubbleDoor";
import SidePanels from "../SidePanels";
import TestDoor from "../TestDoor";
import TestGlasDoor from "../TestGlasDoor";
import WoodenDoor from "../WoodenDoor";

const Door = () => {
	const { aluminium, material, doortype, door } = useStore((state) => state.door.gekozendeur);

	const materialProps = useControls({
		thickness: { value: 0.02, min: 0, max: 20 },
		roughness: { value: 0.3, min: 0, max: 1, step: 0.1 },
		metalness: { value: 0.1, min: 0, max: 1, step: 0.1 },
		clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
		clearcoatRoughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
		transmission: { value: 0.9, min: 0.9, max: 1, step: 0.01 },
		ior: { value: 1, min: 1, max: 2.3, step: 0.05 },
		envMapIntensity: { value: 1, min: 0, max: 100, step: 1 },
		color: "#ffffff",
		attenuationTint: "#ffe79e",
		attenuationDistance: { value: 0.03, min: 0, max: 1 },
		reflectivity: { value: 0.1, min: 0, max: 1 },
	});

	const handleGlassColor = () => {
		switch (material) {
			case "Clear":
				return "#ffffff";
			case "Frosted":
				return "#bed7eb";
			case "Colored":
				return "#506e86";
			default:
				return "#ffffff";
		}
	};

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

	// const handleDeurColor = () => {
	// 	switch (doorcolor) {
	// 		case "Black":
	// 			return "#43464b";
	// 		case "White":
	// 			return "#eeeeee";
	// 		default:
	// 			return "#eeeeee";
	// 	}
	// };

	return (
		<>
			{doortype === "Vast raam" && (
				<TestGlasDoor
					handleGlassColor={handleGlassColor}
					handleBorderColor={handleBorderColor}
					materialProps={materialProps}
				/>
			)}
			{doortype === "Enkele deur" && (
				<>
					<TestDoor />
				</>
			)}
			{doortype === "Wooden door" && (
				<>
					<WoodenDoor handleGlassColor={handleGlassColor} materialProps={materialProps} />
				</>
			)}
			{doortype === "Dubbele deur" && (
				<DubbleDoor
					handleGlassColor={handleGlassColor}
					handleBorderColor={handleBorderColor}
					materialProps={materialProps}
				/>
			)}
			{doortype === "3 slagdeur" && (
				<mesh>
					<boxGeometry />
					<meshBasicMaterial color={"grey"} />
				</mesh>
			)}
			{doortype === "4 slagdeur" && (
				<mesh>
					<boxGeometry />
					<meshBasicMaterial color={"black"} />
				</mesh>
			)}

			{(door.sidepanel.type === "both" || door.sidepanel.type === "left") && (
				<SidePanels
					handleGlassColor={handleGlassColor}
					handleBorderColor={handleBorderColor}
					materialProps={materialProps}
					side="left"
				/>
			)}

			{(door.sidepanel.type === "both" || door.sidepanel.type === "right") && (
				<SidePanels
					handleGlassColor={handleGlassColor}
					handleBorderColor={handleBorderColor}
					materialProps={materialProps}
					side="right"
				/>
			)}
		</>
	);
};

export default Door;
