import React from 'react'
import { QueryClient } from 'react-query'
import { useQuery } from 'react-query'

// ./lib/fetchAsync.ts

export default async function fetchAsync(...args: any) {
  const res = await fetch(...args);
  return await res.json();
}
