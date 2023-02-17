import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'


const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {

  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography variant='h3' sx={{pl: '20px'}}>
         Exercises that target the same muscle group
        <Stack direction='row' sx={{p: '22px', position: 'relative'}}>
          {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />}
        </Stack>
      </Typography>
      <Typography variant='h3' sx={{pl: '20px'}} >
        Exercises that use the same equipment
        <Stack direction='row' sx={{p: '22px', position: 'relative'}}>
          {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} />
          : <Loader />}
        </Stack>
      </Typography>
    </Box>
  )
}

export default SimilarExercises