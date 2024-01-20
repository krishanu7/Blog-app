const HomePosts = () => {
    return (
      <div className="w-full mt-8 px-4 md:space-x-4 md:flex md:flex-row">
        {/* Left */}
        <div className="w-[90%] sm:w-[60%] md:w-[40%] md:order-first md:flex-shrink-0 flex mx-auto my-auto">
          <img
            src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg"
            alt=""
            className="w-full h-[200px] object-cover"
          />
        </div>
  
        {/* Right */}
        <div className="w-full md:w-[60%] md:order-last md:flex-grow md:flex md:flex-col mt-3 md:mt-0">
          <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            10 Uses of Artificial Intelligence in Day to Day Life
          </h1>
          <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
            <p>@krishanudev</p>
            <div className="flex space-x-2 text-sm text-gray-500">
              <p>19/01/2024</p>
              <p>18:25</p>
            </div>
          </div>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            maxime dolorum eius, ullam neque quibusdam animi, tempore doloremque
            iure suscipit harum quia, velit dolorem vel recusandae esse ducimus
            numquam commodi.
          </p>
        </div>
      </div>
    );
  };
  
  export default HomePosts;
  