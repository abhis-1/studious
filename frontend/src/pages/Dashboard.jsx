import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards2 from "../components/Cards2";



function Dashboard() {

    return (
        <>
            <Navbar />
            <div className="flex-grow">
                <Cards2></Cards2>
            </div>
            
            <Footer />


        </>
    )

}

export default Dashboard;


// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Cards from "../components/Cards";
// import NotionEmbed from "../components/NotionEmbed";



// function Dashboard() {

//     return (
//         <>
//             <Navbar />
//             {/* <div>
//                 <Cards />
//             </div> */}
//             <iframe src="Chapter 0 Introduction 00456ae74cf14527837c6c79b88eedf6" frameborder="0"></iframe>
//             <Footer />


//         </>
//     )

// }

// export default Dashboard;