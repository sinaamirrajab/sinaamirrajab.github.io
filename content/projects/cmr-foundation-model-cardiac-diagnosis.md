---
title: "An Automated AI Tool for Diagnosing Cardiac Disease from Conventional CMR"
slug: "cmr-foundation-model-cardiac-diagnosis"
summary: >-
  Cardiovascular magnetic resonance (CMR) imaging enables non-invasive
  assessment of myocardial structure, function, and pathology, but requires
  substantial experience in interpretation of CMR images that could be
  supported by artificial intelligence (AI)-based models. We developed an
  automated data curation pipeline using locally-run large language models to
  extract diagnostic labels from CMR reports, then fine-tuned three vision
  foundation models (DINO, VST, UMedPT) on multimodal imaging data across 988
  curated cases. The ensemble approach achieved diagnostic performance with
  AUC-ROC values up to 0.966 for cardiac amyloidosis and 0.959 for
  hypertrophic cardiomyopathy. Training code and model weights are publicly
  available.
year: 2026
status: "active"
featured: true
tags:
  - foundation-models
  - cardiac-mri
  - cmr
  - clinical-decision-support
  - llms
paperUrl: "https://arxiv.org/abs/2607.20087"
codeUrl: "https://github.com/sinaamirrajab/CMR_CVD"
draft: false
---

## Abstract

Cardiovascular magnetic resonance (CMR) imaging enables non-invasive assessment of myocardial structure, function, and pathology, but requires substantial experience in interpretation of CMR images that could be supported by artificial intelligence (AI)-based models. We developed an automated data curation pipeline using locally-run large language models to extract diagnostic labels from CMR reports, then fine-tuned three vision foundation models (DINO, VST, UMedPT) on multimodal imaging data across 988 curated cases. The ensemble approach achieved diagnostic performance with AUC-ROC values up to 0.966 for cardiac amyloidosis and 0.959 for hypertrophic cardiomyopathy. Training code and model weights are publicly available.
