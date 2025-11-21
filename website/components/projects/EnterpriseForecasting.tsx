import React from 'react';
import { ProjectPage } from '../ProjectPage';

export const EnterpriseForecasting: React.FC = () => {
    return (
        <ProjectPage
            title="Inventory Optimization System"
            year="2021-2024"
            tags={['ML', 'Retail', 'Supply Chain', 'Python', 'GCP']}
            overview="Built end-to-end ML suite (demand forecasting, lead-time models, multi-echelon replenishment) to optimize inventory across a complex supply chain for a major African retailer."
            challenge={{
                title: 'The Challenge',
                content: [
                    'The retailer needed to optimize inventory across a complex supply chain to reduce stockouts and improve planning accuracy.',
                    'The goal was to build a robust system capable of handling demand forecasting, lead-time modeling, and multi-echelon replenishment at scale.',
                ],
            }}
            solution={{
                title: 'The Solution',
                content: [
                    'Machine Learning Development: Built end-to-end ML suite (demand forecasting, lead-time models, multi-echelon replenishment) to optimize inventory across a complex supply chain.',
                    'MLOps & AI Automation: Implemented real-time monitoring and automated weekly pipelines using Vertex AI and Cloud Functions, enabling continuous model retraining and deployment at scale.',
                    'Technical Collaboration: Worked in a cross-functional team of 6 (data engineering, demand planning and software architect) to design, validate, and operationalize solutions now commercialised as a core company product.',
                ],
            }}
            impact={{
                title: 'Impact & Results',
                content: [
                    'Business Impact: Delivered 17% revenue uplift through reduced stockouts and improved planning accuracy.',
                    'Commercial Success: The solutions designed and operationalized are now commercialised as a core company product.',
                ],
            }}
            technologies={[
                'Python',
                'GCP BigQuery',
                'GCP Cloud Storage',
                'GCP Cloud SQL',
                'Airflow',
                'Vertex AI',
            ]}
        />
    );
};
