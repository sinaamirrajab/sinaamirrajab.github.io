---
title: "Results of the 2023 ISBI Challenge to Reduce GABA-Edited MRS Acquisition Time"
slug: "gaba-edited-mrs-challenge"
summary: >-
  Purpose: Use a conference challenge format to compare machine
  learning-based gamma-aminobutyric acid (GABA)-edited magnetic resonance
  spectroscopy (MRS) reconstruction models using one-quarter of the
  transients typically acquired during a complete scan. Methods: There were
  three tracks: Track 1: simulated data, Track 2: identical acquisition
  parameters with in vivo data, and Track 3: different acquisition
  parameters with in vivo data. The mean squared error, signal-to-noise
  ratio, linewidth, and a proposed shape score metric were used to quantify
  model performance. Challenge organizers provided open access to a
  baseline model, simulated noise-free data, guides for adding synthetic
  noise, and in vivo data. Results: Three submissions were compared. A
  covariance matrix convolutional neural network model was most successful
  for Track 1. A vision transformer model operating on a spectrogram data
  representation was most successful for Tracks 2 and 3. Deep learning (DL)
  reconstructions with 80 transients achieved equivalent or better SNR,
  linewidth and fit error compared to conventional 320 transient
  reconstructions. However, some DL models optimized linewidth and SNR
  without actually improving overall spectral quality, indicating a need
  for more robust metrics. Conclusion: DL-based reconstruction pipelines
  have the promise to reduce the number of transients required for
  GABA-edited MRS.
year: 2024
status: "completed"
tags:
  - mri
paperUrl: "https://doi.org/10.1007/s10334-024-01156-9"
draft: false
---

## Abstract

Purpose: Use a conference challenge format to compare machine learning-based gamma-aminobutyric acid (GABA)-edited magnetic resonance spectroscopy (MRS) reconstruction models using one-quarter of the transients typically acquired during a complete scan.

Methods: There were three tracks: Track 1: simulated data, Track 2: identical acquisition parameters with in vivo data, and Track 3: different acquisition parameters with in vivo data. The mean squared error, signal-to-noise ratio, linewidth, and a proposed shape score metric were used to quantify model performance. Challenge organizers provided open access to a baseline model, simulated noise-free data, guides for adding synthetic noise, and in vivo data.

Results: Three submissions were compared. A covariance matrix convolutional neural network model was most successful for Track 1. A vision transformer model operating on a spectrogram data representation was most successful for Tracks 2 and 3. Deep learning (DL) reconstructions with 80 transients achieved equivalent or better SNR, linewidth and fit error compared to conventional 320 transient reconstructions. However, some DL models optimized linewidth and SNR without actually improving overall spectral quality, indicating a need for more robust metrics.

Conclusion: DL-based reconstruction pipelines have the promise to reduce the number of transients required for GABA-edited MRS.
