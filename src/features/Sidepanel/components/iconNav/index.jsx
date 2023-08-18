import { useStore } from "../../../../stores/appStore";
import IconData from "../../../../data/IconNav_Data.json";
import styled from "@emotion/styled";

const IconNav = () => {
	const updateObject = useStore((state) => state.updateObject);
	const doorType = useStore((state) => state.door.doorType);
	return (
		<NavButtons>
			{IconData.map((icon) => (
				<OpenButton
					type={doorType === icon.type ? 1 : 0}
					key={icon.type}
					onClick={() => updateObject("door", { doorType: icon.type })}>
					<img src={icon.img} alt="" />
					<p>{icon.name}</p>
				</OpenButton>
			))}
		</NavButtons>
	);
};

const NavButtons = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	overflow-y: scroll;
	right: -14px;
	overflow-x: hidden;
`;

const OpenButton = styled.button`
	background: ${({ type }) => (type ? "#222221" : "#f7f7f7")};
	border: none;
	padding: 6px 8px;
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	height: 70px;
	width: 70px;

	img {
		transition: transform 0.7s cubic-bezier(0.39, 1, 0.42, 1);
		filter: ${({ type }) => (type ? "invert(0%)" : "invert(100%)")};
	}

	p {
		transition: transform 0.7s cubic-bezier(0.39, 1, 0.42, 1);
		color: ${({ type }) => (type ? "#ffffff" : "#000000")};
		font-size: 10px;
		margin-top: 2px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 70px;
		padding: 0 6px;
	}
`;

export default IconNav;
