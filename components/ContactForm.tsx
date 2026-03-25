'use client';

import { useState, type FormEvent } from 'react';

type ContactFormProps = {
  variant?: 'default' | 'hero';
};

export default function ContactForm({ variant = 'default' }: ContactFormProps) {
  const isHero = variant === 'hero';
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ashu.saras2@gmail.com", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

        .cf-root {
          font-family: 'DM Sans', sans-serif;
          --gold: #C9A84C;
          --gold-light: #E8C96A;
          --ink: #1A1710;
          --ink-muted: #8A8070;
          --cream: #FAF8F3;
          --cream-dark: #F2EEE4;
          --white: #FFFFFF;
          --border: rgba(201, 168, 76, 0.25);
          --shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .cf-card {
          background: var(--white);
          border: 1px solid var(--border);
          padding: 28px 24px 24px;
          box-shadow: var(--shadow);
          max-width: 360px;
          width: 100%;
          position: relative;
        }

        .cf-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 6px;
        }

        .cf-subtitle {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--ink-muted);
          margin-bottom: 18px;
        }

        .cf-divider {
          width: 32px;
          height: 1px;
          background: var(--gold);
          margin: 10px 0 14px;
        }

        .cf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .cf-field {
          margin-bottom: 10px;
        }

        .cf-label {
          font-size: 10.5px;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-bottom: 4px;
          display: block;
        }

        .cf-field.active .cf-label {
          color: var(--gold);
        }

        .cf-input {
          width: 100%;
          padding: 11px 12px;
          font-size: 15px;
          font-weight: 500;
          border: 1px solid var(--cream-dark);
          background: var(--cream);
          outline: none;
          transition: 0.2s ease;
        }

        .cf-input:focus {
          border-color: var(--gold);
          background: var(--white);
        }

        textarea.cf-input {
          min-height: 76px;
        }

        .cf-submit {
          width: 100%;
          padding: 14px;
          margin-top: 8px;
          background: var(--ink);
          color: var(--gold-light);
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: 0.3s;
        }

        .cf-submit:hover {
          background: var(--gold);
          color: var(--ink);
        }

        .cf-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .cf-trust {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 14px;
          font-size: 11.5px;
          font-weight: 500;
          color: var(--ink-muted);
        }

        .cf-success {
          text-align: center;
          padding: 20px 0;
        }

        .cf-success-title {
          font-size: 19px;
          font-weight: 500;
          margin-bottom: 6px;
        }

        @media (max-width: 400px) {
          .cf-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className={`cf-root cf-card ${isHero ? 'hero' : ''}`}>
        {submitted ? (
          <div className="cf-success">
            <div className="cf-success-title">✓ Request Received</div>
            <p>We’ll contact you shortly</p>
            <br/>
            <h4>Reload to see form again</h4>

          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            action="https://formsubmit.co/ashu.saras2@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />

            {/* ✅ Added one more email here */}
            <input
              type="hidden"
              name="_cc"
              value="bharatchoudhary7585@gmail.com"
            />

            <div className="cf-title">Request Callback</div>
            <div className="cf-divider" />
            <div className="cf-subtitle">Get pricing & floor plans instantly</div>

            <div className="cf-row">
              <div className={`cf-field ${focused === 'name' ? 'active' : ''}`}>
                <label className="cf-label">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="cf-input"
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div className={`cf-field ${focused === 'phone' ? 'active' : ''}`}>
                <label className="cf-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[6-9]{1}[0-9]{9}"
                  className="cf-input"
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            <div className={`cf-field ${focused === 'email' ? 'active' : ''}`}>
              <label className="cf-label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="cf-input"
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div className={`cf-field ${focused === 'message' ? 'active' : ''}`}>
              <label className="cf-label">Message</label>
              <textarea
                name="message"
                placeholder="3 BHK / 4 BHK..."
                className="cf-input"
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <button type="submit" className="cf-submit" disabled={loading}>
              {loading ? "Sending..." : "Get Details"}
            </button>

            <div className="cf-trust">
              <span>Secure</span>
              <span>No Spam</span>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
