import { useGLTF, useTexture, Html } from "@react-three/drei";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { SRGBColorSpace, LinearSRGBColorSpace, RepeatWrapping } from "three";
import ConfigButton from "./IconOverlay/ConfigButton";
import { Base, Geometry, Subtraction } from "@react-three/csg";
import { useStore } from "../../../../stores/appStore";

function Room(props) {
	const { nodes, materials } = useGLTF("./house_exterior2.glb");
	const { doorHeight, doorWidth, door, aluminium, doortype } = useStore((state) => state.door.gekozendeur);
	const widthCalc = doorWidth / 1000;
	const heightCalc = doorHeight / 1000;
	const widthPanelLeftCalc = door.sidepanel.widthLeft / 1000;
	const widthPanelRightCalc = door.sidepanel.widthRight / 1000;

	const boxHeight = heightCalc; // Hoogte van de doos in de y-richting
	const minHeight = -1.25; // Minimale hoogte boven de vloer bij 1.8
	const maxHeight = -0.35; // Maximale hoogte boven de vloer bij 2.52

	// Bereken de y-positie van het gat met lineaire interpolatie
	const yPosition = minHeight + (boxHeight - 0.5) * ((maxHeight - minHeight) / (2.3 - 0.5));

	const { showFrontWall } = {
		showFrontWall: true,
	};

	const roomTextures = {
		terraceMarble: "/textures/Terrace_tiles.jpg",
		wallPlaster: "/textures/Plaster_Painted_Rough_01_Diffuse_4k.jpg",
		wallPlasterNormal: "/textures/Plaster_Painted_Rough_01_Normal_2k.jpg",
		floorWood: "/textures/WoodFloor057_1K_Color.jpg",
		floorWoodNormal: "/textures/WoodFloor057_1K_NormalGL.jpg",
		woodExterior: "/textures/Wood_Walnut_Lincoln_Diffuse_2k.jpg",
		bricks1: "/textures/darkModern_facade.jpg",
		bricks2: "/textures/industrial_facade.jpg",
		floorLM: "/bakes/Floor_house_PBR_Lightmap.jpg",
		wallsLM: "/bakes/main_walls_house_PBR_Lightmap.jpg",
		decorativeWallLM: "/bakes/wall_decoration_interior_house_PBR_Lightmap.jpg",
		terraceLM: "/bakes/terrace_house_PBR_Lightmap.jpg",
	};

	const [
		terraceMarble,
		wallPlaster,
		wallPlasterNormal,
		floorWood,
		floorWoodNormal,
		woodExterior,
		bricks1,
		bricks2,
		floorLM,
		wallsLM,
		decorativeWallLM,
		terraceLM,
	] = useTexture([
		roomTextures.terraceMarble,
		roomTextures.wallPlaster,
		roomTextures.wallPlasterNormal,
		roomTextures.floorWood,
		roomTextures.floorWoodNormal,
		roomTextures.woodExterior,
		roomTextures.bricks1,
		roomTextures.bricks2,
		roomTextures.floorLM,
		roomTextures.wallsLM,
		roomTextures.decorativeWallLM,
		roomTextures.terraceLM,
	]);
	const fixAlbedo = (texture, repeat) => {
		texture.flipY = false;
		texture.repeat.set(repeat, repeat);
		texture.colorSpace = SRGBColorSpace;
		texture.wrapS = texture.wrapT = RepeatWrapping;
	};

	const textureRepeatMapping = [
		{ texture: terraceMarble, repeat: 10 },
		{ texture: floorWood, repeat: 5 },
		{ texture: wallPlaster, repeat: 4 },
		{ texture: woodExterior, repeat: 4 },
		{ texture: bricks1, repeat: 12 },
		{ texture: bricks2, repeat: 12 },
	];

	textureRepeatMapping.forEach(({ texture, repeat }) => {
		fixAlbedo(texture, repeat);
	});

	const fixNormalTexture = (texture, repeat) => {
		texture.flipY = false;
		texture.colorSpace = LinearSRGBColorSpace;
		texture.wrapS = RepeatWrapping;
		texture.wrapT = RepeatWrapping;
		texture.repeat.set(repeat, repeat);
	};

	fixNormalTexture(wallPlasterNormal, 4);
	fixNormalTexture(floorWoodNormal, 5);

	const fixBaked = (textures) => {
		textures.map((texture) => {
			texture.flipY = false;
			texture.colorSpace = SRGBColorSpace;
		});
	};

	fixBaked([floorLM, wallsLM, decorativeWallLM, terraceLM]);

	//Clone material for the meshes sharing the same material

	const wallPlasterMaterial = useMemo(() => {
		let m = materials.Wall_material.clone();
		m.name = "wall_plaster";
		return m;
	}, [materials]);

	const interiorWallMaterial = useMemo(() => {
		let m = materials.Wall_material.clone();
		m.name = "interior_wall";
		return m;
	}, [materials]);

	const decorativeWallMaterial = useMemo(() => {
		let m = materials.Wall_material.clone();
		m.name = "decorative_wall";
		return m;
	}, [materials]);

	const floorMaterial = useMemo(() => {
		let m = materials.facade.clone();
		m.name = "floor_material";
		return m;
	}, [materials]);

	const facadeMaterial = useMemo(() => {
		let m = materials.facade.clone();
		m.name = "floor_material";
		return m;
	}, [materials]);

	const woodMaterial = useMemo(() => {
		let m = materials.facade.clone();
		m.name = "floor_material";
		return m;
	}, [materials]);

	/**Refs */
	const wallsRef = useRef();
	const floorRef = useRef();
	const decorationWallsRef = useRef();
	const terraceRef = useRef();
	const holeCut = useRef();
	const holeCutLeftPanel = useRef();
	const holeCutRightPanel = useRef();

	const [meshTexture, setMeshTexture] = useState(bricks1);

	/**APPLY MAPS */

	useLayoutEffect(() => {
		/**Second UV Set */
		wallsRef.current.geometry.attributes.uv2 = wallsRef.current.geometry.attributes.uv;
		floorRef.current.geometry.attributes.uv2 = floorRef.current.geometry.attributes.uv;
		decorationWallsRef.current.geometry.attributes.uv2 = decorationWallsRef.current.geometry.attributes.uv;
		terraceRef.current.geometry.attributes.uv2 = terraceRef.current.geometry.attributes.uv;

		materials.terrace.map = terraceMarble;
		materials.terrace.lightMap = terraceLM;
		materials.terrace.lightMapIntensity = 2;
		materials.terrace.envMapIntensity = 0.8;
		materials.terrace.roughness = 0.7;
		facadeMaterial.map = meshTexture;
		floorMaterial.map = floorWood;
		floorMaterial.normalMap = floorWoodNormal;
		floorMaterial.lightMap = floorLM;
		floorMaterial.lightMapIntensity = 3;
		floorMaterial.envMapIntensity = 0.8;
		floorMaterial.roughness = 0.4;
		wallPlasterMaterial.map = wallPlaster;
		wallPlasterMaterial.normalMap = wallPlasterNormal;
		wallPlasterMaterial.envMapIntensity = 0.9;
		interiorWallMaterial.map = wallPlaster;
		interiorWallMaterial.envMapIntensity = 0.6;
		interiorWallMaterial.lightMap = wallsLM;
		interiorWallMaterial.lightMapIntensity = 5;
		decorativeWallMaterial.map = wallPlaster;
		decorativeWallMaterial.normalMap = wallPlasterNormal;
		decorativeWallMaterial.envMapIntensity = 0.75;
		decorativeWallMaterial.lightMap = decorativeWallLM;
		decorativeWallMaterial.lightMapIntensity = 2;
		woodMaterial.map = woodExterior;
		woodMaterial.envMapIntensity = 0.7;
	}, [meshTexture]);

	return (
		<group {...props} dispose={null}>
			<Html as="div" position={[-3.5, 0.2, -4.5]} distanceFactor={5}>
				<ConfigButton
					setMeshTexture={setMeshTexture}
					light={bricks2}
					dark={bricks1}
					plaster={wallPlaster}
					currentMesh={meshTexture}
				/>
			</Html>
			<group position={[-0.1051655, 1.4835912, 0.4610171]}>
				<mesh ref={wallsRef} geometry={nodes.temp.geometry} material={interiorWallMaterial} />
				<mesh geometry={nodes.temp_1.geometry} material={facadeMaterial} />
			</group>
			<mesh
				ref={floorRef}
				geometry={nodes.Floor.geometry}
				material={floorMaterial}
				position={[-6.9147077, -0.017, 6.1120424]}
			/>
			<mesh
				ref={terraceRef}
				geometry={nodes.terrace.geometry}
				material={materials.terrace}
				position={[-4.9337378, -0.1, 0.4723178]}
				scale={[1.3651199, 1, 1]}
			/>
			<mesh geometry={nodes.Roof.geometry} material={materials.roof} position={[-0.1051554, 3.1744144, 0.457309]} />
			<mesh
				ref={decorationWallsRef}
				geometry={nodes.wall_decoration_interior.geometry}
				material={decorativeWallMaterial}
				position={[-0.4265007, 1.3477364, 3.8189058]}
			/>
			<mesh geometry={nodes.ceiling.geometry} position={[-0.0471296, 2.6926401, 0.4737881]}>
				<meshBasicMaterial color={"#A9A8A2"} />
			</mesh>
			{/**FRONT WALL */}
			<mesh visible={showFrontWall} material={facadeMaterial} position={[-3.1951656, 1.48, 0.461017]}>
				<Geometry>
					<Base geometry={nodes.front_wall.geometry} position={[0, 0.0001, 0]}>
						{/* <meshStandardMaterial color={"wit"} /> */}
					</Base>

					<Subtraction ref={holeCut} name="cavity" position={[0, yPosition, 0]}>
						<boxGeometry args={[1, heightCalc, widthCalc]} />
					</Subtraction>

					{(door.sidepanel.type === "both" || door.sidepanel.type === "left") && (
						<Subtraction
							ref={holeCutLeftPanel}
							name="cavity"
							position={[0, yPosition, -0.409 - widthCalc / 2 - widthPanelLeftCalc / 2]}>
							<boxGeometry args={[widthPanelLeftCalc, heightCalc, 1]} scale={0.1} />
						</Subtraction>
					)}

					{(door.sidepanel.type === "both" || door.sidepanel.type === "right") && (
						<Subtraction
							ref={holeCutRightPanel}
							name="cavity"
							position={[0, yPosition, widthCalc / 2 + widthPanelRightCalc / 2 - 0.411]}>
							<boxGeometry args={[widthPanelRightCalc, heightCalc, 1]} scale={0.1} />
						</Subtraction>
					)}
				</Geometry>
			</mesh>
			<group position={[-3.195, -0.02, 0.46]}>
				<mesh
					position={[
						0,
						heightCalc / 2,
						door.sidepanel.type === "both" || door.sidepanel.type === "left"
							? -widthCalc / 2 - widthPanelLeftCalc - 0.005
							: -widthCalc / 2 - 0.005,
					]}>
					<boxGeometry args={[0.175, heightCalc, 0.01]} />
					<meshStandardMaterial color={doortype === "Enkele deur" && aluminium === "Black" ? "#43464b" : "#c0bebc"} />
				</mesh>
				<mesh
					position={[
						0,
						heightCalc / 2,
						door.sidepanel.type === "both" || door.sidepanel.type === "right"
							? widthCalc / 2 + widthPanelRightCalc + 0.005
							: widthCalc / 2 + 0.005,
					]}>
					<boxGeometry args={[0.175, heightCalc, 0.01]} />
					<meshStandardMaterial color={doortype === "Enkele deur" && aluminium === "Black" ? "#43464b" : "#c0bebc"} />
				</mesh>
				<mesh
					position={[
						0,
						heightCalc + 0.004,
						door.sidepanel.type === "right"
							? 0 + widthPanelRightCalc / 2
							: door.sidepanel.type === "left"
							? 0 - widthPanelLeftCalc / 2
							: door.sidepanel.type === "both"
							? 0 + widthPanelRightCalc / 2 - widthPanelLeftCalc / 2
							: 0,
					]}>
					<boxGeometry
						args={[
							0.1795,
							0.01,
							door.sidepanel.type === "right"
								? widthCalc + widthPanelRightCalc
								: door.sidepanel.type === "left"
								? widthCalc + widthPanelLeftCalc
								: door.sidepanel.type === "both"
								? widthCalc + widthPanelLeftCalc + widthPanelRightCalc
								: widthCalc,
						]}
					/>
					<meshStandardMaterial color={doortype === "Enkele deur" && aluminium === "Black" ? "#43464b" : "#c0bebc"} />
				</mesh>
			</group>

			<group position={[-1.2719307, 0.249725, 5.9273691]}>
				<mesh geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<group position={[1.6148875, 0.2527007, 5.9606924]}>
				<mesh geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<mesh
				geometry={nodes.Glass.geometry}
				material={materials.glass}
				position={[-1.2702355, 1.3528092, 5.8549166]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[0.620326, 1, 1.1239011]}
			/>
			<mesh
				geometry={nodes.Glass001.geometry}
				material={materials.glass}
				position={[1.6165826, 1.3557849, 5.8882394]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[0.620326, 1, 1.1239011]}
			/>
			<group position={[0.543582, 0.2527007, -5.0066328]} rotation={[-Math.PI, 2e-7, -Math.PI]}>
				<mesh geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<mesh
				geometry={nodes.Glass004.geometry}
				material={materials.glass}
				position={[0.5418868, 1.3557849, -4.9341803]}
				rotation={[Math.PI / 2, 1e-7, -Math.PI]}
				scale={[0.620326, 1, 1.1239011]}
			/>
			<group position={[0.5847227, 0.7373877, -0.0892517]}>
				<mesh geometry={nodes.Cylinder003.geometry} material={materials["Metal.001"]} />
				<mesh geometry={nodes.Cylinder003_1.geometry} material={materials["Metal 2"]} />
				<mesh geometry={nodes.Cylinder003_2.geometry} material={materials["Metal.001"]} />
			</group>
			<group position={[0.4586384, 1.7959242, 0.1412626]} scale={0.08}>
				<mesh geometry={nodes.Cylinder004.geometry} material={materials["Metal "]} />
				<mesh geometry={nodes.Cylinder004_1.geometry} material={materials["Metal.003"]} />
				<mesh geometry={nodes.Cylinder004_2.geometry} material={materials["Metal.004"]} />
				<mesh geometry={nodes.Cylinder004_3.geometry} material={materials.Emission} />
			</group>
			<group position={[2.8895807, 1.3815668, -0.3390082]}>
				<mesh geometry={nodes.Line38001.geometry} material={materials["metal.002"]} />
				<mesh geometry={nodes.Line38001_1.geometry} material={materials["[metal].001"]} />
				<mesh geometry={nodes.Line38001_2.geometry} material={materials["silber.001"]} />
				<mesh geometry={nodes.Line38001_3.geometry} material={materials["chroom.002"]} />
				<mesh geometry={nodes.Line38001_4.geometry} material={materials["pporcelam.001"]} />
			</group>
			<mesh
				geometry={nodes.kitchenAppliances.geometry}
				material={materials["kitchenAppliances.001"]}
				position={[2.5736005, 0.8819529, 1.6203858]}
			/>
			<group position={[2.5709126, 1.4868915, 1.5981401]}>
				<mesh geometry={nodes["G-__557382002"].geometry} material={materials["metal 01 .001"]} />
				<mesh geometry={nodes["G-__557382002_1"].geometry} material={materials["black color.001"]} />
				<mesh geometry={nodes["G-__557382002_2"].geometry} material={materials["grril.001"]} />
				<mesh geometry={nodes["G-__557382002_3"].geometry} material={materials["light.001"]} />
				<mesh geometry={nodes["G-__557382002_4"].geometry} material={materials["buttons.001"]} />
			</group>
			<mesh
				geometry={nodes.Island_Baked.geometry}
				material={materials.Island_Baked}
				position={[0.4795703, 0.368577, 0.7291533]}
			/>
			<mesh
				geometry={nodes.Cabinet5001_Baked.geometry}
				material={materials["Cabinet5.001_Baked"]}
				position={[2.8932276, 1.5, 1.958824]}
			/>
			<mesh
				geometry={nodes.Cabinet_Baked.geometry}
				material={materials.Cabinet_Baked}
				position={[2.8932276, 0.16, -0.8793746]}
			/>
			<group position={[-1.9595195, 0, -1.4231534]}>
				<mesh geometry={nodes.Chocofur_Free_Details_45.geometry} material={materials["Chocofur_Free_Details_45.002"]} />
				<mesh
					geometry={nodes.Chocofur_Free_Details_45_1.geometry}
					material={materials["Chocofur_Free_Details_45.001"]}
				/>
				<mesh
					geometry={nodes.Chocofur_Free_Details_45_2.geometry}
					material={materials["Chocofur_Free_Details_45.003"]}
				/>
				<mesh
					geometry={nodes.Chocofur_Free_Details_45_3.geometry}
					material={materials["Chocofur_Free_Details_45.003"]}
				/>
			</group>
			<group position={[-0.5249366, 1.5201907, 3.8293753]}>
				<mesh geometry={nodes.Decoration_Frames_Abstract_Arches_02_1.geometry} material={materials.facade} />
				<mesh geometry={nodes.Decoration_Frames_Abstract_Arches_02_1_1.geometry} material={materials.frame} />
				<mesh
					geometry={nodes.Decoration_Frames_Abstract_Arches_02_1_2.geometry}
					material={materials.Frames_Abstract_Beige_01}
				/>
			</group>
			<group position={[0.4178486, 0.7815627, 1.2837658]} rotation={[Math.PI, -1.2514557, Math.PI]}>
				<mesh geometry={nodes.Sphere005.geometry} material={materials.RedApple} />
				<mesh geometry={nodes.Sphere005_1.geometry} material={materials.OrangeBody} />
				<mesh geometry={nodes.Sphere005_2.geometry} material={materials.OrangeFace} />
			</group>
			<group position={[0.4014137, 0.7543715, 1.4073131]} rotation={[Math.PI, -1.2514557, Math.PI]}>
				<mesh geometry={nodes.Cube004.geometry} material={materials["MetalBrushed.002"]} />
				<mesh geometry={nodes.Cube004_1.geometry} material={materials.BlackGrip} />
				<mesh geometry={nodes.Cube004_2.geometry} material={materials.Metal} />
			</group>
			<mesh
				geometry={nodes.CuttinBoard2_Baked.geometry}
				material={materials.CuttinBoard2_Baked}
				position={[0.46892, 0.735351, 1.297651]}
			/>
			<mesh
				geometry={nodes.Roof_trim_wall.geometry}
				material={wallPlasterMaterial}
				position={[-0.943813, 6.974701, 7.900364]}
			/>
			<mesh
				geometry={nodes.Wood_panels011.geometry}
				material={woodMaterial}
				position={[-6.254665, 1.374149, -5.528595]}
				rotation={[Math.PI / 2, 0, -Math.PI / 2]}
			/>
			<mesh
				geometry={nodes.Wood_panels012.geometry}
				material={woodMaterial}
				position={[-4.814907, 1.374149, 5.806095]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.Roof_trim.geometry}
				material={materials["Dark metal"]}
				position={[-5.12246, 3.016023, -0.714165]}
				rotation={[0, 1.570535, 0]}
			/>
			<mesh
				geometry={nodes.Wood_panels013.geometry}
				material={woodMaterial}
				position={[-2.059844, 2.700834, -5.986023]}
				rotation={[Math.PI / 2, Math.PI / 2, 0]}
			/>
			<group position={[-5.1518211, 2.7731321, 1.4051511]} rotation={[Math.PI, -3e-7, Math.PI]}>
				<mesh geometry={nodes.Plane1394.geometry} material={materials["Dark metal"]} />
				<mesh geometry={nodes.Plane1394_1.geometry} material={materials["bright metal"]} />
				<mesh geometry={nodes.Plane1394_2.geometry} material={materials.Light} />
			</group>
			<group position={[-5.1518192, 2.7731321, -1.0200808]} rotation={[Math.PI, -3e-7, Math.PI]}>
				<mesh geometry={nodes.Plane1394.geometry} material={materials["Dark metal"]} />
				<mesh geometry={nodes.Plane1394_1.geometry} material={materials["bright metal"]} />
				<mesh geometry={nodes.Plane1394_2.geometry} material={materials.Light} />
			</group>
			<group position={[-5.1518211, 2.7731321, 3.8427465]} rotation={[Math.PI, -3e-7, Math.PI]}>
				<mesh geometry={nodes.Plane1394.geometry} material={materials["Dark metal"]} />
				<mesh geometry={nodes.Plane1394_1.geometry} material={materials["bright metal"]} />
				<mesh geometry={nodes.Plane1394_2.geometry} material={materials.Light} />
			</group>
			<mesh
				geometry={nodes.stool_left.geometry}
				material={materials["Plane.005_Baked_Baked"]}
				position={[-0.2203697, -0.005842, 0.9574338]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				geometry={nodes.stool_legl.geometry}
				material={materials.NurbsPath_Baked}
				position={[-0.2203697, -0.005842, 0.9574338]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				geometry={nodes.stool_legr.geometry}
				material={materials["NurbsPath.001_Baked"]}
				position={[-0.2203697, -0.005842, 1.495113]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				geometry={nodes.stool_right.geometry}
				material={materials["Plane.001_Baked_Baked"]}
				position={[-0.2203697, -0.005842, 1.495113]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				geometry={nodes.Countertop4.geometry}
				material={materials.marble}
				position={[2.8932276, 0.86, 1.3206252]}
				rotation={[0, -Math.PI / 2, 0]}
			/>
			<mesh
				geometry={nodes.Countertop4_Baked.geometry}
				material={materials.Countertop4_Baked}
				position={[2.8932276, 0.86, 1.3206252]}
				rotation={[0, -Math.PI / 2, 0]}
			/>
			<mesh
				geometry={nodes.Cabinet5_Door001.geometry}
				material={materials.kitchen_cabinet}
				position={[2.5422275, 1.5, 2.5578241]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={[1, 1.2617769, 1]}>
				<mesh
					geometry={nodes.Handle011.geometry}
					material={materials["Material.001"]}
					position={[-0.5449184, 0.122226, 0.018]}
				/>
			</mesh>
			<mesh
				geometry={nodes.Cabinet5_Door001_Baked.geometry}
				material={materials["Cabinet5_Door.001_Baked"]}
				position={[2.5422275, 1.5, 2.5578241]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={[1, 1.2617769, 1]}
			/>
		</group>
	);
}

export default Room;

useGLTF.preload("./house_exterior2.glb");
