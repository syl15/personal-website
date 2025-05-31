import {experience} from '../data/experience';
import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';

export default function Experience() {
    return (
        <Layout>
            <BackButton/>
            <h1 className="text-4xl italic font-playfair"> Work experience </h1>
            
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