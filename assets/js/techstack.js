AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
    {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: `
      <li>Professional Python for data analysis, machine learning, and automation.</li>
      <li>Common libraries: pandas, numpy, scikit-learn, matplotlib, seaborn.</li>
      <li>Used for building dashboards, ML models, and ETL pipelines.</li>
    `,
  },
  {
    langImage: "assets/images/techstack-page/Azure SQL Database.png",
    langName: "SQL",
    langDesc: `
      <li>Querying and managing relational databases professionally.</li>
      <li>Optimizing performance with indexes, joins, and views.</li>
      <li>Commonly used with Python (SQLAlchemy, pyodbc) for data pipelines.</li>
    `,
  },
  {
    langImage: "assets/images/techstack-page/R.png",
    langName: "R",
    langDesc: `
      <li>Professional R for statistical modeling and data visualization.</li>
      <li>Common packages: ggplot2, dplyr, tidyr, caret.</li>
      <li>Used for predictive modeling, reporting, and academic research.</li>
    `,
  },
  {
    langImage: "assets/images/techstack-page/Bash.png",
    langName: "Bash",
    langDesc: `
      <li>Professional Bash scripting for automation and system administration.</li>
      <li>Automates data pipelines, cron jobs, and server tasks.</li>
      <li>Integrates with Python and SQL scripts in production workflows.</li>
    `,
  },
  {
    langImage: "assets/images/techstack-page/snowflake.svg",
    langName: "Snowflake",
    langDesc: `
      <li>Cloud data warehousing for professional data engineering.</li>
      <li>Works with Python (snowflake-connector) and SQL for ETL tasks.</li>
      <li>Used for storing and analyzing large-scale datasets efficiently.</li>
    `,
  },
  {
    langImage: "assets/images/techstack-page/databricks.png",
    langName: "Databricks",
    langDesc: `
      <li>Professional data engineering and machine learning platform.</li>
      <li>Python + PySpark for distributed data processing.</li>
      <li>Used for building scalable ML models and ETL pipelines.</li>
    `,
  },
  {
    langImage: "assets/images/techstack-page/AWS.png",
    langName: "AWS",
    langDesc: `
      <li>Cloud computing for professional deployments and data storage.</li>
      <li>Services used: S3, EC2, Lambda, RDS, SageMaker.</li>
      <li>Integrates with Python for cloud-native ML and ETL workflows.</li>
    `,
  },
  {
    langImage: "assets/images/techstack-page/Azure.png",
    langName: "Azure",
    langDesc: `
      <li>Professional cloud platform for applications and data services.</li>
      <li>Services used: Azure SQL, Blob Storage, Databricks, ML Studio.</li>
      <li>Used for deploying Python data pipelines and ML models.</li>
    `,
  },
  {
    langImage:"assets/images/techstack-page/Google Cloud.png",
    langName:"Google Cloud",
    langDesc:`
      <li>Professional cloud platform for big data and ML projects.</li>
      <li>Services used: BigQuery, Cloud Storage, AI Platform, Dataproc.</li>
      <li>Python libraries: google-cloud-storage, pandas, TensorFlow for ML workflows.</li>
    `,
  },
  {
    langImage:"assets/images/techstack-page/dbt.png",
    langName:"DBT",
    langDesc:`
      <li>Data Build Tool (DBT) for professional data transformation.</li>
      <li>Builds modular SQL models, version-controlled in Git.</li>
      <li>Used for transforming raw data into analytics-ready datasets.</li>
    `,
  },
  {
    langImage:"assets/images/techstack-page/Apache Airflow.png",
    langName:"Airflow",
    langDesc:`
    <li>Apache Airflow for professional workflow orchestration.</li>
    <li>Defines DAGs (Directed Acyclic Graphs) for ETL pipelines.</li>
    <li>Integrates with Python, SQL, Spark, and cloud services for automation.</li>
  `,
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: `
      <li>Version control system for professional software development.</li>
      <li>Branching, merging, pull requests, and collaboration.</li>
      <li>Used with GitHub/GitLab/Bitbucket for project management.</li>
    `,
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
