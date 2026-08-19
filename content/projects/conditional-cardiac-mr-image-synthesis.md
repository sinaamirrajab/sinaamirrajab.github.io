---
title: "Conditional Cardiac MR Image Synthesis"
slug: "conditional-cardiac-mr-image-synthesis"
summary: >-
  Synthesizing high-quality medical images with variability in anatomy and
  appearance can help address the scarcity of properly annotated data in
  medical image analysis research. We propose a framework combining
  segmentation and synthesis based on mask-conditional GANs to generate
  high-fidelity, diverse cardiac MR images: a segmentation module trained
  on a physics-based simulated database provides multi-tissue labels on
  real CMR images, and a synthesis module trained on paired real images and
  labels translates masks into realistic cardiac images, so anatomy follows
  the labels while appearance is learned from training data. We study the
  effects of tissue-label count, training-data quantity, and multi-vendor
  data on synthesis quality, and evaluate the synthetic data for cardiac
  cavity segmentation in replacement and augmentation scenarios. Replacement
  with only synthetic data matched real-data performance, and augmentation
  improved Dice score by up to 4% and reduced Hausdorff Distance by up to
  40%.
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

## Abstract

Synthesis of a large set of high-quality medical images with variability in anatomical representation and image appearance has the potential to provide solutions for tackling the scarcity of properly annotated data in medical image analysis research. In this paper, we propose a novel framework consisting of image segmentation and synthesis based on mask-conditional GANs for generating high-fidelity and diverse Cardiac Magnetic Resonance (CMR) images. The framework consists of two modules: i) a segmentation module trained using a physics-based simulated database of CMR images to provide multi-tissue labels on real CMR images, and ii) a synthesis module trained using pairs of real CMR images and corresponding multi-tissue labels, to translate input segmentation masks to realistic-looking cardiac images. The anatomy of synthesized images is based on labels, whereas the appearance is learned from the training images.

We investigate the effects of the number of tissue labels, quantity of training data, and multi-vendor data on the quality of the synthesized images. Furthermore, we evaluate the effectiveness and usability of the synthetic data for a downstream task of training a deep-learning model for cardiac cavity segmentation in the scenarios of data replacement and augmentation. The results of the replacement study indicate that segmentation models trained with only synthetic data can achieve comparable performance to the baseline model trained with real data, indicating that the synthetic data captures the essential characteristics of its real counterpart. Furthermore, we demonstrate that augmenting real with synthetic data during training can significantly improve both the Dice score (maximum increase of 4%) and Hausdorff Distance (maximum reduction of 40%) for cavity segmentation, suggesting a good potential to aid in tackling medical data scarcity.
