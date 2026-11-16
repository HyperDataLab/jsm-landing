import { useEffect, type ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  BookOpenIcon,
  ChartBarSquareIcon,
  CheckIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline"
import { useTranslation } from "react-i18next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { FloatingNavbar } from "@/components/floating-navbar"
import { jsmWindowsDownloadUrl } from "@/lib/release"

const registerUrl = "https://auth.hyperdatalab.org/register"

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-9 max-w-2xl">
      <p className="text-sm font-bold text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-xl text-[15px] leading-7 text-secondary">{description}</p>
    </div>
  )
}

function ProductIllustration() {
  const { t } = useTranslation()
  return (
    <figure className="mx-auto w-full max-w-xl">
      <div className="rounded-3xl border border-border bg-white p-5 shadow-[0_24px_70px_-44px_rgba(18,35,49,0.35)] sm:p-7">
        <div className="flex items-center gap-3 border-b border-border-soft pb-5">
          <span className="grid size-10 place-items-center rounded-xl bg-primary-tint text-primary"><DocumentTextIcon className="size-5" aria-hidden="true" /></span>
          <div><p className="text-xs font-semibold text-subtle">{t("illustration.inputLabel")}</p><p className="mt-1 text-sm font-bold text-ink">{t("illustration.input")}</p></div>
        </div>
        <div className="grid gap-3 py-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div className="rounded-2xl border border-border-soft bg-background p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-ink"><MagnifyingGlassIcon className="size-4 text-primary" aria-hidden="true" />{t("illustration.journal")}</div>
            <div className="mt-4 space-y-2" aria-hidden="true"><div className="h-2 rounded-full bg-[#dcecf5]" /><div className="h-2 w-4/5 rounded-full bg-[#e8eef2]" /><div className="h-2 w-3/5 rounded-full bg-[#e8eef2]" /></div>
          </div>
          <ArrowRightIcon className="mx-auto size-5 rotate-90 text-primary sm:rotate-0" aria-hidden="true" />
          <div className="rounded-2xl border border-primary/15 bg-primary-tint/60 p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-ink"><ScaleIcon className="size-4 text-primary" aria-hidden="true" />{t("illustration.comparison")}</div>
            <div className="mt-4 flex items-end gap-1.5" aria-hidden="true">{[18, 27, 21, 34, 25, 39, 30, 44, 35, 48].map((height, index) => <span key={index} className="flex-1 rounded-t bg-primary/65" style={{ height }} />)}</div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-2xl border border-border-soft p-4">
          <ChartBarSquareIcon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <div><p className="text-sm font-bold text-ink">{t("illustration.result")}</p><p className="mt-1 text-xs leading-5 text-secondary">{t("illustration.resultDescription")}</p></div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-subtle">{t("illustration.caption")}</figcaption>
    </figure>
  )
}

