import { BookOpen, Sparkles } from "lucide-react";
import { coverStyles } from "@/lib/data";
import { assetPath } from "@/lib/paths";

type Props = {
  title: string;
  category: string;
  image?: string;
  index?: number;
  large?: boolean;
};

export function BookCover({ title, category, image, index = 0, large = false }: Props) {
  if (image) {
    return (
      <div className={`relative overflow-hidden rounded-lg border border-white/10 bg-white/5 ${large ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
        <img src={assetPath(image)} alt={`${title} cover`} className="h-full w-full object-cover" />
      </div>
    );
  }

  const gradient = coverStyles[index % coverStyles.length];
  return (
    <div className={`relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br ${gradient} ${large ? "aspect-[4/5]" : "aspect-[3/4]"} shadow-glow`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_24%),linear-gradient(135deg,rgba(0,0,0,0.08),rgba(0,0,0,0.5))]" />
      <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-white/15 p-2 backdrop-blur">
        <Sparkles className="h-5 w-5 text-white" />
      </div>
      <div className="absolute inset-x-5 bottom-5">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-black/25 backdrop-blur">
          <BookOpen className="h-5 w-5 text-white" />
        </div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">{category}</p>
        <h3 className="text-balance text-xl font-semibold leading-tight text-white">{title}</h3>
      </div>
    </div>
  );
}
