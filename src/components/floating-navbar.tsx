import { ArrowDownTrayIcon, Bars3Icon, CheckIcon, LanguageIcon } from "@heroicons/react/24/outline"
import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { Button, buttonVariants } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDismiss, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { jsmWindowsDownloadUrl } from "@/lib/release"

const registerUrl = "https://auth.hyperdatalab.org/register"
const links = [
  { label: "nav.features", href: "#tinh-nang" },
  { label: "nav.process", href: "#quy-trinh" },
  { label: "nav.download", href: "#tai-ung-dung" },
  { label: "nav.faq", href: "#hoi-dap" },
]

function Brand() {
  const { t } = useTranslation()
  return <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label={t("nav.brandHome")}><img src="/favicon.png" alt="" className="size-[34px] object-contain" /><span className="text-[17px] font-extrabold tracking-[-0.04em] text-ink sm:text-[19px]">Journal System Miner <span className="font-semibold text-secondary">- JSM</span></span></a>
}

function LanguagePicker() {
  const { t, i18n } = useTranslation()
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const current = i18n.resolvedLanguage?.startsWith("en") ? "en" : "vi"

  useEffect(() => {
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) detailsRef.current.open = false
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && detailsRef.current?.open) {
        detailsRef.current.open = false
        detailsRef.current.querySelector("summary")?.focus()
      }
    }
    document.addEventListener("pointerdown", closeOnOutsidePointer)
    document.addEventListener("keydown", closeOnEscape)
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [])

  function chooseLanguage(language: "vi" | "en") {
    void i18n.changeLanguage(language)
    if (detailsRef.current) detailsRef.current.open = false
  }

  return (
    <details ref={detailsRef} className="group/language relative">
      <summary aria-label={t("nav.languageLabel")} className="flex size-10 cursor-pointer list-none items-center justify-center rounded-xl text-secondary hover:bg-surface-soft hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 [&::-webkit-details-marker]:hidden"><LanguageIcon className="size-5" aria-hidden="true" /></summary>
      <div className="absolute right-0 top-full z-[80] mt-2 w-48 rounded-2xl border border-border bg-white p-2 shadow-[0_18px_45px_-22px_rgba(18,35,49,0.3)]">
        <div role="group" aria-label={t("nav.chooseLanguage")} className="space-y-1">
          {(["vi", "en"] as const).map((language) => {
            const selected = current === language
            return <button key={language} type="button" aria-pressed={selected} onClick={() => chooseLanguage(language)} className={`flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${selected ? "bg-surface-soft font-bold text-ink" : "font-medium text-secondary"}`}><span className="flex-1">{t(language === "vi" ? "nav.vietnamese" : "nav.english")}</span><span className="text-[10px] font-bold uppercase tracking-wider text-subtle">{language}</span>{selected && <CheckIcon className="size-4 text-secondary" aria-hidden="true" />}</button>
          })}
        </div>
      </div>
    </details>
  )
}

export function FloatingNavbar() {
  const { t } = useTranslation()
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white/95 backdrop-blur-xl">
      <nav aria-label={t("nav.primaryNavigation")} className="site-nav-inner flex min-h-[4.25rem] items-center justify-between gap-2">
        <Brand />
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="rounded-lg px-2.5 py-2 text-[13px] font-semibold text-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">{t(link.label)}</a>)}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <LanguagePicker />
          <a href={registerUrl} target="_blank" rel="noreferrer" className="rounded-lg px-2 py-2 text-xs font-bold text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">{t("nav.register")}</a>
          <a href={jsmWindowsDownloadUrl} target="_blank" rel="noreferrer" className={buttonVariants({ size: "sm" })}><ArrowDownTrayIcon />{t("nav.downloadJsm")}</a>
        </div>
        <Sheet>
          <SheetTrigger asChild><Button size="icon" variant="ghost" className="md:hidden" aria-label={t("nav.openMenu")}><Bars3Icon className="size-5" /></Button></SheetTrigger>
          <SheetContent>
            <SheetDismiss />
            <SheetTitle className="mb-7 mt-2 text-lg font-extrabold text-ink"><Brand /></SheetTitle>
            <div className="flex flex-col gap-1">
              {links.map((link) => <SheetClose key={link.href} asChild><a href={link.href} className="rounded-xl px-3 py-3 text-sm font-semibold text-secondary hover:bg-surface-soft hover:text-ink">{t(link.label)}</a></SheetClose>)}
              <SheetClose asChild><a href={jsmWindowsDownloadUrl} target="_blank" rel="noreferrer" className={`${buttonVariants()} mt-3 w-full`}><ArrowDownTrayIcon />{t("nav.downloadJsm")}</a></SheetClose>
              <SheetClose asChild><a href={registerUrl} target="_blank" rel="noreferrer" className="mt-1 rounded-xl px-3 py-3 text-sm font-bold text-primary">{t("nav.register")}</a></SheetClose>
              <div className="mt-4 border-t border-border pt-4"><p className="mb-3 text-xs font-bold text-secondary">{t("nav.chooseLanguage")}</p><LanguagePicker /></div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
