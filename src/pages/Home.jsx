import { useState, useRef } from "react";
import { Copy } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import loader from "../assets/loader.svg";

const Home = () => {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const urlInputRef = useRef(null);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const replaceDomain = (url, newDomain) => {
    const parsedUrl = new URL(url);
    parsedUrl.hostname = newDomain;
    return parsedUrl.toString();
  };

  const createURL = async () => {
    setIsFetching(true);
    setError("");
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL,
        {
          title: "LeaksZone",
          url: search,
          background: import.meta.env.VITE_IMG_URL,
          sub_id: import.meta.env.VITE_SUB_ID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        }
      );
      const finalUrl = replaceDomain(
        response.data.message[0].full_short,
        "leakszone.online"
      );
      setUrl(finalUrl);
    } catch (error) {
      console.log(`Error: ${error}`);
      setError(error.message);
    } finally {
      setSearch("");
      setIsFetching(false);
    }
  };

  const handleButtonClick = () => {
    if(search.trim() === ""){
      setError("Search field cannot be empty");
      return ;
    }
   createURL();
  };

  const handleCopyClick = () => {
    urlInputRef.current.select();
    document.execCommand("copy");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-black py-6 sm:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col gap-4 items-center">
        <h1 className="gradient-text text-transparent text-3xl sm:text-4xl md:text-5xl font-semibold animate-gradient text-center">
          LeaksZone
        </h1>
        <div className="w-full max-w-3xl mx-auto py-10 sm:py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            <div className="w-full md:w-auto md:flex-grow">
              <Input value={search} onChange={handleInputChange} />
            </div>
            <div className="w-full md:w-auto">
              <Button onClick={handleButtonClick} />
            </div>
          </div>
        </div>
      </div>

      {isFetching && (
        <div className="flex justify-center">
          <img src={loader} alt="loader" className="h-20 w-20 object-contain" />
        </div>
      )}

      {error && (
        <p className="font-inter font-bold text-white text-center mt-4">
          Well, that wasn't supposed to happen...
          <br />
          <span className="font-satoshi font-normal text-gray-400">
            {error}
          </span>
        </p>
      )}

      {url && !isFetching && !error && (
        <div className="mt-6 w-full max-w-3xl mx-auto">
          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              ref={urlInputRef}
              type="text"
              value={url}
              readOnly
              className="flex-grow bg-transparent text-white px-4 py-2 focus:outline-none"
            />
            <button
              onClick={handleCopyClick}
              className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors duration-200 flex items-center"
            >
              <Copy size={18} className="mr-2" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
