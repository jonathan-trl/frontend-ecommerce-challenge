'use client'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return <Box p={{ base: '35px 20px', lg: '35px 160px' }}>{children}</Box>
}

export default Container
