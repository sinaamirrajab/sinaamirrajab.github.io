---
title: "Simulation and Synthesis for Cardiac Magnetic Resonance Image Analysis"
slug: "cardiac-mri-simulation-synthesis-phd"
summary: >-
  My PhD thesis, defended at Eindhoven University of Technology within the
  OpenGTN Marie Curie ITN-EID project under Prof. Dr. Ir. Marcel Breeuwer,
  develops methods for generating realistic cardiac MR images with
  corresponding ground-truth labels for supervised segmentation, addressing
  the scarcity of labelled cardiac MRI data. It connects two directions:
  physics-driven image simulation grounded in MR image-formation physics and
  the Bloch equations, published as a flexible framework for simulating
  cardiac MR images with variable anatomy and contrast, and data-driven
  image synthesis using conditional deep generative models, published as a
  label-conditional GAN framework and a VAE-based pathology synthesis
  method. Across both directions, the thesis shows that simulated and
  synthesized training data can match or improve the performance of
  deep-learning segmentation models trained on real data alone, particularly
  under limited or homogeneous training sets.
period: "2018 - 2023"
paperUrl: "https://research.tue.nl/en/publications/simulation-and-synthesis-for-cardiac-magnetic-resonance-image-ana"
status: "completed"
tags:
  - cardiac-mri
  - mri
  - simulation
  - synthetic-data
  - segmentation
  - medical-imaging
draft: false
---

## About this thesis

My PhD thesis is titled "Realistic Cardiovascular Magnetic Resonance Image Simulation and Synthesis for Medical Image Analysis," defended on 20 April 2023 at the Department of Biomedical Engineering, Eindhoven University of Technology, under supervisor Prof. Dr. Ir. Marcel Breeuwer, as part of the OpenGTN Marie Curie ITN-EID project.

The university's research portal does not publish a formal abstract for the thesis itself, so this description is built from the thesis's two connected, separately published research directions rather than a single quoted abstract.

## Two connected directions

**Physics-driven simulation.** Grounded in MR image-formation physics and the Bloch equations, this direction produced a flexible framework for simulating cardiac MR images with variable anatomical and imaging characteristics, letting a large, diversified virtual population of labelled subjects be generated for downstream segmentation training. See [Cardiac MRI Simulation Framework](/projects/cardiac-mri-simulation-framework).

**Data-driven synthesis.** Using conditional deep generative models, this direction produced a mask-conditional GAN for translating segmentation labels into realistic cardiac images, and a VAE-based method for synthesizing 3D-consistent subjects with plausible heart pathologies. See [Conditional Cardiac MR Image Synthesis](/projects/conditional-cardiac-mr-image-synthesis) and [Cardiac Pathology Synthesis](/projects/cardiac-pathology-synthesis).

## Why it matters

Across both directions, the thesis's consistent finding is that simulated and synthesized cardiac MR data, used either as a replacement for or augmentation to real data, can match or improve deep-learning segmentation performance, particularly when real labelled data is limited, homogeneous, or drawn from only one scanner vendor.
