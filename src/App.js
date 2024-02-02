import { Component, useEffect, useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import getImages from './services/api';
import Button from './components/Button/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

// class App extends Component {
//   state = {
//     hits: [],
//     page: 1,
//     searchQuery: '',
//     status: "pending",
//     showModal: false,
//     selectedImgHreff: null,
//   } 

//   onClickSearch = (search) => {
//     this.setState((prevState) => {
//       if (prevState.searchQuery !== search) {
//         return {
//           searchQuery: search,
//           hits: []
//         }
//       }
//     }, () => {
//        this.downloadImages()
//     });
//    ;
//   }

//   downloadImages = async () => {
//     const { searchQuery, page } = this.state;

//     if (searchQuery.trim() === '') {
//       alert('Please write search query')
//     } else {
//       this.setState({ status: 'loading' });
//       await getImages(page, searchQuery).then(data => {
//        this.setState((prevState) => {
//          return {
//            status:'resolved',
//            hits: [...prevState.hits, ...data.hits]
//          }
//        })
//      })
//     }
//   }

//   onLoadMoreClick = () => {
//     this.setState((prev) => ({
//       page: prev.page + 1
//     }), () => {
//           this.downloadImages();
//     })
//   }

//   onPictureClick = (id) => {
//     let selectedImg = this.state.hits.find((el) => (el.id === id));
//     this.setState({ selectedImgHreff: selectedImg.largeImageURL},()=>{this.toggleModal()});
//   }

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal
//     }))
//   }

//   render() {
//     const { hits, status, selectedImgHreff,showModal } = this.state;
//     return (
//       <div className="App">
//         <Searchbar onSearch={this.onClickSearch} />
//         <ImageGallery images={hits} imgClick = {this.onPictureClick} />
//         {status === 'loading' && <Loader/>}
//         {status === 'resolved' && <Button onClick={this.onLoadMoreClick} />} 
//         {showModal &&
//           <Modal onClick={this.toggleModal} img={selectedImgHreff } />}
//       </div>
//     );
//   }
// }

// export default App;


export default function App() {

  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('pending');
  const [showModal, setShowModal] = useState(false);
  const [selectedImgHreff, setSelectedImgHreff] = useState(null);


  useEffect(() => {
    if (selectedImgHreff) {
      toggleModal()
    }
  }, [selectedImgHreff])

  useEffect(() => {
    if (searchQuery.trim() !== '') {
          setHits([]);
           downloadImages()
    } 
  }, [searchQuery])

  useEffect(() => {
    if (searchQuery.trim() !== '') {
           downloadImages()
    } 
  }, [page])


  const onClickSearch = (search) => {
    if (search.trim() === '') {
      alert('Please provide search query')
      return
    }
    if (search !== searchQuery) {
      setSearchQuery(search);
    }
  }
  
  const downloadImages = async () => {
      setStatus('loading')
      await getImages(page, searchQuery).then(data => {
        setHits((prev) => ([...prev, ...data.hits]))
      }).then(() => { setStatus('resolved')})   
  }

  const toggleModal = () => {
    setShowModal((prev)=>(!prev))
  }

  const onPictureClick = (id) => {
    console.log(id)
    let selectedImg = hits.find((el) => (el.id === id));
    setSelectedImgHreff(selectedImg.largeImageURL)
  }

  const onLoadMoreClick = () => {
    setPage((prev)=>(prev + 1))
  }

  
  return (
      <div className="App">
        <Searchbar onSearch={onClickSearch} />
        <ImageGallery images={hits} imgClick = {onPictureClick} />
        {status === 'loading' && <Loader/>}
        {status === 'resolved' && <Button onClick={onLoadMoreClick} />} 
        {showModal &&
          <Modal onClick={toggleModal} img={selectedImgHreff} />}
      </div>
    );
}
