import { RequestHandler } from "express";
import { readTestimonials, writeTestimonials } from "../data-store";

export const handleGetTestimonials: RequestHandler = (req, res) => {
  try {
    const testimonials = readTestimonials();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
};

export const handleCreateTestimonial: RequestHandler = (req, res) => {
  try {
    const testimonials = readTestimonials();
    const newTestimonial = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    testimonials.push(newTestimonial);
    writeTestimonials(testimonials);
    res.json(newTestimonial);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create testimonial' });
  }
};

export const handleUpdateTestimonial: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const testimonials = readTestimonials();
    const index = testimonials.findIndex((t: any) => t.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    
    testimonials[index] = { ...testimonials[index], ...req.body };
    writeTestimonials(testimonials);
    res.json(testimonials[index]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update testimonial' });
  }
};

export const handleDeleteTestimonial: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const testimonials = readTestimonials();
    const filtered = testimonials.filter((t: any) => t.id !== id);
    
    if (filtered.length === testimonials.length) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    
    writeTestimonials(filtered);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete testimonial' });
  }
};
