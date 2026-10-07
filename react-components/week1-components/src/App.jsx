import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <>
      <Header />

      <main>
        <section>
          <h2>My Projects</h2>

          <div className="cards">
            <Card
              title="PhishGuard"
              description="AI-powered phishing detection system."
            />

            <Card
              title="ATM Simulator"
              description="Banking application built using Java Swing and MySQL."
            />
          </div>
        </section>

        <section>
          <h2>Button Component</h2>

          <Button
            text="Click Me"
            onClick={handleClick}
          />
        </section>

        <section>
          <h2>Form Component</h2>

          <Form />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;