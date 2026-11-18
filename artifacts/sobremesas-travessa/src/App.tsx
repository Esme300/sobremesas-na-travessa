function App() {
  return (
    <iframe
      title="Sobremesas na Travessa"
      src={`${import.meta.env.BASE_URL}mayaracamposconfeitaria.com.br/sobremesas-na-travessa/index.html`}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 0,
        display: 'block',
      }}
    />
  );
}

export default App;
