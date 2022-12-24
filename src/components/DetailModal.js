export default function DetailModal({ data, toggle }) {
  const launchDate = new Date(data.original_launch).toDateString();

  return (
    <div
      tabindex="-1"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      id="modal"
    >
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-8 px-8 md:px-16 bg-white  shadow-md rounded border border-gray-400">
          <h1 className="text-center  text-black font-lg font-bold tracking-normal leading-tight mb-4">
            Capsule Details
          </h1>
          <div className="mb-5 text-sm text-black font-normal">
            Capsule Id: {data.capsule_id}
          </div>
          <div className="mb-5 text-sm text-black font-normal">
            Capsule Serial: {data.capsule_serial}
          </div>
          <div className="mb-5 text-sm text-black font-normal">
            Details: {data.details}
          </div>
          <div className="mb-5 text-sm text-black font-normal">
            Landings: {data.landings}
          </div>
          <div className="mb-5 text-sm text-black font-normal">
            Original Launch: {data.launchDate}
          </div>
          <div className="mb-5 text-sm text-black font-normal">
            Reuse count: {data.reuse_count}
          </div>
          <div className="mb-5 text-sm text-black font-normal">
            Reuse count: {data.reuse_count}
          </div>
          <div className="mb-5 text-sm text-black font-normal">
            Status: {data.status}
          </div>
          <div className="mb-5 text-sm text-black font-normal">
            Type: {data.type}
          </div>

          <div
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-black transition duration-150 ease-in-out"
            onClick={() => toggle()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Close"
              className="icon icon-tabler icon-tabler-x"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
