import Card from "./Card";

export default function Content() {
  return (
    <div className="flex flex-wrap gap-8 lg:gap-12 justify-evenly">
      <Card image="book-1" header="The Great Gatsby" price="21.99" />
      <Card image="book-2" header="Darius The Great Is N.." price="10.49" />
      <Card image="book-3" header="Brand New World" price="16.99" />
      <Card image="book-4" header="PSYCHO" price="21.99" />
      <Card image="book-5" header="Invisible Man" price="27.90" />
      <Card image="book-6" header="In Cold Blood" price="20.49" />
      <Card image="book-7" header="The Godfather" price="30.90" />
      <Card image="book-8" header="JAWS" price="39.99" />
    </div>
  );
}
