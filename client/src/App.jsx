import { buyIntents, sellIntents } from "./data";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>✨ Aura Intent Market ✨</h1>

      {/* Buy Intents Section */}
      <section>
        <h2>💸 Buy Intents (Focus Orders)</h2>
        {buyIntents.map((intent) => (
          <div
            key={intent.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "8px",
            }}
          >
            <p><strong>Task:</strong> {intent.task}</p>
            <p><strong>Duration:</strong> {intent.duration}</p>
            <p><strong>Bid:</strong> {intent.bid}</p>
            <p><strong>Qualifications:</strong> {intent.qualifications}</p>
            <button
              style={{
                marginTop: "0.5rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
              }}
            >
              Buy
            </button>
          </div>
        ))}
      </section>

      {/* Sell Intents Section */}
      <section style={{ marginTop: "2rem" }}>
        <h2>🧑‍💻 Sell Intents (Focus Offers)</h2>
        {sellIntents.map((offer) => (
          <div
            key={offer.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "8px",
            }}
          >
            <p><strong>Skill:</strong> {offer.skill}</p>
            <p><strong>Availability:</strong> {offer.availability}</p>
            <p><strong>Ask:</strong> {offer.ask}</p>
            <button
              style={{
                marginTop: "0.5rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
              }}
            >
              Sell
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
