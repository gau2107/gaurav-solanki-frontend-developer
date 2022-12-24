export default function Header() {
  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0 flex flex-row flex-wrap">
        <div className="">
          <span className="md:text-3xl sm:text-2xl font-bold whitespace-pre">
            {`Space X`}
          </span>
        </div>
      </div>

      <div className="sm:mb-0 flex gap-4 flex-wrap">{}</div>
    </nav>
  );
}
