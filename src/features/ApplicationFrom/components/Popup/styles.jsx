import styled from "@emotion/styled";

export const PopupContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.3);
	z-index: 99999999;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
	top: 0;
`;

export const PopupBox = styled.div`
	background: white;
	padding: 30px;
	border-radius: 4px;
	width: 560px;

	@media (max-width: 600px) {
		width: 340px;
	}
`;

export const PopupTitle = styled.p`
	margin-bottom: 20px;
	font-family: ivypresto-display, serif !important;
	font-weight: 400;
`;

export const PopupText = styled.p`
	margin-bottom: 15px !important;
`;

export const PopupLink = styled.span`
	text-decoration: underline;
	color: rgb(187, 80, 24);
	cursor: pointer;
`;

export const PopupButton = styled.button`
	border: medium none;
	background-color: rgb(187, 80, 24);
	min-width: 100px;
	color: rgb(255, 255, 255);
	padding: 0.5rem;
	border-radius: 4px;
	text-transform: uppercase;
	font-size: 14px;
	cursor: pointer;
`;
