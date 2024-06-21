import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import list from "../../public/list.json";

function SubjectContent() {
    const { id } = useParams();
    const subject = list.find((item) => item.id === parseInt(id));
    const topicTitles = Object.keys(subject.topics);

    const [view, setView] = useState("");

    useEffect(()=>{
        if(subject && subject.introFile) {
            setView(subject.introFile);
        }
    },[subject]);

    function handleTopic(topic) {
        console.log("clicked", topic, "Key",)
        setView(subject.topics[topic]);
    }
    if (!subject) {
        return <div>Subject Not Found</div>;
    }

    const htmlFilePath = view;

    return (
        <div className="flex" style={{ marginTop: "64px" }}>
            <div className="w-1/5 h-screen fixed top-12 left-0 bg-gray-100 p-4 overflow-y-auto mt-4 ">
                <h3 className="mb-4 px-2 py-2 font-bold text-md">{subject.name} </h3>
                <ul className="space-y-2 text-sm font-semibold mb-20 ">
                    {topicTitles.map((topic, idx) => (
                        <li key={idx} id={`topic-${idx}`} onClick={() => { handleTopic(topic) }}>
                            <a href="#" className="block py-1 px-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded no-underline">
                                {topic}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex=grow mx-40">
                <iframe
                    src={htmlFilePath}
                    className="w-full h-screen  border-none mx-80"
                ></iframe>
            </div>
        </div>
    );
}

export default SubjectContent;
