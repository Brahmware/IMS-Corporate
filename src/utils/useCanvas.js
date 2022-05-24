import { useRef, useEffect } from 'react'

const useCanvas = draw => {

    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        const { width, height } = canvas.getBoundingClientRect()
        
        if (canvas.width !== width || canvas.height !== height) {
            const { devicePixelRatio: ratio = 1 } = window
            canvas.width = width * ratio
            canvas.height = height * ratio
            context.scale(ratio, ratio)
        }

        const render = () => {
            draw(context)
        }
        render()
    }, [draw])

    return canvasRef
}

export default useCanvas