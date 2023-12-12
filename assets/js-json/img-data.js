// App.js
import dbData from './db.json';

function App() {
  const imageUrls = dbData.images;

  const renderImages = () => {
    return imageUrls.map((imageUrl, index) => (
      `<img key="${index}" src="${imageUrl}" alt="Image ${index}" />`
    ));
  };

  return `
    <div>
      ${renderImages().join('')}
      <!-- 其他內容 -->
      test
    </div>
  `;
}

export default App;
