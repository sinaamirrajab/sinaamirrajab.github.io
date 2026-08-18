---
title: "Cardiac Pathology Synthesis"
slug: "cardiac-pathology-synthesis"
summary: "Synthesis of cardiac MR images with plausible heart pathologies and realistic appearances for labelled-data generation."
problem: "Medical image analysis models need diverse pathological examples, but labelled multi-disease cardiac MR data can be limited."
contribution: "The project combines latent-space label manipulation with label-conditional image synthesis to generate 3D-consistent cardiac MR subjects."
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

## Research Context

I list this project in my public CV as "Cardiac Pathology Synthesis" and link it to the paper "Pathology Synthesis of 3D-Consistent Cardiac MR Images using 2D VAEs and GANs."

## Approach

The source abstract describes an image-synthesis pipeline with two tasks: label deformation and label-to-image translation. Label deformation uses latent-space interpolation in a VAE model, while label-to-image translation uses a label-conditional GAN.

The project explores intra-subject synthesis, inter-subject synthesis, and pathology synthesis. It also models relationships between 2D slices in VAE latent space to generate 3D-consistent subjects from 2D slice-by-slice generations.

## Evaluation Context

The public description frames the work as a method for diversifying and enriching cardiac MR datasets for training and evaluating deep-learning segmentation models.
