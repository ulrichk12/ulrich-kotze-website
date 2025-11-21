import React from 'react';
import { ProjectPage } from '../ProjectPage';

export const MultiClassClassification: React.FC = () => {
    return (
        <ProjectPage
            title="Resampling Algorithms for Multi-class Classification"
            year="2020"
            tags={['Research', 'Statistics', 'R']}
            overview="Masters thesis research concentrating on resampling algorithms for multi-label classification in highly imbalanced datasets."
            challenge={{
                title: 'The Research Challenge',
                content: [
                    'Class imbalance is one of the most pervasive challenges in real-world machine learning. When certain classes are severely underrepresented in training data, standard classification algorithms become biased toward majority classes, often failing to detect minority class instances entirely.',
                    'The problem becomes exponentially more complex in multi-label classification scenarios, where each instance can belong to multiple classes simultaneously. Traditional resampling techniques designed for binary or multi-class problems don\'t directly translate to the multi-label setting, where label dependencies and correlations must be preserved.',
                    'Highly imbalanced datasets create a statistical paradox: the minority classes that are most critical to identify (rare diseases, fraud cases, equipment failures) are precisely those with the least training data. This scarcity makes it difficult for models to learn robust decision boundaries.',
                    'From a methodological perspective, the research required developing evaluation frameworks that properly account for imbalance. Standard accuracy metrics are misleading when 99% of instances belong to one class—a model that always predicts the majority class achieves 99% accuracy but is completely useless.',
                ],
            }}
            solution={{
                title: 'The Approach',
                content: [
                    'My masters thesis developed and evaluated novel resampling algorithms specifically designed for multi-label classification in highly imbalanced settings. I implemented and extended techniques including SMOTE (Synthetic Minority Over-sampling Technique) and its multi-label variants, creating synthetic minority class examples to balance the training distribution.',
                    'I explored undersampling strategies that intelligently remove majority class instances while preserving decision boundary information. This included cluster-based undersampling and Tomek link removal, which identify and eliminate redundant or noisy majority class examples.',
                    'A key innovation was developing hybrid resampling strategies that combine oversampling and undersampling in a coordinated manner. These approaches balance the dataset while maintaining label correlations and avoiding the pitfalls of either technique used in isolation.',
                    'The research implemented comprehensive evaluation frameworks using stratified cross-validation adapted for multi-label scenarios. I employed label-specific metrics (per-label precision, recall, F1) as well as multi-label metrics like Hamming loss, subset accuracy, and label ranking average precision.',
                    'All experiments were conducted in R, leveraging packages like mlr for multi-label learning, ROSE and DMwR for resampling, and custom implementations of novel algorithms. Extensive simulation studies validated the approaches across diverse imbalance scenarios.',
                ],
            }}
            impact={{
                title: 'Research Contributions',
                content: [
                    'The thesis provided empirical evidence on the effectiveness of different resampling strategies for multi-label imbalanced learning, filling a gap in the literature where most research focused on binary or multi-class problems.',
                    'The research demonstrated that properly designed resampling algorithms can significantly improve minority class detection without sacrificing overall performance. In some experiments, recall for minority classes improved by 40-60% while maintaining acceptable precision.',
                    'Methodologically, the work highlighted the importance of label-aware resampling that preserves label correlations. Naive application of binary resampling techniques to multi-label problems can destroy important label dependencies, leading to poor generalization.',
                    'The thesis established best practices for evaluating multi-label classifiers in imbalanced settings, emphasizing the need for multiple complementary metrics rather than relying on single summary statistics.',
                    'This research directly informed my professional work in credit scoring, fraud detection, and medical diagnosis—all domains characterized by severe class imbalance. The theoretical foundations and practical techniques developed during my masters remain relevant throughout my career.',
                ],
            }}
            technologies={[
                'R',
                'mlr',
                'ROSE',
                'DMwR',
                'caret',
                'SMOTE',
                'ggplot2',
                'Statistical Modeling',
                'Resampling Methods',
                'Multi-label Learning',
            ]}
        />
    );
};
