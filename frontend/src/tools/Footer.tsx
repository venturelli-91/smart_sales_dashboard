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
		<FlowbiteFooter
			container
			style={{
				background:
					"linear-gradient(135deg, #2d1569 0%, #4c1d95 60%, #6d28d9 100%)",
				color: "white",
				borderTop: "1px solid rgba(167,139,250,0.2)",
			}}>
			<FooterCopyright
				href="#"
				by="Sales Management"
				year={2025}
				style={{ color: "white", fontWeight: "bold" }}
			/>
			<FooterLinkGroup>
				<FooterLink href="#" className="mr-4 mt-2 font-bold">
					Contato
				</FooterLink>

				<div className="flex gap-3">
					{[
						{ Icon: BsLinkedin, handler: handleLinkedinClick },
						{ Icon: BsGithub, handler: handleGithubClick },
						{ Icon: BsWhatsapp, handler: handleWhatsappClick },
						{ Icon: BsInstagram, handler: handleInstagramClick },
					].map(({ Icon, handler }, i) => (
						<button
							key={i}
							onClick={handler}
							className="bg-white/10 hover:bg-white/20 transition-colors duration-150 p-2 rounded-lg border border-white/10 text-white/80 hover:text-white">
							<Icon size={18} />
						</button>
					))}
				</div>
			</FooterLinkGroup>
		</FlowbiteFooter>
	);
};

export default Footer;
