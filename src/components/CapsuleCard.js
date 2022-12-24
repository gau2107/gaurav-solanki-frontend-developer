export default function CapsuleCard({ data }) {
  return (
    <div className="card">
      {`${data.capsule_serial} ${data.capsule_id}`}
      <div>{data.details}</div>
      <div>{data.status}{data.type}{data.original_launch}</div>
    </div>
  );
}
