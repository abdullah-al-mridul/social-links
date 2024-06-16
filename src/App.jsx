const App = () => {
  return (
    <>
      <main className="bg-[#141414] h-[100vh] flex items-center justify-center">
        <div className="text-[white] shadow-xl rounded-md bg-[#1F1F1F] flex flex-col items-center p-[30px]">
          <img
            src="https://i.postimg.cc/5tCw6bcw/433013121-720232560270845-1654907188763205326-n.jpg"
            alt="my-photo"
            className="h-[80px] w-[80px] rounded-full"
          />
          <h2 className="text-[#FBFBFB] font-[900] text-[22px]">
            Abdullah Al Mridul
          </h2>
          <p className="text-[#B8DC3D] font-[700] mt-[2px]">
            Natore,Bangladesh
          </p>
          <p className="text-[#C5C5C5] text-[13px] mt-[10px] mb-[20px]">
            {"'MERN Stack Web Developer - Learning [2024]'"}
          </p>

          <a
            className="w-full mb-[10px]"
            href="https://github.com/abdullah-al-mridul"
            target="_blank"
          >
            <button className="hover:bg-[#333333] transition-all w-[100%] p-2 rounded-lg text-white border border-[#333333] shadow-mlg">
              GitHub
            </button>
          </a>
          <a
            href="https://facebook.com/abdullah.al.mridul.dev"
            target="_blank"
            className="w-full mb-[10px]"
          >
            <button className="hover:bg-[#333333] transition-all w-[100%] p-2 rounded-lg text-white border border-[#333333] shadow-mlg">
              Facebook
            </button>
          </a>
          <a href="#" className="w-full mb-[10px]">
            <button className="hover:bg-[#333333] transition-all w-[100%] p-2 rounded-lg text-white border border-[#333333] shadow-mlg">
              Linkedin
            </button>
          </a>
          <a href="#" className="w-full mb-[10px]">
            <button className="hover:bg-[#333333] transition-all w-[100%] p-2 rounded-lg text-white border border-[#333333] shadow-mlg">
              Twitter
            </button>
          </a>
          <a href="#" className="w-full mb-[10px]">
            <button className="hover:bg-[#333333] transition-all w-[100%] p-2 rounded-lg text-white border border-[#333333] shadow-mlg">
              Instagram
            </button>
          </a>
        </div>
      </main>
    </>
  );
};

export default App;
