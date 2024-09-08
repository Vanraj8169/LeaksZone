import Button from "../components/Button";
import Input from "../components/Input";

const Home = () => {
  return (
    <div className="min-h-screen bg-black py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="gradient-text text-transparent text-3xl sm:text-4xl md:text-5xl font-semibold animate-gradient text-center">
          LeaksZone
        </h1>
        <div className="w-full max-w-3xl mx-auto py-10 sm:py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            <div className="w-full md:w-auto md:flex-grow">
              <Input />
            </div>
            <div className="w-full md:w-auto">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;