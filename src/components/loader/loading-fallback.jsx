export const LoadingFallBack = ({children, isLoading})=>{
     return isLoading ? <div className="loading-overlay">
        <div className="loader-component">
            <img src="/loader-bean.svg" alt="loading..." srcset="" />
        </div>
     </div>:children
   }

  //  export const searchLoadingFallBack = ({children, isLoading})=>{
  //    return isLoading ? <div className="loading-overlay">
  //       <div className="loader-component">
  //         loading
  //           <img src="/loader-bean.svg" alt="loading..." srcset="" />
  //       </div>
  //    </div>:children
  //  }