export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 grid gap-6 text-center md:grid-cols-2 lg:gap-10 xl:gap-16 md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Meet the Team
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The university coding club team is passionate about technology and
            innovation.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2.5 items-center">
            <div className="rounded-full overflow-hidden shadow-lg h-24 w-24 mx-auto">
              <img
                alt="Alice Lee"
                height="96"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tighter">Alice Lee</h3>
            <p className="text-gray-500 dark:text-gray-400">President</p>
            <p className="text-sm/relaxed">
              Alice is passionate about creating inclusive communities in tech.
              She enjoys frontend development and is a fan of open source.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 items-center">
            <div className="rounded-full overflow-hidden shadow-lg h-24 w-24 mx-auto">
              <img
                alt="Bob Harris"
                height="96"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tighter">Bob Harris</h3>
            <p className="text-gray-500 dark:text-gray-400">Vice President</p>
            <p className="text-sm/relaxed">
              Bob loves solving problems with code. He is interested in
              cybersecurity and blockchain technology.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 items-center">
            <div className="rounded-full overflow-hidden shadow-lg h-24 w-24 mx-auto">
              <img
                alt="Ella Martinez"
                height="96"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tighter">
              Ella Martinez
            </h3>
            <p className="text-gray-500 dark:text-gray-400">Treasurer</p>
            <p className="text-sm/relaxed">
              Ella is a backend developer with a passion for data science. She
              enjoys organizing hackathons and tech events.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 items-center">
            <div className="rounded-full overflow-hidden shadow-lg h-24 w-24 mx-auto">
              <img
                alt="Max Turner"
                height="96"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tighter">Max Turner</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Events Coordinator
            </p>
            <p className="text-sm/relaxed">
              Max is a full-stack developer who loves building web applications.
              He is dedicated to bringing engaging workshops to the club.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
