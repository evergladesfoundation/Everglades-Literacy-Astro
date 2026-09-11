export type Lesson = {
  slug: string;
  title: string;
  grade: string;
  summary: string;
  tags: string[];
};

export const lessons: Lesson[] = [
  {
    slug: "everglades-safari",
    title: "Everglades Safari",
    grade: "Kindergarten",
    summary: "Students explore habitats, animals, and water as they take a first look at the River of Grass.",
    tags: ["habitats", "animals", "water"],
  },
  {
    slug: "habitat-heroes",
    title: "Habitat Heroes",
    grade: "1st Grade",
    summary: "Young scientists compare Everglades habitats and the plants and animals that depend on them.",
    tags: ["habitats", "plants", "animals"],
  },
  {
    slug: "keystone-species",
    title: "Keystone Species",
    grade: "2nd Grade",
    summary: "Learners discover how alligators, wading birds, and other keystone species shape the ecosystem.",
    tags: ["wildlife", "food webs"],
  },
  {
    slug: "botany-and-beyond",
    title: "Botany & Beyond",
    grade: "3rd Grade",
    summary: "A plant-focused look at sawgrass, tree islands, and the hydrology that keeps the marsh alive.",
    tags: ["plants", "hydrology"],
  },
  {
    slug: "water-everywhere",
    title: "Water Everywhere",
    grade: "4th Grade",
    summary: "Students trace sheet flow from Lake Okeechobee through sloughs, wetlands, and coastal estuaries.",
    tags: ["water", "hydrology", "maps"],
  },
  {
    slug: "restoration-in-action",
    title: "Restoration in Action",
    grade: "8th Grade",
    summary: "Middle schoolers connect science, civics, and restoration projects underway across South Florida.",
    tags: ["restoration", "civics", "STEM"],
  },
];

export function searchLessons(query: string): Lesson[] {
  const needle = query.trim().toLowerCase();
  if (!needle) {
    return lessons;
  }

  return lessons.filter((lesson) => {
    const haystack = [
      lesson.title,
      lesson.grade,
      lesson.summary,
      ...lesson.tags,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
}
