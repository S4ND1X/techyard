import React from "react";
import computer from "../evaluation_models/computer.json";
import display from "../evaluation_models/display.json";
import laptop from "../evaluation_models/laptop.json";
import phone from "../evaluation_models/phone.json";
import speaker from "../evaluation_models/speaker.json";
import tablet from "../evaluation_models/tablet.json";

import ModelEvaluationDescription from "../components/ModelEvaluationDescription";
import Navbar from "../components/Navbar";

const evaluationModels = {
    "Computer": {
        "model": computer,
        "img": "https://i.pinimg.com/564x/aa/9e/77/aa9e778d07ffcb0cad9464d5f6a2852c--computer-basics-computer-class.jpg",
    },
    "Display": {
        "model": display,
        "img": "https://thumbs.dreamstime.com/b/happy-retro-cartoon-television-style-135389730.jpg",
    },
    "Laptop": {
        "model": laptop,
        "img": "https://image.shutterstock.com/image-vector/laptop-cartoon-vector-illustration-computer-600w-1292073241.jpg",
    },
    "Phone": {
        "model": phone,
        "img": "https://thumbs.dreamstime.com/b/mobile-phone-cartoon-character-mascot-giving-double-thumbs-up-mobile-phone-thumbs-up-cartoon-mascot-156284748.jpg",
    },
    "Speaker": {
        "model": speaker,
        "img": "https://thumbs.dreamstime.com/z/smart-speaker-cartoon-funny-character-speaking-megaphone-isolated-white-136446089.jpg",
    },
    "Tablet": {
        "model": tablet,
        "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_24469362_computer-tablet-cartoon-giving-thumb-up.html&psig=AOvVaw18KShmwt38hLGproKTn62Y&ust=1664156431617000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLjS-vnnrvoCFQAAAAAdAAAAABAD",
    },
};


export default function Evaluation() {
    const [selectedOption, setSelectedOption] = React.useState("Speaker");

    return (
        <div>
            <Navbar />
            <select onChange={event => setSelectedOption(event.target.value)}>
                {Object.keys(evaluationModels).map(k => {
                    return (
                        <option key={k}>{k}</option>
                    )
                })}
            </select>

            <ModelEvaluationDescription
                modelName={selectedOption}
                model={evaluationModels[selectedOption]["model"]}
                modelImg={evaluationModels[selectedOption]["img"]}
            />
        </div>
    )
}