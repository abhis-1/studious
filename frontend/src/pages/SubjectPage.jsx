import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import SubjectContent from '../components/SubjectContent';
import { useParams } from 'react-router-dom';
import list from "../../public/list.json"

function SubjectPage() {

    const { id } = useParams();
    const subject = list.find(item => item.id === parseInt(id));



    if (!subject) {
        return <div>Subject Not Found</div>;
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div
            // style={{ width:'full'}}>
            className='flex-grow'>
                <SubjectContent  />
            </div>
            <Footer />
        </div >
    );
}

export default SubjectPage;
