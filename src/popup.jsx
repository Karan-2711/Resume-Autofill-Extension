import React, { useState, useEffect } from 'react';
import './popup.css';

// Define an enum for form fields
const FormFields = {
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  EMAIL: 'email',
  PHONE: 'phone',
  CGPA: 'cgpa',
  WHY_JOIN: 'whyJoinUs'
};

// Map enum keys to user-friendly questions
const FieldLabels = {
  [FormFields.FIRST_NAME]: 'First Name',
  [FormFields.LAST_NAME]: 'Last Name',
  [FormFields.EMAIL]: 'Email Address',
  [FormFields.PHONE]: 'Phone Number',
  [FormFields.CGPA]: 'CGPA',
  [FormFields.WHY_JOIN]: 'Why do you want to join us?'
};

export default function Popup() {
  const [formData, setFormData] = useState({
    [FormFields.FIRST_NAME]: '',
    [FormFields.LAST_NAME]: '',
    [FormFields.EMAIL]: '',
    [FormFields.PHONE]: '',
    [FormFields.CGPA]: '',
    [FormFields.WHY_JOIN]: ''
  });

  useEffect(() => {
    if (chrome?.storage?.local) {
      chrome.storage.local.get('userDetails', (data) => {
        if (data.userDetails) setFormData(data.userDetails);
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (chrome?.storage?.local) {
      chrome.storage.local.set({ userDetails: formData }, () => alert('Details saved!'));
    }
  };

  return (
    <div>
      <h2>Enter Your Details</h2>
      {Object.keys(FormFields).map((key) => {
        const fieldName = FormFields[key]; // Get actual field name from enum
        return (
          <div key={fieldName}>
            <h3>{FieldLabels[fieldName]}</h3>
            <input
              type="text"
              name={fieldName}
              value={formData[fieldName]}
              onChange={handleChange}
              placeholder={FieldLabels[fieldName]}
            />
          </div>
        );
      })}
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
