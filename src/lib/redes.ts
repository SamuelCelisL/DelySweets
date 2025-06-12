import { redesIcon } from "../utils/redIcons"

interface Red {
  id: number,
  nombre: string,
  link: string,
  icon: React.JSX.Element,
}

export const redes: Red[] = [
  {
    id: 1,
    nombre: "Instagram",
    link: "https://www.instagram.com/delys_weets?igsh=MXRveWp6dzJ0bTJ4MA==",
    icon: redesIcon.instagram
  },{
    id: 2,
    nombre: "WhatsApp",
    link: "https://wa.me/573224189361?text=¡Hola!%20Quiero%20más%20información.",
    icon: redesIcon.whatsApp
  }
]