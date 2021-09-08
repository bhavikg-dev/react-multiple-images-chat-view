import React from 'react';
import './App.scss';

function App() {

  const singleImage = ['https://images.unsplash.com/photo-1619340207451-b8dee65a7546?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'];
  const twoImages = [...singleImage, 'https://images.unsplash.com/photo-1619090602676-858b448037ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'];
  const threeImages = [...twoImages, 'https://images.unsplash.com/photo-1596016691838-70260f1e21c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'];
  const fourImages = [...threeImages, 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'];
  const moreThanFourImages = [...fourImages, 'https://images.unsplash.com/photo-1606669059257-19fc4ca49f79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80', 'https://images.unsplash.com/photo-1578496479763-c21c718af028?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1581093577421-f561a654a353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1581092333322-31d2fd38a35e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'];

  /**
   * imageItemView
   * @param imageUrl string
   * @param imageIndex number
   * @param imagesCount number
   * @description Show Image in Wrapper
   */
  const imageItemView = (imageUrl: string, imageIndex: number, imagesCount: number) => {
    return (<div className={`imageItemView ${imagesCount > 4 && imageIndex === 3 ? 'showMoreImages' : ''} ${imagesCount > 1 ? 'multiple' : ''}`}>
      {imagesCount > 4 && imageIndex === 3 && <div className="countOverlayView"><p className="countView">+{imagesCount-imageIndex}</p></div>}
      <img src={imageUrl} className={`imageView ${imagesCount > 1 ? 'multiple' : ''}`} alt="Single Image" title="Single Image" />
      </div>);
  }

  return (
    <div className="App">

      <div className="imageWrapper">
        {singleImage.map((imageUrl, imageIndex) => imageItemView(imageUrl, imageIndex, singleImage.length))}
      </div>

      <br/>
      <br/>
      <br/>

      <div className="imageWrapper multiple">
        {twoImages.map((imageUrl, imageIndex) => imageItemView(imageUrl, imageIndex, twoImages.length))}
      </div>

      <br/>
      <br/>
      <br/>

      <div className="imageWrapper multiple">
        {threeImages.map((imageUrl, imageIndex) => imageItemView(imageUrl, imageIndex, threeImages.length))}
      </div>

      <br/>
      <br/>
      <br/>

      <div className="imageWrapper multiple">
        {fourImages.map((imageUrl, imageIndex) => imageItemView(imageUrl, imageIndex, fourImages.length))}
      </div>

      <br/>
      <br/>
      <br/>

      <div className="imageWrapper multiple">
        {moreThanFourImages.slice(0, 4).map((imageUrl, imageIndex) => imageItemView(imageUrl, imageIndex, moreThanFourImages.length))}
      </div>

    </div>
  );
}

export default App;
