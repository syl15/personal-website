import {experience} from '../data/experience';


export default function Experience() {
    return (
        <div className="min-h-screen flex flex-col px-10 lg:px-16 pt-12 md:pt-20 pb-10">
            <main className="flex-1 flex items-start justify-center">
                <div className="w-full max-w-3xl space-y-6 text-left">

                    <h1 className="text-4xl italic"> Work experience </h1>
                    
                    {experience.map((item, index) => 
                        <section key={index} className="space-y-2">
                            <div className="text-lg">{item.title} @ {item.company} </div>
                            <div className="text-sm">{item.duration} · {item.location} </div>
                            <ul className="list-dis list-inside space-y-1">
                                {item.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                            {item.tags && (
                                <div className="flex flex-wrap gap-2 text-sm">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className=""> {tag} </span>
                                    ))}
                                </div>
                            )}

                        </section>
                    )}

                </div>
            </main>
        </div>
    );

}