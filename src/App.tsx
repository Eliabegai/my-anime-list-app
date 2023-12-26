import { Header } from "./components/Header";

import { listAnimes } from './anime-list'
import { Card } from "./components/Card";

export default function App() {

  return (
    <div>
      <Header />

      <section>
    <div className="flex w-full flex-wrap h-[95vh] bg-gray-800 text-white justify-center items-center border-2 border-green-200 gap-1 overflow-auto p-2">
      
      {
        listAnimes.map((i, index) => (
          <Card
            key={i.id}
            name={i.name}
            chapter={i.chapter}
            status={i.status}
            image={i.image}
            type={i.type}
            scans={i.scans}
          />
        ))
      }

    </div>

      </section>
    </div>
  );
}