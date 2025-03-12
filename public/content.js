chrome.storage.local.get('userDetails', function (data) {
    if (!data.userDetails) return;

    const formData = data.userDetails;

    // Define keyword mappings for each form field
    const keywordMappings = {
        firstName: ['first', 'first name'],
        lastName: ['last', 'last name'],
        email: ['email', 'email address', 'e-mail'],
        phone: ['phone', 'mobile', 'contact number', 'phone number'],
        cgpa: ['cgpa', 'gpa', 'grade'],
        whyJoinUs: ['why join', 'why do you want', 'motivation']
    };

    // Find all input and textarea fields
    let fields = document.querySelectorAll('input, textarea');

    fields.forEach((field) => {
        let fieldName = field.name.toLowerCase();
        let placeholder = field.placeholder.toLowerCase();
        let label = field.labels?.[0]?.innerText.toLowerCase() || '';

        if (fieldName === 'name' || placeholder === 'name' || label === 'name') {
            field.value = `${formData.firstName} ${formData.lastName}`.trim();
            return;
        }

        // Try to match field name, placeholder, or label text
        for (let key in keywordMappings) {
            if (keywordMappings[key].some(keyword => fieldName.includes(keyword) || placeholder.includes(keyword) || label.includes(keyword))) {
                field.value = formData[key] || ''; // Autofill if data exists
                break;
            }
        }
    });
});
