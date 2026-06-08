import { useEffect, useState } from "react";

const GOOGLE_FORM_URL = "https://forms.gle/NoAKdG4beCKVsen36";
const EVENT_DATE_RANGE = "19-21 Juni 2026";
const EVENT_LOCATION = "Jogja Expo Center";
const EVENT_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Jogja%20Expo%20Center";

const eventLogos = [
  {
    name: "Shafiyah Journey",
    src: "/assets/images/logos/organizer/shafiyah-journey.png",
  },
  {
    name: "Shafiyah Expo",
    src: "/assets/images/logos/organizer/Logo Shafiyah Expo_black.png",
  },
  {
    name: "PureWay",
    src: "/assets/images/logos/organizer/Pureway_Black_Baru-removebg-preview.png",
    className: "is-pureway",
  },
  {
    name: "Shafiyah Shalehah",
    src: "/assets/images/logos/organizer/shafiyah-shalehah.png",
  },
  {
    name: "Rumaysho.com",
    src: "/assets/images/logos/organizer/rumaysho.png",
  },
  {
    name: "BSI",
    src: "/assets/images/logos/sponsor/bsi.png",
    className: "is-bsi",
  },
];

const speakers = [
  {
    name: "Ustadz Khanif Muslim",
    role: "Dewan Pembina Yayasan Peduli Muslim Yogyakarta",
    image: "/assets/images/speakers/Ustadz Khanif Muslim.webp",
  },
  {
    name: "Ustadz Ahmad Ubaidillah",
    role: "Direktur Kursus Bahasa Arab KUBA, Pengasuh Ma'had Al-Mubarok",
    image: "/assets/images/speakers/Ustadz Ahmad Ubaidillah.webp",
  },
  {
    name: "Ustadz Khalid Basalamah",
    role: "Pendiri Gazwah Enterprise & Gazwah TV",
    image: "/assets/images/speakers/Ustadz Khalid Basalamah.webp",
  },
  {
    name: "Ustadz Muhammad Abduh Tuasikal",
    role: "Pendiri & Pengasuh Utama Rumaysho.com",
    image: "/assets/images/speakers/Ustadz Muhammad Abduh Tuasikal.webp",
  },
  {
    name: "Ustadz Erlan Iskandar",
    role: "Pembina Yayasan Maktabah Alfaiz Indonesia",
    image: "/assets/images/speakers/Ustadz Erlan Iskandar.webp",
  },
  {
    name: "Ustadz Raehanul Bahraen",
    role: "Pembina Yayasan Indonesia Bertauhid & Yayasan Pendidikan Muslimafiyah Indonesia",
    image: "/assets/images/speakers/Ustadz Raehanul Bahraen.webp",
  },
  {
    name: "Coach Wulan",
    role: "CEO PT Pelatih Indonesia Berlimpah, Certified NLP Coach",
    image: "/assets/images/speakers/Coach Wulan.webp",
  },
  {
    name: "Coach Yoso Lukito",
    role: "Founder & CEO Sekolah Digital Bisnis Indonesia (SDBI)",
    image: "/assets/images/speakers/Coach Yoso Lukito.webp",
  },
  {
    name: "Okta Wirawan",
    role: "Founder & Chairman of ABUYA Grup, Owner Almaz Fried Chicken",
    image: "/assets/images/speakers/Okta Wirawan.webp",
  },
  {
    name: "Deryansha Azhary",
    role: "Founder & CEO of Kasisolusi",
    image: "/assets/images/speakers/Deryansha Azhary.webp",
  },
  {
    name: "Ustadz Kamil Ramadhan",
    role: "Juara 1 Hafiz Indonesia 2017, Alumni Pesantren de Muttaqin Yogyakarta",
    image: "/assets/images/speakers/Ustadz Kamil Ramadhan.png",
  },
];

