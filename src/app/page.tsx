import Link from "next/link";
export default function country_name() {
  return (
    <div >
      <h1 style={{display:"flex", justifyContent:"center", color: "block"}} >  Country List</h1>
    
    <br />
    <Link href="/country/pakistan" style={{ display:"flex", justifyContent: "center",  color: "green",  margin: "10px", borderRadius: "2px solid black", padding: "10px", }}>Pakistan</Link>
    <br />
    <Link href="/country/india" style={{ display:"flex", justifyContent: "center", color: "red",  margin: "10px", borderRadius: "2px solid black", padding: "10px" }}>India</Link>
    <br />
    <Link href="/country/japan" style={{ color: "gray" ,display:"flex", justifyContent: "center", margin: "10px", borderRadius: "2px solid black", padding: "10px" }}>Japan</Link>
    <br />
    <Link href="/country/china" style={{ display:"flex", justifyContent: "center", color: "blue", margin: "10px", borderRadius: "2px solid black", padding: "10px" }}>China</Link>
    <br />
    <Link href="/country/afghanistan" style={{ color: "", display:"flex", justifyContent: "center", margin: "10px", borderRadius: "2px solid black", padding: "10px" }}>Afghanistan</Link>
    </div>
  );
}