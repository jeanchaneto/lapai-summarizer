import { logo } from "../assets";

const Hero = () => {
  return (
    <header className=" w-full flex justify-center items-center flex-col">
      <nav className=" w-full pt-3 mb-10 flex justify-between items-center mb-10">
        <img
          src={logo}
          alt="LAPAI summarizer logo"
          className="w-28 object-contain "
        />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/jeanchaneto/lapai-summarizer")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text" >
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient" >LAP AI</span>
      </h1>
      <h2 className="desc">
        Tranform articles in clear and concise summaries using artifial intelligence
      </h2>
    </header>
  );
};

export default Hero;
