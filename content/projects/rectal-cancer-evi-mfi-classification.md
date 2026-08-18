---
title: "A Foundation Model Framework for MRI Classification of EVI and MFI in Rectal Cancer"
slug: "rectal-cancer-evi-mfi-classification"
summary: >-
  Objectives: Accurate MRI-based identification of extramural vascular
  invasion (EVI) and mesorectal fascia invasion (MFI) is crucial for
  risk-stratified rectal cancer treatment. However, subjective visual
  assessment and inter-institutional variability limit diagnostic
  consistency. This study developed and evaluated a multi-center, foundation
  model-driven framework that automatically classifies EVI and MFI on axial
  and sagittal MRI. Materials and methods: A total of 331 pre-treatment
  rectal cancer T2-weighted MRI scans from three European hospitals were
  retrospectively recruited. A self-supervised frequency domain harmonization
  strategy was applied to reduce scanner variability. Three classifiers,
  SeResNet, the universal biomedical pretrained model (UMedPT) with a
  multilayer perceptron head, and a logistic-regression variant using frozen
  UMedPT features (UMedPT_LR), were trained (n = 265) and tested (n = 66).
  Gradient-weighted class activation mapping (Grad-CAM) visualized model
  predictions. Results: UMedPT_LR achieved the best EVI performance with
  multiplanar fusion (AUC = 0.82, test set). For MFI, UMedPT trained on axial
  harmonized images yielded the highest performance.
year: 2026
status: "completed"
tags:
  - foundation-models
  - oncologic-imaging
  - mri
paperUrl: "https://doi.org/10.1186/s13244-026-02296-3"
draft: false
---

## Abstract

Objectives: Accurate MRI-based identification of extramural vascular invasion (EVI) and mesorectal fascia invasion (MFI) is crucial for risk-stratified rectal cancer treatment. However, subjective visual assessment and inter-institutional variability limit diagnostic consistency. This study developed and evaluated a multi-center, foundation model-driven framework that automatically classifies EVI and MFI on axial and sagittal MRI.

Materials and methods: A total of 331 pre-treatment rectal cancer T2-weighted MRI scans from three European hospitals were retrospectively recruited. A self-supervised frequency domain harmonization strategy was applied to reduce scanner variability. Three classifiers, SeResNet, the universal biomedical pretrained model (UMedPT) with a multilayer perceptron head, and a logistic-regression variant using frozen UMedPT features (UMedPT_LR), were trained (n = 265) and tested (n = 66). Gradient-weighted class activation mapping (Grad-CAM) visualized model predictions.

Results: UMedPT_LR achieved the best EVI performance with multiplanar fusion (AUC = 0.82, test set). For MFI, UMedPT trained on axial harmonized images yielded the highest performance.
