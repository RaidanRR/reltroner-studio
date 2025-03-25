import Link from "next/link";
import Heading from "@/components/Heading";

export default function Home() {
  const posts = [
    {
      title: "World Building Basics",
      description: "Exploring the fundamentals of world-building for creative writing.",
      link: "/blog/worldbuilding",
      image: "/images/WorldBuilding.jpg"
    },
    {
      title: "Magic System: Astralis vs Nytherion",
      description: "Explore the core metaphysical conflict between creation and illusion in Asthortera.",
      link: "/blog/magic-system",
      image: "/images/magic-astralis-nytherion.webp"
    },
    {
      title: "Cultures & Civilizations",
      description: "Building realistic cultures and societies for your world.",
      link: "/blog/cultures-civilizations",
      image: "/images/culciv.webp"
    },
    {
      title: "Politics",
      description: "Understanding political systems and power dynamics in your world.",
      link: "/blog/politics",
      image: "/images/politics.webp"
    },
    {
      title: "Locations/Geography",
      description: "Designing immersive landscapes and geographic features.",
      link: "/blog/locations",
      image: "/images/locations.webp"
    },
    {
      title: "Events",
      description: "Creating impactful historical and future events for your world.",
      link: "/blog/events",
      image: "/images/events.webp"
    },
  ];

  return (
    <div className="p-5 bg-slate-100">
      <Heading>Home</Heading>
      <p className="mb-4 text-center font-bold">Welcome to the home page about world-building!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Link href={post.link} key={index} className="block h-full">
          <div className="flex flex-col justify-between h-full border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 min-h-[300px]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 flex-grow">{post.description}</p>
            </div>
          </div>
        </Link>        
        ))}
      </div>
    </div>
  );
}
