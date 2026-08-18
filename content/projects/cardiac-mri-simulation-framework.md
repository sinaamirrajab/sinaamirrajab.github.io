---
title: "Cardiac MRI Simulation Framework"
slug: "cardiac-mri-simulation-framework"
summary: "A framework for simulating cardiac MR images with variable anatomy and imaging characteristics for labelled virtual populations."
problem: "Deep-learning medical image analysis needs labelled data, but real labelled cardiac MR datasets are limited and often lack controlled variation."
contribution: "The project uses cardiac MR simulation and anatomical modelling to generate diverse virtual subjects with ground-truth labels for downstream segmentation tasks."
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

## Research Context

I list this project in my public CV as a cardiac MRI simulation framework for generating diversified virtual populations.

## Approach

The source abstract describes a flexible framework for simulating cardiac MR images with variable anatomical and imaging characteristics. The framework defines parameters to alter anatomy, assign MR tissue properties, and manipulate image contrast through acquisition parameters.

## Evaluation Context

The public description reports evaluation through a downstream heart-cavity segmentation task in mid-ventricular slices. It states that simulated data can support training when labelled real data is limited, particularly by increasing contrast and anatomical variation.
