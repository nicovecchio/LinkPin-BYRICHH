import type { ComponentType, SVGProps } from "react"
import { MapPin, Star, Globe, Video } from "lucide-react"
import { WhatsAppIcon, InstagramIcon } from "@/components/brand-icons"

type IconType = ComponentType<SVGProps<SVGSVGElement>>

export type SocialLink = {
  label: string
  url: string
  icon: IconType
}

export type MainLink = {
  title: string
  subtitle?: string
  url: string
  icon?: IconType
}

export type ProfileData = {
  avatarUrl: string
  name: string
  bio: string
  socialLinks: SocialLink[]
  links: MainLink[]
}

// ----------------------------------------------------------------------
// Configuración de datos para la página de BYRICHH
// ----------------------------------------------------------------------

export const profileData: ProfileData = {
  avatarUrl: "/profile.pngg",
  name: "BYRICHH",
  bio: "Tecnología que va contigo ⚡️",
  socialLinks: [
    {
      label: "Ubicación",
      url: "https://maps.google.com/?q=BYRICHH+Sambil+Chacao",
      icon: MapPin,
    },
    {
      label: "Reseñas",
      url: "https://maps.google.com/?q=BYRICHH+Sambil+Chacao",
      icon: Star,
    },
    {
      label: "WhatsApp",
      url: "https://wa.me/message/CZPGL3DBFRT6I1",
      icon: WhatsAppIcon,
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/byrichh/?hl=en",
      icon: InstagramIcon,
    },
    {
      label: "TikTok",
      url: "https://www.tiktok.com/@byrichh.ve",
      icon: Video,
    },
  ],
  links: [
    {
      title: "Página Web",
      subtitle: "byrichh.com",
      url: "https://byrichh.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAacHg178a15fZiehQsDjcXc5QqaNO-660wSb55hHmnsCuzt-TQvtg09W1z63CQ_aem_qTLK1f7JOPi2E8i0U-gLdA",
      icon: Globe,
    },
    {
      title: "Ubicación / Reseñas",
      subtitle: "BYRICHH Sambil Chacao",
      url: "https://maps.google.com/?q=BYRICHH+Sambil+Chacao",
      icon: MapPin,
    },
    {
      title: "WhatsApp",
      subtitle: "Contáctanos directamente",
      url: "https://wa.me/message/CZPGL3DBFRT6I1",
      icon: WhatsAppIcon,
    },
    {
      title: "Instagram",
      subtitle: "@byrichh",
      url: "https://www.instagram.com/byrichh/?hl=en",
      icon: InstagramIcon,
    },
    {
      title: "TikTok",
      subtitle: "@byrichh.ve",
      url: "https://www.tiktok.com/@byrichh.ve",
      icon: Video,
    },
  ],
}
