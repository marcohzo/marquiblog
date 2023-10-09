import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3 class="font-bold text-3xl text-center text-gray-800">
        {greeting}! Thank you for visiting!
      </h3>
      <button
        onClick={() => setGreeting(randomMessage())}
        class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        New Greeting
      </button>
    </div>
  );
}
