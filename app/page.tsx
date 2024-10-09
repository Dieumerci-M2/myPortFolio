import Image from "next/image";
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main className="w-full">
      <div className="w-72 p-2 flex h-screen flex-col gap-6 justify-center items-center m-auto">
        <span>Authentification</span>
        <Input type="password" placeholder="Password" className="w-full" />
      </div>
    </main>
  );
}
