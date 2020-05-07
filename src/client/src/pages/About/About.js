import React from 'react'

function About() {
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>Sort the reactions generated from API and count the reactions with the same content or type.</p>
      <p>The randomly generated array is fetched and converted to array of an object with keys type,  </p>
      <p>content, names and numberOfNames. Finally, the numberOfNames, content and names are displayed as lists.</p>
 
    </React.Fragment>
  )
}


export default About;