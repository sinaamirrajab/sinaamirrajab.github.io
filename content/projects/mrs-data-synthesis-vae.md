---
title: "Data-Driven Synthesis of Magnetic Resonance Spectroscopy Data Using a Variational Autoencoder"
slug: "mrs-data-synthesis-vae"
summary: >-
  The development of deep learning methods for magnetic resonance
  spectroscopy (MRS) is often hindered by limited availability of large,
  high-quality training datasets. We propose using a variational autoencoder
  trained on measured spectroscopy data to generate synthetic samples. Our
  approach learns a compressed representation of complex spectra and can
  create new samples through latent-space operations. Testing revealed the
  model successfully reconstructs dominant spectral patterns and generates
  synthetic data matching in-vivo characteristics. When augmenting limited
  data subsets, synthetic spectra improved noise and signal quality metrics.
  However, the results also reveal limitations of the generative approach,
  including under-representation of stochastic noise and reduced accuracy in
  absolute metabolite quantification. The work establishes an evaluation
  framework emphasizing that validation should consider downstream
  applications when employing synthetic data.
year: 2026
status: "completed"
tags:
  - generative-ai
  - simulation
  - synthetic-data
paperUrl: "https://arxiv.org/abs/2603.00736"
draft: false
---

## Abstract

The development of deep learning methods for magnetic resonance spectroscopy (MRS) is often hindered by limited availability of large, high-quality training datasets. We propose using a variational autoencoder trained on measured spectroscopy data to generate synthetic samples. Our approach learns a compressed representation of complex spectra and can create new samples through latent-space operations.

Testing revealed the model successfully reconstructs dominant spectral patterns and generates synthetic data matching in-vivo characteristics. When augmenting limited data subsets, synthetic spectra improved noise and signal quality metrics. However, the results also reveal limitations of the generative approach, including under-representation of stochastic noise and reduced accuracy in absolute metabolite quantification. The work establishes an evaluation framework emphasizing that validation should consider downstream applications when employing synthetic data.
