import { Template, ImageCard} from './components';

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