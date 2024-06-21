import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import useRequireAuth from "../hooks/useAuth";



function Dashboard() {

    useRequireAuth();

    const [searchQuery, setSearchQuery] = useState('');
    const [noCoursesFound, setNoCoursesFound] = useState(false);

    const handleSearchResult = (courses) => {
        setNoCoursesFound(courses.length === 0);
    }

    return (
        <>
            <Navbar setSearchQuery={setSearchQuery} />
            <div className="flex-grow">
                <CourseCard searchQuery={searchQuery} onSearchResult={handleSearchResult}></CourseCard>
            </div>

            {!noCoursesFound && <Footer />}


        </>
    )

}

export default Dashboard;