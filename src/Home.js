import React from 'react'

export default function Home({pokemon: results}) {
  return (
    <div>
      {
        results &&
        results.map((val, idx) => (
          <div key={idx}>{val.name}</div>
      })
    </div>
  )
}