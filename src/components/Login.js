import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Center from './Center'
import useForm from '../hooks/useForm';

const getFreshModelObject= ()=>({
    name:'',
    gradeLevel:0
})

export default function Login() {
const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
} = useForm(getFreshModelObject);

const login = e => {
    e.preventDefault();
    if (validate())
      console.log(values);
}

const validate = e =>{
    let tempError = {}
    tempError.name = values.name != ""? "" : "Type in your name."
    tempError.gradeLevel = values.gradeLevel > 0  && values.gradeLevel <= 12 ?  "" : "Must be between 1 and 12" 
    setErrors(tempError)
    return Object.values(tempError).every(x => x == "")
}

  return (


    <Center>

        <Card sx={{ width: 400 }} >
            <CardContent sx={{ textAlign:'center' }}>
                <Typography variant='h4' sx={{ my: 3 }}>
                    Sentence Structure
                </Typography>

                <Box sx={{
                    '& .MuiTextField-root':{
                        m: 1,
                        width: '90%'
                    }
                }}>
                    <form noValidate autoComplete='off' onSubmit={login}>
                    <TextField 
                        label="name"
                        variant="outlined"
                        value={values.name}
                        onChange={handleInputChange}
                        {...(errors.name && { error:true, helperText:errors.name }) }
                        name="name"/>
                    <TextField

                        label="grade level"
                        variant="outlined"
                        value={values.gradeLevel}
                        onChange={handleInputChange}
                        {...(errors.gradeLevel && { error:true, helperText:errors.gradeLevel }) }
                        name="gradeLevel"/>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ width: '90%' }}> Start </Button>
                    </form>
                </Box>   
            </CardContent>
        </Card> 
    </Center>
  )
}


