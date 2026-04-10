import { sanityClient } from "./sanity";

export async function fetchServices() {
  return sanityClient.fetch(
    `*[_type == "service"] | order(order asc) { _id, title, description, icon, order }`
  );
}

export async function fetchTestimonials() {
  return sanityClient.fetch(
    `*[_type == "testimonial"] | order(order asc) { _id, name, text, order }`
  );
}

export async function fetchAboutSection() {
  return sanityClient.fetch(
    `*[_type == "aboutSection"][0] { _id, title, image, paragraphs }`
  );
}

export async function fetchContactInfo() {
  return sanityClient.fetch(
    `*[_type == "contactInfo"][0] { _id, title, email, phones, location }`
  );
}

export async function fetchHeroSlides() {
  return sanityClient.fetch(
    `*[_type == "heroSlide"] | order(order asc) { _id, title, image, order }`
  );
}

export async function fetchBlogPosts() {
  return sanityClient.fetch(
    `*[_type == "blogPost"] | order(date desc) { _id, title, slug, excerpt, image, date, category }`
  );
}

export async function fetchBlogPost(slug: string) {
  return sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] { _id, title, slug, excerpt, image, date, category, contentParagraphs }`,
    { slug }
  );
}

export async function fetchPortfolioItems() {
  return sanityClient.fetch(
    `*[_type == "portfolioItem"] | order(_createdAt desc) { _id, title, slug, category, coverImage, height, albumImages }`
  );
}

export async function fetchPortfolioItem(slug: string) {
  return sanityClient.fetch(
    `*[_type == "portfolioItem" && slug.current == $slug][0] { _id, title, slug, category, coverImage, height, albumImages }`,
    { slug }
  );
}
