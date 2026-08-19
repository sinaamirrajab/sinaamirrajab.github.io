---
title: "Cardiac MR Scar Quantification"
slug: "cardiac-mr-scar-quantification"
summary: >-
  The clinical utility of late gadolinium enhancement (LGE) cardiac MRI is
  limited by a lack of standardization and time-consuming postprocessing.
  This work tests whether a cascaded deep learning pipeline, trained with
  augmentation by synthetically generated data, improves model accuracy and
  robustness for automated scar quantification. A bounding-box regression
  network first identifies a region of interest around the left-ventricular
  myocardium, then two further nnU-Net models segment the myocardium and any
  scar, trained on the EMIDEC challenge data supplemented with an extensive
  synthetic dataset from a conditional GAN. The cascaded pipeline
  significantly outperformed a single nnU-Net segmenting both structures
  directly (myocardium Dice 0.84 vs 0.63; scar Dice 0.72 vs 0.46, both
  p < 0.01). Adding synthetic data as augmentation improved scar Dice by a
  further 0.06. On the challenge test set, the augmented cascaded pipeline
  reached a mean per-subject Dice of 0.86 for myocardium and 0.67 for scar,
  comparable to a manual operator.
year: 2022
status: "completed"
tags:
  - cardiac-mri
  - mri
  - segmentation
  - synthetic-data
  - generative-ai
  - medical-imaging
paperUrl: "https://www.sciencedirect.com/science/article/pii/S0169260722004977"
related:
  projects:
    - cardiac-scar-quantification-domain-adaptation
draft: false
---

## Abstract

Background: The clinical utility of late gadolinium enhancement (LGE) cardiac MRI is limited by the lack of standardization, and time-consuming postprocessing. In this work, we tested the hypothesis that a cascaded deep learning pipeline trained with augmentation by synthetically generated data would improve model accuracy and robustness for automated scar quantification.

Methods: A cascaded pipeline consisting of three consecutive neural networks is proposed, starting with a bounding box regression network to identify a region of interest around the left ventricular (LV) myocardium. Two further nnU-Net models are then used to segment the myocardium and, if present, scar. The models were trained on the data from the EMIDEC challenge, supplemented with an extensive synthetic dataset generated with a conditional GAN.

Results: The cascaded pipeline significantly outperformed a single nnU-Net directly segmenting both the myocardium (mean Dice similarity coefficient (DSC) (standard deviation (SD)): 0.84 (0.09) vs 0.63 (0.20), p < 0.01) and scar (DSC: 0.72 (0.34) vs 0.46 (0.39), p < 0.01) on a per-slice level. The inclusion of the synthetic data as data augmentation during training improved the scar segmentation DSC by 0.06 (p < 0.01). The mean DSC per-subject on the challenge test set, for the cascaded pipeline augmented by synthetic generated data, was 0.86 (0.03) and 0.67 (0.29) for myocardium and scar, respectively.

Conclusion: A cascaded deep learning-based pipeline trained with augmentation by synthetically generated data leads to myocardium and scar segmentations that are similar to the manual operator, and outperforms direct segmentation without the synthetic images.
