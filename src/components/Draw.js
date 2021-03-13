import React, {useRef} from 'react';
import {SketchField, Tools} from 'react-sketch'
import {Button} from 'react-bootstrap'
import {saveAs} from 'file-saver'

const styles={
    draw: {
        margin: '60px auto'
    }
}

const Draw = () => {

    const sketch = useRef()

    const handleSubmit = () => {
        const canvas = sketch.current.toDataURL()
        //console.log(canvas)
        saveAs(canvas, 'digit.jpg')
        sendData(canvas)
    }

    const handleReset = () => {
        //console.log(sketch.current)
        sketch.current.clear()
        sketch.current._backgroundColor('black')
    }

    const sendData = (c) => {
        console.log(c)

    }

    const getImageResult = (id) => {
        
    }



    return ( 
    <React.Fragment>

        <SketchField
            ref={sketch}
            width='500px'
            height='400px'
            style={styles.draw}
            tool={Tools.Pencil}
            backgroundColor='black'
            lineColor='white'
            imageFormat='jpg'
            lineWidth={30}
            
        />

        <div className='mt-4'>
            <Button onClick={handleSubmit} variant='primary'>Save</Button>
            <Button onClick={handleReset} variant='secondary'>Reset</Button>
        </div>

    </React.Fragment>

     );
}
 
export default Draw;



