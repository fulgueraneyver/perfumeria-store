import { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import ProductSection from "../components/ProductSection";
import { perfumes } from "../data/perfumes";
import { db } from "../firebase";
import {
    collection,
    getDocs
} from "firebase/firestore";

function Home() {
    const [productos, setProductos] =
        useState([]);

    useEffect(() => {

        cargarProductos();

    }, []);

    const cargarProductos = async () => {

        const snapshot = await getDocs(
            collection(db, "perfumes")
        );

        const lista = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        setProductos(lista);
    };
    return (
        <>
            <Header />

            <HeroBanner />

            <Categories />

            <ProductSection
                titulo="Nuestros Perfumes"
                productos={productos}
            />
        </>
    );
}

export default Home;
``