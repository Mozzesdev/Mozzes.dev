import React, { useEffect, useState } from "react";
import pdf from '../assets/moiseszambrano.pdf'

const PdfView = () => {

  useEffect(() => {
    if(typeof window.orientation !== 'undefined'){
      document.getElementById('downloadPdf').click()
      window.close()
    }
  }, [])
  

  return (
    <>
      <div style={{width: '100%', height: '100%', position: 'absolute'}}>
       <object data={pdf} type="application/pdf" width='100%' height='100%'>
         <a href={pdf} download='MoisesZambrano-Cv.pdf' id='downloadPdf'>Descargar Pdf</a>
       </object>
      </div>
    </>
  );
};

export default PdfView;
