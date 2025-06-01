import {projects} from '@/data/projects';
import Layout from '@/components/Layout';
import BackButton from '@/components/BackButton'

export default function Projects() {
    return (
        <Layout>
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-3 lg:pl-10 relative">
                <div className="lg:absolute lg:-left-6">
                    <BackButton />
                </div>
                <h1 className="text-4xl italic font-playfair">Projects</h1>
            </div>

            {projects.map((item, index) => (
                <section key={index} className="space-y-2">
                    <div className="text-lg font-playfair">
                        <a href={item.link} className="link-underline" target="_blank">{item.title}</a>
                    </div>
                    <div className="text-sm text-subtitle"> {item.duration} | {item.type} </div>
                    <p className="leading-relaxed">{item.description}</p>
                 
                </section>
            ))}

        </Layout>
    );
}