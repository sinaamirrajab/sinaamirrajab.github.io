---
title: "Automated Cardiovascular MR Myocardial Scar Quantification with Unsupervised Domain Adaptation"
slug: "cardiac-scar-quantification-domain-adaptation"
summary: >-
  Quantification of myocardial scar from late gadolinium enhancement (LGE)
  CMR images can be facilitated by automated AI-based analysis, but AI
  models are susceptible to domain shifts that degrade performance on data
  with different characteristics than the training data. This study trained
  CycleGAN models to translate local hospital data to the appearance of a
  public LGE CMR dataset, then evaluated an existing AI scar-quantification
  pipeline (myocardium segmentation, scar segmentation, scar burden) on an
  external test set of 44 patients clinically assessed for ischemic scar,
  without retraining on local labels. Dice similarity between manual and
  AI-predicted segmentations was similar to previously reported results:
  0.76 for myocardium and 0.75 for scar overall, 0.41 for scar in
  pathological scans, with a Bland-Altman mean bias in scar burden of
  -0.62%. This shows domain adaptation alone can carry an existing pipeline
  to a new site.
year: 2024
status: "completed"
tags:
  - cardiac-mri
  - segmentation
  - cmr
paperUrl: "https://doi.org/10.1186/s41747-024-00497-3"
related:
  projects:
    - cardiac-mr-scar-quantification
draft: false
---

## Abstract

Quantification of myocardial scar from late gadolinium enhancement (LGE) cardiovascular magnetic resonance (CMR) images can be facilitated by automated artificial intelligence (AI)-based analysis. However, AI models are susceptible to domain shifts in which the model performance is degraded when applied to data with different characteristics than the original training data. In this study, CycleGAN models were trained to translate local hospital data to the appearance of a public LGE CMR dataset.

After domain adaptation, an AI scar quantification pipeline including myocardium segmentation, scar segmentation, and computation of scar burden, previously developed on the public dataset, was evaluated on an external test set including 44 patients clinically assessed for ischemic scar. The mean ± standard deviation Dice similarity coefficients between the manual and AI-predicted segmentations in all patients were similar to those previously reported: 0.76 ± 0.05 for myocardium and 0.75 ± 0.32 for scar, 0.41 ± 0.12 for scar in scans with pathological findings. Bland-Altman analysis showed a mean bias in scar burden percentage of -0.62% with limits of agreement from -8.4% to 7.17%.
