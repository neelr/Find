import Layout from "../components/Layout";

export default class Index extends React.Component {
  render() {
    return(
      <Layout>
        <h1 className="title">Where am I?</h1>
        <p>Find out where I am from a cool IOS shortcut!</p>
        <div className="container" style={{display:"flex",flexWrap:"wrap",flexDirection:"column"}}>
          <p className="para">Where: <strong id="address"></strong></p>
          <br/>
          <p className="para">Weather: <strong id="weather"></strong></p>
          <br/>
          <p className="para">Air Quality index: <strong id="air"></strong></p>
          <br/>
          <p className="para">When this was taken: <strong id="date"></strong></p>
          <div id="map"></div>
        </div>
      </Layout>
    )
  }
  componentDidMount () {
    function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
    axios.get("/where")
      .then((data)=> {
        var body = data.data
        document.getElementById("address").innerHTML = body.adress;
        document.getElementById("weather").innerHTML = body.weather;
        document.getElementById("air").innerHTML = body.air;
        document.getElementById("date").innerHTML = new Date(body.time).toDateString() + " "+formatAMPM(new Date(body.time))
    });
  }
}