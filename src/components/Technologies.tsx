import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

import type { Technology } from "../types/technology";

function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load technologies from public/data.json
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to load technology data.");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load technologies.");
        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add / Replace technology
  //   const handleAddToStack = (technology: Technology) => {
  //     setStack((currentStack) => {
  //       const alreadySelected = currentStack.some(
  //         (item) => item.id === technology.id,
  //       );

  //       if (alreadySelected) {
  //         toast.info(`${technology.name} is already in your stack.`);
  //         return currentStack;
  //       }

  //       const categoryAlreadySelected = currentStack.some(
  //         (item) => item.category === technology.category,
  //       );

  //       if (categoryAlreadySelected) {
  //         const previousTechnology = currentStack.find(
  //           (item) => item.category === technology.category,
  //         );

  //         toast.success(
  //           `${previousTechnology?.name} replaced with ${technology.name}.`,
  //         );
  //       } else {
  //         toast.success(`${technology.name} added to your stack.`);
  //       }

  //       const filteredStack = currentStack.filter(
  //         (item) => item.category !== technology.category,
  //       );

  //       return [...filteredStack, technology];
  //     });
  //   };
  const handleAddToStack = (technology: Technology) => {
    const alreadySelected = stack.some((item) => item.id === technology.id);

    if (alreadySelected) {
      toast.info(`${technology.name} is already in your stack.`);
      return;
    }

    const previousTechnology = stack.find(
      (item) => item.category === technology.category,
    );

    if (previousTechnology) {
      toast.success(
        `${previousTechnology.name} replaced with ${technology.name}.`,
      );
    } else {
      toast.success(`${technology.name} added to your stack.`);
    }

    setStack((currentStack) => {
      const filteredStack = currentStack.filter(
        (item) => item.category !== technology.category,
      );

      return [...filteredStack, technology];
    });
  };
  // Remove one technology
  const handleRemove = (id: string) => {
    const removedTechnology = stack.find((item) => item.id === id);

    if (!removedTechnology) {
      return;
    }

    toast.info(`${removedTechnology.name} removed from your stack.`);

    setStack((currentStack) => currentStack.filter((item) => item.id !== id));
  };
  // Remove all technologies
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.info("Your stack is already empty.");
      return;
    }

    setStack([]);

    toast.success("All technologies removed from your stack.");
  };

  if (loading) {
    return (
      <section id="technologies" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm text-slate-400">Loading technologies...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="technologies" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="technologies" className="bg-white py-16">
      <div className="mx-auto container px-4">
        {/* Heading */}
        <div>
          <h2 className="text-6xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="my-3 text-md text-slate-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid items-start gap-5 lg:grid-cols-[1fr_350px]">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const isSelected = stack.some(
                (item) => item.id === technology.id,
              );

              const categorySelected = stack.some(
                (item) => item.category === technology.category,
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAddToStack}
                  isSelected={isSelected}
                  categorySelected={categorySelected}
                />
              );
            })}
          </div>

          {/* Your Stack */}
          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}

export default Technologies;
