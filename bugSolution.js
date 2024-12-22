```javascript
// pages/index.js
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./dynamic'), { ssr: false });

export default function Home() {
  return (
    <div>
      <DynamicComponent />
    </div>
  );
}

// pages/dynamic.js

export default function DynamicComponent() {
  return <p>Dynamically imported component</p>;
}
```