const rundownDays = [
  {
    id: "day-1",
    date: "Jumat, 19 Juni 2026",
    label: "Day 1",
    tone: "gold",
    sessions: [
      {
        time: "08.00-09.00",
        duration: "60'",
        activity: "Opening Ceremony",
        star: "Menteri UMKM / Kepala Dinas UMKM, GKR Bendara, Dinas Pariwisata, Dinas Koperasi dan UMKM",
      },
      {
        time: "09.00-11.00",
        duration: "90'",
        activity:
          'Talkshow UMKM & Pariwisata "Optimalisasi Potensi Pariwisata dan UMKM DIY Menuju Jogja Emas"',
        star: "Dinas Pariwisata, Dinas Koperasi dan UMKM, Selebgram/Tiktoker Wisata Jogja",
      },
      {
        time: "13.00-14.30",
        duration: "90'",
        activity:
          'Talkshow Muamalah "Strategi emas - Bongkar rahasia agar keluarga bisa Umroh/haji"',
        star: "BSI",
      },
      {
        time: "16.00-17.30",
        duration: "90'",
        activity:
          'Talkshow Kesehatan Psikologis "Peran orang tua antisipasi penyimpangan seksual anak sejak dini"',
        star: "Ustadz Rehanul Bahraen / Journey",
      },
      {
        time: "18.00-19.00",
        duration: "60'",
        activity: "Promosi Tenant (succes Story)",
        star: "Tenant pilihan",
      },
      {
        time: "19.30-21.00",
        duration: "90'",
        activity:
          'Talkshow Marketing Digital "Langkah emas optimasi branding melalui digital marketing bagi pebisnis pemula"',
        star: "Coach Yoso",
      },
    ],
  },
  {
    id: "day-2",
    date: "Sabtu, 20 Juni 2026",
    label: "Day 2",
    tone: "blue",
    sessions: [
      {
        time: "08.00-10.00",
        duration: "120'",
        activity: 'Kasisolusi "Beyond Marketing agar produk bisnis makin laris"',
        star: "Derry Kasisolusi, Deryansha Azhary",
      },
      {
        time: "10.00-12.00",
        duration: "120'",
        activity:
          'Talkshow Keluarga Produktif "Strategi jitu mengelola keluarga dan bisnis secara seimbang"',
        star: "Coach Wulan",
      },
      {
        time: "13.00-15.00",
        duration: "120'",
        activity:
          'Talkshow Digital Marketing Optimal & Network Collaboration "Tetap Tumbuh di Era Ketidakpastian Bisnis"',
        star: "Okta Wirawan feat Coach Yoso",
      },
      {
        time: "16.00-17.30",
        duration: "90'",
        activity: 'Kopdar Komunitas "Agar hobi meraih Ridho Ilahi"',
        star: "Ustadz Hanif Muslim dan Member MBI",
      },
      {
        time: "18.00-19.00",
        duration: "60'",
        activity: "Promosi Tenant (succes Story)",
        star: "Tenant pilihan",
      },
      {
        time: "19.30-21.00",
        duration: "30'",
        activity:
          'Kajian Penggugah Hati "Nasihat emas cara kelola emosional dan spiritual agar istiqomah ketika berhijrah"',
        star: "Ustadz Khalid Basalamah",
      },
    ],
  },
  {
    id: "day-3",
    date: "Minggu, 21 Juni 2026",
    label: "Day 3",
    tone: "rose",
    sessions: [
      {
        time: "05.00-08.00",
        duration: "180'",
        activity:
          'Shafiyah Running "Gold Running while staying healthy, beauty, and shar\'i"',
        star: "Kahf Wardah / Paragon",
      },
      {
        time: "09.00-11.00",
        duration: "120'",
        activity:
          'Talkshow Rumah Tangga "Wanita di persimpangan surga dan neraka"',
        star: "Ahmad Ubaidillah Almahbaroh",
      },
      {
        time: "11.00-11.30",
        duration: "30'",
        activity: "Promosi Tenant (Bazaar pesta voucher)",
        star: "Tenant pilihan",
      },
      {
        time: "13.00-14.30",
        duration: "90'",
        activity:
          'Talk Show Bisnis "Langkah emas kelola financial agar #SemuaJadiMudah dan Berkah"',
        star: "BSI",
      },
      {
        time: "16.00-17.30",
        duration: "90'",
        activity:
          'Talkshow Filosofi Kopi "#MemberiArtiLebih dari tehnik seduhan Kopi Tubruk paling jujur"',
        star: "Riyanto Larkahadi Sasongko, BKVRI",
      },
      {
        time: "18.00-19.00",
        duration: "60'",
        activity:
          "Kajian Parenting \"Membentuk generasi emas yang Qur'ani, mandiri dan bertaqwa\"",
        star: "Kamil Ramadhan",
      },
      {
        time: "19.30-21.00",
        duration: "90'",
        activity: "Closing dan pembagian doorprize",
        star: "Panitia Shafiyah Expo",
      },
    ],
  },
];

