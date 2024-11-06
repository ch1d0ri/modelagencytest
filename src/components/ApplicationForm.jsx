import React, { useState } from "react";
import "./ApplicationForm.css";

function ApplicationForm() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        city: "",
        experience: "",
        salary: "",
    });

    // Обработчик изменения данных в форме
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Обработчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Логика отправки данных на сервер
        try {
            const response = await fetch("http://localhost:5000/api/submit-application", {
                method: "POST", // метод POST
                headers: {
                    "Content-Type": "application/json", // отправляем JSON
                },
                body: JSON.stringify(formData), // данные формы
            });

            // Обработка ответа от сервера
            if (response.ok) {
                console.log("Заявка успешно отправлена");
                alert("Заявка успешно отправлена!");
                // Очистить форму или сделать другие действия
                setFormData({
                    name: "",
                    age: "",
                    city: "",
                    experience: "",
                    salary: "",
                });
            } else {
                console.error("Ошибка при отправке заявки");
                alert("Произошла ошибка при отправке заявки.");
            }
        } catch (error) {
            console.error("Ошибка:", error);
            alert("Ошибка при связи с сервером.");
        }
    };

    return (
        <section className="application-form-section">
            <h2 className="form-title">Форма для заявки</h2>
            <form className="application-form" onSubmit={handleSubmit}>
                <label>
                    <span>Имя</span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <span>Возраст</span>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <span>Город</span>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <span>Опыт</span>
                    <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Ожидания по зп</span>
                    <input
                        type="text"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Кисс</button>
            </form>
        </section>
    );
}

export default ApplicationForm;