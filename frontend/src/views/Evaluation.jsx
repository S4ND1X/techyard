import React from "react";
import computer from "../evaluation_models/computer.json";
import display from "../evaluation_models/display.json";
import laptop from "../evaluation_models/laptop.json";
import phone from "../evaluation_models/phone.json";
import speaker from "../evaluation_models/speaker.json";
import tablet from "../evaluation_models/tablet.json";

import ModelEvaluationDescription from "../components/ModelEvaluationDescription";

import Typography from "@mui/material/Typography";

import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const evaluationModels = {
    "Computer": {
        "model": computer,
        "img": "https://img.freepik.com/premium-photo/modern-home-workplace-with-pc-computer-table-blurred-beautiful-lake-background_67155-22944.jpg?w=2000",
    },
    "Display": {
        "model": display,
        "img": "https://xiaomiplanet.sk/wp-content/uploads/2020/04/xiaomi-mi-display-1a-predstavenie.jpg",
    },
    "Laptop": {
        "model": laptop,
        "img": "https://cdn.cnn.com/cnnnext/dam/assets/211025072623-macbook-pro-14-display-5.jpg",
    },
    "Phone": {
        "model": phone,
        "img": "https://m-cdn.phonearena.com/images/articles/380391-image/sierra-blue-iphone-13-pro.jpg",
    },
    "Speaker": {
        "model": speaker,
        "img": "https://i.rtings.com/assets/products/Raq5Ijzg/apple-homepod-mini/design-small.jpg",
    },
    "Tablet": {
        "model": tablet,
        "img": "https://cdn.ipadizate.com/2022/08/iPad-Pro.1660215525.7846.jpg",
    },
};


export default function Evaluation() {

    return (
        <div>
            <div style={{
                height: "calc(100vh - 64px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Typography variant="h1">How we price our products 
                </Typography>
            </div>

            {Object.keys(evaluationModels).map((k, index) => {
                return (
                    <ModelEvaluationDescription
                        modelName={k}
                        model={evaluationModels[k]["model"]}
                        modelImg={evaluationModels[k]["img"]}
                        inversed={index % 2 === 0}
                    />
                )
            })}


        </div>
    )
}