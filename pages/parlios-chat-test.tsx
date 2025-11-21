import type { NextPage } from "next";
import ParliosChatWidgetNext from "../components/ParliosChatWidgetNext";

const ParliosChatTestPage: NextPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-4xl p-4">
        <ParliosChatWidgetNext />
      </div>
    </main>
  );
};

export default ParliosChatTestPage;
