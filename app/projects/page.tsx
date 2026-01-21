'use client';

import { useState } from 'react';

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const allProjectsData = [
    {
      title: 'Fine-Tuning Large Language Models (LLMs)',
      description: 'Fine-tuned various open-source LLMs including GPT2, Falcon, Qwen, and vision language models for domain-specific tasks. Implemented efficient fine-tuning techniques and optimization strategies.',
      tags: ['Python', 'LLMs', 'Transformers', 'Deep Learning'],
      link: '#'
    },
    {
      title: 'Large Language Model (LLM) from Scratch',
      description: 'Implemented a Large Language Model from scratch by covering every step from data preparation to pretrained model fine-tuning. Deep dive into attention mechanisms and transformer architecture.',
      tags: ['Python', 'Deep Learning', 'Attention', 'NLP'],
      link: '#'
    },
    {
      title: 'US Visa Approval Prediction using MLOps',
      description: 'Built an end-to-end MLOps pipeline to predict the approval status of US visa applications with automated deployment. Integrated CI/CD, containerization, and monitoring.',
      tags: ['MLOps', 'Docker', 'AWS', 'Machine Learning'],
      link: '#'
    },
    {
      title: 'Interactive ML Algorithm Visualizer',
      description: 'An interactive web application to help users understand and experiment with machine learning algorithms. Provides real-time visualizations and parameter adjustments.',
      tags: ['React', 'D3.js', 'ML', 'Web Development'],
      link: '#'
    },
    {
      title: 'Network Security - Malicious URL Detection using MLOps',
      description: 'Developed an end-to-end MLOps project to detect malicious URLs using ML techniques. Implemented robust pipelines for data ingestion, model training, and deployment.',
      tags: ['MLOps', 'Security', 'Machine Learning', 'Data Science'],
      link: '#'
    },
    {
      title: 'Customer Satisfaction Prediction using ZenML',
      description: 'Predicted customer satisfaction scores for future orders using historical e-commerce data. Leveraged multiple ML models like CatBoost and LightGBM within ZenML pipeline.',
      tags: ['ZenML', 'MLOps', 'Machine Learning', 'Analytics'],
      link: '#'
    },
    {
      title: 'Finetuning LLMs: Production Solution',
      description: 'Created a production-ready solution for fine-tuning Large Language Models. Implemented parameter-efficient methods and scaled the system for enterprise use.',
      tags: ['LLMs', 'Production', 'Python', 'MLOps'],
      link: '#'
    },
    {
      title: 'Deep Learning from Scratch',
      description: 'Comprehensive implementation of deep learning concepts from first principles. Built neural networks, CNNs, and RNNs without high-level frameworks.',
      tags: ['Deep Learning', 'Python', 'Neural Networks', 'Education'],
      link: '#'
    },
    {
      title: 'RAG System with Vector Databases',
      description: 'Built a Retrieval-Augmented Generation system using vector databases for semantic search and context retrieval. Enhanced LLM capabilities with external knowledge sources.',
      tags: ['RAG', 'LLMs', 'Vector DB', 'NLP'],
      link: '#'
    },
    {
      title: 'Time Series Forecasting with Deep Learning',
      description: 'Implemented LSTM and Transformer-based models for time series prediction. Applied to real-world datasets with preprocessing and evaluation metrics.',
      tags: ['Deep Learning', 'Time Series', 'LSTM', 'Python'],
      link: '#'
    },
    {
      title: 'Computer Vision: Image Classification Pipeline',
      description: 'End-to-end image classification system using CNNs. Includes data augmentation, transfer learning, and model optimization techniques.',
      tags: ['Computer Vision', 'CNN', 'TensorFlow', 'Python'],
      link: '#'
    },
    {
      title: 'Natural Language Processing: Sentiment Analysis',
      description: 'Built a sentiment analysis model using transformer architectures. Implemented data preprocessing, tokenization, and fine-tuning on custom datasets.',
      tags: ['NLP', 'Transformers', 'Sentiment Analysis', 'PyTorch'],
      link: '#'
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground">
        <div className="max-w-4xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <a href="/" className="text-xl md:text-2xl font-black tracking-wider hover:underline">MAYANK</a>
          <div className="flex gap-2 md:gap-4 text-xs md:text-sm font-semibold">
            <a href="/" className="uppercase hover:underline">Home</a>
            <a href="/projects" className="uppercase hover:underline border-b-2 border-foreground">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 border-b-2 border-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 md:mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-2">ALL PROJECTS</h1>
            <div className="w-12 md:w-16 h-1 bg-foreground"></div>
          </div>
          <p className="text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            A comprehensive collection of machine learning, deep learning, and software engineering projects showcasing expertise in AI/ML, MLOps, and production systems.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {allProjectsData.map((project, idx) => (
              <div
                key={idx}
                className="border-4 border-foreground overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="aspect-video bg-foreground flex items-center justify-center overflow-hidden relative">
                  <span className="text-background text-xs font-black uppercase tracking-wide">Project {idx + 1}</span>
                </div>
                <div className="p-4 md:p-6 border-t-4 border-foreground">
                  <h3 className="font-black text-base md:text-lg mb-2 md:mb-3 uppercase tracking-wide">{project.title}</h3>
                  <p className="text-xs md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs border border-foreground font-black uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 border-t-2 border-foreground border-b-2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black tracking-wide uppercase mb-4 md:mb-6">Interested in Collaborating?</h2>
          <p className="text-sm md:text-base font-medium max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, and opportunities to be part of your vision.
          </p>
          <button className="bg-foreground text-background border-2 border-foreground px-4 md:px-6 py-2 md:py-3 uppercase text-xs md:text-sm font-black hover:bg-background hover:text-foreground transition-colors">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 border-t-2 border-foreground">
        <div className="max-w-4xl mx-auto flex justify-center gap-6 md:gap-8 text-xs md:text-sm font-black uppercase">
          <a href="/" className="hover:underline">Home</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <div className="max-w-4xl mx-auto text-center mt-6 md:mt-8 text-xs font-semibold text-muted-foreground">
          © 2026 Mayank. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
