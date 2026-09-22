import Image from "next/image"
import { profileData } from "@/lib/profile-data"
import { SocialIcons } from "@/components/social-icons"
import { LinkButton } from "@/components/link-button"

export default function Page() {
  const { avatarUrl, name, bio, socialLinks, links } = profileData

  return (
    <main className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-950 to-black px-4 py-12 text-white">
      {/* Textura de puntos tecnológica (Dot Matrix) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] opacity-40"
      />

      {/* Retícula digital de ingeniería */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"
      />

      {/* Resplandor sutil de neón rojo corporativo de BYRICHH */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-red-600/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-red-900/10 blur-[140px]"
      />

      <section className="relative z-10 flex w-full max-w-md flex-col items-center gap-8">
        {/* Encabezado del perfil */}
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-red-600 via-red-500 to-red-800 opacity-75 blur-sm"
            />
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt={`Foto de perfil de ${name}`}
              width={112}
              height={112}
              priority
              className="relative size-28 rounded-full border-2 border-red-500/30 object-cover shadow-xl"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-balance text-3xl font-black uppercase tracking-tight text-[#FF2A2A] drop-shadow-[0_2px_10px_rgba(255,42,42,0.3)]">
              {name}
            </h1>
            <p className="mx-auto max-w-xs text-pretty text-sm leading-relaxed text-zinc-300">
              {bio}
            </p>
          </div>
        </header>

        {/* Redes sociales */}
        <SocialIcons links={socialLinks} />

        {/* Enlaces principales */}
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkButton key={link.title} link={link} />
          ))}
        </div>

        <footer className="pt-2 text-center text-xs text-zinc-500 uppercase tracking-widest">
          {`© ${new Date().getFullYear()} ${name}`}
        </footer>
      </section>
    </main>
  )
}
