import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto mt-12 flex flex-col items-center justify-center">
      <form action="/api/pickle">
        <button type="submit">pickle me</button>
      </form>
    </div>
  );
}
