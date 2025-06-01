import Layout from '@/components/Layout';
import BackButton from '@/components/BackButton'

export default function SideQuests() {
    return (
        <Layout>
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-3 lg:pl-10 relative">
                <div className="lg:absolute lg:-left-6">
                    <BackButton />
                </div>
                <h1 className="text-4xl italic font-playfair">Side Quests</h1>
            </div>

            <section className="space-y-2">
                <div className="text-lg font-playfair"> Communities & Affiliations </div>
                <ul className="list-disc pl-5">
                    <li>CodePath</li>
                    <li>Rewriting the Code</li>
                    <li>Google Women Techmakers</li>
                </ul>
            </section>

            <section className="space-y-2">
                <div className="text-lg font-playfair"> Hobbies </div>
                <ul className="list-disc pl-5">
                    <li>Getting mentored and mentoring others</li>
                    <li>Overengineering my Notion setup</li>
                    <li>Hoarding scraps for junk journaling</li>
                    <li>Tennis, running, and hiking</li>
                </ul>
            </section>

        </Layout>
    );
}