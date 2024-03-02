import { useEffect, useState } from "react";
import './styles.css'
export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  async function fetchData(getUrl) {
    try {
      setLoad(true);
      const itemList = await fetch(getUrl).then((res) => res.json());
      if (Object.keys(itemList).length) {
        setData(itemList.products);
        setLoad(false);
      }
    } catch (e) {
      console.error();
      console.log("url not found oops!");
    }
  }
  function handelScrollPercentage() {
    const scrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    const totalScreen =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentage = (scrolled / totalScreen) * 100;
    setScrollPercentage(percentage);
  }
  console.log(scrollPercentage);
  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handelScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div className="top-container">
        <h1>custom scroll indicator</h1>
        <div className="scroll-progerss-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%`}}
          >
          </div>
        </div>
      </div>

      <div className="products">
        {load && <p>Loading.... please wait</p>}
        {data.map((list) => (
          <p>{list.title}</p>
        ))}
      </div>
    </div>
  );
}
