import React, { useState } from "react";
import pdf from '../assets/moiseszambrano.pdf'

const PdfView = () => {
  return (
    <>
      <div style={{width: '100%', height: '100%', position: 'absolute'}}>
       <object data={pdf} type="application/pdf" width='100%' height='100%'></object>
      </div>
    </>
  );
};

export default PdfView;
