---
title: "Towards Brain MRI Foundation Models for the Clinic: Findings from the FOMO25 Challenge"
slug: "fomo25-brain-mri-challenge"
summary: >-
  Clinical deployment of automated brain MRI analysis faces a fundamental
  challenge: clinical data is heterogeneous and noisy, and high-quality
  labels are prohibitively costly to obtain. The FOMO25 challenge, organized
  at MICCAI 2025, provided researchers with the FOMO60K pretraining dataset
  and evaluated foundation models on clinical workflow data across three
  tasks: infarct classification, meningioma segmentation, and brain age
  regression, comparing nineteen models from sixteen teams. Self-supervised
  pretraining improved performance on clinical data experiencing domain
  shift. Different pretraining approaches suited different tasks, masked
  autoencoders for segmentation and hybrid objectives for classification, and
  smaller pretrained models achieved strong results while scaling provided
  unreliable benefits.
year: 2026
status: "completed"
tags:
  - foundation-models
  - mri
  - segmentation
paperUrl: "https://arxiv.org/abs/2604.11679"
draft: false
---

## Abstract

Clinical deployment of automated brain MRI analysis faces a fundamental challenge: clinical data is heterogeneous and noisy, and high-quality labels are prohibitively costly to obtain. The FOMO25 challenge, organized at MICCAI 2025, provided researchers with the FOMO60K pretraining dataset and evaluated foundation models on clinical workflow data across three tasks: infarct classification, meningioma segmentation, and brain age regression, comparing nineteen models from sixteen teams.

Self-supervised pretraining improved performance on clinical data experiencing domain shift. Different pretraining approaches suited different tasks, masked autoencoders for segmentation and hybrid objectives for classification, and smaller pretrained models achieved strong results while scaling provided unreliable benefits.
