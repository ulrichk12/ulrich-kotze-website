import React from 'react';
import { ProjectPage } from '../ProjectPage';

export const HealthcareDataStrategy: React.FC = () => {
    return (
        <ProjectPage
            title="Healthcare Data Strategy"
            year="2024-2025"
            tags={['Strategy', 'Healthcare', 'Cloud Platform', 'Leadership']}
            overview="Led a multidisciplinary team of engineers, doctors, and data scientists to implement strategic structures and a cloud data platform for a clinic group serving 2 million patients."
            challenge={{
                title: 'The Challenge',
                content: [
                    'A rapidly growing clinic group serving 2 million patients across multiple locations faced critical challenges in data management and strategic decision-making. Their legacy systems were fragmented, with patient data siloed across different departments and locations, making it nearly impossible to gain holistic insights or deliver coordinated care.',
                    'The organization needed to transform from reactive, manual processes to a data-driven operation that could scale efficiently while maintaining the highest standards of patient care and data security. This required not just technical solutions, but fundamental organizational change.',
                    'The complexity was amplified by the need to align diverse stakeholders—from clinicians focused on patient outcomes to engineers concerned with system reliability, and executives demanding measurable business value. Each group had different priorities, languages, and success metrics.',
                ],
            }}
            solution={{
                title: 'The Solution',
                content: [
                    'I assembled and led a multidisciplinary team bringing together software engineers, data scientists, and medical professionals. This diverse composition was critical—engineers understood the technical architecture, data scientists could model clinical outcomes, and doctors ensured solutions aligned with real-world clinical workflows.',
                    'We designed and implemented a cloud-native data platform built on Google Cloud Platform, leveraging BigQuery for analytics, Cloud Storage for scalable data lakes, and Vertex AI for machine learning workloads. The architecture prioritized security and compliance with healthcare regulations while enabling real-time analytics.',
                    'Beyond technology, I established strategic structures including data governance frameworks, cross-functional collaboration processes, and a roadmap for incremental value delivery. We implemented agile methodologies adapted for healthcare, ensuring clinical staff remained engaged throughout the transformation.',
                    'The platform integrated data from electronic health records, appointment systems, billing, and patient feedback, creating a unified view that enabled everything from population health management to operational optimization.',
                ],
            }}
            impact={{
                title: 'Impact & Results',
                content: [
                    'The cloud data platform now serves as the central nervous system for a healthcare organization managing 2 million patient records, enabling data-driven decisions across clinical, operational, and strategic domains.',
                    'Clinical teams gained real-time visibility into patient populations, enabling proactive interventions and coordinated care. Operational efficiency improved through automated reporting and predictive analytics for resource allocation.',
                    'The strategic structures we implemented—including data governance committees and cross-functional working groups—created lasting organizational capabilities beyond the technology itself. The clinic group transformed from data-poor to data-rich, with analytics embedded in daily operations.',
                    'Perhaps most importantly, we established a foundation for continuous innovation. The platform supports ongoing machine learning initiatives, from predicting patient no-shows to identifying high-risk populations for preventive care.',
                ],
            }}
            technologies={[
                'Google Cloud Platform',
                'BigQuery',
                'Cloud Storage',
                'Vertex AI',
                'Python',
                'SQL',
                'Terraform',
                'Docker',
                'Data Governance Frameworks',
            ]}
        />
    );
};
