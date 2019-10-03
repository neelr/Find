import Layout from "../components/Layout";


export default class Index extends React.Component {
  render() {
    return(
      <Layout>
        <h1 className="title">DayScraper</h1>
        <p>Get quirky national holidays today!</p>
        <div className="container" style={{display:"flex",flexWrap:"wrap"}}>
          <p className="para">Some cool holidays today: <code className="code" id="days"></code>.</p>

          <p className="para">How to use it: Make a <em>POST</em> request to <strong>/day</strong> with either <em>random</em> to true for a single random day, or get a specific date with <em>date</em></p>
		  	</div>
      </Layout>
    )
  }
}