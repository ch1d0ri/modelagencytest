import React from "react";
import "./ModelSection.css";

function ModelSection() {
    const models = [
        {
            id: 1,
            name: "Alexa Ray",
            bio: "Люблю нюхать меф.",
            image: "/assets/images/first.png", // Путь к изображению модели
        },
        {
            id: 2,
            name: "Jaden Storm",
            bio: "Играю на пудже.",
            image: "/assets/images/second.png" // Путь к изображению модели
        },
        {
            id: 3,
            name: "Mira Nova",
            bio: "ТУпа нереальна чиксса а ну давай.",
            image: "/assets/images/thrist.png", // Путь к изображению модели
        },
    ];

    return (
        <section className="model-section" id='models'>
            <div className="model-overview">
                <h2>Наши модели</h2>
                <p>
                Откройте для себя лица, олицетворяющие дух Devil May Love. Наши модели – это определение
                футуристическая элегантность, каждая из которых привносит в индустрию уникальную энергию и стиль.
                </p>
            </div>
            <div className="model-grid">
                {models.map((model) => (
                    <div key={model.id} className="model-card">
                        <div
                            className="model-image"
                            style={{ backgroundImage: `url(${model.image})` }}
                        />
                        <div className="model-info">
                            <h3>{model.name}</h3>
                            <p>{model.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ModelSection;