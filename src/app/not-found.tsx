import LetterGlitch from "@/components/ui/LetterGlitch";

export default function NotFound() {
  return (
    <div className="h-screen">
      <LetterGlitch
        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
    </div>
  )
}
