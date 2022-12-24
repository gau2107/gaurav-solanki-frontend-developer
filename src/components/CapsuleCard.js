import ViewIcon from "./ViewIcon";

export default function CapsuleCard({ data, handleSelect }) {
  const launchDate = new Date(data.original_launch).toDateString();

  return (
    <div>
      <div className="m-w-300 h-64 flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4 m-4">
        <div>
          <h4 className="text-gray-800 text-lg font-bold mb-3 uppercase">{`${data.capsule_serial} ${data.capsule_id}`}</h4>
          <hr></hr>
          <div>
            <span className="text-black font-bold">Details</span>:{" "}
            {data.details}
          </div>
          <div>
            <span className="text-black font-bold">Status</span>: {data.status}
          </div>
          <div>
            <span className="text-black font-bold">Type</span>: {data.type}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-gray-800">
            <div>
              <span className="text-black font-bold text-sm">Launch Date</span>:{" "}
              {launchDate}
            </div>
            <span className="cursor-pointer" onClick={() => handleSelect(data)}>
              <ViewIcon />
            </span>
            {/* <img src={viewSvg} onClick={() => handleSelect(data)} alt="view" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
