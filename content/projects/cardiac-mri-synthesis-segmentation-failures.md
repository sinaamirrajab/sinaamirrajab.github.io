---
title: "Cardiac MRI Synthesis for Reducing Segmentation Failures"
slug: "cardiac-mri-synthesis-segmentation-failures"
summary: >-
  Deep-learning cardiac MRI segmentation methods show great promise but are
  rarely applicable to realistic clinical scenarios, since most are trained
  on largely homogeneous datasets without the acquisition variation typical
  of multi-vendor, multi-site, and pathological data, and degrade on outlier
  cases with difficult pathologies, artifacts, or extensive changes in
  tissue shape and appearance. This work presents a model for segmenting all
  three cardiac structures in a multi-center, multi-disease, and multi-view
  scenario, addressing the different challenges of such heterogeneous data
  through a pipeline of heart-region detection, augmentation via image
  synthesis, and a late-fusion segmentation approach. Extensive experiments
  demonstrate the ability of the approach to handle outlier cases during
  both training and testing, allowing better adaptation to unseen and
  difficult examples. Reducing segmentation failures on outlier cases
  improves not only average segmentation performance but also the
  estimation of downstream clinical parameters, giving more consistent
  derived metrics.
year: 2023
status: "completed"
tags:
  - cardiac-mri
  - mri
  - segmentation
  - synthetic-data
  - generative-ai
  - medical-imaging
paperUrl: "https://www.sciencedirect.com/science/article/pii/S0010482523004389"
draft: false
---

## Abstract

Cardiac magnetic resonance (CMR) image segmentation is an integral step in the analysis of cardiac function and diagnosis of heart related diseases. While recent deep learning-based approaches in automatic segmentation have shown great promise to alleviate the need for manual segmentation, most of these are not applicable to realistic clinical scenarios. This is largely due to training on mainly homogeneous datasets, without variation in acquisition, which typically occurs in multi-vendor and multi-site settings, as well as pathological data. Such approaches frequently exhibit a degradation in prediction performance, particularly on outlier cases commonly associated with difficult pathologies, artifacts and extensive changes in tissue shape and appearance.

In this work, we present a model aimed at segmenting all three cardiac structures in a multi-center, multi-disease and multi-view scenario. We propose a pipeline, addressing different challenges with segmentation of such heterogeneous data, consisting of heart region detection, augmentation through image synthesis and a late-fusion segmentation approach. Extensive experiments and analysis demonstrate the ability of the proposed approach to tackle the presence of outlier cases during both training and testing, allowing for better adaptation to unseen and difficult examples.

Overall, we show that the effective reduction of segmentation failures on outlier cases has a positive impact on not only the average segmentation performance, but also on the estimation of clinical parameters, leading to a better consistency in derived metrics.
