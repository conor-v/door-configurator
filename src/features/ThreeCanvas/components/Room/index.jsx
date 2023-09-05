import { useGLTF } from "@react-three/drei";
import { Base, Geometry, Subtraction } from "@react-three/csg";
import { useRef } from "react";

export function Room(props) {
	const { nodes, materials } = useGLTF("/Kitchen-model-compressed.glb");
	const holeCut = useRef();

	return (
		<group {...props} dispose={null}>
			<group position={[0.47, 0.74, -0.07]} rotation={[Math.PI, -1.25, Math.PI]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AppleRed1001.geometry}
					material={materials.RedApple}
					position={[0, 0.05, 0.05]}
					rotation={[0, -0.29, Math.PI]}
				/>
				<group position={[0.13, 0.02, 0.03]} rotation={[2.63, 1.36, 0.47]}>
					<mesh castShadow receiveShadow geometry={nodes.Cube004.geometry} material={materials["MetalBrushed.002"]} />
					<mesh castShadow receiveShadow geometry={nodes.Cube004_1.geometry} material={materials.BlackGrip} />
					<mesh castShadow receiveShadow geometry={nodes.Cube004_2.geometry} material={materials.Metal} />
				</group>
				<group position={[-0.07, 0.05, -0.05]} rotation={[-0.24, 0.82, 0.46]}>
					<mesh castShadow receiveShadow geometry={nodes.Sphere003.geometry} material={materials.OrangeBody} />
					<mesh castShadow receiveShadow geometry={nodes.Sphere003_1.geometry} material={materials.OrangeFace} />
				</group>
				<group position={[0.03, 0.05, -0.05]} rotation={[2.17, 1.27, -2.28]}>
					<mesh castShadow receiveShadow geometry={nodes.Sphere003.geometry} material={materials.OrangeBody} />
					<mesh castShadow receiveShadow geometry={nodes.Sphere003_1.geometry} material={materials.OrangeFace} />
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.CuttinBoard2_Baked.geometry}
					material={materials.CuttinBoard2_Baked}
					rotation={[-Math.PI, 0, -Math.PI]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Glass.geometry}
				material={materials.glass}
				position={[-1.27, 1.35, 2.17]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[0.62, 1, 1.12]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Glass001.geometry}
				material={materials.glass}
				position={[1.62, 1.36, 2.17]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[0.62, 1, 1.12]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Glass002.geometry}
				material={materials.glass}
				position={[-4.54, 1.35, 2.18]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[0.62, 1, 1.12]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Glass003.geometry}
				material={materials.glass}
				position={[-4.55, 1.35, -2.99]}
				rotation={[Math.PI / 2, 0, -Math.PI]}
				scale={[0.62, 1, 1.12]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Glass004.geometry}
				material={materials.glass}
				position={[0.54, 1.36, -2.98]}
				rotation={[Math.PI / 2, 0, -Math.PI]}
				scale={[0.62, 1, 1.12]}
			/>
			<group position={[-1.27, 0.25, 2.25]}>
				<mesh castShadow receiveShadow geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh castShadow receiveShadow geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<group position={[1.61, 0.25, 2.24]}>
				<mesh castShadow receiveShadow geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh castShadow receiveShadow geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<group position={[-4.55, 0.25, 2.25]}>
				<mesh castShadow receiveShadow geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh castShadow receiveShadow geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<group position={[-4.55, 0.25, -3.07]} rotation={[-Math.PI, 0, -Math.PI]}>
				<mesh castShadow receiveShadow geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh castShadow receiveShadow geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<group position={[0.54, 0.25, -3.05]} rotation={[-Math.PI, 0, -Math.PI]}>
				<mesh castShadow receiveShadow geometry={nodes.Window_1.geometry} material={materials.Window_inside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_2.geometry} material={materials.Window_outside} />
				<mesh castShadow receiveShadow geometry={nodes.Window_3.geometry} material={materials.Window_metal} />
				<mesh castShadow receiveShadow geometry={nodes.Window_4.geometry} material={materials.Window_stone} />
			</group>
			<group position={[-3.91, 0, 1.66]} rotation={[0, 0.96, 0]} scale={0.9}>
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
			<group position={[2.89, 1.38, -1.7]} rotation={[0, -Math.PI / 2, 0]} scale={1.21}>
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
				position={[2.57, 0.88, 0.26]}
				scale={0.01}
			/>
			<group position={[2.57, 1.49, 0.23]} rotation={[0, -Math.PI / 2, 0]} scale={0.98}>
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
				geometry={nodes.Wall001_Baked.geometry}
				material={materials["Wall.001_Baked"]}
				position={[2.89, 1.35, -0.98]}
				scale={[1, 1, 1.22]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cabinet5001_Baked.geometry}
				material={materials["Cabinet5.001_Baked"]}
				position={[2.89, 1.5, 0.59]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={[1, 1.26, 1]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Island_Baked.geometry}
				material={materials.Island_Baked}
				position={[0.48, 0.37, -0.64]}
				scale={[0.37, 0.37, 1]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cabinet_Baked.geometry}
				material={materials.Cabinet_Baked}
				position={[2.89, 0.16, -2.24]}
				rotation={[0, -Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ASTERIA_By_Umage_Baked.geometry}
				material={materials["ASTERIA By Umage_Baked"]}
				position={[0.46, 1.8, -0.14]}
				scale={0.08}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cabinet5_Door001_Baked.geometry}
				material={materials["Cabinet5_Door.001_Baked"]}
				position={[2.54, 1.5, 1.19]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={[1, 1.26, 1]}
			/>

			<mesh castShadow receiveShadow material={materials.Room_Baked_Baked} position={[-6.89, 0, 2.09]}>
				<Geometry>
					<Base geometry={nodes.Room_Baked_Baked.geometry}></Base>

					<Subtraction ref={holeCut} name="cavity" position={[0, 0, 0]}>
						<boxGeometry args={[0, 0, 0]} scale={0} />
					</Subtraction>
				</Geometry>
			</mesh>

			{/* <mesh position={[-6.89, 0, 2.09]}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={"red"} />
			</mesh> */}

			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ASTERIA_By_Umage001_Baked.geometry}
				material={materials["ASTERIA By Umage.001_Baked"]}
				position={[0.46, 1.8, -1.22]}
				scale={0.08}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.NurbsPath_Baked.geometry}
				material={materials.NurbsPath_Baked}
				position={[-0.22, -0.01, -0.41]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.85}
			/>
			<group position={[0.58, 0.74, -1.45]} scale={0.77}>
				<mesh castShadow receiveShadow geometry={nodes.Cylinder003.geometry} material={materials["Metal.001"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cylinder003_1.geometry} material={materials["Metal 2"]} />
				<mesh castShadow receiveShadow geometry={nodes.Cylinder003_2.geometry} material={materials["Metal.001"]} />
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Ceiling_Baked.geometry}
				material={materials.Ceiling_Baked}
				position={[-6.92, 0, 2.18]}
				scale={[1.65, 1, 1.04]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Floor_Baked.geometry}
				material={materials.Floor_Baked}
				position={[-6.91, 0, 2.26]}
				scale={[1.65, 1, 1.06]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.NurbsPath001_Baked.geometry}
				material={materials["NurbsPath.001_Baked"]}
				position={[-0.22, -0.01, 0.13]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.85}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane001_Baked_Baked.geometry}
				material={materials["Plane.001_Baked_Baked"]}
				position={[-0.22, -0.01, 0.13]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.85}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane005_Baked_Baked.geometry}
				material={materials["Plane.005_Baked_Baked"]}
				position={[-0.22, -0.01, -0.41]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.85}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Countertop4_Baked.geometry}
				material={materials.Countertop4_Baked}
				position={[2.89, 0.86, -0.04]}
				rotation={[0, -Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Handle011.geometry}
				material={materials["Material.001"]}
				position={[2.52, 1.65, 0.65]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={[1.26, 1, 1]}
			/>
		</group>
	);
}

useGLTF.preload("/Kitchen-model-compressed.glb");
