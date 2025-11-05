import React from 'react';

export default function App() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '48px', color: '#1e40af' }}>MyProCv</h1>
      <p style={{ fontSize: '24px', color: '#64748b' }}>Professional CV Builder</p>
      <p style={{ marginTop: '20px', color: '#475569' }}>
        Your CV builder is deploying successfully! 🎉
      </p>
      <div style={{ marginTop: '30px', padding: '20px', background: '#f1f5f9', borderRadius: '8px' }}>
        <p><strong>Next Steps:</strong></p>
        <p>1. Confirm this page loads</p>
        <p>2. Add full CV builder features</p>
        <p>3. Integrate payment gateway</p>
      </div>
    </div>
  );
}
```

4. Commit

---

### **Step 3: Make sure `public/index.html` is correct**

1. Look at your file list - do you see `public/index.html`?
2. If `index.html` is in the root (not in `public` folder):
   - Click on `index.html`
   - Click the **pencil icon** to edit
   - At the top where it shows the filename, change it from `index.html` to `public/index.html`
   - Commit

---

### **Step 4: Deploy**

Once your repo looks like this:
```
myprocy-app/
├── README.md
├── package.json
├── public/
│   └── index.html
└── src/
    ├── index.js
    └── App.js
