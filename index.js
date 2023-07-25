const container = document.querySelector("#root");

const App = () => {
  const randomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow'];
    return colors[Math.floor(Math.random() * 4)]
  };

  return (
    <>
      <div id="circle" className={randomColor()}></div>
      <div id="circle" className={randomColor()}></div>
      <div id="circle" className={randomColor()}></div>
      <div className={randomColor()}></div>
      <div className={randomColor()}></div>
      <div className={randomColor()}></div>
    </>
  );
};

const root = ReactDOM.createRoot(container);
root.render(<App />);
