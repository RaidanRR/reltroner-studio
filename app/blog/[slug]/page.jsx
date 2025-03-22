import Heading from "@/components/Heading";
import { getPost } from "@/lib/post";

export default async function Basic({ params: { slug } }) {
    const post = await getPost(slug);

    return (
        <div>
            <Heading>{post.title}</Heading>
            <p className="text-sm text-gray-500">{post.description}</p>
            <p className="italic text-sm pb-2">
                {post.date} - {post.published ? 'Published' : 'Draft'}
            </p>

            <div className="flex gap-5">
                <a href="https://www.coursera.org/specializations/web-development" target="_blank" rel="noreferrer">Coursera</a><br />
                <a href="https://www.udemy.com/course/the-complete-web-developer-bootcamp/" target="_blank" rel="noreferrer">Udemy</a><br />
                <a href="https://www.youtube.com/watch?v=4tqhcEr彡0&list=PLTjRvDozrdlxnqTj7BQWwB2vqHx16B1Vq" target="_blank" rel="noreferrer">YouTube</a><br />
                <a href="https://github.com/bradtraversy/proshop_mern" target="_blank" rel="noreferrer">GitHub</a><br />
                <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">W3Schools</a>
            </div>

            {/* Gambar Dinamis dari Metadata Markdown */}
            <img src={post.image} alt={post.title} width={640} height={400} className="mb-3"/>

            <article dangerouslySetInnerHTML={{ __html: post.html }} className="max-w-screen-sm prose prose-slate"/>
        </div>
    );
}
