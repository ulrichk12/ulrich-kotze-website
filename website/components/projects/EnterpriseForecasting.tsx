import React from 'react';
import { ProjectPage } from '../ProjectPage';

export const EnterpriseForecasting: React.FC = () => {
    return (
        <ProjectPage
            title="Enterprise Forecasting Models"
            year="2021-2024"
            tags={['ML', 'Retail', 'Forecasting', 'Python']}
            overview="Developed two enterprise-level demand forecasting models and a propensity-to-take-up model integrated with bespoke communication strategies for a major retailer."
            challenge={{
                title: 'The Challenge',
                content: [
                    'A major retail organization struggled with inventory management and customer engagement at scale. Overstocking led to waste and tied up capital, while understocking resulted in lost sales and disappointed customers. Traditional forecasting methods based on simple moving averages failed to capture the complexity of modern retail demand.',
                    'The challenge extended beyond pure prediction. The retailer needed to understand not just what customers would buy, but which customers were most likely to respond to specific marketing campaigns. This required modeling customer behavior at an individual level while maintaining computational efficiency at enterprise scale.',
                    'Seasonal patterns, promotional effects, competitor actions, economic indicators, and even weather all influenced demand in complex, non-linear ways. The models needed to be both accurate and interpretable—business stakeholders required explanations, not just black-box predictions.',
                ],
            }}
            solution={{
                title: 'The Solution',
                content: [
                    'I developed two complementary demand forecasting models using advanced machine learning techniques. The first focused on product-level demand across thousands of SKUs, incorporating temporal patterns, promotional calendars, and external factors. The second specialized in category-level forecasting for strategic planning.',
                    'For the propensity-to-take-up model, I employed gradient boosting algorithms to predict individual customer responses to marketing campaigns. The model analyzed purchase history, demographic data, engagement patterns, and contextual factors to score each customer\'s likelihood of conversion.',
                    'A critical innovation was integrating these models with the retailer\'s communication platform. Rather than generating predictions in isolation, the system automatically triggered personalized campaigns to high-propensity customers, creating a closed feedback loop that improved model performance over time.',
                    'I implemented the entire pipeline in Python, leveraging libraries like scikit-learn, XGBoost, and Prophet for modeling, with Pandas and NumPy for data processing. The system ran on scheduled workflows, updating predictions daily and feeding directly into operational systems.',
                ],
            }}
            impact={{
                title: 'Impact & Results',
                content: [
                    'The demand forecasting models achieved significant accuracy improvements over baseline methods, reducing forecast error by over 30% for key product categories. This translated directly to reduced inventory costs and improved product availability.',
                    'The propensity model enabled highly targeted marketing campaigns, improving conversion rates while reducing marketing spend. By focusing resources on high-propensity customers, the retailer achieved better ROI on every campaign.',
                    'Beyond the immediate business metrics, the models fundamentally changed how the organization approached decision-making. Buyers and merchandisers gained confidence in data-driven planning, and marketing teams shifted from broad campaigns to precision targeting.',
                    'The integrated system processed millions of predictions daily, demonstrating that enterprise-scale machine learning could be both accurate and operationally practical. The success of these models established a foundation for further ML initiatives across the organization.',
                ],
            }}
            technologies={[
                'Python',
                'scikit-learn',
                'XGBoost',
                'Prophet',
                'Pandas',
                'NumPy',
                'SQL',
                'Apache Airflow',
                'Docker',
                'Git',
            ]}
        />
    );
};
