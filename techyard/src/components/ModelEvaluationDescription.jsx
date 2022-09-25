export default function ModelEvaluationDescription({ modelName, model, modelImg }) {
    return (
        <div>
            <h1>{modelName}</h1>
            <img src={modelImg} alt="product" width="400px" height="400px" />
            {Object.keys(model).map(k => {
                return (
                    <div key={k}>
                        <p>{k}: {model[k] * 100}%</p>
                    </div>
                );
            })}
        </div>
    );
}