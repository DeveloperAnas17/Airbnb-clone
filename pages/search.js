import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, noofGuest, startDate, endDate } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd/MMM/yy");
  const formattedEndDate = format(new Date(endDate), "dd/MMM/yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen ">
      <Header placeholder={`${location} | ${range} | ${noofGuest}`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">
            300+ - {range} - Stays for {noofGuest} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mt-3 mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                star={item.star}
                price={item.price}
                total={item.total}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[660px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
