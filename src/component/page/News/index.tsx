import { useEffect, useState } from "react";
import Title from "../../common/Title";
import CommonCard from "../../common/Card";
import DialogBox from "../../common/Dialog";

export default function News() {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState <null | number>(null);

  type News = {
    source_id: string;
    height: number;
    image_url: string;
    title: string;
    description: string;
  };

  function fetchData() {
    fetch(
      "https://newsdata.io/api/1/latest?apikey=pub_451283201ce2fb51e1c0540248e89fa2fe0a7&q=pegasus&language=en"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      });
  }

  function handleOpenCard(index: number) {
    setSelectedCard(index);
  }
  
  function handleOnClose() {
    setSelectedCard(null);
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Title title="World daily news are here!" />
      <div className="min-h-screen grid grid-flow-row lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 p-10">
        {data.map((news: News, index: number) => (
          <CommonCard
            key={index}
            alt={news.source_id}
            height={200}
            imgUrl={news.image_url}
            title={news.title}
            description={news.description}
            onClick={() => handleOpenCard(index)}
          />
        ))}
      </div>
      {selectedCard && (
        <DialogBox
          onClick={handleOnClose}
          news={data[selectedCard]}
        />
      )}
    </>
  );
}
