import { useControls } from "leva";
import { useStore } from "../../../../stores/appStore";
import Frame from "../Frame";
import DubbleDoor from "./components/DubbleDoor";
import GlassDoor from "./components/GlassDoor";
import { Scharnieren } from "./components/Scharnieren";
import SingleDoor from "./components/SingleDoor";
import SidePanels from "../SidePanels";

const Door = () => {
	const { aluminium, material, aluminiumCustomColor, doortype, door } = useStore((state) => state.door.gekozendeur);

	const materialProps = useControls({
		thickness: { value: 0.2, min: 0, max: 20 },
		roughness: { value: 0.3, min: 0, max: 1, step: 0.1 },
		metalness: { value: 0.1, min: 0, max: 1, step: 0.1 },
		clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
		clearcoatRoughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
		transmission: { value: 0.9, min: 0.9, max: 1, step: 0.01 },
		ior: { value: 1.1, min: 1, max: 2.3, step: 0.05 },
		envMapIntensity: { value: 25, min: 0, max: 100, step: 1 },
		color: "#ffffff",
		attenuationTint: "#ffe79e",
		attenuationDistance: { value: 0.03, min: 0, max: 1 },
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
				return "#43464b";
			case "Bronze":
				return "#cd7f32";
			case "Gold":
				return "#d4af37";
			case "Silver":
				return "#bed7eb";
			case "Stainless Steel":
				return "#5c6169";
			case "Custom":
				return aluminiumCustomColor;
			default:
				return "#43464b";
		}
	};

	return (
		<>
			{doortype === "Vast raam" && (
				<GlassDoor
					handleGlassColor={handleGlassColor}
					handleBorderColor={handleBorderColor}
					materialProps={materialProps}
				/>
			)}
			{doortype === "Enkele deur" && (
				<>
					<SingleDoor />
					<Frame handleBorderColor={handleBorderColor} />
					<Scharnieren scale={0.085} position={[-0.04, 0, 2.19]} />
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
