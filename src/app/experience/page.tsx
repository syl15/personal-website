import {experience} from '../data/experience';
import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';

export default function Experience() {
    return (
        <Layout>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-3 lg:pl-10 relative">
                <div className="lg:absolute lg:-left-6">
                    <BackButton />
                </div>
                <h1 className="text-4xl italic font-playfair">Work experience</h1>
            </div>
                        
            {experience.map((item, index) => 
                <section key={index} className="space-y-2">
                    <div className="text-lg font-playfair">{item.title} @ {item.company} </div>
                    <div className="text-sm text-subtitle">{item.duration} </div>
                    <p className="leading-relaxed">{item.description}</p>

                </section>
            )}

        </Layout>
    );

}