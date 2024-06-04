import Card from "./Card";

export default function Content() {
  return (
    <div className="flex flex-wrap gap-2 lg:gap-4">
      <Card genre="Romance" />
      <Card genre="Mystery" />
      <Card genre="Fantasy" />
      <Card genre="Dark Fantasy" />
      <Card genre="Historical" />
      <Card genre="Sc-Fi" />
      <Card genre="Comedy" />
      <Card genre="Inspiring" />
      <Card genre="Culinary" />
      <Card genre="Adventure" />
      <Card genre="Action" />
      <Card genre="Biography" />
      <Card genre="Thriller" />
      <Card genre="Western" />
      <Card genre="Dystopian" />
      <Card genre="Horror" />
      <Card genre="Psychological" />
      <Card genre="Utopian" />
    </div>
  );
}
