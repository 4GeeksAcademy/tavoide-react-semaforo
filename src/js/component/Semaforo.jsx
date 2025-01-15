import React, {useState} from "react";


const Semaforo = () => {
  const [activarColor, setActiveColor] =useState(null);

  const colorDeLuz = (color) => { setActiveColor (color)};


return (
  <div className="d-flex justify-content-center align-items-center mt-5">
      <div
        className="bg-dark rounded d-flex flex-column justify-content-around p-2"
        style={{
          width: '100px',
          height: '300px',
        }}
      >
        <div
          onClick={() => colorDeLuz('red')}
          className={`rounded-circle mx-auto ${
            activarColor === 'red' ? 'bg-danger ' : 'bg-danger bg-opacity-50'
          }`}
          style={{
            width: '60px',
            height: '60px',
          }}
        ></div>

        <div
          onClick={() => colorDeLuz('yellow')}
          className={`rounded-circle mx-auto ${
            activarColor === 'yellow' ? 'bg-warning' : 'bg-warning bg-opacity-50'
          }`}
          style={{
            width: '60px',
            height: '60px',
          }}
        ></div>

        <div
          onClick={() => colorDeLuz('green')}
          className={`rounded-circle mx-auto ${
            activarColor === 'green' ? 'bg-success' : 'bg-success bg-opacity-50'
          }`}
          style={{
            width: '60px',
            height: '60px',
          }}
        ></div>
      </div>
    </div>
);
}



export default Semaforo;