import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const VerifyEmail = () => {
    const [query] = useSearchParams();
    const email = query.get("email");
    const ExpiresTime = query.get("expires");

    const [otp, setOtp] = useState(Array(6).fill(''));
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(0);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        const currentTime = new Date().getTime();
        const expiresAt = new Date(ExpiresTime).getTime();
        const differenceOfTime = expiresAt - currentTime;

        // Calculate remaining time in seconds
        const initialTimer = Math.floor(differenceOfTime / 1000);
        setTimer(initialTimer);

        if (initialTimer <= 0) {
            setCanResend(true);  // Enable "Resend OTP" if expired
            return;
        }

        // Timer countdown effect
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval); // Stop timer when it reaches 0
                    setCanResend(true); // Enable the resend button
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [ExpiresTime]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // const otpString = otp.join('');
        // console.log(otpString);
        // if (otpString.length !== 6 || otpString.includes('')) {
        //     alert('Please enter all 6 digits of the OTP');
        //     return;
        // }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            alert('OTP verified successfully!');
        }, 2000);
    };

    const handleResend = () => {
        if (canResend) {
            setLoading(true);
            setOtp(Array(6).fill(''));
            setTimer(0); // Reset timer on resend

            setTimeout(() => {
                setLoading(false);
                setCanResend(false); // Disable the button after resending
                alert('A new OTP has been sent to your email');
            }, 2000);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center pt-5 pb-5">
            <div className="card p-5 text-center shadow-lg rounded-4" style={{ maxWidth: '420px', width: '100%' }}>
                <h4 className="mb-3 text-dark fw-bold">Email Verification</h4>
                <p className="text-muted">
                    Enter the one-time password (OTP) sent to <strong>{email}</strong> to verify your account.
                </p>

                <div id="otp" className="d-flex justify-content-center mb-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            className="otp-input mx-1 text-center"
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}
                        />
                    ))}
                </div>

                <button
                    className="btn btn-primary btn-lg w-100 mb-3"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? 'Verifying...' : 'Verify OTP'}
                </button>

                <p className="text-muted">
                    {canResend ? (
                        <button className="btn btn-link" onClick={handleResend}>Resend OTP</button>
                    ) : (
                        <span>Resend OTP in {Math.floor(timer / 60)}:{('0' + (timer % 60)).slice(-2)}</span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default VerifyEmail;