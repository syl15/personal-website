import Link from 'next/link'

export default function Home() {

  return (
    <main className="min-h-screen flex items-center justify-center px-10 lg:px-16">

      <div className="w-full max-w-3xl space-y-6 text-left">

        <h1 className="text-4xl italic">Hi, I'm Stephanie!</h1>

        <p className="text-lg leading-relaxed">
          I'm a software engineer and a recent computer science graduate from 
          the University of Texas at Dallas. Previously, I worked on ads targeting at Reddit, 
          investment banking technology at JP Morgan Chase & Co, and auto quoting at State Farm.  
        </p>
        
        <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg italic" aria-label="Primary navigation">
          <Link title="View my professional experiences" className="link-underline" href={'/experience'}> experience </Link>
          <span>/</span>
          <Link title="View my personal projects" className="link-underline" href={'/projects'}> projects </Link>
          <span>/</span>
          <Link title="View my side quests and personal adventures" className="link-underline" href={'/side-quests'}> side quests </Link>
        </nav>
      </div>

    </main>
  );
}
