---
title: "Enhancing Reconstruction-Based Out-of-Distribution Detection in Brain MRI"
slug: "ood-detection-brain-mri-ensembles"
summary: >-
  Out-of-distribution (OOD) detection is crucial for safely deploying
  automated medical image analysis, since abnormal patterns can hamper
  performance, yet OOD detection in medical imaging remains an open
  challenge. This study optimizes a reconstruction-based autoencoder
  specifically for OOD detection, addressing the underexplored potential of
  a simple model, the lack of deep learning strategies tuned for the task,
  and the choice of reconstruction metric. We evaluated the model's
  reconstruction capability, the impact of training epoch and metric
  choice, and model and metric ensembles, for unsupervised detection of
  synthetic local and global artifacts in brain MRI. Learned perceptual
  image patch similarity (LPIPS) and the contrast component of SSIM
  consistently outperformed other metrics, and combining two well-converged
  models with LPIPS and contrast reached a pixel-level area under the
  Precision-Recall curve of 0.66. On a more realistic OOD dataset, local
  artifacts proved harder to detect than global ones, underscoring the need
  for tailored, carefully validated approaches.
year: 2025
status: "completed"
tags:
  - mri
  - clinical-decision-support
paperUrl: "https://doi.org/10.1016/j.cmpb.2025.109045"
draft: false
---

## Abstract

Background and objective: Out-of-distribution (OOD) detection is crucial for safely deploying automated medical image analysis systems, as abnormal patterns in images could hamper their performance. However, OOD detection in medical imaging remains an open challenge. In this study, we aim to optimize a reconstruction-based autoencoder specifically for OOD detection. We address three gaps: the underexplored potential of a simple OOD detection model, the lack of optimization of deep learning strategies specifically for OOD detection, and the selection of appropriate reconstruction metrics.

Methods: We investigated the effectiveness of a reconstruction-based autoencoder for unsupervised detection of synthetic local and global artifacts in brain MRI. We evaluated the general reconstruction capability of the model, analyzed the impact of the selected training epoch and reconstruction metrics, assessed the potential of model and/or metric ensembles, and tested the model on a dataset containing a diverse range of artifacts.

Results: Among the metrics assessed, the learned perceptual image patch similarity (LPIPS) and the contrast component of structural similarity index measure (SSIM) consistently outperformed others in detecting homogeneous circular anomalies. By combining two well-converged models and using LPIPS and contrast as reconstruction metrics, we achieved a pixel-level area under the Precision-Recall curve of 0.66. Furthermore, with the more realistic OOD dataset, we observed that the detection performance varied between artifact types; local artifacts were more difficult to detect, while global artifacts showed better detection results.

Conclusions: Our study shows that a reconstruction-based autoencoder, when combined with appropriate metrics, enhances OOD detection in brain MRI. These findings emphasize the importance of carefully selecting metrics and model configurations and highlight the need for tailored approaches, as standard deep learning approaches do not always align with the unique challenges of OOD detection.
