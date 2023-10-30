import styled from "@emotion/styled";
import ConfigIcon from "./ConfigIcon";
import { useState } from "react";

function ConfigButton(props) {
	const [visible, setVisible] = useState(false);
	const [selectedIcon, setSelectedIcon] = useState("dark");
	const handleClick = () => {
		setVisible(!visible);
	};

	return (
		<>
			<MainButton onClick={handleClick}>
				<ConfigIcon />
			</MainButton>
			<FlexContainer visible={visible}>
				<DarkWood
					current={selectedIcon}
					onClick={() => {
						props.setMeshTexture(props.dark);
						setSelectedIcon("dark");
					}}
				/>
				<LightWood
					current={selectedIcon}
					onClick={() => {
						props.setMeshTexture(props.light);
						setSelectedIcon("light");
					}}
				/>
				<NoMaterial
					current={selectedIcon}
					onClick={() => {
						props.setMeshTexture(props.plaster);
						setSelectedIcon("plaster");
					}}
				/>
			</FlexContainer>
		</>
	);
}

const MainButton = styled.button`
	cursor: pointer;
	width: 40px;
	height: 40px;
	padding: 5px;
	background: rgba(255, 255, 255, 0.7);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(4px);
	border: 1px solid rgba(255, 255, 255, 0.32);
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 150px;
  height: 150px;
  gap: 1px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease;
  & > * {
    margin: 5px;
     ${"" /* transform: translateY(${(props) => (props.visible ? "-140px" : "0px")}); */}
     transform: translateX(${(props) => (props.visible ? "-70px" : "-60px")});
   
    );
    transition: transform 0.4s ease-in-out;
  }

  & > *:nth-of-type(1) {
    transform: translateY(${(props) => (props.visible ? "-95px" : "-70px")});
  }

  & > *:nth-of-type(2) {
    transform: translateY(${(props) => (props.visible ? "-55px" : "-40px")});
  }
`;

const LightWood = styled.div`
	cursor: pointer;
	background-image: url("/textures/industrial_facade.jpg");
	opacity: ${(props) => (props.current === "light" ? 1 : 0.4)};
	width: 30px;
	height: 30px;
	padding: 5px;
	border-radius: 50%;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5.4px);
	-webkit-backdrop-filter: blur(5.4px);
	border: 1px solid rgba(255, 255, 255, 1);
	&:hover {
		opacity: 1;
		transition: opacity 0.2s ease;
	}
`;

const DarkWood = styled.div`
	cursor: pointer;
	background-image: url("/textures/darkModern_facade.jpg");
	opacity: ${(props) => (props.current === "dark" ? 1 : 0.4)};
	width: 30px;
	height: 30px;
	padding: 5px;
	border-radius: 50%;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5.4px);
	-webkit-backdrop-filter: blur(5.4px);
	border: 1px solid rgba(255, 255, 255, 1);
	&:hover {
		opacity: 1;
		transition: opacity 0.2s ease;
	}
`;

const NoMaterial = styled.div`
	cursor: pointer;
	background-color: white;
	opacity: ${(props) => (props.current === "plaster" ? 1 : 0.4)};
	width: 30px;
	height: 30px;
	padding: 5px;
	border-radius: 50%;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5.4px);
	-webkit-backdrop-filter: blur(5.4px);
	border: 1px solid rgba(255, 255, 255, 1);
	&:hover {
		opacity: 1;
		transition: opacity 0.2s ease;
	}
`;

export default ConfigButton;
