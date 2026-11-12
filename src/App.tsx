import { useEffect } from "react"
import {

  AdjustmentsHorizontalIcon,
  ArrowDownTrayIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  ClockIcon,
  
  DocumentTextIcon,
  SparklesIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline"
import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Spotlight } from "@/components/spotlight"
import { jsmWindowsDownloadUrl } from "@/lib/release"

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.055em] text-ink sm:text-4xl lg:text-[2.7rem]">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-pretty text-[15px] leading-7 text-secondary sm:text-base">{description}</p>
    </div>
  )
}

function ProductPreview() {
  const { t } = useTranslation()
  const bars = [9, 14, 11, 17, 13, 20, 15, 22, 16, 19, 12, 21]
  return (
    <motion.div initial={{ opacity: 0, y: 22, rotate: 1.2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }} className="relative mx-auto w-full max-w-[34rem]">
      <div className="absolute -inset-5 rounded-[2.5rem] bg-primary/5 blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.65rem] border border-[#dbe6ed] bg-white shadow-[0_35px_90px_-48px_rgba(18,55,82,0.38)]">
        <div className="flex h-12 items-center justify-between border-b border-border-soft bg-white px-4 sm:px-5">
          <div className="flex items-center gap-2">
            <img src="/assets/app_logo.png" alt="" className="size-6 object-contain" />
            <span className="text-[11px] font-extrabold tracking-tight text-ink">JSM <span className="font-medium text-subtle">/ Workbench</span></span>
          </div>
          <div className="flex gap-1.5" aria-hidden="true"><span className="size-2 rounded-full bg-[#dce4e9]" /><span className="size-2 rounded-full bg-[#dce4e9]" /><span className="size-2 rounded-full bg-[#dce4e9]" /></div>
        </div>
        <div className="grid min-h-[21rem] grid-cols-[3rem_1fr] sm:grid-cols-[4.3rem_1fr]">
          <aside className="flex flex-col items-center gap-4 border-r border-border-soft bg-[#fbfcfd] py-5" aria-hidden="true">
            <span className="grid size-8 place-items-center rounded-xl bg-primary text-white"><BookOpenIcon className="size-4" /></span>
            <span className="grid size-8 place-items-center rounded-xl text-[#93a1ab]"><DocumentTextIcon className="size-4" /></span>
            <span className="grid size-8 place-items-center rounded-xl text-[#93a1ab]"><ClockIcon className="size-4" /></span>
          </aside>
          <div className="p-4 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div><p className="text-[10px] font-semibold text-subtle">{t("preview.workspace")}</p><h3 className="mt-1 text-sm font-extrabold tracking-tight text-ink sm:text-base">{t("preview.analysis")}</h3></div>
              <span className="rounded-lg bg-[#f0f7fc] px-2 py-1 text-[9px] font-bold text-primary">{t("preview.mock")}</span>
            </div>
            <div className="mt-5 rounded-2xl border border-dashed border-[#bdd9e9] bg-[#f8fbfd] p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-primary shadow-sm"><ArrowUpTrayIcon className="size-5" /></span>
                <div><p className="text-xs font-bold text-ink">{t("preview.upload")}</p><p className="mt-1 text-[10px] text-subtle">{t("preview.fileLimit")}</p></div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl border border-border-soft bg-white px-3 py-2.5">
                <div className="flex min-w-0 items-center gap-2"><span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#f0f7fc] text-primary"><DocumentTextIcon className="size-4" /></span><span className="truncate text-[10px] font-semibold text-ink sm:text-xs">{t("preview.filename")}</span></div>
                <CheckIcon className="size-4 shrink-0 text-primary" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border-soft p-3">
                <div className="flex items-center gap-1.5 text-[9px] font-semibold text-secondary"><SparklesIcon className="size-3.5 text-primary" /> {t("preview.styleProfile")}</div>
                <div className="mt-3 flex h-9 items-end gap-1" aria-hidden="true">{bars.map((height, index) => <span key={index} className="flex-1 rounded-t bg-primary/65" style={{ height: height + "px" }} />)}</div>
              </div>
              <div className="rounded-xl border border-border-soft p-3">
                <div className="flex items-center gap-1.5 text-[9px] font-semibold text-secondary"><AdjustmentsHorizontalIcon className="size-3.5 text-primary" /> {t("preview.journalSuggestions")}</div>
                <div className="mt-3 space-y-2"><div className="h-2 w-4/5 rounded-full bg-[#dcecf5]" /><div className="h-2 w-3/5 rounded-full bg-[#edf3f7]" /><div className="h-2 w-2/3 rounded-full bg-[#edf3f7]" /></div>
                <p className="mt-2 text-[9px] text-subtle">{t("preview.profileMatch")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 left-4 flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-[0_15px_35px_-20px_rgba(18,35,49,0.35)] sm:left-[-1.5rem]">
        <span className="grid size-7 place-items-center rounded-lg bg-primary-tint text-primary"><CheckIcon className="size-4" /></span>
        <span className="text-[10px] font-bold text-ink sm:text-xs">{t("preview.callout")}</span>
      </div>
    </motion.div>
  )
}

function DownloadAction() {
  const { t } = useTranslation()
  if (!jsmWindowsDownloadUrl) {
    return <Button size="lg" disabled title={t("download.configuredTitle")}><ArrowDownTrayIcon className="size-5" /> {t("download.soon")}</Button>
  }
  return <a href={jsmWindowsDownloadUrl} target="_blank" rel="noreferrer"><Button size="lg"><ArrowDownTrayIcon className="size-5" /> {t("download.available")} <ArrowUpRightIcon className="size-4" /></Button></a>
}

function App() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage?.startsWith("en") ? "en" : "vi"

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t("meta.title")
    document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"))
  }, [language, t])

  const features = [
    { icon: DocumentTextIcon, number: "01", title: t("features.manuscript.title"), description: t("features.manuscript.description"), tag: t("features.manuscript.tag") },
    { icon: AdjustmentsHorizontalIcon, number: "02", title: t("features.journals.title"), description: t("features.journals.description"), tag: t("features.journals.tag") },
    { icon: ChatBubbleLeftRightIcon, number: "03", title: t("features.sources.title"), description: t("features.sources.description"), tag: t("features.sources.tag") },
    { icon: ClockIcon, number: "04", title: t("features.history.title"), description: t("features.history.description"), tag: t("features.history.tag") },
  ]
  const steps = [
    { number: "01", title: t("process.choose.title"), description: t("process.choose.description") },
    { number: "02", title: t("process.upload.title"), description: t("process.upload.description") },
    { number: "03", title: t("process.review.title"), description: t("process.review.description") },
  ]
  const questions = [
    { question: t("faq.formats.question"), answer: t("faq.formats.answer") },
    { question: t("faq.acceptance.question"), answer: t("faq.acceptance.answer") },
    { question: t("faq.expert.question"), answer: t("faq.expert.answer") },
    { question: t("faq.download.question"), answer: t("faq.download.answer") },
  ]

  return (
    <div id="top" className="overflow-hidden">
      <FloatingNavbar />
      <main>
        <section className="relative isolate min-h-[45rem] overflow-hidden bg-background pb-24 pt-36 sm:pt-40 lg:min-h-[48rem] lg:pb-32 lg:pt-44">
          <Spotlight />
          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }} className="relative z-10 max-w-[38rem]">
              <Badge className="gap-2 border-primary/10 bg-white/80 px-3.5 py-2 text-[11px] tracking-[0.06em] shadow-sm"><span className="size-2 rounded-full bg-primary" /> {t("hero.eyebrow")}</Badge>
              <h1 className="mt-7 max-w-[42rem] text-balance text-[2.8rem] font-extrabold leading-[1.08] tracking-[-0.065em] text-ink sm:text-5xl lg:text-[3.8rem]">
                {t("hero.title")}<span className="mt-1 block text-primary">{t("hero.accent")}</span>
              </h1>
              <p className="mt-6 max-w-[34rem] text-pretty text-base leading-7 text-secondary sm:text-lg sm:leading-8">{t("hero.description")}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <DownloadAction />
                <a href="#tinh-nang"><Button variant="outline" size="lg">{t("hero.explore")} <ArrowRightIcon /></Button></a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-secondary">
                <span className="inline-flex items-center gap-2"><CheckIcon className="size-4 text-primary" /> {t("hero.supportsFiles")}</span>
                <span className="inline-flex items-center gap-2"><CheckIcon className="size-4 text-primary" /> {t("hero.supportsWindows")}</span>
              </div>
              {!jsmWindowsDownloadUrl && <p className="mt-4 text-xs text-subtle">{t("hero.releasePending")}</p>}
            </motion.div>
            <div className="relative z-10 px-2 py-3 sm:px-8 lg:px-0"><ProductPreview /></div>
          </div>
          <div className="relative mx-auto mt-24 flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border/70 px-5 pt-7 text-[11px] font-bold uppercase tracking-[0.14em] text-subtle sm:gap-x-14 sm:text-xs">
            <span>{t("hero.proofStyle")}</span><span className="hidden size-1 rounded-full bg-[#b8c5ce] sm:block" />
            <span>{t("hero.proofJournals")}</span><span className="hidden size-1 rounded-full bg-[#b8c5ce] sm:block" /><span>{t("hero.proofSources")}</span>
          </div>
        </section>

        <section id="tinh-nang" className="scroll-mt-28 bg-white px-5 py-24 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow={t("features.eyebrow")} title={t("features.heading")} description={t("features.description")} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, number, title, description, tag }, index) => (
                <motion.div key={number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.06, duration: 0.5 }}>
                  <Card className="group h-full rounded-[1.4rem] border-border-soft p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_22px_55px_-38px_rgba(0,113,188,0.45)] sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-2xl bg-primary-tint text-primary"><Icon className="size-5" /></span>
                      <span className="font-mono text-[11px] font-semibold text-[#b4c0c8]">{number}</span>
                    </div>
                    <h3 className="mt-7 text-base font-extrabold tracking-tight text-ink">{title}</h3>
                    <p className="mt-2 min-h-[5.5rem] text-sm leading-6 text-secondary">{description}</p>
                    <span className="mt-5 inline-flex rounded-full bg-surface-soft px-2.5 py-1.5 text-[10px] font-bold text-secondary">{tag}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="cach-hoat-dong" className="scroll-mt-28 bg-background px-5 py-24 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">{t("process.eyebrow")}</span>
              <h2 className="mt-4 max-w-lg text-balance text-3xl font-extrabold leading-tight tracking-[-0.055em] text-ink sm:text-4xl">{t("process.heading")}</h2>
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-secondary">{t("process.description")}</p>
              <a href="#tai-ung-dung" className="mt-7 inline-flex"><Button variant="outline">{t("process.cta")} <ArrowRightIcon /></Button></a>
            </div>
            <div className="relative space-y-3">
              <div className="absolute bottom-11 left-[1.55rem] top-11 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" aria-hidden="true" />
              {steps.map((step, index) => (
                <motion.div key={step.number} initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.45 }}>
                  <Card className="relative flex items-center gap-4 rounded-2xl border-border-soft p-4 shadow-[0_12px_28px_-24px_rgba(18,35,49,0.24)] sm:gap-5 sm:p-5">
                    <div className="relative z-10 grid size-11 shrink-0 place-items-center rounded-2xl border border-primary/10 bg-white text-xs font-extrabold text-primary shadow-sm">{step.number}</div>
                    <div><h3 className="text-sm font-extrabold text-ink">{step.title}</h3><p className="mt-1 text-sm leading-6 text-secondary">{step.description}</p></div>
                    <ArrowUpRightIcon className="ml-auto hidden size-4 shrink-0 text-[#a9b6bf] sm:block" />
                  </Card>
                </motion.div>
              ))}
              <p className="pl-1 pt-1 text-xs leading-5 text-subtle">{t("process.note")}</p>
            </div>
          </div>
        </section>

        <section id="tai-ung-dung" className="scroll-mt-28 px-5 py-24 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <Card className="relative overflow-hidden rounded-[2rem] border-primary/10 bg-white p-6 shadow-[0_30px_80px_-48px_rgba(0,113,188,0.35)] sm:p-10 lg:p-14">
              <div className="absolute -right-24 -top-36 size-96 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                <div className="max-w-2xl">
                  
                  <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-[-0.055em] text-ink sm:text-4xl">{t("download.heading")}</h2>
                  <p className="mt-4 max-w-xl text-[15px] leading-7 text-secondary">{t("download.description")}</p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-secondary">
                    <span className="inline-flex items-center gap-2"><CheckIcon className="size-4 text-primary" /> {t("download.platform")}</span>
                    <span className="inline-flex items-center gap-2"><CheckIcon className="size-4 text-primary" /> {t("download.files")}</span>
                  </div>
                </div>
                <div className="flex min-w-64 flex-col items-start gap-3 lg:items-end">
                  <DownloadAction />
                  <p className="max-w-64 text-left text-xs leading-5 text-subtle lg:text-right">{jsmWindowsDownloadUrl ? t("download.redirect") : t("download.pending")}</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="hoi-dap" className="scroll-mt-28 bg-white px-5 py-24 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">{t("faq.eyebrow")}</span>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.055em] text-ink sm:text-4xl">{t("faq.heading")}</h2>
              <p className="mt-4 text-[15px] leading-7 text-secondary">{t("faq.description")}</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {questions.map((item, index) => <AccordionItem key={item.question} value={"item-" + index}><AccordionTrigger>{item.question}</AccordionTrigger><AccordionContent>{item.answer}</AccordionContent></AccordionItem>)}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-[#f2f6f8] px-5 py-9 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5"><img src="/assets/app_logo.png" alt="" className="size-8 object-contain" /><span className="text-sm font-extrabold tracking-tight text-ink">HyperData Lab</span></div>
          <p className="text-xs leading-5 text-subtle">{t("footer.description")}</p>
          <a href="#top" className="inline-flex items-center gap-1 text-xs font-bold text-secondary transition hover:text-primary">{t("footer.backToTop")} <ArrowRightIcon className="-rotate-90 size-3.5" /></a>
        </div>
      </footer>
    </div>
  )
}

export default App