---
title: "Conditional Cardiac MR Image Synthesis"
slug: "conditional-cardiac-mr-image-synthesis"
summary: "Mask-conditional generative modelling for synthesizing diverse cardiac MR images from segmentation labels."
problem: "Cardiac MR segmentation research needs high-quality annotated data with anatomical and appearance variation."
contribution: "The project combines a segmentation module and a mask-conditional GAN synthesis module to generate realistic cardiac MR images from multi-tissue labels."
year: 2022
status: "completed"
tags:
  - cardiac-mri
  - mri
  - generative-ai
  - synthetic-data
  - segmentation
  - medical-imaging
paperUrl: "https://www.sciencedirect.com/science/article/pii/S0895611122000933"
codeUrl: "https://github.com/sinaamirrajab/Semantic_CMRI_Synthesis"
draft: false
---

## Research Context

I list this project in my public CV as "Conditional Cardiac MR Image Synthesis" and link it to the paper "Label-informed cardiac magnetic resonance image synthesis through conditional generative adversarial networks."

## Approach

The source abstract describes a two-module framework. A segmentation module provides multi-tissue labels on real CMR images, and a synthesis module translates segmentation masks into realistic-looking cardiac images.

The project investigates the effects of tissue labels, training-data quantity, and multi-vendor data on synthetic-image quality.

## Evaluation Context

The public description evaluates synthetic data in replacement and augmentation scenarios for cardiac cavity segmentation. The result is framed as evidence that synthetic data can help address medical-data scarcity in controlled research settings.
