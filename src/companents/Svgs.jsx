
import React from 'react';

//Main button
export const HomeButton = (props) => {
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="power-off"
        className="prefix__svg-inline--fa prefix__fa-power-off prefix__fa-w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...props}
      >
        <path
          fill={props.fill}
          d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
        />
      </svg>
    )
  }
  
  //Github
export const Github = (props) => {
      return (
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="github"
            className="prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
          >
            <path
              fill={props.fill}
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
          </svg>
        )
  }
  
 
  //Facebook
  export const Facebook = (props) => {
      return (
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="facebook"
            className="prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
          >
            <path
              fill={props.fill}
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            />
          </svg>
        )
  }
  
//YingYang
  export const YinYang = (props) => {
      return (
          <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="yin-yang"
            className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
          >
            <path
              fill={props.fill}
              d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
            />
          </svg>
        )
  }
  
//Anchor
  export const BlogDetails = (props) => {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 106.254 127.084"
      xmlSpace="preserve"
      {...props}
    >
      <path 
      fill={props.fill}
      d="m31.628 32.976-.012-8.608L2.849 47.045c.04 2.677-.042 5.763 0 8.44l28.767 22.678-.023-8.687L7.98 51.303zM75.33 32.976l.012-8.608 28.767 22.677c-.04 2.677.042 5.763 0 8.44L75.342 78.163l.023-8.687 23.612-18.173zM64.698 21.844h7.871L42.137 78.67h-9.353" />
    </svg>
    )
  }
  
  
//Link 
export const Link = (props) => {
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="link"
        className="prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...props}
        
      >
        <path
          fill={props.fill}
          
          d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
        />
      </svg>
    )
  }
  
  

//Cv
export const Cv =(props)=>{
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 744.09 1052.4"
    {...props}
  >
    <g transform="matrix(1.2122 0 0 1.2401 -88.015 -110.96)">
      <rect
        style={{
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 12.069,
          fill: "#fff",
        }}
        ry={0}
        height={820.55}
        width={602.37}
        y={101.52}
        x={79.868}
      />
      <path
      fill={props.fill}
        id="a"
        style={{
          stroke: "#000",
          strokeWidth: "5.7328px",
        
        }}
        d="M164.69 204.53H595.4"
      />
      <use
        style={{
          stroke: "#000",
          fill: "#000",
        }}
        xlinkHref="#a"
        transform="translate(0 431.78)"
        height={900}
        width={800}
      />
      <use
        style={{
          stroke: "#000",
          fill: "#000",
        }}
        xlinkHref="#a"
        transform="translate(0 371.43)"
        height={900}
        width={800}
      />
      <use
        style={{
          stroke: "#5d3a3a",
          fill: "#000",
        }}
        xlinkHref="#a"
        transform="translate(0 311.08)"
        height={900}
        width={800}
      />
      <use
        style={{
          stroke: "#000",
          fill: "#000",
        }}
        xlinkHref="#a"
        transform="translate(0 250.74)"
        height={900}
        width={800}
      />
      <use
        style={{
          stroke: "#000",
          fill: "#000",
        }}
        xlinkHref="#a"
        transform="translate(0 190.39)"
        height={900}
        width={800}
      />
      <use
        style={{
          stroke: "#000",
          fill: "#000",
        }}
        xlinkHref="#a"
        transform="translate(0 130.05)"
        height={900}
        width={800}
      />
      <use
        style={{
          stroke: "#000",
          fill: "#000",
        }}
        xlinkHref="#a"
        transform="translate(0 69.526)"
        height={900}
        width={800}
      />
      <use
        style={{
          stroke: "#000",
          fill: "#000",
        }}
        xlinkHref="#a"
        transform="matrix(.49775 0 0 1 299.88 552.76)"
        height={900}
        width={800}
      />
    </g>
  </svg>
  )
}

//Develope
export const Develope = (props) => { 
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="laptop-code"
        className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        {...props}
      >
        <path
           fill={props.fill}
          d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
        />
      </svg>
    )
  
  }

  export const Medium =(props)=>{
    return (
      <svg xmlns="http://www.w3.org/2000/svg"  {...props}>
      <path fill={props.fill} d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm.077 4.455-.747.902a.249.249 0 0 0-.074.175v6.821c0 .066.027.129.074.175l.747.972v.186h-4.513V16.5l1.157-.972a.249.249 0 0 0 .074-.175V9.252l-2.932 7.427-.002.008h-.633L7.82 9.455v5.378c0 .09.031.178.088.248L9.051 16.5v.186H5.769V16.5l1.142-1.411A.4.4 0 0 0 7 14.84v-6.2a.249.249 0 0 0-.058-.159l-.763-1.026V7.25h3.322l2.83 6.008 2.371-6.008h3.374v.205z" />
      <path
           fill={props.fill}
        d="M6.179 7.25v.205l.762 1.026a.243.243 0 0 1 .058.159v6.2a.395.395 0 0 1-.089.249L5.768 16.5v.186H9.05V16.5l-1.143-1.419a.396.396 0 0 1-.088-.248V9.455l3.407 7.231h.633l.002-.008 2.932-7.427v6.101a.245.245 0 0 1-.074.175l-1.157.972v.186h4.513v-.186l-.747-.972a.249.249 0 0 1-.074-.175v-6.82c0-.066.027-.129.074-.175l.747-.902V7.25h-3.374l-2.371 6.008L9.501 7.25H6.179z"
        opacity={0.35}
      />
    </svg>
    )
  }
 
  export const Linkedin =(props)=>{
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill={props.fill} d="M21 3H3v18h18V3zM9 17H6.477v-7H9v7zM7.694 8.717c-.771 0-1.286-.514-1.286-1.2s.514-1.2 1.371-1.2c.771 0 1.286.514 1.286 1.2s-.514 1.2-1.371 1.2zM18 17h-2.442v-3.826c0-1.058-.651-1.302-.895-1.302s-1.058.163-1.058 1.302V17h-2.523v-7h2.523v.977c.325-.57.976-.977 2.197-.977S18 10.977 18 13.174V17z" />
    </svg>
    )
  }

  export const Home = (props) => {
    return(
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 463.89 438.88"
      {...props}
    >
      <path fill={props.fill} d="M394.811 223.1zL231.991 78.91l-162.9 144.25v206.12c0 5.33 4.3 9.6 9.62 9.6h101.81V348.5c0-5.32 4.27-9.62 9.6-9.62h83.65c5.33 0 9.6 4.3 9.6 9.62v90.38h101.84c5.32 0 9.6-4.27 9.6-9.6V223.1zm-325.72.06z" />
      <path fill={props.fill} d="M231.051 0 .001 204.59l24.338 27.45 207.65-183.88 207.61 183.88 24.29-27.45L232.889 0l-.9 1.04-.94-1.04zM69.091 29.45h58.57l-.51 34.69-58.06 52.45V29.45z" />
    </svg>
    )
  }