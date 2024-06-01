import ContentPart from "./ContentPart";
import ImagePart from "./ImagePart";

export default function HomeSection() {
  return (
    <section className="min-h-[93dvh] grid lg:grid-cols-2 md:min-h-[90dvh] lg:min-h-[87dvh] gap-2 md:gap-12 lg:gap-0">
      <ContentPart />
      <ImagePart />
    </section>
  );
}
