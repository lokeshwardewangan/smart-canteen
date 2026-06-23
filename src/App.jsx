import React, { useEffect, lazy, Suspense } from "react";
import {BrowserRouter as Router,Routes,Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FoodState from "./context/foods/FoodState";
import { useState } from "react";
import axios from "axios";
import { createCoin, getCoin } from "./utils/APIRoutes";
import { useAuth0 } from "@auth0/auth0-react";

const Home = lazy(() => import("./pages/Home"));
const Addfood = lazy(() => import("./pages/Addfood"));
const Updatefood = lazy(() => import("./pages/Updatefood"));
const Scanner = lazy(() => import("./pages/Scanner"));
const Usermsg = lazy(() => import("./pages/Usermsg"));
const Report = lazy(() => import("./pages/Report"));
const AddToCard = lazy(() => import("./pages/AddToCard"));
const FoodReview = lazy(() => import("./pages/FoodReview"));
const OrderHistory = lazy(() => import("./pages/OrderHistory"));
const StockEntry = lazy(() => import("./pages/StockEntry"));
const StockIssue = lazy(() => import("./pages/StockIssue"));
const StockReport = lazy(() => import("./pages/StockReport"));
const Timmer = lazy(() => import("./pages/Timmer"));
// https://canteenfrontend-nwpn.onrender.com
function App() {
  const { loginWithRedirect,logout,user,isAuthenticated } = useAuth0();
    const [webSlider,setWebSlider]=useState(false);
    const [popup,setpopup]=useState(false);
    const [userId,setUserId]=useState(undefined)
    const [showDownload,setShowDownload]=useState(true);

    useEffect(()=>{
     setWebSlider(true);
    },[])

   useEffect(()=>{
    const userAuthentication = async()=>{
      const response= await axios.post(createCoin,{
          userName:user.name,
          userEmail:user.email,
          userImage:user.picture
      })
      if(response.data.userId){
        localStorage.setItem("UserId",response.data.userId)
        featchCoin();
      }
    }
  if(isAuthenticated){
    userAuthentication();
  }
   },[user,isAuthenticated])

    const featchCoin=async()=>{
       const data=await axios.post(getCoin,{userId:localStorage.getItem("UserId")})
       if(data.data.length>0){
        setUserId(data.data[0].coin);
       }
    }
   const handlClosePop=()=>{
    setpopup(false);
   }

   const handleSend=async()=>{
    loginWithRedirect();
   }

  return (
<FoodState >
 <Router>
 <div id="container" className={`blur ${popup&&"active"}`}>
 {/* <div id="contents" style={{height: '100vh'}}> */}
     {/* opening curtain animation - disabled for now
     <div id="openingWeb">
                <div style={{right:`${webSlider&&"52vw"}`,visibility:`${webSlider&&"hidden"}`}} id="openLeft"> </div>
                <div style={{left:`${webSlider&&"52vw"}`,visibility:`${webSlider&&"hidden"}`}}  id="openRight"> </div>
     </div>
     */}
     <Navbar coin={userId}/>



     {/* <div className="container"> */}
     <main className="app-main">
        <Suspense fallback={<div style={{padding:"40px",textAlign:"center"}}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home showDownload={showDownload} setShowDownload={setShowDownload} />}></Route>
          <Route path="/addfood" element={<Addfood/>} ></Route>
          <Route path="/updatefood" element={<Updatefood  />} ></Route>
          <Route path="/scanner" element={<Scanner featchCoin={featchCoin} setpopup={setpopup} />} ></Route>
          <Route path="/message" element={<Usermsg featchCoin={featchCoin} setpopup={setpopup} />} ></Route>
          <Route path="/foodreport" element={<Report  />} ></Route>
          <Route path="/card" element={<AddToCard  />} ></Route>
          <Route path="/foodreview" element={<FoodReview  />} ></Route>
          <Route path="/orderhistory" element={<OrderHistory  />} ></Route>
          <Route path="/stockentry" element={<StockEntry/>}></Route>
          <Route path="/stockissue" element={<StockIssue/>}></Route>
          <Route path="/stockreport" element={<StockReport/>}></Route>
          <Route path="/timmer" element={<Timmer/>}></Route>
        </Routes>
        </Suspense>
     </main>
        <Footer />
        </div>
        
        {/* </div> */}
      </Router>     
      

     <div className="coin-popup">
     <div  id="allBox" className={`allBox ${popup&&"open-popup"}`} >
        <img className="images my-3" src={isAuthenticated?user.picture:"https://res.cloudinary.com/do3fiil0d/image/upload/v1702630521/canteen-user_mcfnzg.jpg"} alt="" srcset=""/>
        <h3 className="text-center">Wallet ₹{!userId?0:userId} </h3>
        <hr/>
        <h2>Name : {isAuthenticated?user.name:"canteen-user"} </h2>
         <div style={{paddingRight:"10px",paddingLeft:"10px",marginTop:"16px"}}>
         {!isAuthenticated && <p style={{textAlign:"center",color:"var(--text-muted)",fontSize:"0.9rem"}}>Login from the top to use your wallet</p>}
         {isAuthenticated && <p style={{textAlign:"center",color:"var(--text-muted)",fontSize:"0.9rem"}}>Remember your email id to keep your coins</p>}
         </div>
        <div style={{display:"flex",alignItems:"right",justifyContent:"right"}}>
        <button style={{marginRight:"20px",position:"relative",top:'-40px',padding:"2px 8px",backgroundColor:"var(--primary)",color:"#fff",borderRadius:"var(--radius-pill)",border:"none"}} className="my-5 " onClick={handlClosePop}>close</button>
        </div>
    </div>
     </div>
  </FoodState>
  );
}

export default App;
