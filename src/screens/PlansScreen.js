import React, { useState, useEffect } from 'react';
import "./PlansScreen.css";
import { db } from "./firebase1.js";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { collection, query, where, getDocs, addDoc, onSnapshot } from 'firebase/firestore';
import { loadStripe } from "@stripe/stripe-js";

function PlansScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        const fetchData = async () => {
            const productsCollection = collection(db, 'products');
            const q = query(productsCollection, where('active', '==', true));
            const querySnapshot = await getDocs(q);
            const fetchedProducts = {};
            
            for (const doc of querySnapshot.docs) {
                const docData = doc.data();
                const priceCollection = collection(db, 'products', doc.id, 'prices');
                const priceSnapshot = await getDocs(priceCollection);
                
                const priceData = priceSnapshot.docs[0]?.data();
                const priceId = priceSnapshot.docs[0]?.id;

                fetchedProducts[doc.id] = { ...docData, priceId };
            }

            setProducts(fetchedProducts);
        };

        fetchData();
    }, []);

    const loadCheckout = async (priceId) => {
        const docRef = await addDoc(collection(db, 'customers', user.uid, 'checkout_sessions'), {
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

        const unsubscribe = onSnapshot(docRef, async (snap) => {
            const { error, sessionId } = snap.data();

            if (error) {
                alert(`An error occurred: ${error.message}`);
            }

            if (sessionId) {
                const stripe = await loadStripe("pk_test_51NqJAYEj2VfcTVgYZuTga0HMg0FLFCs3NKUXihLJeV2aR18WgWcHxGulpExstmYX1tAKi42yaQoVw87Q5DLp43Ee00WaUiPEw8");
                stripe.redirectToCheckout({ sessionId });
            }
        });

        return () => unsubscribe();
    };

    return (
        <div className="PlansScreen">
            {Object.entries(products).map(([productId, productData]) => {
                const handleSubscriptionClick = () => {
                    const priceId = productData?.priceId;
                    if (!priceId) {
                        console.error("Price ID is undefined. Product data is:", productData);
                        return;
                    }
                    loadCheckout(priceId);
                };
    
                return (
                    <div className="plansScreen__plan" key={productId}>
                        <div className="plansScreen_info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={handleSubscriptionClick}>Subscribe</button>
                    </div>
                );
            })}
        </div>
    );
}

export default PlansScreen;
