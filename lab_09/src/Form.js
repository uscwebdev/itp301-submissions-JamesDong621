import React, { useState } from 'react';

export default function Form() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [terms, setTerms] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'comments':
        setComments(value);
        break;
      case 'terms':
        setTerms(checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = [];

    if (!fullName.trim()) errors.push('Name cannot be empty.');
    if (!/\s/.test(fullName)) errors.push('You must provide a full name.');
    if (!password) errors.push('Password cannot be empty.');
    if (password.length < 5)
      errors.push('Password must contain at least 5 characters.');
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password))
      errors.push('Password must contain uppercase and lowercase characters.');
    if (password !== confirmPassword) errors.push('Passwords do not match.');
    if (!email.trim() && !phone.trim())
      errors.push('You must provide either email or phone.');
    if (comments.length > 100)
      errors.push('Comments cannot exceed 100 characters.');
    if (!terms) errors.push('You must accept Terms & Conditions.');

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      alert('Registration Successful');
    }
  };

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="full-name" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="full-name"
                name="fullName"
                value={fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone:
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comments" className="form-label">
                Comments:
              </label>
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                value={comments}
                onChange={handleChange}
                maxLength={100}
              ></textarea>
              <div className="text-end">{comments.length} / 100</div>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                name="terms"
                checked={terms}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="terms">
                Accept Terms & Conditions
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
