import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  vi: {
    translation: {
      meta: {
        title: "HyperData Lab JSM — Journal System Miner",
        description: "Khám phá hồ sơ tạp chí và đối chiếu phong cách bản thảo với JSM — Journal System Miner.",
      },
      nav: {
        brandHome: "Journal System Miner JSM, về đầu trang", features: "Tính năng", process: "Quy trình", download: "Bắt đầu", faq: "Hỏi đáp",
        downloadJsm: "Tải JSM", register: "Đăng ký", openMenu: "Mở menu", closeMenu: "Đóng menu", primaryNavigation: "Điều hướng chính", vietnamese: "Tiếng Việt", english: "English", languageLabel: "Ngôn ngữ", chooseLanguage: "Chọn ngôn ngữ",
      },
      hero: {
        eyebrow: "Journal System Miner",
        title: "Khám phá hồ sơ tạp chí.", accent: "Đối chiếu phong cách bản thảo.",
        description: "JSM giúp bạn tìm hiểu hồ sơ tạp chí khoa học, phân tích phong cách bản thảo và tham khảo mức độ phù hợp trước khi chọn nơi gửi bài.",
        download: "Tải JSM cho Windows", explore: "Xem tính năng", register: "Đăng ký hoặc đăng nhập qua HyperData Lab", registerNote: "Tài khoản JSM được xác thực qua Central SSO.",
      },
      illustration: {
        inputLabel: "BẮT ĐẦU TỪ", input: "Bản thảo và tạp chí mục tiêu", journal: "Hồ sơ tạp chí", comparison: "Đối chiếu phong cách", result: "Kết quả để tham khảo", resultDescription: "Phân tích phong cách, cảnh báo và thông tin phù hợp khi dữ liệu có sẵn.", caption: "Sơ đồ minh họa quy trình, không phải ảnh chụp kết quả phân tích.",
      },
      features: {
        eyebrow: "JSM hỗ trợ những gì", heading: "Tìm hiểu tạp chí và xem lại bản thảo trong cùng một quy trình", description: "Bắt đầu từ hồ sơ tạp chí bạn quan tâm, sau đó đối chiếu phong cách viết trong bản thảo.",
        items: {
          journalProfiles: { title: "Khám phá hồ sơ tạp chí", description: "Tìm tạp chí theo tên hoặc ISSN và xem thông tin, hồ sơ phân tích hiện có." },
          manuscriptStyle: { title: "Phân tích phong cách bản thảo", description: "Thêm bản thảo dạng TXT hoặc PDF, tối đa 15 MB, để xem các đặc điểm phong cách và bước tu từ." },
          comparison: { title: "Đối chiếu với tạp chí", description: "Tham khảo điểm phù hợp và cảnh báo phong cách khi có dữ liệu hồ sơ tạp chí tương ứng." },
          history: { title: "Xem lại kết quả trước đó", description: "Mở lịch sử đánh giá để tiếp tục tham khảo trong quá trình chỉnh sửa bản thảo." },
        },
      },
      useCases: {
        eyebrow: "Bắt đầu từ nhu cầu của bạn", heading: "JSM phù hợp khi bạn muốn hiểu rõ hơn về tạp chí và bản thảo", description: "Chuẩn bị đúng thông tin sẽ giúp bạn tìm hồ sơ và đọc kết quả đối chiếu dễ hơn.", prepare: "Bạn cần chuẩn bị", result: "Bạn có thể xem",
        items: {
          exploreJournal: { question: "Tôi muốn tìm hiểu một tạp chí", prepare: "Tên tạp chí hoặc ISSN bạn muốn tra cứu.", result: "Hồ sơ tạp chí và thông tin phân tích đã có trong JSM." },
          prepareSubmission: { question: "Tôi đang cân nhắc nơi gửi bản thảo", prepare: "Bản thảo TXT/PDF tối đa 15 MB và tạp chí bạn muốn đối chiếu.", result: "Phân tích phong cách, cảnh báo và mức độ phù hợp khi dữ liệu hỗ trợ; đây là thông tin tham khảo." },
          reviseDraft: { question: "Tôi muốn xem lại một lần đánh giá", prepare: "Đăng nhập vào JSM bằng tài khoản đã dùng để thực hiện đánh giá.", result: "Lịch sử đánh giá trước đó để bạn tiếp tục xem xét khi chỉnh sửa." },
        },
      },
      workflow: {
        eyebrow: "Quy trình minh họa", heading: "Từ hồ sơ tạp chí đến góc nhìn về bản thảo", description: "Trong JSM, bạn chọn tạp chí cần tìm hiểu, thêm bản thảo rồi tự xem các kết quả đối chiếu.", result: "Kết quả", note: "Điểm và gợi ý chỉ mang tính tham khảo. JSM không thể bảo đảm quyết định chấp nhận bài của tạp chí.",
        steps: {
          chooseJournal: { title: "Tìm hoặc chọn tạp chí", action: "Tra cứu bằng tên hoặc ISSN rồi mở hồ sơ tạp chí bạn đang quan tâm.", result: "Hồ sơ và dữ liệu phân tích tạp chí có sẵn." },
          addManuscript: { title: "Thêm bản thảo", action: "Tải lên tệp TXT hoặc PDF, dung lượng tối đa 15 MB.", result: "Bản thảo được đưa vào lượt đánh giá trong JSM." },
          reviewResults: { title: "Đọc kết quả đối chiếu", action: "Xem phân tích phong cách, cảnh báo và gợi ý liên quan nếu dữ liệu có sẵn.", result: "Thông tin tham khảo để bạn cân nhắc chỉnh sửa hoặc lựa chọn tạp chí." },
        },
      },
      gettingStarted: {
        eyebrow: "Bắt đầu với JSM", heading: "Tải ứng dụng và đăng nhập để bắt đầu", description: "JSM hiện có bản desktop Windows x64. Sau khi cài đặt, đăng nhập qua Central SSO rồi chọn tạp chí và thêm bản thảo.",
        items: { download: "Ứng dụng desktop cho Windows x64.", account: "Cần tài khoản đăng nhập qua Central SSO.", prepare: "Chuẩn bị bản thảo TXT/PDF tối đa 15 MB." },
        download: "Tải JSM cho Windows", register: "Đăng ký tài khoản",
      },
      faq: {
        eyebrow: "Hỏi đáp", heading: "Thông tin trước khi bắt đầu", description: "Các giới hạn và yêu cầu đăng nhập đã được đối chiếu với trang JSM và mã nguồn sản phẩm.",
        items: {
          formats: { question: "JSM nhận những định dạng bản thảo nào?", answer: "JSM hỗ trợ tệp TXT hoặc PDF, tối đa 15 MB." },
          account: { question: "Tôi đăng nhập hoặc đăng ký ở đâu?", answer: "JSM dùng Central SSO để xác thực. Nếu chưa có tài khoản, mở trang đăng ký HyperData Lab để gửi yêu cầu; quyền đăng nhập phụ thuộc vào trạng thái tài khoản." },
          results: { question: "Kết quả có bảo đảm bài được nhận đăng không?", answer: "Không. Điểm phù hợp và gợi ý là thông tin tham khảo dựa trên hồ sơ và dữ liệu sẵn có. Quyết định biên tập thuộc về tạp chí." },
          platform: { question: "JSM hiện hỗ trợ nền tảng nào?", answer: "Trang phát hành hiện tại cung cấp ứng dụng desktop Windows x64." },
        },
      },
      footer: { description: "JSM — Journal System Miner · Công cụ tham khảo về hồ sơ tạp chí và phong cách bản thảo.", backToTop: "Về đầu trang", },
    },
  },
  en: {
    translation: {
      meta: {
        title: "HyperData Lab JSM — Journal System Miner",
        description: "Explore journal profiles and compare manuscript writing style with JSM — Journal System Miner.",
      },
      nav: {
        brandHome: "Journal System Miner JSM, back to top", features: "Features", process: "How it works", download: "Get started", faq: "FAQ",
        downloadJsm: "Get JSM", register: "Register", openMenu: "Open menu", closeMenu: "Close menu", primaryNavigation: "Primary navigation", vietnamese: "Vietnamese", english: "English", languageLabel: "Language", chooseLanguage: "Choose language",
      },
      hero: {
        eyebrow: "Journal System Miner",
        title: "Explore journal profiles.", accent: "Compare manuscript style.",
        description: "JSM helps you explore scholarly journal profiles, analyze manuscript style, and review reference fit information before choosing where to submit.",
        download: "Get JSM for Windows", explore: "Explore features", register: "Register or sign in with HyperData Lab", registerNote: "JSM authentication uses Central SSO.",
      },
      illustration: {
        inputLabel: "START WITH", input: "A manuscript and target journal", journal: "Journal profile", comparison: "Style comparison", result: "Results for reference", resultDescription: "Style analysis, alerts, and fit information when data is available.", caption: "Illustrative workflow, not a screenshot of analysis results.",
      },
      features: {
        eyebrow: "What JSM supports", heading: "Explore journals and review a manuscript in one workflow", description: "Start with a journal profile, then compare the writing style in your manuscript.",
        items: {
          journalProfiles: { title: "Explore journal profiles", description: "Search by journal name or ISSN and review available profile and analysis information." },
          manuscriptStyle: { title: "Analyze manuscript style", description: "Add a TXT or PDF manuscript up to 15 MB to review writing characteristics and rhetorical moves." },
          comparison: { title: "Compare with a journal", description: "Review a fit score and style alerts when matching journal profile data is available." },
          history: { title: "Revisit previous results", description: "Open evaluation history as a reference while you continue revising your manuscript." },
        },
      },
      useCases: {
        eyebrow: "Start with your task", heading: "Use JSM to learn more about journals and your manuscript", description: "Preparing the right information makes it easier to find profiles and read comparisons.", prepare: "Prepare", result: "You can review",
        items: {
          exploreJournal: { question: "I want to explore a journal", prepare: "The journal name or ISSN.", result: "The journal profile and analysis information available in JSM." },
          prepareSubmission: { question: "I am considering where to submit", prepare: "A TXT or PDF manuscript up to 15 MB and a journal to compare.", result: "Style analysis, alerts, and fit information when supported by available data; these are for reference." },
          reviseDraft: { question: "I want to revisit an evaluation", prepare: "Sign in to JSM with the account used for the evaluation.", result: "Previous evaluation history to consult as you revise." },
        },
      },
      workflow: {
        eyebrow: "Example workflow", heading: "From a journal profile to a new view of your manuscript", description: "In JSM, choose a journal to explore, add a manuscript, then review the comparisons yourself.", result: "Result", note: "Scores and suggestions are for reference. JSM cannot guarantee a journal's publication decision.",
        steps: {
          chooseJournal: { title: "Find or choose a journal", action: "Search by name or ISSN and open the profile you want to explore.", result: "The available journal profile and analysis data." },
          addManuscript: { title: "Add your manuscript", action: "Upload a TXT or PDF file up to 15 MB.", result: "Your manuscript is added to an evaluation in JSM." },
          reviewResults: { title: "Review the comparison", action: "Explore style analysis, alerts, and related suggestions when data is available.", result: "Reference information to consider while revising or choosing a journal." },
        },
      },
      gettingStarted: {
        eyebrow: "Get started with JSM", heading: "Download and sign in to begin", description: "JSM is currently available as a Windows x64 desktop app. After installing, sign in through Central SSO, then choose a journal and add your manuscript.",
        items: { download: "Desktop app for Windows x64.", account: "Sign in through Central SSO.", prepare: "Prepare a TXT or PDF manuscript up to 15 MB." },
        download: "Get JSM for Windows", register: "Create an account",
      },
      faq: {
        eyebrow: "FAQ", heading: "Before you get started", description: "File limits and sign-in details are based on the JSM page and product source.",
        items: {
          formats: { question: "Which manuscript formats does JSM accept?", answer: "JSM supports TXT or PDF files up to 15 MB." },
          account: { question: "Where do I sign in or register?", answer: "JSM uses Central SSO for authentication. If you do not have an account, open HyperData Lab registration to submit a request; sign-in access depends on account status." },
          results: { question: "Do the results guarantee publication?", answer: "No. Fit scores and suggestions are reference information based on available profiles and data. Editorial decisions belong to the journal." },
          platform: { question: "Which platforms does JSM support?", answer: "The current release page provides a Windows x64 desktop app." },
        },
      },
      footer: { description: "JSM — Journal System Miner · A reference tool for journal profiles and manuscript style.", backToTop: "Back to top", },
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