const heroIntroSlide = {
  day: "Program Acara",
  activity: "Program Acara Shafiyah Expo PureWay",
  star:
    "Dengan hormat, kami mengundang Bapak/Ibu untuk hadir dalam pembukaan Shafiyah Expo PureWay dan mengikuti rangkaian sesi pilihan program acara.",
  date: EVENT_DATE_RANGE,
  scheduleLabel: "Agenda",
  scheduleValue: "Opening Ceremony & Program Acara",
  detailLabel: "Rangkaian",
  detailValue: "3 Hari Acara",
};

const heroSlides = [
  heroIntroSlide,
  ...rundownDays.flatMap((day) =>
    day.sessions.map((session) => ({
      ...session,
      day: day.label,
      date: day.date,
      scheduleLabel: "Waktu Sesi",
      scheduleValue: session.time,
      detailLabel: "Durasi",
      detailValue: session.duration,
      tone: day.tone,
    })),
  ),
];

function handleRsvpClick(event) {
  if (GOOGLE_FORM_URL) {
    return;
  }

  event.preventDefault();
  const target = document.getElementById("konfirmasi");
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function InvitationPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    document.title = "Invitation Shafiyah Expo PureWay";

    const description =
      "Undangan opening ceremony dan rangkaian main stage Shafiyah Expo PureWay 2026.";
    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  function showPreviousSlide() {
    setActiveSlide((current) => (current === 0 ? heroSlides.length - 1 : current - 1));
  }

  function showNextSlide() {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  }

  return (
    <main className="invitation-page">
      <section className="inv-hero">
        <div className="inv-hero-overlay" />
        <div className="inv-container inv-hero-inner">
          <div className="inv-hero-slider" key={activeSlide} aria-live="polite">
            <div className="inv-hero-logo-row" aria-label="Logo pendukung acara">
              {eventLogos.map((logo) => (
                <img
                  className={`inv-hero-logo ${logo.className || ""}`.trim()}
                  src={logo.src}
                  alt={logo.name}
                  key={logo.name}
                  loading="eager"
                  decoding="async"
                />
              ))}
            </div>
            <div className="inv-eyebrow-row">
              <span className="inv-eyebrow">Undangan Resmi</span>
              <span className="inv-eyebrow">{currentSlide.day}</span>
            </div>
            <h1 className={currentSlide.activity.length > 64 ? "is-long-title" : undefined}>
              {currentSlide.activity}
            </h1>
            <p className="inv-hero-copy">
              {currentSlide.star}
            </p>
          </div>

          <div className="inv-meta-grid" aria-label="Informasi acara">
            <div>
              <span>Tanggal Pelaksanaan</span>
              <strong>{currentSlide.date}</strong>
            </div>
            <div>
              <span>{currentSlide.scheduleLabel}</span>
              <strong>{currentSlide.scheduleValue}</strong>
            </div>
          </div>

          <div className="inv-slider-controls" aria-label="Navigasi program acara">
            <button type="button" onClick={showPreviousSlide} aria-label="Acara sebelumnya">
              &#8249;
            </button>
            <div className="inv-slider-dots" aria-label="Pilih acara">
              {heroSlides.map((slide, index) => (
                <button
                  className={index === activeSlide ? "is-active" : ""}
                  key={`${slide.date}-${slide.time}-${slide.activity}`}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Lihat ${slide.activity}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                />
              ))}
            </div>
            <span className="inv-slider-count">
              {activeSlide + 1} / {heroSlides.length}
            </span>
            <button type="button" onClick={showNextSlide} aria-label="Acara berikutnya">
              &#8250;
            </button>
          </div>

          <div className="inv-actions">
            <a
              className="inv-button inv-button-primary"
              href={GOOGLE_FORM_URL || "#konfirmasi"}
              target={GOOGLE_FORM_URL ? "_blank" : undefined}
              rel={GOOGLE_FORM_URL ? "noopener" : undefined}
              onClick={handleRsvpClick}
            >
              Konfirmasi Kehadiran
            </a>
            <a className="inv-button inv-button-secondary" href="#rundown">
              Lihat Rundown
            </a>
            <a
              className="inv-button inv-button-secondary"
              href={EVENT_MAP_URL}
              target="_blank"
              rel="noopener"
            >
              Buka Maps
            </a>
          </div>
        </div>
      </section>

      <section className="inv-section inv-greeting" id="konfirmasi">
        <div className="inv-container inv-greeting-grid">
          <div>
            <p className="inv-section-kicker">Greeting</p>
            <h2 className="inv-salam-heading">
              <span>Assalamu'alaikum</span>
              <span>Warahmatullahi</span>
              <span>Wabarakatuh</span>
            </h2>
            <p>
              Kehadiran Bapak/Ibu menjadi bagian penting dari ikhtiar menghadirkan
              ruang muslim lifestyle yang inspiratif, tertib, dan membawa manfaat
              untuk keluarga, komunitas, dan pelaku usaha muslim.
            </p>
          </div>
          <div className="inv-rsvp-panel">
            <span>Konfirmasi Tamu Undangan</span>
            <h3>Mohon konfirmasi kehadiran sebelum acara.</h3>
            <p>
              Bapak/Ibu dapat mengisi data kehadiran melalui Google Form resmi
              Shafiyah Expo PureWay.
            </p>
            <a
              className="inv-button inv-button-primary"
              href={GOOGLE_FORM_URL || "#konfirmasi"}
              target={GOOGLE_FORM_URL ? "_blank" : undefined}
              rel={GOOGLE_FORM_URL ? "noopener" : undefined}
              onClick={handleRsvpClick}
            >
              Isi Google Form
            </a>
          </div>
        </div>
      </section>

      <section className="inv-section inv-speakers" aria-labelledby="speakers-heading">
        <div className="inv-container">
          <div className="inv-section-heading inv-speakers-heading">
            <p className="inv-section-kicker">Speakers</p>
            <h2 id="speakers-heading">Speakers Shafiyah Expo PureWay</h2>
          </div>

          <div className="inv-speaker-grid">
            {speakers.map((speaker) => (
              <article className="inv-speaker-card" key={speaker.name}>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  loading="lazy"
                  decoding="async"
                />
                <div className="inv-speaker-info">
                  <h3>{speaker.name}</h3>
                  <p>{speaker.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inv-section" id="rundown">
        <div className="inv-container">
          <div className="inv-section-heading">
            <p className="inv-section-kicker">Rundown</p>
            <h2>Rundown Event Main Stage Pure Way</h2>
          </div>

          <div className="inv-rundown-list">
            {rundownDays.map((day) => (
              <article className={`inv-day inv-day-${day.tone}`} key={day.id}>
                <div className="inv-day-head">
                  <div>
                    <span>{day.label}</span>
                    <h3>{day.date}</h3>
                  </div>
                  <a
                    className="inv-day-link"
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener"
                  >
                    Isi Form
                  </a>
                </div>

                <div className="inv-table-wrap">
                  <table className="inv-rundown-table">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Waktu</th>
                        <th>Durasi</th>
                        <th>Aktivitas</th>
                        <th>Star</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.sessions.map((session, index) => (
                        <tr key={`${day.id}-${session.time}`}>
                          <td data-label="No">{index + 1}</td>
                          <td data-label="Waktu">{session.time}</td>
                          <td data-label="Durasi">{session.duration}</td>
                          <td data-label="Aktivitas">
                            <strong>{session.activity}</strong>
                          </td>
                          <td data-label="Star">{session.star}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inv-final">
        <div className="inv-container">
          <h2 className="inv-final-heading">
            Sampai bertemu di Shafiyah Expo PureWay
          </h2>
          <p>
            Silakan simpan halaman ini dan lakukan konfirmasi kehadiran melalui
            Google Form resmi tamu undangan.
          </p>
          <a
            className="inv-button inv-button-primary"
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener"
          >
            Konfirmasi Kehadiran
          </a>
        </div>
      </section>
    </main>
  );
}
