import React, { useCallback } from "react";
import {
	Footer as FlowbiteFooter,
	FooterCopyright,
	FooterLink,
	FooterLinkGroup,
} from "flowbite-react";
import { BsLinkedin, BsGithub, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FOOTER_URLS, FOOTER_COMPANY } from "../constants/footer";

const SOCIAL_LINKS = [
	{ Icon: BsLinkedin, url: FOOTER_URLS.social.linkedin, label: "LinkedIn" },
	{ Icon: BsGithub, url: FOOTER_URLS.social.github, label: "GitHub" },
	{ Icon: BsWhatsapp, url: FOOTER_URLS.social.whatsapp, label: "WhatsApp" },
	{
		Icon: BsInstagram,
		url: FOOTER_URLS.social.instagram,
		label: "Instagram",
	},
];

const Footer = () => {
	const handleSocialClick = useCallback((url: string) => {
		window.open(url, "_blank");
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
				href={FOOTER_URLS.contact}
				by={FOOTER_COMPANY.name}
				year={FOOTER_COMPANY.year}
				style={{ color: "white" }}
				className="dark:text-gray-400"
			/>
			<FooterLinkGroup>
				<FooterLink
					href={FOOTER_URLS.contact}
					className="mr-4 mt-2 font-bold dark:text-gray-300 dark:hover:text-white">
					Contato
				</FooterLink>

				<div className="flex gap-3">
					{SOCIAL_LINKS.map(({ Icon, url, label }) => (
						<button
							key={label}
							onClick={() => handleSocialClick(url)}
							aria-label={`Acesse nosso ${label}`}
							title={label}
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
