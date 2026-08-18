---
title: "WAND: Wavelet Analysis-Based Neural Decomposition of MRS Signals for Artifact Removal"
slug: "wand-mrs-artifact-removal"
summary: >-
  Accurate quantification of metabolites in magnetic resonance spectroscopy
  (MRS) is challenged by low signal-to-noise ratio (SNR), overlapping
  metabolites, and various artifacts. Particularly, unknown and
  unparameterized baseline effects obscure the quantification of
  low-concentration metabolites, limiting MRS reliability. This paper
  introduces wavelet analysis-based neural decomposition (WAND), a novel
  data-driven method designed to decompose MRS signals into their
  constituent components: metabolite-specific signals, baseline, and
  artifacts. WAND takes advantage of the enhanced separability of these
  components within the wavelet domain. The method employs a neural
  network, specifically a U-Net architecture, trained to predict masks for
  wavelet coefficients obtained through the continuous wavelet transform.
  These masks effectively isolate desired signal components in the wavelet
  domain, which are then inverse-transformed to obtain separated signals.
  Notably, an artifact mask is created by inverting the sum of all known
  signal masks, enabling WAND to capture and remove even unpredictable
  artifacts. The effectiveness of WAND in achieving accurate decomposition
  is demonstrated across simulated and in vivo data.
year: 2025
status: "completed"
tags:
  - mri
paperUrl: "https://doi.org/10.1002/nbm.70038"
draft: false
---

## Abstract

Accurate quantification of metabolites in magnetic resonance spectroscopy (MRS) is challenged by low signal-to-noise ratio (SNR), overlapping metabolites, and various artifacts. Particularly, unknown and unparameterized baseline effects obscure the quantification of low-concentration metabolites, limiting MRS reliability. This paper introduces wavelet analysis-based neural decomposition (WAND), a novel data-driven method designed to decompose MRS signals into their constituent components: metabolite-specific signals, baseline, and artifacts. WAND takes advantage of the enhanced separability of these components within the wavelet domain.

The method employs a neural network, specifically a U-Net architecture, trained to predict masks for wavelet coefficients obtained through the continuous wavelet transform. These masks effectively isolate desired signal components in the wavelet domain, which are then inverse-transformed to obtain separated signals. Notably, an artifact mask is created by inverting the sum of all known signal masks, enabling WAND to capture and remove even unpredictable artifacts. The effectiveness of WAND in achieving accurate decomposition is demonstrated across simulated and in vivo data.
