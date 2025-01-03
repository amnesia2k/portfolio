// async function getProjects() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`);
//   if (!res.ok) throw new Error("Failed to fetch projects");
//   return res.json();
// }

import Hero from "@/components/Hero";

export default async function Home() {
  // const projects = await getProjects();
  // console.log(projects);

  return (
    <div>
      <Hero />
    </div>
  );
}
