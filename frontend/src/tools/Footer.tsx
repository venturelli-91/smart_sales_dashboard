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
			}}
			className="dark:bg-slate-900 dark:border-slate-700">
			<FooterCopyright
				href="#"
				by="Sales Management"
				year={2025}
				style={{ color: "white" }}
				className="dark:text-gray-400"
			/>
			<FooterLinkGroup>
				<FooterLink href="#" className="mr-4 mt-2 font-bold dark:text-gray-300 dark:hover:text-white">
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
							className="bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-150 p-2 rounded-lg border border-white/10 dark:border-white/5 text-white/80 dark:text-white/70 hover:text-white dark:hover:text-white">
							<Icon size={18} />
						</button>
					))}
				</div>
			</FooterLinkGroup>
		</FlowbiteFooter>
	);
};

export default Footer;
