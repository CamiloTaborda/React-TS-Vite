import { useEffect, useRef, useState } from "react";

type Props = { image: string}

export const LazyImage = ({image}: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSrc(image);
        }
    })
  })
  if (node.current) {
    observer.observe(node.current) 
  }

  return () => {
    observer.disconnect();
  }
  }, [image]);

    return (
      <img
       ref={node} 
       src={src}/>
    )
}


