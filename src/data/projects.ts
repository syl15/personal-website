export type ProjectItem = {
    title: string; 
    type: string;
    duration: string; 
    description: string; 
    link: string; 
    tags?: string[]; 
}; 


export const projects: ProjectItem[] = [
    {
        title: "Disaster Monitoring Dashboard", 
        type: "Engineering", 
        duration: "Jan 2025 - May 2025", 
        description: "Built a backend pipeline with Flask to classify and cluster disaster-related Bluesky posts. Generated metadata with LLMs, exposed model endpoints through FastAPI, and automated daily updates with GitHub Actions.", 
        link: "https://github.com/syl15/CSProject", 
        tags: ["Python", "Flask", "FastAPI", "LLMs"]
    }, 
    {
        title: "Center for New Data", 
        type: "Product", 
        duration: "Oct 2023 - Mar 2024", 
        description: "Led redesign and rebrand efforts for the Center for New Data, a nonprofit using big data to support democracy. Focused on improving engagement and content discoverability through clearer information architecture, streamlined navigation, and user-centered design.",
        link: "https://www.newdata.org/",
        tags: []
    },
    {
        title: "Nebula Planner", 
        type: "Product",
        duration: "Nov 2021 - Mar 2023", 
        description: "Led product strategy and execution for Nebula Planner, an open-source degree planning tool. Shipped MVP in 6 months and grew adoption through user testing and iteration.", 
        link: "https://planner.utdnebula.com/", 
        tags: ["Product Management"]
    },
    {
        title: "Student Organization Event Planner", 
        type: "Engineering",
        duration: "Nov 2021 - Mar 2022", 
        description: "Created an event planner with Streamlit and the UTD Coursebook API to help student orgs avoid scheduling conflicts by visualizing class density. Designed to improve event attendance and engagement. Won 2nd at HackUTD 2021.", 
        link: "https://devpost.com/software/comet-clique", 
        tags: ["Python", "Streamlit"]
    }

]