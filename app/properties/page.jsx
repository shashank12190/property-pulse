import React from "react";
import PropertyCard from "../../components/PropertyCard";

const PropertiesPage = async () => {
  async function fetchProperties() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }
  const properties = await fetchProperties();

  // sort properties by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {properties.slice.length === 0 ? (
            <p>No Properties Found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {properties.map((property) => (
                <>
                  <PropertyCard key={property._id} property={property} />
                </>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
