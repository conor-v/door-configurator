import { useGLTF } from "@react-three/drei";
import { Base, Geometry, Subtraction } from "@react-three/csg";
import { useRef } from "react";
import { useStore } from "../../../../stores/appStore";

export function Room(props) {
	const { nodes, materials } = useGLTF("./Kitchen_rebaked-compressed.glb");
	const { doorHeight, doorWidth, door, aluminium, doortype } = useStore((state) => state.door.gekozendeur);
	const widthCalc = doorWidth / 1000;
	const heightCalc = doorHeight / 1000;
	const widthPanelLeftCalc = door.sidepanel.widthLeft / 1000;
	const widthPanelRightCalc = door.sidepanel.widthRight / 1000;
	const holeCut = useRef();
	const holeCutLeftPanel = useRef();
	const holeCutRightPanel = useRef();

	const boxHeight = heightCalc; // Hoogte van de doos in de y-richting
	const minHeight = -0.451; // Minimale hoogte boven de vloer bij 1.8
	const maxHeight = -0.091; // Maximale hoogte boven de vloer bij 2.52

	// Bereken de y-positie van het gat met lineaire interpolatie
	const yPosition = minHeight + (boxHeight - 1.8) * ((maxHeight - minHeight) / (2.52 - 1.8));

	return (
		<group {...props} dispose={null}>
			<group position={[-1.272, 0.25, 2.246]}>
				<mesh castShadow receiveShadow geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh castShadow receiveShadow geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<group position={[1.615, 0.253, 2.241]}>
				<mesh castShadow receiveShadow geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh castShadow receiveShadow geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Glass.geometry}
				material={materials.glass}
				position={[-1.27, 1.353, 2.174]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[0.62, 1, 1.124]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Glass001.geometry}
				material={materials.glass}
				position={[1.617, 1.356, 2.169]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[0.62, 1, 1.124]}
			/>
			<group position={[-4.545, 0.25, 2.246]}>
				<mesh castShadow receiveShadow geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh castShadow receiveShadow geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Glass002.geometry}
				material={materials.glass}
				position={[-4.544, 1.353, 2.174]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[0.62, 1, 1.124]}
			/>
			<group position={[-4.547, 0.25, -3.139]} rotation={[-Math.PI, 0, -Math.PI]}>
				<mesh castShadow receiveShadow geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh castShadow receiveShadow geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Glass003.geometry}
				material={materials.glass}
				position={[-4.548, 1.353, -3.066]}
				rotation={[Math.PI / 2, 0, -Math.PI]}
				scale={[0.62, 1, 1.124]}
			/>
			<group position={[0.544, 0.253, -3.051]} rotation={[-Math.PI, 0, -Math.PI]}>
				<mesh castShadow receiveShadow geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh castShadow receiveShadow geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Glass004.geometry}
				material={materials.glass}
				position={[0.542, 1.356, -2.979]}
				rotation={[Math.PI / 2, 0, -Math.PI]}
				scale={[0.62, 1, 1.124]}
			/>
			<group position={[0.469, 0.735, -0.067]} rotation={[Math.PI, -1.251, Math.PI]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AppleRed1001.geometry}
					material={materials.RedApple}
					position={[0.003, 0.046, 0.053]}
					rotation={[0, -0.293, Math.PI]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.CuttinBoard2_Baked.geometry}
					material={materials.CuttinBoard2_Baked}
					rotation={[-Math.PI, 0, -Math.PI]}
				/>
				<group position={[0.125, 0.019, 0.03]} rotation={[2.631, 1.363, 0.474]}>
					<mesh castShadow receiveShadow geometry={nodes.Cube004.geometry} material={materials["MetalBrushed.002"]} />
					<mesh castShadow receiveShadow geometry={nodes.Cube004_1.geometry} material={materials.BlackGrip} />
					<mesh castShadow receiveShadow geometry={nodes.Cube004_2.geometry} material={materials.Metal} />
				</group>
				<group position={[-0.068, 0.053, -0.051]} rotation={[-0.239, 0.817, 0.464]}>
					<mesh castShadow receiveShadow geometry={nodes.Sphere003.geometry} material={materials.OrangeBody} />
					<mesh castShadow receiveShadow geometry={nodes.Sphere003_1.geometry} material={materials.OrangeFace} />
				</group>
				<group position={[0.033, 0.053, -0.052]} rotation={[2.166, 1.266, -2.278]}>
					<mesh castShadow receiveShadow geometry={nodes.Sphere003.geometry} material={materials.OrangeBody} />
					<mesh castShadow receiveShadow geometry={nodes.Sphere003_1.geometry} material={materials.OrangeFace} />
				</group>
			</group>
			<group position={[0.585, 0.737, -1.454]} scale={0.773}>
				<mesh castShadow receiveShadow geometry={nodes.Cylinder003.geometry} material={materials["Metal.001"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cylinder003_1.geometry} material={materials["Metal 2"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cylinder003_2.geometry} material={materials["Metal.001"]} />
			</group>
			<group position={[-3.914, 0, 1.655]} rotation={[0, 0.96, 0]} scale={0.9}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Chocofur_Free_Details_45_1.geometry}
					material={materials["Chocofur_Free_Details_45.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Chocofur_Free_Details_45_2.geometry}
					material={materials["Chocofur_Free_Details_45.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Chocofur_Free_Details_45_3.geometry}
					material={materials["Chocofur_Free_Details_45.003"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Chocofur_Free_Details_45_4.geometry}
					material={materials["Chocofur_Free_Details_45.003"]}
				/>
			</group>
			<group position={[2.89, 1.382, -1.704]} rotation={[0, -Math.PI / 2, 0]} scale={1.214}>
				<mesh castShadow receiveShadow geometry={nodes.Line38001.geometry} material={materials["metal.002"]} />
				<mesh castShadow receiveShadow geometry={nodes.Line38001_1.geometry} material={materials["[metal].001"]} />
				<mesh castShadow receiveShadow geometry={nodes.Line38001_2.geometry} material={materials["silber.001"]} />
				<mesh castShadow receiveShadow geometry={nodes.Line38001_3.geometry} material={materials["chroom.002"]} />
				<mesh castShadow receiveShadow geometry={nodes.Line38001_4.geometry} material={materials["pporcelam.001"]} />
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.kitchenAppliances.geometry}
				material={materials["kitchenAppliances.001"]}
				position={[2.574, 0.882, 0.256]}
				scale={0.011}
			/>
			<group position={[2.571, 1.487, 0.233]} rotation={[0, -Math.PI / 2, 0]} scale={0.982}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes["G-__557382002"].geometry}
					material={materials["metal 01 .001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes["G-__557382002_1"].geometry}
					material={materials["black color.001"]}
				/>
				<mesh castShadow receiveShadow geometry={nodes["G-__557382002_2"].geometry} material={materials["grril.001"]} />
				<mesh castShadow receiveShadow geometry={nodes["G-__557382002_3"].geometry} material={materials["light.001"]} />
				<mesh
					castShadow
					receiveShadow
					geometry={nodes["G-__557382002_4"].geometry}
					material={materials["buttons.001"]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Room001_Baked.geometry}
				material={materials["Room.001_Baked"]}
				position={[-6.921, 0, -2.989]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Room002_Baked.geometry}
				material={materials["Room.001_Baked"]}
				position={[-6.921, 0, 2.271]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Island_Baked.geometry}
				material={materials.Island_Baked}
				position={[0.48, 0.369, -0.636]}
				scale={[0.368, 0.368, 1]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Wall001_Baked.geometry}
				material={materials["Wall.001_Baked"]}
				position={[2.894, 1.35, -0.976]}
				scale={[1, 1.001, 1.225]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Room_Baked.geometry}
				material={materials.Room_Baked}
				position={[-3.105, 0, 2.091]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cabinet5001_Baked.geometry}
				material={materials["Cabinet5.001_Baked"]}
				position={[2.893, 1.5, 0.594]}
				rotation={[0, -1.571, 0]}
				scale={[1, 1.262, 1]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cabinet_Baked.geometry}
				material={materials.Cabinet_Baked}
				position={[2.893, 0.16, -2.244]}
				rotation={[0, -1.571, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ASTERIA_By_Umage_Baked.geometry}
				material={materials["ASTERIA By Umage_Baked"]}
				position={[0.459, 1.796, -0.138]}
				scale={0.08}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ASTERIA_By_Umage001_Baked.geometry}
				material={materials["ASTERIA By Umage.001_Baked"]}
				position={[0.459, 1.796, -1.224]}
				scale={0.08}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Ceiling.geometry}
				material={materials.Material}
				position={[-6.921, 0, 2.176]}
				scale={[1.648, 1, 1.039]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Floor_Baked.geometry}
				material={materials.Floor_Baked}
				position={[-6.915, 0, 2.256]}
				scale={[1.654, 1, 1.055]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.NurbsPath001_Baked.geometry}
				material={materials["NurbsPath.001_Baked"]}
				position={[-0.22, -0.006, 0.13]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.853}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.NurbsPath_Baked.geometry}
				material={materials.NurbsPath_Baked}
				position={[-0.22, -0.006, -0.407]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.853}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane001_Baked.geometry}
				material={materials["Plane.001_Baked"]}
				position={[-0.22, -0.006, 0.13]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.853}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane005_Baked.geometry}
				material={materials["Plane.005_Baked"]}
				position={[-0.22, -0.006, -0.407]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.853}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Countertop4_Baked.geometry}
				material={materials.Countertop4_Baked}
				position={[2.893, 0.86, -0.044]}
				rotation={[0, -1.571, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Handle011.geometry}
				material={materials["Material.001"]}
				position={[2.524, 1.654, 0.648]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={[1.262, 1, 1]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cabinet5_Door001_Baked.geometry}
				material={materials["Cabinet5_Door.001_Baked"]}
				position={[2.542, 1.5, 1.193]}
				rotation={[0, -1.571, 0]}
				scale={[1, 1.262, 1]}
			/>
			{/* <mesh
				castShadow
				receiveShadow
				geometry={nodes.Separating_wall.geometry}
				material={materials.Separating_wall_Baked}
				position={[-3.105, 0, 2.091]}
			/> */}

			<mesh castShadow receiveShadow material={materials.Separating_wall_Baked}>
				<Geometry>
					<Base geometry={nodes.Separating_wall.geometry} position={[-3.105, 0, 2.091]}>
						{/* <meshStandardMaterial color={"wit"} /> */}
					</Base>

					<Subtraction ref={holeCut} name="cavity" position={[-3, yPosition + 1.351, -0.41]} rotation-y={Math.PI / 2}>
						<boxGeometry args={[widthCalc, heightCalc, 1]} scale={0.1} />
					</Subtraction>

					{(door.sidepanel.type === "both" || door.sidepanel.type === "left") && (
						<Subtraction
							ref={holeCutLeftPanel}
							name="cavity"
							position={[-3, yPosition + 1.351, -0.409 - widthCalc / 2 - widthPanelLeftCalc / 2]}
							rotation-y={Math.PI / 2}>
							<boxGeometry args={[widthPanelLeftCalc, heightCalc, 1]} scale={0.1} />
						</Subtraction>
					)}

					{(door.sidepanel.type === "both" || door.sidepanel.type === "right") && (
						<Subtraction
							ref={holeCutRightPanel}
							name="cavity"
							position={[-3, yPosition + 1.351, widthCalc / 2 + widthPanelRightCalc / 2 - 0.411]}
							rotation-y={Math.PI / 2}>
							<boxGeometry args={[widthPanelRightCalc, heightCalc, 1]} scale={0.1} />
						</Subtraction>
					)}
				</Geometry>
			</mesh>

			{/* <mesh position={[-3, yPosition + 1.351, widthCalc / 2 + widthPanelRightCalc / 2 - 0.41]} rotation-y={Math.PI / 2}>
				<boxGeometry args={[widthPanelRightCalc, heightCalc, 1]} scale={0.1} />
				<meshStandardMaterial color={"red"} />
			</mesh> */}
			<group position={[-3.195, 0, -0.41]}>
				<mesh
					position={[
						0,
						heightCalc / 2,
						door.sidepanel.type === "both" || door.sidepanel.type === "right"
							? widthCalc / 2 + widthPanelRightCalc + 0.005
							: widthCalc / 2 + 0.005,
					]}>
					<boxGeometry args={[0.175, heightCalc, 0.01]} />
					<meshStandardMaterial color={aluminium === "Black" ? "#43464b" : "#c0bebc"} />
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
					<meshStandardMaterial color={aluminium === "Black" ? "#43464b" : "#c0bebc"} />
				</mesh>
			</group>

			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Room002_Baked_Baked.geometry}
				material={materials["Room.002_Baked_Baked"]}
				position={[-6.921, 0, 2.271]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Room_Baked_Baked.geometry}
				material={materials.Room_Baked_Baked}
				position={[-3.105, 0, 2.091]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Room001_Baked_Baked.geometry}
				material={materials["Room.001_Baked_Baked"]}
				position={[-6.921, 0, -2.989]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Ceiling_Baked.geometry}
				material={materials.Ceiling_Baked}
				position={[-6.921, 0, 2.176]}
				scale={[1.648, 1, 1.039]}
			/>
			{/* <mesh
				castShadow
				receiveShadow
				geometry={nodes.Separating_wall_Baked.geometry}
				material={materials.Separating_wall_Baked}
				position={[-3.105, 0, 2.091]}
			/> */}
		</group>
	);
}

useGLTF.preload("./Kitchen_rebaked-compressed.glb");
