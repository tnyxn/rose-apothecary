import React from 'react';
import { Link, useParams } from 'react-router-dom';

function SectionPage() {
  let { section } = useParams();

  return (
    <div>
      <h1>{section.toUpperCase()}</h1>
      <Link to="/">Back</Link>
    </div>
  );
}

export default SectionPage;
