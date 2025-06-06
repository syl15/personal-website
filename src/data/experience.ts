export type ExperienceItem = {
    company: string; 
    title: string;
    duration: string;
    description: string; 
    location?: string; 
    logo?: string;
    tags?: string[]; 
};

export const experience: ExperienceItem[] = [
    {
        company: "Reddit", 
        title: "Product Manager Intern", 
        duration: "May 2024 - Aug 2024", 
        location: "San Francisco, CA", 
        description: "Led experimentation efforts on Reddit Ads to improve keyword targeting accuracy, driving adoption across thousands of advertisers. Partnered with data science and ML teams to design experiments and ship impactful product improvements.", 
        tags: ["Product Strategy", "A/B Testing", "Google BigQuery", "SQL"]
    }, 
    {
        company: "Cornell Tech", 
        title: "AI/ML Student Fellow", 
        duration: "Sep 2023 - Dec 2023", 
        location: "Remote", 
        description:"Designed and trained a supervised NLP model on chatbot transcripts to improve containment rate for 48,000 insurance agents. Led exploratory data analysis, feature engineering, and model tuning to increase accuracy.",
        tags: ["Machine Learning", "Natural Language Processing", "Pandas", "numpy", "Matplotlib", "Keras", "scikit-learn"]
    }, 
    {
        company: "JP Morgan Chase & Co.", 
        title: "Software Engineer Intern", 
        duration: "Jun 2023 - Aug 2023", 
        location: "Plano, TX", 
        description:"Backend engineer on the Securities & Services Platform team. Built infrastructure for a high-volume transaction observability system. Designed APIs, optimized SQL, and prioritized reliability through robust test coverage.",
        tags: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "JUnit", "Mockito"]
    }, 
    {
        company: "State Farm", 
        title: "Software Engineer Intern", 
        duration: "May 2022 - Aug 2022", 
        location: "Dallas, TX",
        description: "Software engineer on the Auto Quoting Permissions team. Built an internal permissions tool with React and DynamoDB to streamline quoting workflows. Automated deployments and web delivery to 1000 insurance agents using Terraform on AWS.",
        tags: ["React", "JavaScript", "AWS", "DynamoDB", "Route53", "CloudFront", "Terraform"]
    }

]