import React from 'react';
function MyComponent(props) {
  const { logOut, loading } = props;
  return (
    <div data-testid="btnHeaderCategory">
      {loading ? <div data-testid="loading" 
         styleName={{"color":"green"}} >Loading</div> : 
         <div data-testid="headerText" onClick={logOut} >
          Mega menu
         </div> 
       }
    </div>
   );
};
export default MyComponent;