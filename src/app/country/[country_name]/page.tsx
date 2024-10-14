
import countries from "@/app/data/data";
import Link from "next/link";

export default function CountryName({params}:{params:{country_name:string}}) {

   

    function findCountry(country_url:string){
        // console.log(country_url)
        // console.log(countries.find(country => country.name))
        return countries.find(country => country.name.toLowerCase() === country_url.toLowerCase())
    }

    let result = findCountry(params.country_name);
        
    return(
        <div >
            <h1 >Go To <Link href={'/country'}>Home</Link></h1>
            <br />
            {
                result ? (
                    <>
                    <h1 >Country Name: {result.name}</h1>
                    <h2>Country Capital: {result.capital} </h2>
                    <h3>Country Population: {result.population} </h3>  
                     </>
                ) : (
                    <h1>country not found</h1>
                )
            }
           
                      
        </div>
    )
}