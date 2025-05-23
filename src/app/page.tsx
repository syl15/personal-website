import Link from 'next/link'

export default function Home() {

  // TODO: Export this style to be reusable across pages 
  const linkClass = "relative after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

  return (
    <main className="min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-16">

      <div className="w-full max-w-3xl space-y-6 text-left">

        <h1 className="text-4xl italic">Hi, I'm Stephanie!</h1>

        <p className="text-lg sm:text-lg leading-relaxed">
          I'm a software engineer and a recent computer science graduate from 
          the University of Texas at Dallas. Previously, I worked on ads targeting at Reddit, 
          investment banking technology at JP Morgan Chase & Co, and auto quoting at State Farm.  
        </p>
        
        {/* TODO: Make sure links don't shrink with smaller width screens */}
        <div className="flex flex-wrap items-center gap-x-3 text-base sm:text-lg italic">
          <Link className={linkClass} href={'/experience'}> experiences </Link>
          <span>/</span>
          <Link className={linkClass} href={'/projects'}> projects </Link>
          <span>/</span>
          <Link className={linkClass} href={'/side-quests'}> side quests </Link>
        </div>
      </div>

    </main>
  );
}
