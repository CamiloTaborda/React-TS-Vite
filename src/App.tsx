import type { MouseEventHandler } from "react";
import { useState } from "react";
import { LazyImage } from "./Components/RandomFox"

type ImagesItem = { id: string, url: string };
const generateId = () => Math.random().toString(36).substr(2, 9);

const App = () => {
  const random = () => Math.floor(Math.random() * 123) + 1;

  const [images, setImages] = useState<Array<ImagesItem>>([]);

 const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
  event.preventDefault();

  const newImageItem = {
    id: generateId(),
    url: `https//randomfox.ca/images/${random()}.jpg`
  }

  setImages ([
    ...images,
    newImageItem
  ])
 }

  return (
   <div>
    <h1>Hello, World!</h1>
    {
      images.map(({ id, url }) => (
        <div key={id}>
          <LazyImage image={url}/>
        </div>
      ))
    }
    <button onClick={addNewFox}>Add new fox</button>
   </div>
  )
}

export default App