function App() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage?.startsWith("en") ? "en" : "vi"
  const features = [
    { key: "journalProfiles", icon: MagnifyingGlassIcon },
    { key: "manuscriptStyle", icon: DocumentTextIcon },
    { key: "comparison", icon: ScaleIcon },
    { key: "history", icon: BookOpenIcon },
  ]
  const useCases = ["exploreJournal", "prepareSubmission", "reviseDraft"]
  const steps = ["chooseJournal", "addManuscript", "reviewResults"]
  const questions = ["formats", "account", "results", "platform"]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t("meta.title")
    document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"))
  }, [language, t])

  return (
    <div id="top">
      <FloatingNavbar />
      <main>
        <section className="bg-background px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40">
          <Reveal className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold text-primary">{t("hero.eyebrow")}</p>
              <h1 className="mt-5 text-balance text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]">{t("hero.title")} <span className="text-primary">{t("hero.accent")}</span></h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-secondary sm:text-lg sm:leading-8">{t("hero.description")}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={jsmWindowsDownloadUrl} target="_blank" rel="noreferrer" className={buttonVariants({ size: "lg" })}><ArrowDownTrayIcon className="size-5" />{t("hero.download")}<ArrowUpRightIcon className="size-4" /></a>
                <a href="#tinh-nang" className={buttonVariants({ variant: "outline", size: "lg" })}>{t("hero.explore")}<ArrowRightIcon className="size-4" /></a>
              </div>
              <a href={registerUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-10 items-center gap-1 text-sm font-bold text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">{t("hero.register")}<ArrowUpRightIcon className="size-4" aria-hidden="true" /></a>
              <p className="mt-2 text-xs leading-5 text-subtle">{t("hero.registerNote")}</p>
            </div>
            <ProductIllustration />
          </Reveal>
        </section>

        <section id="tinh-nang" className="scroll-mt-28 bg-white px-5 py-16 sm:px-8 sm:py-20">
          <Reveal className="mx-auto max-w-6xl">
            <SectionHeading eyebrow={t("features.eyebrow")} title={t("features.heading")} description={t("features.description")} />
            <div className="grid gap-x-8 sm:grid-cols-2">
              {features.map(({ key, icon: Icon }, index) => (
                <article key={key} className="border-t border-border-soft py-5 sm:py-6">
                  <div className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-tint text-primary"><Icon className="size-5" aria-hidden="true" /></span>
                    <div><h3 className="text-base font-extrabold text-ink">{t(`features.items.${key}.title`)}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-secondary">{t(`features.items.${key}.description`)}</p></div>
                    <span className="ml-auto hidden font-mono text-xs font-bold text-subtle sm:block">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="tinh-huong" className="scroll-mt-28 bg-background px-5 py-16 sm:px-8 sm:py-20">
          <Reveal className="mx-auto max-w-6xl">
            <SectionHeading eyebrow={t("useCases.eyebrow")} title={t("useCases.heading")} description={t("useCases.description")} />
            <div className="divide-y divide-border sm:grid sm:grid-cols-3 sm:divide-y-0 sm:gap-6">
              {useCases.map((key) => (
                <article key={key} className="border-t border-border py-5 sm:border-t-0 sm:pt-0">
                  <h3 className="text-lg font-extrabold leading-7 text-ink">{t(`useCases.items.${key}.question`)}</h3>
                  <dl className="mt-4 space-y-3 text-sm leading-6">
                    <div><dt className="font-bold text-ink">{t("useCases.prepare")}</dt><dd className="mt-0.5 text-secondary">{t(`useCases.items.${key}.prepare`)}</dd></div>
                    <div><dt className="font-bold text-ink">{t("useCases.result")}</dt><dd className="mt-0.5 text-secondary">{t(`useCases.items.${key}.result`)}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="quy-trinh" className="scroll-mt-28 bg-white px-5 py-16 sm:px-8 sm:py-20">
          <Reveal className="mx-auto max-w-6xl">
            <SectionHeading eyebrow={t("workflow.eyebrow")} title={t("workflow.heading")} description={t("workflow.description")} />
            <ol className="grid gap-4 md:grid-cols-3">
              {steps.map((key, index) => (
                <li key={key} className="rounded-2xl border border-border-soft bg-background p-5 sm:p-6">
                  <span className="font-mono text-xs font-extrabold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-base font-extrabold text-ink">{t(`workflow.steps.${key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-6 text-secondary">{t(`workflow.steps.${key}.action`)}</p>
                  <p className="mt-4 border-t border-border-soft pt-3 text-sm leading-6 text-secondary"><span className="font-bold text-ink">{t("workflow.result")}: </span>{t(`workflow.steps.${key}.result`)}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm leading-6 text-secondary">{t("workflow.note")}</p>
          </Reveal>
        </section>

        <section id="tai-ung-dung" className="scroll-mt-28 bg-background px-5 py-16 sm:px-8 sm:py-20">
          <Reveal className="mx-auto max-w-6xl">
            <div className="grid gap-8 rounded-3xl border border-border bg-white p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
              <div className="max-w-2xl"><p className="text-sm font-bold text-primary">{t("gettingStarted.eyebrow")}</p><h2 className="mt-3 text-balance text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-4xl">{t("gettingStarted.heading")}</h2><p className="mt-4 text-[15px] leading-7 text-secondary">{t("gettingStarted.description")}</p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-secondary sm:grid-cols-3">
                  {["download", "account", "prepare"].map((key) => <li key={key} className="flex items-start gap-2"><CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /><span>{t(`gettingStarted.items.${key}`)}</span></li>)}
                </ul>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <a href={jsmWindowsDownloadUrl} target="_blank" rel="noreferrer" className={buttonVariants({ size: "lg" })}><ArrowDownTrayIcon className="size-5" />{t("gettingStarted.download")}<ArrowUpRightIcon className="size-4" /></a>
                <a href={registerUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-1 text-sm font-bold text-primary hover:text-primary-hover">{t("gettingStarted.register")}<ArrowUpRightIcon className="size-4" /></a>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="hoi-dap" className="scroll-mt-28 bg-white px-5 py-16 sm:px-8 sm:py-20">
          <Reveal className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div><p className="text-sm font-bold text-primary">{t("faq.eyebrow")}</p><h2 className="mt-3 text-balance text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-4xl">{t("faq.heading")}</h2><p className="mt-4 text-[15px] leading-7 text-secondary">{t("faq.description")}</p></div>
            <Accordion type="single" collapsible className="w-full">
              {questions.map((key) => <AccordionItem key={key} value={key}><AccordionTrigger>{t(`faq.items.${key}.question`)}</AccordionTrigger><AccordionContent>{t(`faq.items.${key}.answer`)}</AccordionContent></AccordionItem>)}
            </Accordion>
          </Reveal>
        </section>
      </main>
      <footer className="bg-background px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-2.5"><img src="/favicon.png" alt="" className="size-8 object-contain" /><span className="text-sm font-extrabold text-ink">Journal System Miner <span className="font-semibold text-secondary">- JSM</span></span></a>
          <p className="text-xs leading-5 text-subtle">{t("footer.description")}</p>
          <a href="#top" className="inline-flex min-h-10 items-center gap-1 text-sm font-bold text-primary hover:text-primary-hover">{t("footer.backToTop")}<ArrowRightIcon className="size-4 -rotate-90" aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
