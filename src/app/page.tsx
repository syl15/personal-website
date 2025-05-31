import Link from 'next/link'

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col px-10 lg:px-16">  
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-3xl space-y-6 text-left">

          <h1 className="text-4xl italic font-playfair">Hi, I'm Stephanie!</h1>

          <p className="text-lg leading-relaxed">
            I'm a software engineer and a recent computer science graduate from 
            the University of Texas at Dallas. Previously, I worked on ads targeting at Reddit, 
            investment banking technology at JP Morgan Chase & Co, and auto quoting at State Farm.  
          </p>
          
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-playfair" aria-label="Primary navigation">
            <Link title="View my professional experiences" className="link-underline" href={'/experience'}> Experience </Link>
            <span>/</span>
            <Link title="View my personal projects" className="link-underline" href={'/projects'}> Projects </Link>
            <span>/</span>
            <Link title="View my side quests and personal adventures" className="link-underline" href={'/side-quests'}> Side quests </Link>
          </nav>

        </div>
      </main>

      <footer className="w-full py-10 text-subtitle font-playfair" aria-label="Contact information">
        <div className="flex flex-wrap items-center sm:justify-center justify-start gap-x-3 gap-y-2 text-sm">
          <a href="https://www.linkedin.com/in/syangli" target="_blank" className="link-underline">LinkedIn</a>
          <span>/</span>
          <a href="https://github.com/syl15" target="_blank" className="link-underline">GitHub</a>
          <span>/</span>
          <a href="mailto:listeph15@gmail.com" target="_blank" className="link-underline">Email</a>
        </div>
      </footer>
    </div>
  );
}
