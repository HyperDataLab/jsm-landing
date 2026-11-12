import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  vi: {
    translation: {
      meta: {
        title: "HyperData Lab JSM — Tìm tạp chí phù hợp",
        description: "JSM giúp bạn phân tích phong cách bản thảo học thuật và tìm tạp chí phù hợp hơn.",
      },
      nav: {
        brandHome: "HyperData Lab JSM, về đầu trang",
        features: "Tính năng",
        process: "Cách hoạt động",
        download: "Tải ứng dụng",
        faq: "Hỏi đáp",
        downloadWindows: "Tải cho Windows",
        downloadJsm: "Tải JSM cho Windows",
        openMenu: "Mở menu",
        closeMenu: "Đóng menu",
        vietnamese: "Tiếng Việt",
        english: "English",
        languageLabel: "Ngôn ngữ",
        chooseLanguage: "Chọn ngôn ngữ",
      },
      hero: {
        eyebrow: "CÔNG CỤ HỖ TRỢ NGHIÊN CỨU",
        title: "Chọn tạp chí phù hợp.",
        accent: "Hoàn thiện bản thảo tự tin hơn.",
        description: "JSM phân tích phong cách viết học thuật, đối chiếu bản thảo với hồ sơ tạp chí và giúp bạn tìm nơi gửi phù hợp hơn.",
        downloadSoon: "Bản tải Windows sắp có",
        download: "Tải JSM cho Windows",
        explore: "Khám phá tính năng",
        supportsFiles: "Hỗ trợ TXT và PDF",
        supportsWindows: "Dành cho Windows x64",
        releasePending: "Liên kết tải sẽ xuất hiện khi có bản phát hành công khai.",
        proofStyle: "Phân tích phong cách",
        proofJournals: "Đối chiếu tạp chí",
        proofSources: "Gợi ý có nguồn tham khảo",
      },
      preview: {
        workspace: "WORKSPACE",
        analysis: "Phân tích bản thảo",
        mock: "MINH HỌA",
        upload: "Thêm bản thảo của bạn",
        fileLimit: "TXT hoặc PDF · tối đa 15 MB",
        filename: "ban-thao-nghien-cuu.pdf",
        styleProfile: "Hồ sơ phong cách",
        journalSuggestions: "Tạp chí gợi ý",
        profileMatch: "Đối chiếu theo hồ sơ",
        callout: "Gợi ý dựa trên hồ sơ phong cách",
      },
      features: {
        eyebrow: "Công cụ cho hành trình học thuật",
        heading: "Từ bản thảo đến lựa chọn tạp chí",
        description: "Một điểm bắt đầu rõ ràng để xem lại phong cách viết và cân nhắc nơi gửi bài tiếp theo.",
        manuscript: {
          title: "Phân tích bản thảo",
          description: "Xem phong cách viết học thuật và các bước tu từ trong bản thảo để biết phần nào cần được chú ý.",
          tag: "TXT · PDF",
        },
        journals: {
          title: "Tìm tạp chí phù hợp",
          description: "Đối chiếu hồ sơ phong cách bản thảo với các hồ sơ tạp chí để tham khảo lựa chọn gửi bài.",
          tag: "Gợi ý theo hồ sơ",
        },
        sources: {
          title: "Theo dõi nguồn tham khảo",
          description: "Đọc câu tham khảo và DOI đi kèm khi dữ liệu nguồn có sẵn trong kết quả.",
          tag: "Nguồn khi có dữ liệu",
        },
        history: {
          title: "Xem lại lịch sử",
          description: "Mở lại các lượt đánh giá trước đó để tiếp tục tham khảo trong quá trình chỉnh sửa.",
          tag: "Lịch sử đánh giá",
        },
      },
      process: {
        eyebrow: "Quy trình đơn giản",
        heading: "Ba bước để có thêm góc nhìn cho bản thảo",
        description: "Bắt đầu từ tạp chí mục tiêu, thêm nội dung nghiên cứu và xem các thông tin đối chiếu trong JSM.",
        choose: { title: "Chọn tạp chí", description: "Tìm hoặc chọn tạp chí bạn đang cân nhắc." },
        upload: { title: "Thêm bản thảo", description: "Tải tệp TXT hoặc PDF, tối đa 15 MB." },
        review: { title: "Xem kết quả", description: "Tham khảo phân tích phong cách, gợi ý và nguồn liên quan." },
        cta: "Tìm hiểu bản tải",
        note: "Kết quả mang tính tham khảo; quyết định gửi bài vẫn thuộc về tác giả.",
      },
      download: {
        heading: "Bắt đầu với HyperData Lab JSM",
        description: "Tải ứng dụng desktop để phân tích phong cách bản thảo và tham khảo các tạp chí phù hợp.",
        platform: "Windows x64",
        files: "TXT và PDF, tối đa 15 MB",
        soon: "Bản tải Windows sắp có",
        available: "Tải JSM cho Windows",
        redirect: "Bạn sẽ được chuyển tới trang phát hành JSM.",
        pending: "Bản cài đặt đang được chuẩn bị cho phát hành công khai.",
        configuredTitle: "Bản phát hành công khai chưa được cấu hình",
      },
      faq: {
        eyebrow: "Hỏi đáp",
        heading: "Bạn đang muốn biết gì?",
        description: "Thông tin cơ bản trước khi bạn bắt đầu với JSM.",
        formats: {
          question: "JSM hỗ trợ những định dạng bản thảo nào?",
          answer: "Bạn có thể tải bản thảo dạng TXT hoặc PDF. Kích thước tệp tối đa hiện được hỗ trợ là 15 MB.",
        },
        acceptance: {
          question: "JSM có đảm bảo bài báo sẽ được tạp chí chấp nhận không?",
          answer: "Không. JSM cung cấp thông tin tham khảo về phong cách bản thảo và mức độ phù hợp với hồ sơ tạp chí. Quyết định biên tập thuộc về tạp chí.",
        },
        expert: {
          question: "Kết quả có thay thế đánh giá chuyên môn không?",
          answer: "Không. Hãy xem kết quả như một nguồn tham khảo bổ sung, sau đó trao đổi với giảng viên, cộng sự hoặc chuyên gia trong lĩnh vực của bạn.",
        },
        download: {
          question: "Tôi có thể tải JSM ở đâu?",
          answer: "Bản desktop Windows x64 sẽ được liên kết tại đây khi có URL phát hành công khai. Trang không cung cấp gói cài đặt từ đường dẫn máy cá nhân.",
        },
      },
      footer: {
        description: "Công cụ tham khảo cho quá trình nghiên cứu và chuẩn bị bản thảo.",
        backToTop: "Về đầu trang",
      },
    },
  },
  en: {
    translation: {
      meta: {
        title: "HyperData Lab JSM — Find a journal that fits",
        description: "JSM helps you review academic writing style and explore journals that may fit your manuscript.",
      },
      nav: {
        brandHome: "HyperData Lab JSM, back to top",
        features: "Features",
        process: "How it works",
        download: "Download",
        faq: "FAQ",
        downloadWindows: "Windows app",
        downloadJsm: "Get JSM for Windows",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        vietnamese: "Vietnamese",
        english: "English",
        languageLabel: "Language",
        chooseLanguage: "Choose language",
      },
      hero: {
        eyebrow: "RESEARCH SUPPORT TOOL",
        title: "Find a journal that fits.",
        accent: "Shape your manuscript with confidence.",
        description: "JSM reviews academic writing style, compares a manuscript with journal profiles, and helps you explore where it may fit.",
        downloadSoon: "Windows download coming soon",
        download: "Get JSM for Windows",
        explore: "Explore features",
        supportsFiles: "TXT and PDF supported",
        supportsWindows: "For Windows x64",
        releasePending: "The download link will appear when a public release is available.",
        proofStyle: "Writing style analysis",
        proofJournals: "Journal profile comparison",
        proofSources: "Suggestions with references",
      },
      preview: {
        workspace: "WORKSPACE",
        analysis: "Manuscript analysis",
        mock: "PREVIEW",
        upload: "Add your manuscript",
        fileLimit: "TXT or PDF · up to 15 MB",
        filename: "research-manuscript.pdf",
        styleProfile: "Writing style profile",
        journalSuggestions: "Journal suggestions",
        profileMatch: "Profile comparison",
        callout: "Suggestions based on style profiles",
      },
      features: {
        eyebrow: "Tools for your research journey",
        heading: "From manuscript to journal choices",
        description: "A clear starting point to review writing style and consider where to submit next.",
        manuscript: {
          title: "Review your manuscript",
          description: "Explore academic writing style and rhetorical moves to see which parts may need attention.",
          tag: "TXT · PDF",
        },
        journals: {
          title: "Explore suitable journals",
          description: "Compare a manuscript's style profile with journal profiles as a reference when choosing where to submit.",
          tag: "Profile based",
        },
        sources: {
          title: "Follow the references",
          description: "Review related reference sentences and DOI links when source data is available in the results.",
          tag: "Sources when available",
        },
        history: {
          title: "Revisit past reviews",
          description: "Open previous assessments again as you continue revising your manuscript.",
          tag: "Review history",
        },
      },
      process: {
        eyebrow: "A simple process",
        heading: "Three steps to a fresh perspective on your manuscript",
        description: "Start with a target journal, add your research, then review the comparisons in JSM.",
        choose: { title: "Choose a journal", description: "Find or select a journal you are considering." },
        upload: { title: "Add your manuscript", description: "Upload a TXT or PDF file up to 15 MB." },
        review: { title: "Review the results", description: "Explore style analysis, suggestions, and related sources." },
        cta: "Explore the download",
        note: "Results are for reference; authors make the final submission decision.",
      },
      download: {
        heading: "Get started with HyperData Lab JSM",
        description: "Download the desktop app to review manuscript style and explore suitable journals.",
        platform: "Windows x64",
        files: "TXT and PDF, up to 15 MB",
        soon: "Windows download coming soon",
        available: "Get JSM for Windows",
        redirect: "You will be taken to the JSM release page.",
        pending: "The installer is being prepared for public release.",
        configuredTitle: "A public release has not been configured",
      },
      faq: {
        eyebrow: "FAQ",
        heading: "Questions about JSM?",
        description: "A few details to know before getting started.",
        formats: {
          question: "Which manuscript file formats does JSM support?",
          answer: "You can upload a manuscript as a TXT or PDF file. The current file size limit is 15 MB.",
        },
        acceptance: {
          question: "Does JSM guarantee that a journal will accept my paper?",
          answer: "No. JSM provides reference information about manuscript style and how it compares with journal profiles. The journal makes the editorial decision.",
        },
        expert: {
          question: "Do JSM results replace expert review?",
          answer: "No. Treat the results as an additional reference, and discuss your work with an instructor, collaborator, or subject expert.",
        },
        download: {
          question: "Where can I download JSM?",
          answer: "The Windows x64 desktop build will be linked here when a public release URL is available. This page does not serve a package from a local machine path.",
        },
      },
      footer: {
        description: "A reference tool for research and manuscript preparation.",
        backToTop: "Back to top",
      },
    },
  },
} as const

function getInitialLanguage(): "vi" | "en" {
  try {
    const saved = window.localStorage.getItem("jsm-language")
    if (saved === "vi" || saved === "en") return saved
  } catch {
    // Continue with the browser language if storage is unavailable.
  }
  return "vi"
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "vi",
  supportedLngs: ["vi", "en"],
  interpolation: { escapeValue: false },
})

i18n.on("languageChanged", (language) => {
  document.documentElement.lang = language
  try {
    window.localStorage.setItem("jsm-language", language)
  } catch {
    // The language still works for this session if storage is unavailable.
  }
})

export default i18n