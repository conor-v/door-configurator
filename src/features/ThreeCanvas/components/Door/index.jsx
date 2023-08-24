import { useStore } from "../../../../stores/appStore";
import Frame from "../Frame";
import GlassDoor from "./components/GlassDoor";
import { Scharnieren } from "./components/Scharnieren";
import SingleDoor from "./components/SingleDoor";

const Door = () => {
	const { aluminium, material, aluminiumCustomColor, doortype } = useStore((state) => state.door.gekozendeur);
	const materialProps = {
		thickness: 2,
		roughness: 0.6,
		clearcoat: 0.2,
		clearcoatRoughness: 0,
		transmission: 0.97,
		ior: 1,
		envMapIntensity: 0,
		attenuationTint: "#ffe79e",
		attenuationDistance: 1,
	};

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

	console.log(doortype);
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
				<mesh>
					<boxGeometry />
					<meshBasicMaterial color={"blue"} />
				</mesh>
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
		</>
	);
};

export default Door;
