import { useStore } from "../../../../stores/appStore";
import { PopupContainer, PopupBox, PopupTitle, PopupText, PopupLink, PopupButton } from "./styles";

const Popup = () => {
	const updateObject = useStore((state) => state.updateObject);
	const offertedata = useStore((state) => state.pdf.offerte);

	return (
		<PopupContainer>
			<PopupBox>
				<PopupTitle>Je offerte is klaar en verstuurd.</PopupTitle>
				<PopupText>
					Het genereren van je offerte is klaar. Bekijk hem{" "}
					<PopupLink
						onClick={() => {
							const linkSource = `data:application/pdf;base64,${offertedata}`;
							const downloadLink = document.createElement("a");
							const fileName = `Offerte I Love Parket.pdf`;

							downloadLink.href = linkSource;
							downloadLink.download = fileName;
							downloadLink.click();
						}}>
						hier
					</PopupLink>
					, of kijk in je mailbox
				</PopupText>
				<PopupButton
					onClick={() => {
						updateObject("pdf", { popupDowmloadPdf: false });
						updateObject("pdf", { aanvragen: false });
					}}>
					ok
				</PopupButton>
			</PopupBox>
		</PopupContainer>
	);
};

export default Popup;
