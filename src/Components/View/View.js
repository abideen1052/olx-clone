import React ,{useEffect,useState,useContext} from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    //const {userId} = postDetails
    firebase.firestore().collection('users').where('id','==','')
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/olx-clone-bf716.appspot.com/o/image%2Fcam.jpg?alt=media&token=0763e409-6057-453e-9fc5-947a50ac540a"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 250000 </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
