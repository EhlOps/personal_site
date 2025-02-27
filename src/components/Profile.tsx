import Image from "next/image";
import sam from "../public/sam.png";

export default function Profile() {
  return (
    <>
      <section className="flex flex-col items-center py-10">
        <div className="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-5 overflow-hidden">
          <Image src={sam} alt="Profile Photo" />
        </div>
        <h1 className="text-xl mb-2">Sam Ehlers</h1>
        <p className="text-center text-gray-600 max-w-lg">
          Super nerd with a passion for solving only the most complex, intricate
          problems. I enjoy learning new technologies, playing piano, and
          spending time with my girlfriend and dog.
        </p>
      </section>
    </>
  );
}
