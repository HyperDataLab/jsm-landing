import { ArrowDownTrayIcon, Bars3Icon, CheckIcon, LanguageIcon } from "@heroicons/react/24/outline"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDismiss, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const links = [
  { label: "nav.features", href: "#tinh-nang" },
  { label: "nav.process", href: "#cach-hoat-dong" },
  { label: "nav.download", href: "#tai-ung-dung" },
  { label: "nav.faq", href: "#hoi-dap" },
]

function Brand() {
  const { t } = useTranslation()
  return (
    <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label={t("nav.brandHome")}>
      <img src="/assets/app_logo.png" alt="" className="size-[34px] shrink-0 object-contain" />
      <span className="text-[19px] font-extrabold tracking-[-0.04em] text-ink">HyperData Lab</span>
    </a>
  )
}

function LanguagePicker() {
  const { t, i18n } = useTranslation()
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const current = i18n.resolvedLanguage?.startsWith("en") ? "en" : "vi"
  useEffect(() => {
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        detailsRef.current.open = false
      }
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
      <summary
        aria-label={t("nav.languageLabel")}
        className="flex size-10 cursor-pointer list-none items-center justify-center rounded-xl text-secondary transition-colors hover:bg-surface-soft hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 [&::-webkit-details-marker]:hidden"
      >
        <LanguageIcon className="size-5" aria-hidden="true" />
      </summary>
      <div className="absolute right-0 top-full z-[80] mt-2 w-48 rounded-2xl border border-border bg-white p-2 shadow-[0_18px_45px_-22px_rgba(18,35,49,0.3)]">
        <div role="group" aria-label={t("nav.chooseLanguage")} className="space-y-1">
          {(["vi", "en"] as const).map((language) => {
            const selected = current === language
            return (
              <button
                key={language}
                type="button"
                aria-pressed={selected}
                onClick={() => chooseLanguage(language)}
                className={"flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 " + (selected ? "bg-surface-soft font-bold text-ink" : "font-medium text-secondary")}
              >
                <span className="flex-1">{t(language === "vi" ? "nav.vietnamese" : "nav.english")}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-subtle">{language}</span>
                {selected && <CheckIcon className="size-4 text-secondary" aria-hidden="true" />}
              </button>
            )
          })}
        </div>
      </div>
    </details>
  )
}

export function FloatingNavbar() {
  const { t } = useTranslation()
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useMotionValueEvent(scrollY, "change", (current) => {
    setVisible(current < 36 || current < lastScroll || current < 100)
    setLastScroll(current)
  })

  return (
    <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: visible ? 0 : -110, opacity: visible ? 1 : 0 }} transition={{ duration: 0.24, ease: "easeOut" }} className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between rounded-2xl border border-white/80 bg-white/85 px-4 shadow-[0_10px_35px_-22px_rgba(18,35,49,0.4)] backdrop-blur-xl sm:px-6">
        <Brand />
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="text-[13px] font-semibold text-secondary transition hover:text-primary">{t(link.label)}</a>)}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <LanguagePicker />
          <a href="#tai-ung-dung"><Button size="sm"><ArrowDownTrayIcon /> {t("nav.downloadWindows")}</Button></a>
        </div>
        <Sheet>
          <SheetTrigger asChild><Button size="icon" variant="ghost" className="md:hidden" aria-label={t("nav.openMenu")}><Bars3Icon className="size-5" /></Button></SheetTrigger>
          <SheetContent>
            <SheetDismiss />
            <SheetTitle className="mb-8 mt-2 text-lg font-extrabold text-ink"><Brand /></SheetTitle>
            <div className="flex flex-col gap-2">
              {links.map((link) => <SheetClose key={link.href} asChild><a href={link.href} className="rounded-xl px-3 py-3 text-sm font-semibold text-secondary transition hover:bg-surface-soft hover:text-ink">{t(link.label)}</a></SheetClose>)}
              <SheetClose asChild><a href="#tai-ung-dung" className="mt-3"><Button className="w-full"><ArrowDownTrayIcon /> {t("nav.downloadJsm")}</Button></a></SheetClose>
              <div className="mt-5 border-t border-border pt-5">
                <p className="mb-3 text-xs font-bold text-secondary">{t("nav.chooseLanguage")}</p>
                <LanguagePicker />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}