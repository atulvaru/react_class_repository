// import "./App.css";
import Netflix from "./components/Netflix.jsx"
const App = () => {
  return (
  <section className="max-w-[1200px] mx-auto px-5 py-10">
      <h1 className="text-center text-4xl md:text-4xl sm:text-3xl mb-10 text-slate-50">
        List of Netflix Shows
      </h1>
      <Netflix />
    </section>
  );
};



export default App;
