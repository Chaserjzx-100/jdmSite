import React from 'react';
import { useNavigate } from 'react-router-dom'


export default function Home() {

    const navigate = useNavigate();

    const goHome = (e) => {
        e.preventDefault();

        navigate('/inventory')
    }

    return (
        <button
            type="button"
            class="btn text-center btn-primary"
            onClick={(e) => goHome(e)}>Home
        </button>
    );
}