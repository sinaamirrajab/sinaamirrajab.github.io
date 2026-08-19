---
title: "Brain MR Image Simulation for Deep Learning Based Medical Image Analysis Networks"
slug: "brain-mri-simulation-framework"
summary: >-
  Training and validating deep-learning medical image analysis needs large
  annotated MRI datasets, and existing brain simulation data is limited in
  anatomical variety, tissue classes, and overall realism. This work
  proposes a realistic simulation framework combining patient-specific
  phantoms with Bloch-equation analytical solutions for fast, accurate MRI
  simulation, with ground-truth labels derived automatically from
  open-source high-resolution T1-weighted MRI via an automated brain
  classification tool. The framework generates 3D brain MRI across variable
  anatomy, sequence, contrast, SNR, and resolution, and a 3D brain
  segmentation network trained purely on this simulated data reached Dice
  scores of 0.818 to 0.832 on the real MRBrainS18 challenge dataset and
  0.901 to 0.939 on OASIS data, closely matching the established FSL
  toolkit despite never training on a real image. This is an initial step
  toward physics-based MRI generation for training deep learning models
  without real annotated data.
year: 2024
status: "completed"
tags:
  - simulation
  - mri
  - synthetic-data
paperUrl: "https://doi.org/10.1016/j.cmpb.2024.108115"
related:
  projects:
    - cardiac-mri-simulation-framework
draft: false
---

## Abstract

Background and objective: As large sets of annotated MRI data are needed for training and validating deep learning based medical image analysis algorithms, the lack of sufficient annotated data is a critical problem. A possible solution is the generation of artificial data by means of physics-based simulations. Existing brain simulation data is limited in terms of anatomical models, tissue classes, fixed tissue characteristics, MR sequences and overall realism.

Methods: We propose a realistic simulation framework by incorporating patient-specific phantoms and Bloch equations-based analytical solutions for fast and accurate MRI simulations. A large number of labels are derived from open-source high-resolution T1w MRI data using a fully automated brain classification tool. The brain labels are taken as ground truth (GT) on which MR images are simulated using our framework. Moreover, we demonstrate that the T1w MR images generated from our framework along with GT annotations can be utilized directly to train a 3D brain segmentation network. To evaluate our model further on a larger set of real multi-source MRI data without GT, we compared our model to existing brain segmentation tools, FSL-FAST and SynthSeg.

Results: Our framework generates 3D brain MRI for variable anatomy, sequence, contrast, SNR and resolution. The brain segmentation network for WM/GM/CSF trained only on T1w simulated data shows promising results on real MRI data from the MRBrainS18 challenge dataset with Dice scores of 0.818/0.832/0.828. On OASIS data, our model exhibits performance close to FSL, both qualitatively and quantitatively, with Dice scores of 0.901/0.939/0.937.

Conclusions: Our proposed simulation framework is an initial step towards achieving truly physics-based MRI image generation for training deep learning models without real annotated data.
