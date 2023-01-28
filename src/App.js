import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
import BigSpring from "./pages/BigSpring";
import routes from "./routes/routes";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
    
    {
      loading ? (<BigSpring></BigSpring>) :
      
     ( <div>
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </div>
      
     )
    }
      

    </>
   
    

    
    

  
  
    
     )


}

export default App;
