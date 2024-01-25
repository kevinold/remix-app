import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const resp =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
  
  const data = await resp.json()

  return data
}

export default function Index() {
  const todo = useLoaderData<typeof loader>()
  return (
    <div>
      <div>Todo: { todo.title }</div>
      <h1 className="text-3xl font-bold underline">Welcome to Remix</h1>
      <Button>Click me</Button>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
