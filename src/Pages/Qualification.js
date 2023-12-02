import React from 'react';
import Layout from '../Components/AppLayout/Layout';

const Qualification = () => {
  return (
    <Layout>
    <div class="QualificationPage">        
      <div class="QuallificationText">
      <h1 className='AboutTextHeading' > My <b>Qualifications</b>:</h1>
      <ul>
     
        <li>Pursuing Bachelor's Degree in [Btech (CS)] - [Graphic Era hill University], [2022]</li>
        <br></br>
      <li>Intermediate with 85%-[Soar Valley Public School(CBSE Board)]</li>
      <br></br>
      <li>Highschool with 90%-[Soar Valley Public School(CBSE Board)]</li>
        {/* Add more qualifications as needed */}
      </ul>
      </div>
    </div>

    </Layout>
  );
};

export default Qualification;