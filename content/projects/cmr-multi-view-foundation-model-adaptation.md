---
title: "Foundation Models Adaptation for Multi-View Multi-Modal Cardiac MRI Segmentation and Direct Ejection Fraction Estimation"
slug: "cmr-multi-view-foundation-model-adaptation"
summary: >-
  Foundation models have shown strong transferability in cardiac MRI (CMR),
  but their effectiveness for heterogeneous multi-view and multi-sequence CMR
  analysis remains unclear. In this work, we explore the effectiveness of
  fine-tuning and combining different CMR foundation models for the
  Universal Multi-Sequence, Multi-Center and Multi-View CMR Segmentation
  (CMR-Multi) Challenge. CineMA was fine-tuned for cine and late gadolinium
  enhancement (LGE) segmentation across short-axis and long-axis views. For
  direct left-ventricular ejection fraction (LVEF) estimation, we used two
  recent frozen CMR foundation models to extract embedding vectors that were
  then combined using attention-based multiple-instance learning for LVEF
  regression. In the challenge validation set, cine segmentation achieved
  Dice scores of 0.862, 0.883, and 0.902 for short-axis, two-chamber and
  four-chamber cine MRI, respectively. LGE segmentation achieved Dice scores
  between 0.621 and 0.846 across views. The direct LVEF regression model
  achieved an MAE of 4.96 percentage points and a Pearson correlation of
  0.91. These results indicate that foundation models can be effectively
  adapted and combined for multi-view CMR analysis, while accurate LGE scar
  segmentation remains a challenging task.
year: 2026
status: "completed"
tags:
  - foundation-models
  - cardiac-mri
  - cmr
  - segmentation
paperUrl: "https://arxiv.org/abs/2608.07291"
codeUrl: "https://github.com/sinaamirrajab/cmr-multi-cinema"
draft: false
---

## Abstract

Foundation models have shown strong transferability in cardiac MRI (CMR), but their effectiveness for heterogeneous multi-view and multi-sequence CMR analysis remains unclear. In this work, we explore the effectiveness of fine-tuning and combining different CMR foundation models for the Universal Multi-Sequence, Multi-Center and Multi-View CMR Segmentation (CMR-Multi) Challenge. CineMA was fine-tuned for cine and late gadolinium enhancement (LGE) segmentation across short-axis and long-axis views. For direct left-ventricular ejection fraction (LVEF) estimation, we used two recent frozen CMR foundation models to extract embedding vectors that were then combined using attention-based multiple-instance learning for LVEF regression.

In the challenge validation set, cine segmentation achieved Dice scores of 0.862, 0.883, and 0.902 for short-axis, two-chamber and four-chamber cine MRI, respectively. LGE segmentation achieved Dice scores between 0.621 and 0.846 across views. The direct LVEF regression model achieved an MAE of 4.96 percentage points and a Pearson correlation of 0.91.

These results indicate that foundation models can be effectively adapted and combined for multi-view CMR analysis, while accurate LGE scar segmentation remains a challenging task.
