export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full grow px-6">
      <div className="flex flex-col md:items-start items-center justify-center cursor-default">
          <p className="font-montez text-[45px]">Hello There!</p>
          <div className="md:px-10">
            <h2 className="md:text-[60px] text-[32px] font-bold text-center">I&#39;m Archie Habaradas,</h2>
            <p className="md:text-[24px] max-w-[700px] text-center">a passionate and dedicated web developer that can make 
            your ideal website come to life.</p>
            </div>
            <a href="https://docs.google.com/document/d/1-KYkhB8_qQdamftf3Y5BqHt3NcE_uxj3gEVz6_gMTto/edit?usp=sharing" target="_blank"
            className="inline-block bg-white text-black font-bold px-5 py-2.5 rounded-3xl mt-10 mx-auto group">
              <span className="flex flex-col overflow-hidden h-[24px]">
                <span className="transition ease-in-out delay-100 group-hover:-translate-y-full">Curriculum Vitae</span>
                <span className="transition ease-in-out delay-100 group-hover:-translate-y-full text-primary">Curriculum Vitae</span>
              </span>
            </a>
        </div>
    </main>
  );
}
