export default function Backdrop() {
  return (
    <>
      {/* Fixed editorial canvas — a stable deep surface behind everything. */}
      <div className="backdrop" aria-hidden />
      {/* Hero atmosphere — the sports photo lives only at the top of the page and
          scrolls away with the hero, so the content below sits on the calm canvas. */}
      <div className="hero-atmos" aria-hidden>
        <div className="hero-atmos-img hero-atmos-light" />
        <div className="hero-atmos-img hero-atmos-dark" />
        <div className="hero-atmos-scrim" />
      </div>
    </>
  );
}
