export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden>
      <div className="backdrop-img backdrop-light" />
      <div className="backdrop-img backdrop-dark" />
      <div className="backdrop-scrim" />
    </div>
  );
}
