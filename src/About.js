import React from 'react'
import { useParams } from "react-router-dom";

export default function About() {
  const { slug } = useParams();


  return (
    <div>
      Hello from about
      {slug}


    </div>
  )
}