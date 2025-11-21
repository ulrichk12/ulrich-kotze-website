import React from 'react';
import { ProjectPage } from '../ProjectPage';

export const CreditScoringSupplyChain: React.FC = () => {
    return (
        <ProjectPage
            title="Credit Scoring & Supply Chain Optimization"
            year="2021-2024"
            tags={['Credit Risk', 'Supply Chain', 'Data Engineering', 'Banking']}
            overview="Built several credit scoring models and a lead-time model for supply chain optimization. Established a cloud-based data engineering platform for a leading retail bank."
            challenge={{
                title: 'The Challenge',
                content: [
                    'A leading retail bank faced dual challenges: improving credit risk assessment while optimizing their supply chain operations. Their existing credit scoring relied on traditional statistical methods that failed to capture the full complexity of modern consumer behavior and risk patterns.',
                    'On the supply chain side, unpredictable lead times created operational inefficiencies, excess inventory, and service disruptions. The bank needed to predict delivery times for physical products (cards, documents, promotional materials) with enough accuracy to optimize logistics and set realistic customer expectations.',
                    'The underlying data infrastructure was fragmented and inadequate. Data lived in legacy systems, batch processes ran overnight, and analysts spent more time wrangling data than generating insights. Any advanced analytics initiative required first solving fundamental data engineering challenges.',
                    'Regulatory requirements added complexity—credit models needed to be not just accurate but also fair, transparent, and compliant with financial regulations. Every decision had to be explainable and auditable.',
                ],
            }}
            solution={{
                title: 'The Solution',
                content: [
                    'I developed multiple credit scoring models using machine learning techniques including logistic regression, random forests, and gradient boosting. Each model targeted specific credit products and customer segments, balancing predictive power with interpretability and regulatory compliance.',
                    'The models incorporated traditional credit bureau data alongside alternative data sources—transaction patterns, digital behavior, and contextual information. Feature engineering was critical, transforming raw data into meaningful predictors while avoiding data leakage and ensuring temporal validity.',
                    'For supply chain optimization, I built a lead-time prediction model that analyzed historical delivery data, supplier performance, geographic factors, and seasonal patterns. The model provided probabilistic forecasts, enabling the bank to set realistic expectations and optimize inventory levels.',
                    'Recognizing that sustainable analytics required solid infrastructure, I designed and implemented a cloud-based data engineering platform on Google Cloud Platform. The platform centralized data from disparate sources, implemented automated ETL pipelines, and provided self-service analytics capabilities to business users.',
                    'The platform architecture emphasized scalability, reliability, and governance. We used BigQuery for analytics, Cloud Composer for orchestration, and implemented comprehensive data quality monitoring and lineage tracking.',
                ],
            }}
            impact={{
                title: 'Impact & Results',
                content: [
                    'The credit scoring models improved risk prediction accuracy while maintaining regulatory compliance and fairness. Better risk assessment enabled the bank to approve more creditworthy customers while reducing defaults, directly impacting profitability.',
                    'The lead-time model reduced supply chain costs through better inventory management and improved customer satisfaction by setting accurate delivery expectations. Logistics teams could proactively address potential delays rather than reacting to problems.',
                    'The cloud data platform transformed the bank\'s analytics capabilities. What previously took weeks of manual data preparation now happened automatically overnight. Analysts shifted from data wrangling to value-added analysis, and business users gained self-service access to trusted data.',
                    'Beyond immediate business impact, the platform established a foundation for the bank\'s data strategy. It enabled rapid development of new analytics use cases, from fraud detection to customer segmentation, creating a competitive advantage through data-driven decision-making.',
                ],
            }}
            technologies={[
                'Python',
                'scikit-learn',
                'XGBoost',
                'Google Cloud Platform',
                'BigQuery',
                'Cloud Composer',
                'Apache Airflow',
                'SQL',
                'Pandas',
                'Docker',
                'Terraform',
                'Git',
            ]}
        />
    );
};
