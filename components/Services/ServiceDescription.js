import React from "react";

const ServiceDescription = ({ contents }) => {
  return (
    <section className="px-3 px-lg-5 pb-5">
      {contents &&
        contents.length > 0 &&
        contents?.map((c) =>
          c.type === "h" ? <h3>{c.text}</h3> : <p className="fs-5">{c.text}</p>
        )}
    </section>
  );
};

export default ServiceDescription;
