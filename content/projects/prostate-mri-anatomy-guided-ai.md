---
title: "Explainable Anatomy-Guided AI for Prostate MRI: Virtual Biopsy Risk Assessment"
slug: "prostate-mri-anatomy-guided-ai"
summary: >-
  We present a fully automated, anatomically guided deep learning pipeline
  for prostate cancer (PCa) risk stratification using routine MRI. The
  pipeline integrates three key components: an nnU-Net module for
  segmenting the prostate gland and its zones on axial T2-weighted MRI; a
  classification module based on the UMedPT Swin Transformer foundation
  model, fine-tuned on 3D patches with optional anatomical priors and
  clinical data; and a VAE-GAN framework for generating counterfactual
  heatmaps that localize decision-driving image regions. The system was
  developed using 1,500 PI-CAI cases for segmentation and 617 biparametric
  MRIs with metadata from the CHAIMELEON challenge for classification
  (split into 70% training, 10% validation, and 20% testing). Segmentation
  achieved mean Dice scores of 0.95 (gland), 0.94 (peripheral zone), and
  0.92 (transition zone). Incorporating gland priors improved AUC from 0.69
  to 0.72, with a three-scale ensemble achieving top performance (AUC =
  0.79, composite score = 0.76), outperforming the 2024 CHAIMELEON
  challenge winners. Counterfactual heatmaps reliably highlighted lesions
  within segmented regions, enhancing model interpretability. In a
  prospective multi-center in-silico trial with 20 clinicians, AI
  assistance increased diagnostic accuracy from 0.72 to 0.77 and Cohen's
  kappa from 0.43 to 0.53, while reducing review time per case by 40%.
  These results demonstrate that anatomy-aware foundation models with
  counterfactual explainability can enable accurate, interpretable, and
  efficient PCa risk assessment, supporting their potential use as virtual
  biopsies in clinical practice.
year: 2025
status: "completed"
tags:
  - foundation-models
  - clinical-decision-support
  - oncologic-imaging
  - mri
paperUrl: "https://arxiv.org/abs/2505.17971"
codeUrl: "https://github.com/sinaamirrajab/MedGemma_Prostate_CDS"
draft: false
---

## Abstract

We present a fully automated, anatomically guided deep learning pipeline for prostate cancer (PCa) risk stratification using routine MRI. The pipeline integrates three key components: an nnU-Net module for segmenting the prostate gland and its zones on axial T2-weighted MRI; a classification module based on the UMedPT Swin Transformer foundation model, fine-tuned on 3D patches with optional anatomical priors and clinical data; and a VAE-GAN framework for generating counterfactual heatmaps that localize decision-driving image regions. The system was developed using 1,500 PI-CAI cases for segmentation and 617 biparametric MRIs with metadata from the CHAIMELEON challenge for classification (split into 70% training, 10% validation, and 20% testing).

Segmentation achieved mean Dice scores of 0.95 (gland), 0.94 (peripheral zone), and 0.92 (transition zone). Incorporating gland priors improved AUC from 0.69 to 0.72, with a three-scale ensemble achieving top performance (AUC = 0.79, composite score = 0.76), outperforming the 2024 CHAIMELEON challenge winners. Counterfactual heatmaps reliably highlighted lesions within segmented regions, enhancing model interpretability. In a prospective multi-center in-silico trial with 20 clinicians, AI assistance increased diagnostic accuracy from 0.72 to 0.77 and Cohen's kappa from 0.43 to 0.53, while reducing review time per case by 40%.

These results demonstrate that anatomy-aware foundation models with counterfactual explainability can enable accurate, interpretable, and efficient PCa risk assessment, supporting their potential use as virtual biopsies in clinical practice.
