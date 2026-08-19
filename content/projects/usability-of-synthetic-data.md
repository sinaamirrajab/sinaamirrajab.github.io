---
title: "On the Usability of Synthetic Data"
slug: "usability-of-synthetic-data"
summary: >-
  Deep-learning segmentation methods for cardiac MRI perform well on images
  from the same source as their training data, but degrade significantly on
  images from different scanners or sites, and acquiring large multi-site,
  multi-vendor training data is generally infeasible. This work explores
  using synthesized short-axis CMR images from a segmentation-informed
  conditional GAN, trained on paired real images and segmentation maps for
  the heart and surrounding tissue, to improve the robustness of heart-
  cavity segmentation models. A model trained solely on synthetic data only
  slightly underperformed one trained on real data, and combining real with
  synthetic data during training substantially improved segmentation
  performance, up to 4% in Dice score and 40% in Hausdorff distance, across
  multiple datasets from different sites and scanners, and across both 2D
  and 3D segmentation networks. The work also analyzes the quality of the
  synthetic data and its ability to replace real MR images during training.
year: 2022
status: "completed"
tags:
  - cardiac-mri
  - mri
  - segmentation
  - synthetic-data
  - generative-ai
  - medical-imaging
paperUrl: "https://www.sciencedirect.com/science/article/pii/S1361841522003164"
draft: false
---

## Abstract

Deep learning-based segmentation methods provide an effective and automated way for assessing the structure and function of the heart in cardiac magnetic resonance (CMR) images. However, despite their state-of-the-art performance on images acquired from the same source (same scanner or scanner vendor) as images used during training, their performance degrades significantly on images coming from different domains. A straightforward approach to tackle this issue consists of acquiring large quantities of multi-site and multi-vendor data, which is practically infeasible. Generative adversarial networks (GANs) for image synthesis present a promising solution for tackling data limitations in medical imaging and addressing the generalization capability of segmentation models. In this work, we explore the usability of synthesized short-axis CMR images generated using a segmentation-informed conditional GAN, to improve the robustness of heart cavity segmentation models in a variety of different settings. The GAN is trained on paired real images and corresponding segmentation maps belonging to both the heart and the surrounding tissue, reinforcing the synthesis of semantically-consistent and realistic images.

First, we evaluate the segmentation performance of a model trained solely with synthetic data and show that it only slightly underperforms compared to the baseline trained with real data. By further combining real with synthetic data during training, we observe a substantial improvement in segmentation performance (up to 4% and 40% in terms of Dice score and Hausdorff distance) across multiple data-sets collected from various sites and scanner. This is additionally demonstrated across state-of-the-art 2D and 3D segmentation networks, whereby the obtained results demonstrate the potential of the proposed method in tackling the presence of the domain shift in medical data.

Finally, we thoroughly analyze the quality of synthetic data and its ability to replace real MR images during training, as well as provide an insight into important aspects of utilizing synthetic images for segmentation.
