export default function Home() {
return (
<div style={{ padding: "20px" }}>
<h1>Flight Ticket Booking</h1>
 
<p>From</p>
<input type="text" placeholder="Hyderabad" />
 
<br />
<br />
 
<p>To</p>
<input type="text" placeholder="Bangalore" />
 
<br />
<br />
 
<p>Travel Date</p>
<input type="date" />
 
<br />
<br />
 
<button>Search Flights</button>
</div>
);
}