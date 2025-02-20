"use client";
import styles from '../css/Signup.module.css';
import { useState } from "react";
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

export default function Signup() {
    const [selectedState, setSelectedState] = useState("");
// Example: One placeholder "Rep 1 (XX)" for each state
const representatives = {
  "alabama": [
    { label: "Moore, Barry", value: "Moore (AL)" },
    { label: "Figures, Shomari", value: "Figures" },
    { label: "Rogers, Mike", value: "Rogers (AL)" },
    { label: "Aderholt, Robert", value: "Aderholt" },
    { label: "Strong, Dale", value: "Strong" },
    { label: "Palmer, Gary", value: "Palmer" },
    { label: "Sewell, Terri", value: "Sewell" }
  ],
  "alaska": [
    { label: "Begich, Nicholas", value: "Begich" }
  ],
  "arizona": [
    { label: "Schweikert, David", value: "Schweikert" },
    { label: "Crane, Elijah", value: "Crane" },
    { label: "Ansari, Yassamin", value: "Ansari" },
    { label: "Stanton, Greg", value: "Stanton" },
    { label: "Biggs, Andy", value: "Biggs (AZ)" },
    { label: "Ciscomani, Juan", value: "Ciscomani" },
    { label: "Grijalva, Raul", value: "Grijalva" },
    { label: "Hamadeh, Abraham", value: "Hamadeh (AZ)" },
    { label: "Gosar, Paul", value: "Gosar" }
  ],
  "arkansas": [
    { label: "Crawford, Eric", value: "Crawford" },
    { label: "Hill, J.", value: "Hill (AR)" },
    { label: "Womack, Steve", value: "Womack" },
    { label: "Westerman, Bruce", value: "Westerman" }
  ],
  "california": [
    { label: "LaMalfa, Doug", value: "LaMalfa" },
    { label: "Huffman, Jared", value: "Huffman" },
    { label: "Kiley, Kevin", value: "Kiley (CA)" },
    { label: "Thompson, Mike", value: "Thompson (CA)" },
    { label: "McClintock, Tom", value: "McClintock" },
    { label: "Bera, Ami", value: "Bera" },
    { label: "Matsui, Doris", value: "Matsui" },
    { label: "Garamendi, John", value: "Garamendi" },
    { label: "Harder, Josh", value: "Harder (CA)" },
    { label: "DeSaulnier, Mark", value: "DeSaulnier" },
    { label: "Pelosi, Nancy", value: "Pelosi" },
    { label: "Simon, Lateefah", value: "Simon" },
    { label: "Gray, Adam", value: "Gray" },
    { label: "Swalwell, Eric", value: "Swalwell" },
    { label: "Mullin, Kevin", value: "Mullin" },
    { label: "Liccardo, Sam", value: "Liccardo" },
    { label: "Khanna, Ro", value: "Khanna" },
    { label: "Lofgren, Zoe", value: "Lofgren" },
    { label: "Panetta, Jimmy", value: "Panetta" },
    { label: "Fong, Vince", value: "Fong" },
    { label: "Costa, Jim", value: "Costa" },
    { label: "Valadao, David", value: "Valadao" },
    { label: "Obernolte, Jay", value: "Obernolte" },
    { label: "Carbajal, Salud", value: "Carbajal" },
    { label: "Ruiz, Raul", value: "Ruiz" },
    { label: "Brownley, Julia", value: "Brownley" },
    { label: "Whitesides, George", value: "Whitesides" },
    { label: "Chu, Judy", value: "Chu" },
    { label: "Rivas, Luz", value: "Rivas" },
    { label: "Friedman, Laura", value: "Friedman" },
    { label: "Cisneros, Gilbert", value: "Cisneros" },
    { label: "Sherman, Brad", value: "Sherman" },
    { label: "Aguilar, Pete", value: "Aguilar" },
    { label: "Gomez, Jimmy", value: "Gomez" },
    { label: "Torres, Norma", value: "Torres (CA)" },
    { label: "Lieu, Ted", value: "Lieu" },
    { label: "Kamlager-Dove, Sydney", value: "Kamlager-Dove" },
    { label: "Sanchez, Linda", value: "Sánchez" },
    { label: "Takano, Mark", value: "Takano" },
    { label: "Kim, Young", value: "Kim" },
    { label: "Calvert, Ken", value: "Calvert" },
    { label: "Garcia, Robert", value: "Garcia (CA)" },
    { label: "Waters, Maxine", value: "Waters" },
    { label: "Barragán, Nanette", value: "Barragán" },
    { label: "Tran, Derek", value: "Tran" },
    { label: "Correa, J.", value: "Correa" },
    { label: "Min, Dave", value: "Min" },
    { label: "Issa, Darrell", value: "Issa" },
    { label: "Levin, Mike", value: "Levin" },
    { label: "Peters, Scott", value: "Peters" },
    { label: "Jacobs, Sara", value: "Jacobs" },
    { label: "Vargas, Juan", value: "Vargas" }
  ],
  "colorado": [
    { label: "DeGette, Diana", value: "DeGette" },
    { label: "Neguse, Joe", value: "Neguse" },
    { label: "Hurd, Jeff", value: "Hurd (CO)" },
    { label: "Boebert, Lauren", value: "Boebert" },
    { label: "Crank, Jeff", value: "Crank" },
    { label: "Crow, Jason", value: "Crow" },
    { label: "Pettersen, Brittany", value: "Pettersen" },
    { label: "Evans, Gabe", value: "Evans (CO)" }
  ],
  "connecticut": [
    { label: "Larson, John", value: "Larson (CT)" },
    { label: "Courtney, Joe", value: "Courtney" },
    { label: "DeLauro, Rosa", value: "DeLauro" },
    { label: "Himes, James", value: "Himes" },
    { label: "Hayes, Jahana", value: "Hayes" }
  ],
  "delaware": [
    { label: "McBride, Sarah", value: "McBride" }
  ],
  "florida": [
    { label: "Vacancy District 1", value: "Vacancy" },
    { label: "Dunn, Neal", value: "Dunn (FL)" },
    { label: "Cammack, Kat", value: "Cammack" },
    { label: "Bean, Aaron", value: "Bean (FL)" },
    { label: "Rutherford, John", value: "Rutherford" },
    { label: "Vacancy District 6", value: "Vacancy" },
    { label: "Mills, Cory", value: "Mills" },
    { label: "Haridopolos, Mike", value: "Haridopolos" },
    { label: "Soto, Darren", value: "Soto" },
    { label: "Frost, Maxwell", value: "Frost" },
    { label: "Webster, Daniel", value: "Webster FL)" },
    { label: "Bilirakis, Gus", value: "Bilirakis" },
    { label: "Luna, Anna Paulina", value: "Luna" },
    { label: "Castor, Kathy", value: "Castor (FL)" },
    { label: "Lee, Laurel", value: "Lee (FL)" },
    { label: "Buchanan, Vern", value: "Buchanan" },
    { label: "Steube, W.", value: "Steube" },
    { label: "Franklin, Scott", value: "Franklin, Scott" },
    { label: "Donalds, Byron", value: "Donalds" },
    { label: "Cherfilus-McCormick, Sheila", value: "Cherfilus-McCormick" },
    { label: "Mast, Brian", value: "Mast" },
    { label: "Frankel, Lois", value: "Frankel, Lois" },
    { label: "Moskowitz, Jared", value: "Moskowitz" },
    { label: "Wilson, Frederica", value: "Wilson (FL)" },
    { label: "Wasserman Schultz, Debbie", value: "Wasserman Schultz" },
    { label: "Diaz-Balart, Mario", value: "Diaz-Balart" },
    { label: "Salazar, Maria", value: "Salazar" },
    { label: "Gimenez, Carlos", value: "Gimenez" }
  ],
  "georgia": [
    { label: "Carter, Earl", value: "Carter (GA)" },
    { label: "Bishop, Sanford", value: "Bishop" },
    { label: "Jack, Brian", value: "Jack" },
    { label: "Johnson, Henry", value: "Johnson (GA)" },
    { label: "Williams, Nikema", value: "Williams (GA)" },
    { label: "McBath, Lucy", value: "McBath" },
    { label: "McCormick, Richard", value: "McCormick" },
    { label: "Scott, Austin", value: "Scott, Austin" },
    { label: "Clyde, Andrew", value: "Clyde" },
    { label: "Collins, Mike", value: "Collins" },
    { label: "Loudermilk, Barry", value: "Loudermilk" },
    { label: "Allen, Rick", value: "Allen" },
    { label: "Scott, David", value: "Scott, David" },
    { label: "Greene, Marjorie", value: "Greene (GA)" }
  ],
  "hawaii": [
    { label: "Case, Ed", value: "Case" },
    { label: "Tokuda, Jill", value: "Tokuda" }
  ],
  "idaho": [
    { label: "Fulcher, Russ", value: "Fulcher" },
    { label: "Simpson, Michael", value: "Simpson" }
  ],
  "illinois": [
    { label: "Jackson, Jonathan", value: "Jackson (IL)" },
    { label: "Kelly, Robin", value: "Kelly (IL)" },
    { label: "Ramirez, Delia", value: "Ramirez" },
    { label: "Garcia, Jesus", value: "García (IL)" },
    { label: "Quigley, Mike", value: "Quigley" },
    { label: "Casten, Sean", value: "Casten" },
    { label: "Davis, Danny", value: "Davis (IL)" },
    { label: "Krishnamoorthi, Raja", value: "Krishnamoorthi" },
    { label: "Schakowsky, Janice", value: "Schakowsky" },
    { label: "Schneider, Bradley", value: "Schneider" },
    { label: "Foster, Bill", value: "Foster" },
    { label: "Bost, Mike", value: "Bost" },
    { label: "Budzinski, Nikki", value: "Budzinski" },
    { label: "Underwood, Lauren", value: "Underwood" },
    { label: "Miller, Mary", value: "Miller (IL)" },
    { label: "LaHood, Darin", value: "LaHood" },
    { label: "Sorensen, Eric", value: "Sorensen" }
  ],
  "indiana": [
    { label: "Mrvan, Frank", value: "Mrvan" },
    { label: "Yakym, Rudy", value: "Yakym" },
    { label: "Stutzman, Marlin", value: "Stutzman" },
    { label: "Baird, James", value: "Baird" },
    { label: "Spartz, Victoria", value: "Spartz" },
    { label: "Shreve, Jefferson", value: "Shreve" },
    { label: "Carson, Andre", value: "Carson" },
    { label: "Messmer, Mark", value: "Messmer" },
    { label: "Houchin, Erin", value: "Houchin" }
  ],
  "iowa": [
    { label: "Miller-Meeks, Mariannette", value: "Miller-Meeks" },
    { label: "Hinson, Ashley", value: "Hinson" },
    { label: "Nunn, Zachary", value: "Nunn (IA)" },
    { label: "Feenstra, Randy", value: "Feenstra" }
  ],
  "kansas": [
    { label: "Mann, Tracey", value: "Mann" },
    { label: "Schmidt, Derek", value: "Schmidt" },
    { label: "Davids, Sharice", value: "Davids (KS)" },
    { label: "Estes, Ron", value: "Estes" }
  ],
  "kentucky": [
    { label: "Comer, James", value: "Comer" },
    { label: "Guthrie, Brett", value: "Guthrie" },
    { label: "McGarvey, Morgan", value: "McGarvey" },
    { label: "Massie, Thomas", value: "Massie" },
    { label: "Rogers, Harold", value: "Rogers (KY)" },
    { label: "Barr, Andy", value: "Barr" }
  ],
  "louisiana": [
    { label: "Scalise, Steve", value: "Scalise" },
    { label: "Carter, Troy", value: "Carter (LA)" },
    { label: "Higgins, Clay", value: "Higgins (LA)" },
    { label: "Johnson, Mike", value: "Johnson (LA)" },
    { label: "Letlow, Julia", value: "Letlow" },
    { label: "Fields, Cleo", value: "Fields" }
  ],
  "maine": [
    { label: "Pingree, Chellie", value: "Pingree" },
    { label: "Golden, Jared", value: "Golden (ME)" }
  ],
  "maryland": [
    { label: "Harris, Andy", value: "Harris (MD)" },
    { label: "Olszewski, Johnny", value: "Olszewski" },
    { label: "Elfreth, Sarah", value: "Elfreth" },
    { label: "Ivey, Glenn", value: "Ivey" },
    { label: "Hoyer, Steny", value: "Hoyer" },
    { label: "McClain Delaney, April", value: "McClain Delaney" },
    { label: "Mfume, Kweisi", value: "Mfume" },
    { label: "Raskin, Jamie", value: "Raskin" }
  ],
  "massachusetts": [
    { label: "Neal, Richard", value: "Neal" },
    { label: "McGovern, James", value: "McGovern" },
    { label: "Trahan, Lori", value: "Trahan" },
    { label: "Auchincloss, Jake", value: "Auchincloss" },
    { label: "Clark, Katherine", value: "Clark (MA)" },
    { label: "Moulton, Seth", value: "Moulton" },
    { label: "Pressley, Ayanna", value: "Pressley" },
    { label: "Lynch, Stephen", value: "Lynch" },
    { label: "Keating, William", value: "Keating" }
  ],
  "michigan": [
    { label: "Bergman, Jack", value: "Bergman" },
    { label: "Moolenaar, John", value: "Moolenaar" },
    { label: "Scholten, Hillary", value: "Scholten" },
    { label: "Huizenga, Bill", value: "Huizenga" },
    { label: "Walberg, Tim", value: "Walberg" },
    { label: "Dingell, Debbie", value: "Dingell" },
    { label: "Barrett, Tom", value: "Barrett" },
    { label: "McDonald Rivet, Kristen", value: "McDonald Rivet" },
    { label: "McClain, Lisa", value: "McClain" },
    { label: "James, John", value: "James" },
    { label: "Stevens, Haley", value: "Stevens" },
    { label: "Tlaib, Rashida", value: "Tlaib" },
    { label: "Thanedar, Shri", value: "Thanedar" }
  ],
  "minnesota": [
    { label: "Finstad, Brad", value: "Finstad" },
    { label: "Craig, Angie", value: "Craig" },
    { label: "Morrison, Kelly", value: "Morrison" },
    { label: "McCollum, Betty", value: "McCollum" },
    { label: "Omar, Ilhan", value: "Omar" },
    { label: "Emmer, Tom", value: "Emmer" },
    { label: "Fischbach, Michelle", value: "Fischbach" },
    { label: "Stauber, Pete", value: "Stauber" }
  ],
  "mississippi": [
    { label: "Kelly, Trent", value: "Kelly (MS)" },
    { label: "Thompson, Bennie", value: "Thompson (MS)" },
    { label: "Guest, Michael", value: "Guest" },
    { label: "Ezell, Mike", value: "Ezell" }
  ],
  "missouri": [
    { label: "Bell, Wesley", value: "Bell" },
    { label: "Wagner, Ann", value: "Wagner" },
    { label: "Onder, Robert", value: "Onder" },
    { label: "Alford, Mark", value: "Alford" },
    { label: "Cleaver, Emanuel", value: "Cleaver" },
    { label: "Graves, Sam", value: "Graves" },
    { label: "Burlison, Eric", value: "Burlison" },
    { label: "Smith, Jason", value: "Smith (MO)" }
  ],
  "montana": [
    { label: "Zinke, Ryan", value: "Zinke" },
    { label: "Downing, Troy", value: "Downing" }
  ],
  "nebraska": [
    { label: "Flood, Mike", value: "Flood" },
    { label: "Bacon, Don", value: "Bacon" },
    { label: "Smith, Adrian", value: "Smith (NE)" }
  ],
  "nevada": [
    { label: "Titus, Dina", value: "Titus" },
    { label: "Amodei, Mark", value: "Amodei (NV)" },
    { label: "Lee, Susie", value: "Lee (NV)" },
    { label: "Horsford, Steven", value: "Horsford" }
  ],
  "newhampshire": [
    { label: "Pappas, Chris", value: "Pappas" },
    { label: "Goodlander, Maggie", value: "Goodlander" }
  ],
  "newjersey": [
    { label: "Norcross, Donald", value: "Norcross" },
    { label: "Van Drew, Jefferson", value: "Van Drew" },
    { label: "Conaway, Herbert", value: "Conaway" },
    { label: "Smith, Christopher", value: "Smith (NJ)" },
    { label: "Gottheimer, Josh", value: "Gottheimer" },
    { label: "Pallone, Frank", value: "Pallone" },
    { label: "Kean, Thomas", value: "Kean" },
    { label: "Menendez, Robert", value: "Menendez" },
    { label: "Pou, Nellie", value: "Pou" },
    { label: "McIver, LaMonica", value: "McIver" },
    { label: "Sherrill, Mikie", value: "Sherrill" },
    { label: "Watson Coleman, Bonnie", value: "Watson Coleman" }
  ],
  "newmexico": [
    { label: "Stansbury, Melanie", value: "Stansbury" },
    { label: "Vasquez, Gabe", value: "Vasquez" },
    { label: "Leger Fernandez, Teresa", value: "Leger Fernandez" }
  ],
  "newyork": [
    { label: "LaLota, Nick", value: "LaLota" },
    { label: "Garbarino, Andrew", value: "Garbarino" },
    { label: "Suozzi, Thomas R.", value: "Suozzi" },
    { label: "Gillen, Laura", value: "Gillen" },
    { label: "Meeks, Gregory", value: "Meeks" },
    { label: "Meng, Grace", value: "Meng" },
    { label: "Velazquez, Nydia", value: "Velazquez" },
    { label: "Jeffries, Hakeem", value: "Jeffries" },
    { label: "Clarke, Yvette", value: "Clarke (NY)" },
    { label: "Goldman, Daniel", value: "Goldman (NY)" },
    { label: "Malliotakis, Nicole", value: "Malliotakis" },
    { label: "Nadler, Jerrold", value: "Nadler" },
    { label: "Espaillat, Adriano", value: "Espaillat" },
    { label: "Ocasio-Cortez, Alexandria", value: "Ocasio-Cortez" },
    { label: "Torres, Ritchie", value: "Torres (NY)" },
    { label: "Latimer, George", value: "Latimer" },
    { label: "Lawler, Michael", value: "Lawler" },
    { label: "Ryan, Patrick", value: "Ryan" },
    { label: "Riley, Josh", value: "Riley (NY)" },
    { label: "Tonko, Paul", value: "Tonko" },
    { label: "Stefanik, Elise", value: "Stefanik" },
    { label: "Mannion, John", value: "Mannion" },
    { label: "Langworthy, Nicholas", value: "Langworthy" },
    { label: "Tenney, Claudia", value: "Tenney" },
    { label: "Morelle, Joseph", value: "Morelle" },
    { label: "Kennedy, Timothy", value: "Kennedy (NY)" }
  ],
  "northcarolina": [
    { label: "Davis, Donald", value: "Davis (NC)" },
    { label: "Ross, Deborah", value: "Ross" },
    { label: "Murphy, Gregory", value: "Murphy" },
    { label: "Foushee, Valerie", value: "Foushee" },
    { label: "Foxx, Virginia", value: "Foxx" },
    { label: "McDowell, Addison", value: "McDowell" },
    { label: "Rouzer, David", value: "Rouzer" },
    { label: "Harris, Mark", value: "Harris (NC)" },
    { label: "Hudson, Richard", value: "Hudson" },
    { label: "Harrigan, Pat", value: "Harrigan" },
    { label: "Edwards, Chuck", value: "Edwards" },
    { label: "Adams, Alma", value: "Adams" },
    { label: "Knott, Brad", value: "Knott" },
    { label: "Moore, Tim", value: "Moore (NC)" }
  ],
  "northdakota": [
    { label: "Fedorchak, Julie", value: "Fedorchak" }
  ],
  "ohio": [
    { label: "Landsman, Greg", value: "Landsman" },
    { label: "Taylor, David", value: "Taylor" },
    { label: "Beatty, Joyce", value: "Beatty" },
    { label: "Jordan, Jim", value: "Jordan" },
    { label: "Latta, Robert", value: "Latta" },
    { label: "Rulli, Michael A.", value: "Rulli" },
    { label: "Miller, Max", value: "Miller (OH)" },
    { label: "Davidson, Warren", value: "Davidson" },
    { label: "Kaptur, Marcy", value: "Kaptur" },
    { label: "Turner, Michael", value: "Turner (OH)" },
    { label: "Brown, Shontel", value: "Brown" },
    { label: "Balderson, Troy", value: "Balderson" },
    { label: "Sykes, Emilia", value: "Sykes" },
    { label: "Joyce, David", value: "Joyce (OH)" },
    { label: "Carey, Mike", value: "Carey" }
  ],
  "oklahoma": [
    { label: "Hern, Kevin", value: "Hern (OK)" },
    { label: "Brecheen, Josh", value: "Brecheen" },
    { label: "Lucas, Frank", value: "Lucas" },
    { label: "Cole, Tom", value: "Cole" },
    { label: "Bice, Stephanie", value: "Bice" }
  ],
  "oregon": [
    { label: "Bonamici, Suzanne", value: "Bonamici" },
    { label: "Bentz, Cliff", value: "Bentz" },
    { label: "Dexter, Maxine", value: "Dexter" },
    { label: "Hoyle, Val", value: "Hoyle (OR)" },
    { label: "Bynum, Janelle", value: "Bynum" },
    { label: "Salinas, Andrea", value: "Salinas" }
  ],
  "pennsylvania": [
    { label: "Fitzpatrick, Brian", value: "Fitzpatrick" },
    { label: "Boyle, Brendan", value: "Boyle (PA)" },
    { label: "Evans, Dwight", value: "Evans (PA)" },
    { label: "Dean, Madeleine", value: "Dean (PA)" },
    { label: "Scanlon, Mary Gay", value: "Scanlon" },
    { label: "Houlahan, Chrissy", value: "Houlahan" },
    { label: "Mackenzie, Ryan", value: "Mackenzie" },
    { label: "Bresnahan, Robert", value: "Bresnahan" },
    { label: "Meuser, Daniel", value: "Meuser" },
    { label: "Perry, Scott", value: "Perry" },
    { label: "Smucker, Lloyd", value: "Smucker" },
    { label: "Lee, Summer", value: "Lee (PA)" },
    { label: "Joyce, John", value: "Joyce (PA)" },
    { label: "Reschenthaler, Guy", value: "Reschenthaler" },
    { label: "Thompson, Glenn", value: "Thompson (PA)" },
    { label: "Kelly, Mike", value: "Kelly (PA)" },
    { label: "Deluzio, Christopher", value: "Deluzio" }
  ],
  "rhodeisland": [
    { label: "Amo, Gabe", value: "Amo" },
    { label: "Magaziner, Seth", value: "Magaziner" }
  ],
  "southcarolina": [
    { label: "Mace, Nancy", value: "Mace" },
    { label: "Wilson, Joe", value: "Wilson (SC)" },
    { label: "Biggs, Sheri", value: "Biggs (SC)" },
    { label: "Timmons, William", value: "Timmons" },
    { label: "Norman, Ralph", value: "Norman" },
    { label: "Clyburn, James", value: "Clyburn" },
    { label: "Fry, Russell", value: "Fry" }
  ],
  "southdakota": [
    { label: "Johnson, Dusty", value: "Johnson (SD)" }
  ],
  "tennessee": [
    { label: "Harshbarger, Diana", value: "Harshbarger" },
    { label: "Burchett, Tim", value: "Burchett" },
    { label: "Fleischmann, Charles", value: "Fleischmann" },
    { label: "DesJarlais, Scott", value: "DesJarlais" },
    { label: "Ogles, Andrew", value: "Ogles" },
    { label: "Rose, John", value: "Rose" },
    { label: "Green, Mark", value: "Green (TN)" },
    { label: "Kustoff, David", value: "Kustoff" },
    { label: "Cohen, Steve", value: "Cohen" }
  ],
  "texas": [
    { label: "Moran, Nathaniel", value: "Moran" },
    { label: "Crenshaw, Dan", value: "Crenshaw" },
    { label: "Self, Keith", value: "Self" },
    { label: "Fallon, Pat", value: "Fallon" },
    { label: "Gooden, Lance", value: "Gooden" },
    { label: "Ellzey, Jake", value: "Ellzey" },
    { label: "Fletcher, Lizzie", value: "Fletcher" },
    { label: "Luttrell, Morgan", value: "Luttrell" },
    { label: "Green, Al", value: "Green, Al (TX)" },
    { label: "McCaul, Michael", value: "McCaul" },
    { label: "Pfluger, August", value: "Pfluger" },
    { label: "Goldman, Craig", value: "Goldman (TX)" },
    { label: "Jackson, Ronny", value: "Jackson (TX)" },
    { label: "Weber, Randy", value: "Weber (TX)" },
    { label: "De La Cruz, Monica", value: "De La Cruz" },
    { label: "Escobar, Veronica", value: "Escobar" },
    { label: "Sessions, Pete", value: "Sessions" },
    { label: "Turner, Sylvester", value: "Turner (TX)" },
    { label: "Arrington, Jodey", value: "Arrington" },
    { label: "Castro, Joaquin", value: "Castro (TX)" },
    { label: "Roy, Chip", value: "Roy" },
    { label: "Nehls, Troy", value: "Nehls" },
    { label: "Gonzales, Tony", value: "Gonzales, Tony" },
    { label: "Van Duyne, Beth", value: "Van Duyne" },
    { label: "Williams, Roger", value: "Williams (TX)" },
    { label: "Gill, Brandon", value: "Gill (TX)" },
    { label: "Cloud, Michael", value: "Cloud" },
    { label: "Cuellar, Henry", value: "Cuellar" },
    { label: "Garcia, Sylvia", value: "Garcia (TX)" },
    { label: "Crockett, Jasmine", value: "Crockett" },
    { label: "Carter, John", value: "Carter (TX)" },
    { label: "Johnson, Julie", value: "Johnson (TX)" },
    { label: "Veasey, Marc", value: "Veasey" },
    { label: "Gonzalez, Vicente", value: "Gonzalez, V." },
    { label: "Casar, Greg", value: "Casar" },
    { label: "Babin, Brian", value: "Babin" },
    { label: "Doggett, Lloyd", value: "Doggett" },
    { label: "Hunt, Wesley", value: "Hunt" }
  ],
  "utah": [
    { label: "Moore, Blake", value: "Moore (UT)" },
    { label: "Maloy, Celeste", value: "Maloy" },
    { label: "Kennedy, Mike", value: "Kennedy (UT)" },
    { label: "Owens, Burgess", value: "Owens" }
  ],
  "vermont": [
    { label: "Balint, Becca", value: "Balint" }
  ],
  "virginia": [
    { label: "Wittman, Robert", value: "Wittman" },
    { label: "Kiggans, Jennifer", value: "Kiggans (VA)" },
    { label: "Scott, Robert", value: "Scott (VA)" },
    { label: "McClellan, Jennifer", value: "McClellan" },
    { label: "McGuire, John", value: "McGuire" },
    { label: "Cline, Ben", value: "Cline" },
    { label: "Vindman, Eugene", value: "Vindman" },
    { label: "Beyer, Donald", value: "Beyer" },
    { label: "Griffith, H.", value: "Griffith" },
    { label: "Subramanyam, Suhas", value: "Subramanyam" },
    { label: "Connolly, Gerald", value: "Connolly" }
  ],
  "washington": [
    { label: "DelBene, Suzan", value: "DelBene" },
    { label: "Larsen, Rick", value: "Larsen (WA)" },
    { label: "Perez, Marie", value: "Perez" },
    { label: "Newhouse, Dan", value: "Newhouse" },
    { label: "Baumgartner, Michael", value: "Baumgartner" },
    { label: "Randall, Emily", value: "Randall" },
    { label: "Jayapal, Pramila", value: "Jayapal" },
    { label: "Schrier, Kim", value: "Schrier" },
    { label: "Smith, Adam", value: "Smith (WA)" },
    { label: "Strickland, Marilyn", value: "Strickland" }
  ],
  "westvirginia": [
    { label: "Miller, Carol", value: "Miller (WV)" },
    { label: "Moore, Riley", value: "Moore (WV)" }
  ],
  "wisconsin": [
    { label: "Steil, Bryan", value: "Steil" },
    { label: "Pocan, Mark", value: "Pocan" },
    { label: "Van Orden, Derrick", value: "Van Orden" },
    { label: "Moore, Gwen", value: "Moore (WI)" },
    { label: "Fitzgerald, Scott", value: "Fitzgerald" },
    { label: "Grothman, Glenn", value: "Grothman" },
    { label: "Tiffany, Thomas", value: "Tiffany" },
    { label: "Wied, Tony", value: "Wied" }
  ],
  "wyoming": [
    { label: "Hageman, Harriet", value: "Hageman" }
  ]
};

  
const states = [
    { value: "alabama", label: "Alabama" },
    { value: "alaska", label: "Alaska" },
    { value: "arizona", label: "Arizona" },
    { value: "arkansas", label: "Arkansas" },
    { value: "california", label: "California" },
    { value: "colorado", label: "Colorado" },
    { value: "connecticut", label: "Connecticut" },
    { value: "delaware", label: "Delaware" },
    { value: "florida", label: "Florida" },
    { value: "georgia", label: "Georgia" },
    { value: "hawaii", label: "Hawaii" },
    { value: "idaho", label: "Idaho" },
    { value: "illinois", label: "Illinois" },
    { value: "indiana", label: "Indiana" },
    { value: "iowa", label: "Iowa" },
    { value: "kansas", label: "Kansas" },
    { value: "kentucky", label: "Kentucky" },
    { value: "louisiana", label: "Louisiana" },
    { value: "maine", label: "Maine" },
    { value: "maryland", label: "Maryland" },
    { value: "massachusetts", label: "Massachusetts" },
    { value: "michigan", label: "Michigan" },
    { value: "minnesota", label: "Minnesota" },
    { value: "mississippi", label: "Mississippi" },
    { value: "missouri", label: "Missouri" },
    { value: "montana", label: "Montana" },
    { value: "nebraska", label: "Nebraska" },
    { value: "nevada", label: "Nevada" },
    { value: "newhampshire", label: "New Hampshire" },
    { value: "newjersey", label: "New Jersey" },
    { value: "newmexico", label: "New Mexico" },
    { value: "newyork", label: "New York" },
    { value: "northcarolina", label: "North Carolina" },
    { value: "northdakota", label: "North Dakota" },
    { value: "ohio", label: "Ohio" },
    { value: "oklahoma", label: "Oklahoma" },
    { value: "oregon", label: "Oregon" },
    { value: "pennsylvania", label: "Pennsylvania" },
    { value: "rhodeisland", label: "Rhode Island" },
    { value: "southcarolina", label: "South Carolina" },
    { value: "southdakota", label: "South Dakota" },
    { value: "tennessee", label: "Tennessee" },
    { value: "texas", label: "Texas" },
    { value: "utah", label: "Utah" },
    { value: "vermont", label: "Vermont" },
    { value: "virginia", label: "Virginia" },
    { value: "washington", label: "Washington" },
    { value: "westvirginia", label: "West Virginia" },
    { value: "wisconsin", label: "Wisconsin" },
    { value: "wyoming", label: "Wyoming" },
  ];
  

  const repsOptions = representatives[selectedState.value]; 

    
            const customStyles = {
                menu: (provided) => ({
                    ...provided,
                    backgroundColor: "white",
                    zIndex: 9999,  // or another high value
                  }),
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  minHeight: "50px",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "black", // White text
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "black", // White placeholder
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  color: "black", // White arrow icon
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "white", // Dark background for menu
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? "white" : "white",
                  color: "black",
                  cursor: "pointer",
                }),
              };

              const [selectedRepValue, setSelectedRepValue] = useState("");

    return (
        <div className={styles.body}>
            <div className={styles.text}>
                <p>Get in the Know</p>
                <p>
                {/*RepReport delivers quick and accurate updates about what your politicians are voting on in DC. Regardless of party.*/}
                We simplify politics for you. Get personalized and accurate updates about what your politicians are voting on in DC. 
                </p>
            </div>
            <div className={styles.form}>
                <form
                    action="https://app.us17.list-manage.com/subscribe/post?u=4c0f3950dc0f76487d3277a17&amp;id=52679f637a&amp;f_id=0068c2e1f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className={styles.formElement}
                    target="_blank"
                >
                    <div>
                        <input
                            type="email"
                            name="EMAIL"
                            id="mce-EMAIL"
                            placeholder="Email"
                            required
                            className={styles.input}
                            
                        />
                    </div>
                    <div>
                        <Select
                        instanceId="state-select"
                        name='MMERGE8'
                        options={states}
                        placeholder="Select your state"
                        onChange={setSelectedState}
                        classNamePrefix="react-select"
                        required
                        isSearchable
                        styles={customStyles}
                    />
                    </div>
                    <div>
                    <Select
                    instanceId="rep-select"
                        name='MMERGE9'
                        options={repsOptions}
                        onChange={(option) => setSelectedRepValue(option.value)}
                        placeholder={
                            selectedState
                                ? "Select your Representative"
                                : "Select a State First"
                        }
                        isDisabled={!selectedState}
                        classNamePrefix="react-select"
                        required
                        isSearchable
                        styles={customStyles}
                    />
                </div>
                    <div>
                        <button
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className={styles.button}
                        >
                            Subscribe
                        </button>
                        <p className={styles.smallText}>
                        Don't know your Rep? Use {' '}
                            <a
                                href="https://www.house.gov/representatives/find-your-representative"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                        Congress's Rep. Finder
                            </a>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
