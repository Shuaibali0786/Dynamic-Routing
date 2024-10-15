// import countries from "../data/data";
// import Link from "next/link";
// export default function Country (){


//     return(
//         <div>
//            <ul>
//             {countries.map((country) => (
//                 <li key={countries.indexOf(country)}>
//                     <Link href={`/country/${country.name.toLowerCase()}`}>{country.name}</Link>
//                 </li>
//             ))}
//            </ul>
//         </div>
//     )
// }

import countries from "../data/data"; // Import the list of countries from data file
import Link from "next/link";  // Import Link for navigation

interface Country {
    name: string;
}

export default function Country() {
    return (
        <div>
            <ul>
                {countries.map((country: Country) => (
                    <li key={country.name}> { }
                        <Link href={`/country/${country.name.toLowerCase()}`}> { }
                            {country.name} { }
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
