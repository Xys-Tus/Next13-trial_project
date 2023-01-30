import Link from "next/link";
import Image from "next/image";

export default function Movie({ id, title, poster_path, release_data }) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  console.log(imgPath);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_data}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imgPath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}
