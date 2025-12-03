import linkedinUrl from "../../assets/linkedin.png";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center border border-neutral-200 bg-white px-4 py-8 md:min-h-50 md:px-0 md:py-0">
      <div className="flex w-full max-w-6xl items-center justify-center gap-4 px-0 md:gap-2 md:px-8">
        <a
          className="aspect-square h-10 sm:h-12"
          href="https://www.linkedin.com/in/lara-merican/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinUrl}
            alt="LinkedIn"
            className="aspect-square h-full w-full rounded-xl object-cover"
          />
        </a>

        <a className="aspect-square h-10 sm:h-12" href="mailto:mericanlara@gmail.com">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/material-rounded/50/mail.png"
            alt="mail"
            className="h-full w-full"
          />
        </a>

        <a
          className="aspect-square h-10 sm:h-12"
          href="http://github.com/larasm192/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-glyphs/50/github.png"
            alt="github"
            className="h-full w-full"
          />
        </a>
      </div>

      <p className="mt-4 text-center text-xs text-gray-500 md:text-sm">
        Designed and coded by Lara Merican (2025)
      </p>
    </footer>
  );
}
