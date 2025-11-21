import React from 'react';
import { ProjectPage } from '../ProjectPage';

export const GenomicClassification: React.FC = () => {
    return (
        <ProjectPage
            title="Genomic Data Classification"
            year="2019"
            tags={['Research', 'Genomics', 'Statistics', 'R']}
            overview="Honors thesis research concentrating on multi-class classification of high-dimensional genomic data using sophisticated statistical methods."
            challenge={{
                title: 'The Research Challenge',
                content: [
                    'Genomic data presents unique statistical challenges that push the boundaries of traditional classification methods. With thousands or even millions of genetic markers (features) but relatively few samples, the curse of dimensionality becomes severe—standard machine learning approaches break down when features vastly outnumber observations.',
                    'The research focused on multi-class classification, where genomic samples needed to be categorized into multiple disease subtypes or biological states. This is fundamentally harder than binary classification, as the model must learn to distinguish between several similar but distinct classes simultaneously.',
                    'Biological data is inherently noisy and complex. Genetic expression patterns are influenced by countless factors, many of which are not directly measured. The challenge was to identify true biological signals while filtering out noise, batch effects, and confounding variables.',
                    'From a statistical perspective, the research required balancing model complexity with interpretability. While black-box models might achieve high accuracy, understanding which genetic markers drive classification is crucial for biological insight and validation.',
                ],
            }}
            solution={{
                title: 'The Approach',
                content: [
                    'My honors thesis developed and evaluated sophisticated statistical methods specifically designed for high-dimensional genomic classification. I implemented regularized regression techniques including LASSO and elastic net, which perform automatic feature selection while building predictive models.',
                    'I explored ensemble methods that combine multiple weak classifiers to create robust predictions. Random forests and gradient boosting proved particularly effective, handling the high dimensionality while providing measures of feature importance that guided biological interpretation.',
                    'A critical component was rigorous cross-validation and performance evaluation. I implemented nested cross-validation to avoid overfitting and used appropriate metrics for multi-class problems, including confusion matrices, per-class precision and recall, and macro-averaged F1 scores.',
                    'The research also investigated dimensionality reduction techniques like principal component analysis (PCA) and partial least squares discriminant analysis (PLS-DA). These methods project high-dimensional data into lower-dimensional spaces while preserving class-discriminating information.',
                    'All analysis was conducted in R, leveraging packages like caret for machine learning, glmnet for regularized regression, and custom scripts for specialized genomic data preprocessing and visualization.',
                ],
            }}
            impact={{
                title: 'Research Contributions',
                content: [
                    'The thesis provided empirical evidence on the relative performance of different classification methods for genomic data, contributing to the broader understanding of how to approach high-dimensional biological classification problems.',
                    'The research identified specific genetic markers associated with disease subtypes, demonstrating that statistical learning methods could extract biologically meaningful patterns from complex genomic data. These findings aligned with known biological pathways, validating the approach.',
                    'Methodologically, the work highlighted the importance of proper validation strategies in high-dimensional settings. Many published studies suffer from overfitting due to inadequate validation—my research demonstrated best practices for robust evaluation.',
                    'The thesis served as a foundation for my career in applied machine learning and data science. The skills developed—handling high-dimensional data, implementing sophisticated statistical methods, and communicating complex technical concepts—proved directly transferable to industry challenges in healthcare, finance, and retail.',
                ],
            }}
            technologies={[
                'R',
                'caret',
                'glmnet',
                'randomForest',
                'ggplot2',
                'dplyr',
                'Statistical Modeling',
                'Cross-Validation',
                'Feature Selection',
                'Dimensionality Reduction',
            ]}
        />
    );
};
