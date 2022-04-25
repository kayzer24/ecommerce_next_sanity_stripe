import React from 'react';
import Link from "next/link";

const Canceled = () => {
    return (
        <div className="cancel-wrapper">
            <div className="cancel">
                <p>Transaction was cancelled successfully !</p>
                <Link href="/">
                    <button
                        type="button"
                        width="300px"
                        className="btn"
                    >
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Canceled;