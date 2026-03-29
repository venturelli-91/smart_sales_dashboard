import React, { useCallback } from "react";
import {
	Footer as FlowbiteFooter,
	FooterCopyright,
	FooterLink,
	FooterLinkGroup,
} from "flowbite-react";
import { BsLinkedin, BsGithub, BsWhatsapp, BsInstagram } from "react-icons/bs";

const Footer = () => {
	const handleLinkedinClick = useCallback(() => {
		window.open("https://www.linkedin.com/in/aurelioventurelli/", "_blank");
	}, []);

	const handleGithubClick = useCallback(() => {
		window.open("https://github.com/venturelli-91", "_blank");
	}, []);

	const handleWhatsappClick = useCallback(() => {
		window.open("https://wa.me/5500000000000", "_blank");
	}, []);

	const handleInstagramClick = useCallback(() => {
		window.open("https://www.instagram.com/pousadaencantoserra", "_blank");
	}, []);

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					minHeight: "10vh",
				}}>
				<FlowbiteFooter
					container
					style={{
						marginTop: "auto",
						backgroundColor: "rgb(76, 29, 149)",
						color: "white",
					}}>
					<FooterCopyright
						href="#"
						by="Sales Management"
						year={2025}
						style={{ color: "white", fontWeight: "bold" }}
					/>
					<FooterLinkGroup>
						<FooterLink
							href="#"
							className="mr-4 mt-2 font-bold">
							Contato
						</FooterLink>

						<div className="flex gap-4">
							<BsLinkedin
								size={30}
								onClick={handleLinkedinClick}
								className="cursor-pointer"
							/>
							<BsGithub
								size={30}
								onClick={handleGithubClick}
								className="cursor-pointer"
							/>
							<BsWhatsapp
								size={30}
								onClick={handleWhatsappClick}
								className="cursor-pointer"
							/>
							<BsInstagram
								size={30}
								onClick={handleInstagramClick}
								className="cursor-pointer"
							/>
						</div>
					</FooterLinkGroup>
				</FlowbiteFooter>
			</div>
		</>
	);
};

export default Footer;
