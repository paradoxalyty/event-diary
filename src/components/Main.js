import React from "react";
import { useImages } from "./useImages";
import { Modal } from "./Modal/Modal";

import modalExample from "../assets/modal-example.jpg";

export const Main = () => {
    const images = useImages();

    const modalRef = React.useRef();
    const openModal = () => {
        modalRef.current.openModal();
    }

    return (
        <main className="notes">
            {images.data.map((image) => (
                <div key={image.id} className="note" onClick={openModal}>
                    <img src={image.src.medium} className="note-img" width="100%" height="auto" alt={`Provided by Pexels, photographer - ${image.photographer}`} />
                    <div className="info-box">
                        <span className="info-titel">Побывал в горах</span>
                        <span className="info-date">Вт 14 янв</span>
                        <p className="info-description">Сегодня я почувствовал детское волнение...</p>
                    </div>
                </div>
            ))}

            <Modal ref={modalRef} >
                <div className="modal-box-heading">
                    <span className="modal-titel">Побывал в горах</span>
                    <span className="modal-date">Вт 14 янв</span>
                </div>
                <div className="modal-box-main">
                    <img src={modalExample} className="modal-img" alt={`Provided by Pexels, photographer - `} />
                    <p className="modal-description">Это бесспорная истина, недаром же мы редко доверяемся тем, кто лучше нас.
                    Скорее уж мы избегаем их общества. Чаще всего мы исповедуемся тем, кто похож на нас и разделяет наши слабости.
                    Мы вовсе не хотим исправляться, не стремимся к самоусовершенствованию: прежде всего нужно, чтобы нас судили
                    со всеми нашими слабостями. Нам хочется, чтобы нас пожалели и поддержали дух наш. В общем, мы хотели бы и не
                    считаться виновными, и не стараться очиститься. В нас недостаточно цинизма и недостаточно добродетели.
                    У нас нет ни силы зла, ни силы добра. Вы читали Данте? Правда? Вот черт! Вы, стало быть, знаете, как это у Данте?
                    Ведь он допускает, что ангелы были нейтральными в распре между Богом и Сатаной. Он отводит им место в преддверии,
                    так сказать в вестибюле своего ада. Мы с вами в вестибюле, дорогой друг.Терпение? Вы, разумеется, правы. Нужно
                    набраться терпения и ждать Страшного суда. Но, к несчастью, нам некогда, мы торопимся. Так торопимся, что мне даже
                    пришлось стать судьей на покаянии. Однако мне сначала нужно было привести в порядок свои открытия и уладить дело
                    с насмешками моих современников. С того вечера, когда меня позвали к ответу — а ведь меня действительно позвали, — я
                    обязан был ответить или по крайней мере поискать ответ. Это оказалось нелегко. Я долго блуждал наугад. Но этот
                    постоянный хохот и насмешки научили меня яснее разбираться в себе и увидеть наконец, что я совсем не прост.
                    Вы не улыбайтесь, эта истина не так уж элементарна, как кажется. Элементарными называют такие истины, которые
                человек открывает последними, — вот и все.</p>
                </div>
            </Modal>
        </main>
    )
};