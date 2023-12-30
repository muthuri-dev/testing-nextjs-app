"use client";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h4>Hello world</h4>
      <Button onClick={() => console.log("clicked")}>Click me</Button>
    </main>
  );
}
