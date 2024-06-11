import Card from "./Card";

export default function Content() {
  return (
    <div className="flex flex-wrap gap-8 lg:gap-12 justify-evenly">
      <Card image="book-9" header="The Great Gatsby" price="21.99" />
      <Card image="book-2" header="Darius The Great Is N.." price="10.49" />
      <Card image="book-3" header="Brand New World" price="16.99" />
      <Card image="book-4" header="PSYCHO" price="21.99" />
    </div>
  );
}
