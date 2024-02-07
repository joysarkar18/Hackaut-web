import { TeamCard } from "./TeamCard";
export const Teams = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-blue-50">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block text-2xl px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-blue-400">
          Team Members
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          Our team members bring a wealth of expertise, enthusiasm, and
          creativity to the Hackaut Coding Club.
        </p>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg flex justify-content-center">
        <TeamCard name="Joy Sarkar" role="Hackaut Lead" />
        <TeamCard name="Dilip Sarkar" role="Hackaut Co-Lead" />
        {/* <TeamCard name="Joy Sarkar" role="Hackaut Lead" />
        <TeamCard name="Dilip Sarkar" role="Hackaut Co-Lead" /> */}
      </div>
    </div>
  );
};
