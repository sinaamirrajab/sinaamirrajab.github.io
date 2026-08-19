---
title: "Cardiac MRI Simulation Framework"
slug: "cardiac-mri-simulation-framework"
summary: >-
  One limiting factor for deep-learning medical image analysis is the
  scarcity of labeled data, which simulation can address by generating ample
  training data with ground-truth labels. This work develops a flexible
  framework for simulating cardiac MR images with variable anatomical and
  imaging characteristics, aimed at creating a diversified virtual
  population. Parameters are defined to alter anatomy, assign MR tissue
  properties to different tissue types, and manipulate image contrast
  through acquisition parameters. A database of virtual subjects was
  simulated and evaluated for aiding a deep-learning segmentation method.
  Training entirely on simulated images performed comparably to training on
  real images for heart-cavity segmentation in mid-ventricular slices.
  Moreover, simulated data could be combined with classical augmentation to
  boost performance when training data is limited, particularly by
  increasing contrast and anatomical variation, leading to better
  regularization and generalization. The database and simulation code are
  public.
year: 2022
status: "completed"
tags:
  - cardiac-mri
  - mri
  - simulation
  - synthetic-data
  - segmentation
  - medical-imaging
paperUrl: "https://ieeexplore.ieee.org/abstract/document/9924194"
codeUrl: "https://github.com/sinaamirrajab/CMRI_Simulation"
datasetUrl: "https://osf.io/bkzhm/"
related:
  projects:
    - brain-mri-simulation-framework
draft: false
---

## Abstract

One of the limiting factors for the development and adoption of novel deep-learning (DL) based medical image analysis methods is the scarcity of labeled medical images. Medical image simulation and synthesis can provide solutions by generating ample training data with corresponding ground truth labels. Despite recent advances, generated images demonstrate limited realism and diversity. In this work, we develop a flexible framework for simulating cardiac magnetic resonance (MR) images with variable anatomical and imaging characteristics for the purpose of creating a diversified virtual population. We advance previous works on both cardiac MR image simulation and anatomical modeling to increase the realism in terms of both image appearance and underlying anatomy. To diversify the generated images, we define parameters to alter the anatomy, to assign MR tissue properties to various tissue types, and to manipulate the image contrast via acquisition parameters.

The proposed framework is optimized to generate a substantial number of cardiac MR images with ground truth labels suitable for downstream supervised tasks. A database of virtual subjects is simulated and its usefulness for aiding a DL segmentation method is evaluated. Our experiments show that training completely with simulated images can perform comparable with a model trained with real images for heart cavity segmentation in mid-ventricular slices. Moreover, such data can be used in addition to classical augmentation for boosting the performance when training data is limited, particularly by increasing the contrast and anatomical variation, leading to better regularization and generalization.

The database is publicly available and the simulation code is public.
