import { Link } from "@/i18n/routing"
import Image from "next/image"
import { outfit } from "@/app/utils/fonts";
import { useTranslations } from "next-intl";

const socialIcons = {
  X: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
};

const socialLinks = [
  { name: "X", href: "https://x.com/Welfareplus_", icon: socialIcons.X },
  { name: "Instagram", href: "https://www.instagram.com/welfareplus_?igsh=MTg2NWpiZ3lueW5kMg==", icon: socialIcons.Instagram },
] as const;

export default function Footer() {
  const t = useTranslations("Footer");
  const tGeneral = useTranslations("General");

  const companyLinks = [
    { label: t("companyLinks.home"), href: "/" },
    { label: t("companyLinks.about"), href: "/about-us" },
    { label: t("companyLinks.europe"), href: "/europe" },
    { label: t("companyLinks.africa"), href: "/sub-sahara-africa" },
    { label: t("companyLinks.northAmerica"), href: "/united-states" },
  ];
  const supportLinks = [
    { label: t("supportLinks.contact"), href: "/contact-us" },
  ];

  return (
    <footer className={`${outfit.className} w-full bg-[#373435] text-white font-sans`}>
      <div className="max-w-6xl mx-auto px-6 md:px-6 py-14 flex flex-col md:flex-row justify-between gap-10 md:gap-x-16 lg:gap-x-48">
        <div className="md:max-w-xs">
          <div className="mb-4">
            <Link href="/">
              <Image src="/logodark.png" width={101} height={44} alt="logo" className="dark:hidden" />
              <Image src="/logodark.png" width={101} height={44} alt="logo" className="hidden dark:block" />
            </Link>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-8 md:gap-5">
          <div className="w-full sm:text-right">
            <h4 className="text-base font-semibold tracking-widest uppercase text-gray-300 mb-5">
              {t("companyHeading")}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:text-right">
            <h4 className="text-base font-semibold tracking-widest uppercase text-gray-300 mb-5">
              {t("supportHeading")}
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <Link href="https://cal.com/welfare-plus/meeting" target="_blank" className="py-1 text-base text-gray-300 hover:text-orange-400 transition-colors duration-200">
                {tGeneral("getInTouch")}
              </Link>
            </ul>
          </div>
          <div className="md:text-right">
            <h4 className="text-base font-semibold tracking-widest uppercase text-gray-300 mb-5">
              {t("socialHeading")}
            </h4>
            <div className="flex items-center gap-3 sm:justify-end">
              {socialLinks.map(({ name, href, icon }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-8 h-8 rounded-full bg-[#4a4a4a] hover:bg-orange-500 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 w-full" />
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-gray-500 text-xs">
          {t("copyright")}
        </p>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Link href="#" className="hover:text-orange-400 transition-colors duration-200">{t("privacy")}: </Link>
          <Link href="#" className="hover:text-orange-400 transition-colors duration-200">{t("terms")}</Link>
        </div>
      </div>
    </footer>
  );
}
