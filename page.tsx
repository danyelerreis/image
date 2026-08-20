import { Template } from "../components/Template"
import { ImageCard } from "../components/image";

export default function Galeria() {
  return (
    <main>
      <Template>
        <h1></h1>
        <select className="grid grid-cols-3 gap-8">
          <ImageCard/>
        </select>
      </Template>
    </main>
  );
}