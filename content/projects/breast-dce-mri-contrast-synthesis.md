---
title: "Pre- to Post-Contrast Synthesis of Breast DCE-MRI Using Latent Bridge Matching"
slug: "breast-dce-mri-contrast-synthesis"
summary: >-
  Dynamic contrast-enhanced MRI (DCE-MRI) is central to breast cancer
  imaging, but gadolinium administration increases scan burden and
  motivates contrast-reduced alternatives such as synthetic contrast
  generation. This work proposes a latent bridge matching (LBM) framework
  that synthesizes peak-enhanced breast DCE-MRI from pre-contrast images for
  the MAMA-SYNTH challenge. Rather than starting from Gaussian noise like
  conventional latent diffusion models, it learns a conditional bridge
  between paired pre-contrast and peak-enhanced VAE latents, with a latent
  UNet predicting the correction toward the peak-enhanced latent so the
  trajectory stays anchored to patient-specific anatomy. Evaluated on 91
  DUKE validation cases, tumor-conditioning improved performance over
  pre-contrast conditioning, reducing MSE from 1.023 to 0.940 and FRD from
  7.523 to 4.716 while raising tumor SSIM from 0.355 to 0.429, outperforming
  the evaluated diffusion baseline. Further work is needed to validate
  generalization and remove dependence on ground-truth tumor masks at
  inference.
year: 2026
status: "completed"
tags:
  - generative-ai
  - synthetic-data
  - oncologic-imaging
  - mri
paperUrl: "https://arxiv.org/abs/2608.10000"
draft: false
---

## Abstract

Dynamic contrast-enhanced magnetic resonance imaging (DCE-MRI) is central to breast cancer imaging, but gadolinium administration increases scan burden and motivates contrast-reduced alternatives, including synthetic contrast generation. We propose a latent bridge matching (LBM) framework for synthesizing peak-enhanced breast DCE-MRI from pre-contrast images in the MAMA-SYNTH challenge setting. Instead of starting from Gaussian noise as in conventional latent diffusion models (LDMs), the proposed model learns a conditional bridge between paired pre-contrast and peak-enhanced VAE latents. A latent UNet predicts the remaining correction from intermediate bridge states to the peak-enhanced latent, enabling iterative refinement while keeping the trajectory anchored to patient-specific anatomy.

We evaluated two LBM conditioning variants on 91 DUKE validation cases. For the tumor-conditioned variant, tumor masks were used as conditioning inputs. Tumor-conditioning improved performance compared with pre-contrast conditioning, reducing MSE from 1.023 to 0.940 and FRD from 7.523 to 4.716, while increasing tumor SSIM from 0.355 to 0.429. The tumor-conditioned LBM also outperformed the evaluated LDM baseline on this validation cohort.

These results suggest that latent bridge matching is a promising pre-contrast-anchored formulation for virtual contrast enhancement, while further work is needed to validate generalization and remove dependence on ground-truth tumor masks at inference.
