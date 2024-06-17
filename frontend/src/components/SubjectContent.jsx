import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import list from '../../public/list.json'; // Adjust the import path according to your project structure
// import { fetchHTMLContent } from '../utils/fetchHTMLContent';
// import ReactHtmlParser from 'html-react-parser';


function SubjectContent() {
    const { id } = useParams();
    const subject = list.find(item => item.id === parseInt(id));

    // const [htmlContent,setHtmlContent] = useState('<p>Loading Content....</p>');

    // useEffect(()=> {
    //     const loadContent=async()=>{
    //         const content=await fetchHTMLContent(id);
    //         setHtmlContent(content);
    //     };

    //     loadContent();
    // },[id]);

    // const reactElements = ReactHtmlParser(htmlContent);

    if(!subject) {
        return <div>Subject Not Found</div>
    }


    const htmlFilePath=`../../public/notion-content-main/subject-${id}.html`;

    return (
        //<div style={{ display: 'flex', paddingTop: '90px', paddingLeft: '20px' }}>
            //<div style={{ width: '20%', paddingRight: '20px' }}>
              //  <div className="sidebar" style={{ position: 'fixed', top: '60px', left: '0', height: '100vh', backgroundColor: '#F3F4F6', padding: '20px' }}>
              <div className='flex' style={{marginTop:'64px'}}>
                <div className='w-1/6 h-screen fixed top-12 left-0 bg-gray-100 p-4 overflow-y-auto mt-4 '>
                    <h3 className="mb-4 px-2 py-2 font-bold text-md">{subject.name} </h3>
                    <ul className="space-y-2 text-sm font-semibold mb-20 ">
                        {subject.topics.map((topic, idx) => (
                            <li key={idx}><a href="#" className='block py-1 px-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded no-underline'>{topic}</a></li>
                        ))}
                    </ul>
                </div>
                {/* <div className='ml-40 p-8 mt-90' dangerouslySetInnerHTML={{__html:htmlContent}}></div> */}
                {/* <div className='px-20 h-full ml-1/6'>{reactElements}</div> */}
                <div className=''>
                    <iframe src={htmlFilePath} className='w-full h-screen mx-80 border-none' ></iframe>
                </div>
            </div>
            
    );
}

export default SubjectContent;

