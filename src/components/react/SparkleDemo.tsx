import { SparklesCore } from "./aceternityui/Sparkle";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";

export function SparklesPreview() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start overflow-hidden rounded-md pt-20">
      <div className="relative z-30 mb-8">
        <h1 className="text-5xl font-bold text-center text-white">
          My Projects
        </h1>
      </div>
      <div className="w-[40rem] h-40 relative mb-8">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      {/* CardHoverEffectDemo Component */}
      <div className="relative z-20 w-full mx-auto">
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}
