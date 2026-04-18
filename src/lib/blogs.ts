export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  imageUrl: string;
  body: string[];
  takeaways: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-regular-dental-cleanings-matter",
    title: "Why Regular Dental Cleanings Matter More Than Most People Think",
    category: "Preventive Care",
    date: "April 2026",
    readTime: "4 min read",
    excerpt:
      "Professional cleanings do much more than polish teeth. They help prevent gum disease, detect early issues, and keep treatment simpler over time.",
    imageUrl:
      "/blog_1.png",
    body: [
      "Routine dental cleaning removes plaque and tartar that brushing at home cannot fully reach. That alone can reduce the risk of cavities and gum inflammation significantly.",
      "Cleanings are also an early-warning visit. Your dentist can spot tiny cracks, inflamed gums, and early decay before they become expensive or painful problems.",
      "For most patients, regular preventive visits are the easiest way to keep treatment simple, comfortable, and affordable over the long term.",
    ],
    takeaways: [
      "Prevents gum disease and cavities",
      "Supports fresher breath and healthier gums",
      "Helps catch problems early",
    ],
  },
  {
    slug: "invisible-aligners-vs-braces",
    title: "Invisible Aligners vs Braces: Which Treatment Fits You Best?",
    category: "Orthodontics",
    date: "April 2026",
    readTime: "5 min read",
    excerpt:
      "Both aligners and braces can straighten teeth, but the right choice depends on your bite, lifestyle, and how complex the movement is.",
    imageUrl:
      "/blog_2.png",
    body: [
      "Invisible aligners are popular because they are removable and discreet. They work especially well for mild to moderate alignment concerns.",
      "Braces can be better for more complex bite corrections or when precise control is needed. They stay working all day without needing patient removal.",
      "A proper consultation matters most. The best option is the one that matches your dental goals, daily routine, and treatment complexity.",
    ],
    takeaways: [
      "Aligners suit many aesthetic cases",
      "Braces can be better for complex corrections",
      "A dentist should guide the final choice",
    ],
  },
  {
    slug: "how-dental-implants-restore-confidence",
    title: "How Dental Implants Restore Confidence and Function",
    category: "Restorative Care",
    date: "April 2026",
    readTime: "4 min read",
    excerpt:
      "Implants are one of the most natural-feeling ways to replace missing teeth and bring back chewing comfort and smile confidence.",
    imageUrl:
      "/blog_3.png",
    body: [
      "A dental implant replaces the root of a missing tooth with a stable post placed in the jawbone. This creates a strong base for a crown.",
      "Unlike removable options, implants are designed to feel secure and natural. They help preserve facial structure and maintain better chewing ability.",
      "For many patients, the biggest benefit is emotional as well as functional: confidence returns when their smile feels complete again.",
    ],
    takeaways: [
      "Feels close to a natural tooth",
      "Supports chewing and speech",
      "Can improve long-term confidence",
    ],
  },
  {
    slug: "pediatric-dentistry-healthy-habits",
    title: "Pediatric Dentistry: Building Healthy Habits Early",
    category: "Kids Dental Care",
    date: "March 2026",
    readTime: "3 min read",
    excerpt:
      "Children do best when dental care starts early and stays positive. Preventive visits can shape lifelong oral health habits.",
    imageUrl:
      "/blog_4.png",
    body: [
      "Pediatric visits are designed to be calm, friendly, and preventive. They help children get comfortable with the clinic environment early.",
      "Regular checkups allow dentists to guide brushing habits, monitor tooth development, and treat cavities before they spread.",
      "When children learn that dental visits are safe and routine, they are more likely to maintain better oral hygiene as adults.",
    ],
    takeaways: [
      "Creates positive early dental experiences",
      "Helps prevent future problems",
      "Supports healthy habits at home",
    ],
  },
  {
    slug: "what-to-do-in-a-dental-emergency",
    title: "What to Do in a Dental Emergency Before You Reach the Clinic",
    category: "Emergency Care",
    date: "March 2026",
    readTime: "4 min read",
    excerpt:
      "Knowing the first few steps after sudden pain, trauma, or a broken tooth can protect the area until you get professional care.",
    imageUrl:
      "/blog_5.png",
    body: [
      "In a dental emergency, the first step is to stay calm and avoid putting pressure on the area. If a tooth is knocked out, handle it by the crown rather than the root.",
      "A cold compress can help with swelling, and over-the-counter pain relief may be used if appropriate. But quick professional attention is still the priority.",
      "The faster you act, the better the chance of saving a tooth or reducing complications. Emergency dental care is about preventing further damage.",
    ],
    takeaways: [
      "Stay calm and protect the area",
      "Use a cold compress for swelling",
      "Seek urgent dental help quickly",
    ],
  },
  {
    slug: "cosmetic-dental-treatments-that-make-a-difference",
    title: "Cosmetic Dental Treatments That Make a Real Difference",
    category: "Cosmetic Dentistry",
    date: "March 2026",
    readTime: "5 min read",
    excerpt:
      "Whitening, veneers, and smile design can improve how teeth look, but they work best when planned around oral health first.",
    imageUrl:
      "/blog_6.png",
    body: [
      "Cosmetic dentistry is not only about appearance. The best results happen when aesthetics and function are balanced together.",
      "Treatments like whitening and veneers can create a brighter smile, but planning, shade selection, and tooth health are all important.",
      "A thoughtful cosmetic plan should improve confidence while still supporting long-term dental stability.",
    ],
    takeaways: [
      "Cosmetic care should respect tooth health",
      "Shade and shape planning matter",
      "Results should look natural and confident",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
