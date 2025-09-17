import { redirect } from "next/navigation";

export const metadata = {
	title: "Vconnect | Boekhoudkantoor Vervaet",
	description: "Digitale samenwerking en realtime inzicht via Vconnect."
};

export default function Page() {
	// Stuur direct door naar de login pagina
	redirect("/vconnect/login");
}
