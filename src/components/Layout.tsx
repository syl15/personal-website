
type LayoutProps = {
    children: React.ReactNode; 
    padding?: boolean;
};


export default function Layout({children, padding=true}: LayoutProps) {
    return (
        <div className={`min-h-screen flex flex-col px-10 lg:px-16 ${padding ? 'pt-16 md:pt-20 pb-10' : ''}`}>
          <main className="flex-1 flex items-start justify-center">
            <div className="w-full max-w-3xl space-y-6 text-left">
              {children}
            </div>
          </main>
        </div>
      );
}