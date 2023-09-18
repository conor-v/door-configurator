import styled from "@emotion/styled";

export const StyledBox = styled.div`
	z-index: 10;
	position: absolute;
	height: 100vh;
	right: 0;
	top: 0px;
	width: ${({ width }) => `${width}px`};
	transform: ${({ open, width }) => (open ? "translateX(0)" : `translateX(${width}px)`)};
	transition: transform 0.7s cubic-bezier(0.39, 1, 0.42, 1);
	background-color: white;
	border-left: 1px solid lightgray;

	@media (max-width: 479px) {
		width: 332px !important;
		transform: ${({ open }) => (open ? "translateX(0)" : `translateX(332px)`)};
	}
`;

export const PanelToggle = styled.div`
	border: 1px solid lightgray;
	position: absolute;
	top: 40px;
	left: -37px;
	width: 35px;
	height: 50px;
	background-color: white;
	cursor: pointer;
	border-radius: 6px 0 0 6px;

	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		stroke: #454545;
		stroke-width: 1.5px;
		width: 28px;
		height: 28px;
		transition: transform 0.15s ease-in-out;
		transform: rotate(${({ open }) => (open ? "180deg" : "0deg")});
	}
`;

export const PannelContent = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
`;

export const PannelContentBox = styled.div`
	padding: 20px;
	width: calc(100% - 111px);
	overflow-y: scroll;
	height: 95%;
`;

export const ButtonDoor = styled.div`
	position: fixed;
	bottom: 25px;
	width: 50px;
	height: 50px;
	right: 15px;
	background: #222221;
	display: flex;
	flex-flow: column;
	gap: 15px;
	transform: ${({ sideOpen }) => (sideOpen ? "translateX(-400px)" : "translateX(0px)")};
	transition: transform 0.7s cubic-bezier(0.39, 1, 0.42, 1);
	align-items: center;
	justify-content: center;
	border-radius: 20%;

	@media (max-width: 479px) {
		right: -52px;
	}
`;

export const ButtonShader = styled.div`
	position: fixed;
	bottom: 90px;
	width: 50px;
	height: 50px;
	right: 15px;
	background: #222221;
	display: flex;
	flex-flow: column;
	gap: 15px;
	transform: ${({ sideOpen }) => (sideOpen ? "translateX(-400px)" : "translateX(0px)")};
	transition: transform 0.7s cubic-bezier(0.39, 1, 0.42, 1);
	align-items: center;
	justify-content: center;
	border-radius: 20%;

	@media (max-width: 479px) {
		right: -52px;
	}
`;
