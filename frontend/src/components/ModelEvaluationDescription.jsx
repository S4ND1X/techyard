export default function ModelEvaluationDescription({ modelName, model, modelImg, inversed }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: inversed ? "row" : "row-reverse",
            justifyContent: "center"
        }}>
            <img src={modelImg} alt="product" width="50%" height="400px" style={{ objectFit: "cover" }} />
            <div style={{
                width: "50%",
                padding: "30px",
            }}>
                <h1>{modelName}</h1>
                {Object.keys(model).map(k => {
                    return (
                        <div key={k}>
                            <p>{k}: <span>{model[k] * 100}%</span></p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}