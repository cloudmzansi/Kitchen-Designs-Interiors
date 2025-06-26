# Project Plan: KD Interiors Website

This document outlines the structure and key components of the KD Interiors website.

## 1. Global Components

### 1.1. Header (`src/components/Header.tsx`)
- **Navigation:** Home, About Us, Services (dropdown), Contact.
  - "About Us" and "Contact" are anchor links to sections on the homepage.
  - "Services" is a dropdown menu with links to the individual service pages.
- **Contact Information:** Displays the business phone number (`+27 79 935 2223`).
- **Call-to-Action:** "Get Free Quote" button, which links to the contact section on the homepage.

### 1.2. Footer (`src/components/Footer.tsx`)
- **About:** Brief company description with the new location (Cape Town & Surrounding Areas).
- **Services:** Lists the four main specialties: Kitchen Renovations, Bedroom Solutions, Bathroom Renovations, and Commercial Interiors.
- **Contact Information:** Displays the business address (Cape Town & Surrounding Areas), phone number, and email.

## 2. Pages

### 2.1. Home (`src/pages/Home.tsx`)
- **Hero Section:** Full-screen background image with a prominent headline and CTA buttons.
- **About Us Section:** Two-column layout with text on the left and an image on the right.
- **Why Choose Us Section:** Highlights key benefits of working with KD Interiors.
- **Specialties Section:** A 2x2 grid displaying the four main service areas with clickable images.
- **Process Section:** Outlines the company's four-step working process.
- **Testimonials Section:** Showcases client feedback.
- **Contact Section:** A comprehensive contact form and contact details.

### 2.2. Service Pages
- `src/pages/Kitchens.tsx`
- `src/pages/Bedrooms.tsx`
- `src/pages/Bathrooms.tsx`
- `src/pages/Commercial.tsx`

Each service page includes:
- A hero section with a title and brief description.
- A gallery of related projects that can be filtered by category.
- A list of features and services offered.
- Client testimonials.
- A call-to-action section.

## 3. SEO & Best Practices
- **Semantic HTML:** The codebase uses semantic HTML5 tags (`<header>`, `<footer>`, `<section>`, `<nav>`) for better structure and accessibility.
- **Meta Tags:** The `index.html` file includes a descriptive title and meta description with relevant keywords for the Cape Town area.
- **Alt Text:** All images have descriptive alt text for screen readers and SEO.
- **Heading Structure:** The pages use a logical heading structure (H1-H3) to organize content.

## 4. Site-wide Updates Implemented
- **Phone Number:** Updated to `+27 79 935 2223` across the entire site.
- **Location:** Updated to "Cape Town & Surrounding Areas" across the entire site.
- **Navigation:** The main menu has been updated and "Portfolio" has been removed. The "About Us" and "Contact" links now point to sections on the homepage.
- **Homepage:** The "Need Immediate Assistance?" section has been removed, and the layout of several sections has been updated as per the requirements. 