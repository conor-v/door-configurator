import { useStore } from "../../../../stores/appStore";
import Frame from "../Frame";
import GlassDoor from "./components/GlassDoor";
import { Scharnieren } from "./components/Scharnieren";
import SingleDoor from "./components/SingleDoor";

const Door = () => {
	const { doortype } = useStore((state) => state.door.gekozendeur);
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

	console.log(doortype);
	return (
		<>
			{doortype === "Vast raam" && (
				<GlassDoor handleGlassColor={"ffffff"} handleBorderColor={"#43464b"} materialProps={materialProps} />
			)}
			{doortype === "Enkele deur" && (
				<>
					<SingleDoor />
					<Frame />
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
