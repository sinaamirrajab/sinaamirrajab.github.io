---
title: "Cardiac Pathology Synthesis"
slug: "cardiac-pathology-synthesis"
summary: >-
  We propose a method for synthesizing cardiac MR images with plausible
  heart pathologies and realistic appearances, to generate labeled data for
  supervised deep-learning training. Synthesis combines label deformation
  and label-to-image translation: the former via latent-space interpolation
  in a VAE model, the latter via a label-conditional GAN model. We devise
  three approaches to label manipulation in the VAE's latent space: intra-
  subject synthesis to interpolate intermediate slices and increase
  through-plane resolution, inter-subject synthesis to interpolate geometry
  and appearance between dissimilar subjects from different scanner
  vendors, and pathology synthesis to generate pseudo-pathological subjects
  with characteristics of a desired heart disease. We also model the
  relationship between 2D slices in the VAE's latent space prior to
  reconstruction, generating 3D-consistent subjects from stacked 2D
  slice-by-slice generations. This diversifies and enriches an available
  cardiac MR database, and we quantitatively show it improves generalization
  and robustness to multi-vendor, multi-disease data for image segmentation.
year: 2023
status: "completed"
tags:
  - cardiac-mri
  - mri
  - generative-ai
  - synthetic-data
  - segmentation
  - medical-imaging
paperUrl: "https://www.melba-journal.org/papers/2023:010.html"
codeUrl: "https://github.com/sinaamirrajab/CardiacPathologySynthesis"
draft: false
---

## Abstract

We propose a method for synthesizing cardiac magnetic resonance (MR) images with plausible heart pathologies and realistic appearances for the purpose of generating labeled data for the application of supervised deep-learning (DL) training. The image synthesis consists of label deformation and label-to-image translation tasks. The former is achieved via latent space interpolation in a VAE model, while the latter is accomplished via a label-conditional GAN model. We devise three approaches for label manipulation in the latent space of the trained VAE model: i) intra-subject synthesis aiming to interpolate the intermediate slices of a subject to increase the through-plane resolution, ii) inter-subject synthesis aiming to interpolate the geometry and appearance of intermediate images between two dissimilar subjects acquired with different scanner vendors, and iii) pathology synthesis aiming to synthesize a series of pseudo-pathological synthetic subjects with characteristics of a desired heart disease.

Furthermore, we propose to model the relationship between 2D slices in the latent space of the VAE prior to reconstruction for generating 3D-consistent subjects from stacking up 2D slice-by-slice generations. We demonstrate that such an approach could provide a solution to diversify and enrich an available database of cardiac MR images and to pave the way for the development of generalizable DL-based image analysis algorithms.

We quantitatively evaluate the quality of the synthesized data in an augmentation scenario to achieve generalization and robustness to multi-vendor and multi-disease data for image segmentation.
