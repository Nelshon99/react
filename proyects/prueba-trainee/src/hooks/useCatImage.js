import { useEffect, useState } from "react";

export function useCatImage({ fact }) {
  const [imgUrl, setImgUrl] = useState();
  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ", 1).join();
    console.log(firstWord);
    fetch(
      `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        console.log(response);
        setImgUrl(url);
      });
  }, [fact]);
  return { imgUrl };
}
