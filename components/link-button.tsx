'use client'

import { ArrowUpRight } from "lucide-react"
import { track } from "@vercel/analytics"
import type { MainLink } from "@/lib/profile-data"

export function LinkButton({ link }: { link: MainLink }) {
  const Icon = link.icon

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        track("link_click", {
          title: link.title,
          url: link.url,
        })
      }}
      className="group relative flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-red-500/50 hover:bg-white/10"
    >
      {Icon ? (
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-200 transition-colors duration-300 group-hover:border-red-500/30 group-hover:bg-red-500/10 group-hover:text-red-400">
          <Icon className="size-5" aria-hidden="true" />
        </span>
      ) : null}

      <span className="flex min-w-0 flex-1 flex-col text-left">
        <span className="truncate font-semibold text-white">{link.title}</span>
        {link.subtitle ? (
          <span className="truncate text-sm text-white/50">{link.subtitle}</span>
        ) : null}
      </span>

      <ArrowUpRight
        className="size-5 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
        aria-hidden="true"
      />
    </a>
  )
}
