import React from 'react';

/** Style */
import './Loading2.css';

const Loading2 = () => {

    return (
        // <div className="container-fluid">
        //     <div className="container">
        //         <h3 className="h3 text-white"> იტვირთება</h3>
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <div className="preloader1">
        //                     <div className="loader loader-inner-1">
        //                         <div className="loader loader-inner-2">
        //                             <div className="loader loader-inner-3">
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 2 </h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="preloader2">
//                     <div className="box1"></div>
//                     <div className="box2"></div>
//                     <div className="box3"></div>
//                     <div className="box4"></div>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <div className="container-fluid bg-1">
//         <div className="container">
//             <h3 className="h3 text-white">Preloader Demo - 3 </h3>
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="preloader3"></div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 4 </h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div id="loader4">
//                     <span className="loader loader-1"></span>
//                     <span className="loader loader-2"></span>
//                     <span className="loader loader-3"></span>
//                     <span className="loader loader-4"></span>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
//     <hr/>
    
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 5 </h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader5">
//                     <div className="loader-inner box-1"></div>
//                     <div className="loader-inner box-2"></div>
//                     <div className="loader-inner box-3"></div>
//                     <div className="loader-inner box-4"></div>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <hr/>
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 6</h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader6">
//                     <span className="loader-inner"></span>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <hr/>
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 7</h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader7">
//                     <span className="loader-inner-1"></span>
//                     <span className="loader-inner-2"></span>
//                     <span className="loader-inner-3"></span>
//                     <span className="loader-inner-4"></span>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <hr/>
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 8</h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader8">
//                     <div className="loader-inner"></div>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <hr/>
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 9</h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader9">
//                     <div className="box-1"></div>
//                     <div className="box-2"></div>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <hr/>
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 10</h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader10">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <hr/>
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 11</h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader11">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <hr/>
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 12</h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader12">
//                     <div className="loader-inner-1 box-1 box-red"></div>
//                     <div className="loader-inner-2 box-2 box-pink"></div>
//                     <div className="loader-inner-1 box-3 box-blue"></div>
//                     <div className="loader-inner-2 box-4 box-yellow"></div>
//                     <div className="loader-inner-1 box-5 box-peach"></div>
//                     <div className="loader-inner-2 box-6 box-pink"></div>
//                     <div className="loader-inner-1 box-7 box-green"></div>
//                     <div className="loader-inner-2 box-8 box-purple"></div>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <hr/>
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 13</h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader13">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <hr/>
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 14</h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader14">
//                     <div className="loader-inner">
//                         <div className="box-1"></div>
//                         <div className="box-2"></div>
//                         <div className="box-3"></div>
//                         <div className="box-4"></div>
//                     </div>
//                     <span className="text">loading</span>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <hr/>
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 15</h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader15">
//                     <span></span><span></span><span></span><span></span>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <hr/>
    <div className="container">
        <br/><br/>
        <h3 className="h3"> L o a d i n g . . .</h3>
        <div className="row">
            <div className="col-md-12">
                <div className="loader16 col-2" ></div>
            </div>
        </div>
        <br/><br/>
    </div>
    
//     <hr/>
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 17</h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader17">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//     <div className="container-fluid bg-2">
//         <div className="container">
//             <h3 className="h3 text-white">Preloader Demo - 18</h3>
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="loader18">Loading...</div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
//     <div className="container">
//         <br/><br/>
//         <h3 className="h3">Preloader Demo - 19</h3>
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="loader19">
//                     <div className="loader-inner">
//                         <div className="box-1">
//                             <div className="box-2"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <br/><br/>
//     </div>
    
//    <div className="container-fluid bg-3">
//         <div className="container">
//             <h3 className="h3 text-white">Preloader Demo - 20</h3>
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="loader20">Loading...</div>
//                 </div>
//             </div>
//         </div>
//     </div>
    );
}

export default Loading2;