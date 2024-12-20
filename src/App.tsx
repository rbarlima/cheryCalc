import React, { useState } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import myImage1 from './pics/CHERYArrizo8.png';
import myImage4 from './pics/CHERYTiggo4.png';
import myImage7 from './pics/CHERYTiggo7.png';
import myImage8 from './pics/CHERYTiggo8.png';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';

const theme = createTheme({
    palette: {
        primary: {
            main: "#A6192E", // Красный
        },
        secondary: {
            main: "#888888", // Серый
        },
    },
});

type RangeType = 'All' | 'Arrizo 8' | 'Tiggo 4' | 'Tiggo 7' | 'Tiggo 8'

const models = [
    { range: 'Arrizo 8', model: "ARRIZO 8 1.6T DCT" },
    { range: 'Tiggo 4', model: "TIGGO 4 1.5 CVT" },
    { range: 'Tiggo 4', model: "TIGGO 4 1.5 DCT" },
    { range: 'Tiggo 4', model: "TIGGO 4 1.5 MT" },
    { range: 'Tiggo 4', model: "TIGGO 4 2.0 CVT" },
    { range: 'Tiggo 4', model: "TIGGO 4 2.0 MT" },
    { range: 'Tiggo 4', model: "TIGGO 4 PRO" },
    { range: 'Tiggo 7', model: "TIGGO 7 1.5 MT" },
    { range: 'Tiggo 7', model: "TIGGO 7 2.0 CVT" },
    { range: 'Tiggo 7', model: "TIGGO 7 PRO 1.5T CVT" },
    { range: 'Tiggo 7', model: "TIGGO 7 PRO MAX 1.5T CVT" },
    { range: 'Tiggo 7', model: "TIGGO 7 PRO MAX 1.6T AWD" },
    { range: 'Tiggo 8', model: "TIGGO 8 1.5 DCT" },
    { range: 'Tiggo 8', model: "TIGGO 8 2.0T CVT" },
    { range: 'Tiggo 8', model: "TIGGO 8 NEW 1.5 DCT" },
    { range: 'Tiggo 8', model: "TIGGO 8 NEW 2.0T CVT" },
    { range: 'Tiggo 8', model: "TIGGO 8 PRO 1.6 DCT" },
    { range: 'Tiggo 8', model: "TIGGO 8 PRO 2.0T CVT" },
    { range: 'Tiggo 8', model: "TIGGO 8 PRO MAX 2.0T DCT" },
    { range: 'Tiggo 8', model: "TIGGO 8 PRO e+ PHEV 1.5+3DHT" },
]

export default function BasicSelect() {

    // let [filteredModels, setFilteredModels] = useState(models)

    let [range, setRange] = useState<string | null>(null)

    let [model, setModel] = useState('')
    // let [model, setModel] = useState<string | null>(null)

    const selectModelHandler = (range: RangeType) => {
        // setFilteredModels(models.filter(model => model.range === range))
        setRange(range)
    }

    const handleChange = (event: SelectChangeEvent<string>) => {
        setModel(event.target.value)
        // alert(event.target.value)
        // alert(model)
        // debugger
    }

    const oil5w30 = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/masla/motornye_masla/9074/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/masla/motornye_masla/9074/</a><br />
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/masla/motornye_masla/9073/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/masla/motornye_masla/9073/</a>
        </div>)
    }

    const oil5w40 = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/masla/motornye_masla/9076/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/masla/motornye_masla/9076/</a><br />
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/masla/motornye_masla/9075/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/masla/motornye_masla/9075/</a>
        </div>)
    }

    const oil0w20 = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/masla/motornye_masla/8049/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/masla/motornye_masla/8049/</a><br />
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/masla/motornye_masla/8048/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/masla/motornye_masla/8048/</a>
        </div>)
    }

    const phev = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/masla/transmissionnye_masla/7462/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/masla/transmissionnye_masla/7462/</a>
        </div>)
    }

    const dct380 = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/masla/transmissionnye_masla/7413/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/masla/transmissionnye_masla/7413/</a>
        </div>)
    }

    const cvtf = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/masla/transmissionnye_masla/602/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/masla/transmissionnye_masla/602/</a>
        </div>)
    }

    const dct = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/masla/transmissionnye_masla/7461/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/masla/transmissionnye_masla/7461/</a>
        </div>)
    }

    const filter4801012010 = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/dlya_to/filtry_1/maslyanye_filtry/7400/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/dlya_to/filtry_1/maslyanye_filtry/7400/</a>
        </div>)
    }

    const filter481H1012010 = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6890/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6890/</a>
        </div>)
    }

    const filterF4J201012010
    = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6893/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6893/</a>
        </div>)
    }

    const filterF4J161012030
    = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6872/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6872/</a>
        </div>)
    }

    const airFilter151000079AA = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6906/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6906/</a>
        </div>)
    }

    const airFilterT151109111 = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6861/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6861/</a>
        </div>)
    }

    const airFilter151000151AA = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6860/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6860/</a>
        </div>)
    }

    const airFilter151000148AA = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6916/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/6916/</a>
        </div>)
    }

    const cabinFilter301001157AA = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/7636/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/7636/</a>
        </div>)
    }

    const cabinFilterT218107011 = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/dlya_to/filtry_1/salonnye_filtry/9099/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/dlya_to/filtry_1/salonnye_filtry/9099/</a>
        </div>)
    }

    const cabinFilterT158107011 = () => {
        return (<div>
            <a href="https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/7642/" target="_blank">https://shop.chery.ru/catalog/dlya_avtomobilya/raskhodnye_materialy_zapchasti/7642/</a>
        </div>)
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Grid2 container spacing={4}>
                    <div>
                        <h3>ВЫБИРИТЕ МОДЕЛЬНЫЙ РЯД</h3>

                        <div className='pictures'>
                            <Paper sx={{ p: '20px 5px 0 5px' }} className="paper" onClick={() => selectModelHandler('Arrizo 8')} >
                                <img src={myImage1} alt="CHERY Arrizo 8" style={{ width: '180px' }} />
                                <div
                                    className={
                                        range === 'Arrizo 8' ? 'textSelected' : 'text'
                                    }
                                >
                                    <h3 style={{ padding: '10px' }}>ARRIZO 8</h3>
                                </div>
                            </Paper><Paper sx={{ p: '20px 5px 0 5px' }} className="paper" onClick={() => selectModelHandler('Tiggo 4')} >
                                <img src={myImage4} alt="CHERY Tiggo 4" style={{ width: '180px' }} />
                                <div
                                    className={
                                        range === 'Tiggo 4' ? 'textSelected' : 'text'
                                    }
                                >
                                    <h3 style={{ padding: '10px' }}>TIGGO 4</h3>
                                </div>
                            </Paper><Paper sx={{ p: '20px 5px 0 5px' }} className="paper" onClick={() => selectModelHandler('Tiggo 7')} >
                                <img src={myImage7} alt="CHERY Tiggo 7" style={{ width: '180px' }} />
                                <div
                                    className={
                                        range === 'Tiggo 7' ? 'textSelected' : 'text'
                                    }
                                >
                                    <h3 style={{ padding: '10px' }}>TIGGO 7</h3>
                                </div>
                            </Paper><Paper sx={{ p: '20px 5px 0 5px' }} className="paper" onClick={() => selectModelHandler('Tiggo 8')} >
                                <img src={myImage8} alt="CHERY Tiggo 8" style={{ width: '180px' }} />
                                <div
                                    className={
                                        range === 'Tiggo 8' ? 'textSelected' : 'text'
                                    }
                                >
                                    <h3 style={{ padding: '10px' }}>TIGGO 8</h3>
                                </div>
                            </Paper>
                        </div>

                        <Box sx={{ minWidth: 370, maxWidth: 370 }} color='main' style={{ padding: '20px 0 20px 0' }}>
                            <FormControl variant="standard" fullWidth >
                                <InputLabel id="demo-simple-select-label">Модель</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    // value={model}
                                    // label="All"
                                    onChange={handleChange}
                                >
                                    {range ?
                                        models.filter(model => model.range === range).map(car => {
                                            return <MenuItem value={car.model} > {car.model} </MenuItem>
                                        }) :
                                        models.map(car => {
                                            return <MenuItem value={car.model} > {car.model} </MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Box>

                        <div>
                            {model === 'ARRIZO 8 1.6T DCT' && <div>
                                <p>Масло моторное Chery 5W-30 - 4.3л<br />{oil5w30()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter4801012010()}</p>
                                <p>Масло трансмиссионное 7DCT - 4.25л<br />{dct()}</p>
                                <p>Фильтр воздушный 151000079AA<br />{airFilter151000079AA()}</p>
                                <p>Фильтр салонный 301001157AA<br />{cabinFilter301001157AA()}</p>
                            </div>}

                            {model === 'TIGGO 4 1.5 CVT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.7л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter4801012010()}</p>
                                <p>Масло трансмиссионное CVTF WCF-1 - 5л<br />{cvtf()}</p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный T21-8107011<br />{cabinFilterT218107011()}</p>
                            </div>}
                            {model === 'TIGGO 4 1.5 DCT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.7л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter4801012010()}</p>
                                <p>Масло трансмиссионное DCT 625DHA - 1.2л<br />{dct()}</p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный T21-8107011<br />{cabinFilterT218107011()}</p>
                            </div>}
                            {model === 'TIGGO 4 1.5 MT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.7л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter4801012010()}</p>
                                <p>Масло трансмиссионное MT 525MHJ/313LG - 2л<br /></p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный T21-8107011<br />{cabinFilterT218107011()}</p>
                            </div>}
                            {model === 'TIGGO 4 2.0 CVT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.5л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter481H1012010()}</p>
                                <p>Масло трансмиссионное CVT 019 - 5л<br />{cvtf()}</p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный T21-8107011<br />{cabinFilterT218107011()}</p>
                            </div>}
                            {model === 'TIGGO 4 2.0 MT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.5л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter481H1012010()}</p>
                                <p>Масло трансмиссионное QR525MHL - 2л<br /></p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный T21-8107011<br />{cabinFilterT218107011()}</p>
                            </div>}
                            {model === 'TIGGO 4 PRO' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.7л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter4801012010()}</p>
                                <p>Масло трансмиссионное CVT 025 - 5л<br />{cvtf()}</p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный 301001157AA<br />{cabinFilter301001157AA()}</p>
                            </div>}

                            {model === 'TIGGO 7 1.5 MT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.5л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter4801012010()}</p>
                                <p>Масло трансмиссионное 621MHA - 2л<br /></p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный T21-8107011<br />{cabinFilterT218107011()}</p>
                            </div>}
                            {model === 'TIGGO 7 2.0 CVT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.5л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 481H-1012010<br />{filter481H1012010()}</p>
                                <p>Масло трансмиссионное CVT 019 - 5л<br />{cvtf()}</p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный T21-8107011<br />{cabinFilterT218107011()}</p>
                            </div>}
                            {model === 'TIGGO 7 PRO 1.5T CVT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.7л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter4801012010()}</p>
                                <p>Масло трансмиссионное CVT25 - 5л<br />{cvtf()}</p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный 301001157AA<br />{cabinFilter301001157AA()}</p>
                            </div>}
                            {model === 'TIGGO 7 PRO MAX 1.5T CVT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.7л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter4801012010()}</p>
                                <p>Масло трансмиссионное CVT25 - 5л<br />{cvtf()}</p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный 301001157AA<br />{cabinFilter301001157AA()}</p>
                            </div>}
                            {model === 'TIGGO 7 PRO MAX 1.6T AWD' && <div>
                                <p>Масло моторное Chery 5W-30 - 4.3л<br />{oil5w30()}</p>
                                <p>Фильтр масляный F4J20-1012010<br />{filterF4J201012010()}</p>
                                <p>Масло трансмиссионное DCT 730DHB/DHC - 4.25л<br />{dct()}</p>
                                <p>Фильтр воздушный 151000079AA<br />{airFilter151000079AA()}</p>
                                <p>Фильтр салонный 301001157AA<br />{cabinFilter301001157AA()}</p>
                            </div>}

                            {model === 'TIGGO 8 1.5 DCT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.7л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter4801012010()}</p>
                                <p>Масло трансмиссионное WET 6DCT - 3.6л<br />{dct()}</p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный 301001157AA<br />{cabinFilter301001157AA()}</p>
                            </div>}
                            {model === 'TIGGO 8 2.0T CVT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.5л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 481H-1012010<br />{filter481H1012010()}</p>
                                <p>Масло трансмиссионное CVT 019 - 5л<br />{cvtf()}</p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный 301001157AA<br />{cabinFilter301001157AA()}</p>
                            </div>}
                            {model === 'TIGGO 8 NEW 1.5 DCT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.7л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter4801012010()}</p>
                                <p>Масло трансмиссионное WET 6DCT - 3.6л<br />{dct()}</p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный 301001157AA<br />{cabinFilter301001157AA()}</p>
                            </div>}
                            {model === 'TIGGO 8 NEW 2.0T CVT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.5л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 481H-1012010<br />{filter481H1012010()}</p>
                                <p>Масло трансмиссионное CVT 019 - 5л<br />{cvtf()}</p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный 301001157AA<br />{cabinFilter301001157AA()}</p>
                            </div>}
                            {model === 'TIGGO 8 PRO 1.6 DCT' && <div>
                                <p>Масло моторное Chery 5W-30 - 4.3л<br />{oil5w30()}</p>
                                <p>Фильтр масляный F4J16-1012030 или F4J20-1012010 определить визуально<br />{filterF4J201012010()}{filterF4J161012030()}</p>
                                <p>Масло трансмиссионное WET 6DCT - 4л<br />{dct()}</p>
                                <p>Фильтр воздушный 151000079AA<br />{airFilter151000079AA()}</p>
                                <p>Фильтр салонный 301001157AA<br />{cabinFilter301001157AA()}</p>
                            </div>}
                            {model === 'TIGGO 8 PRO 2.0T CVT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.7л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 481H-1012010<br />{filter481H1012010()}</p>
                                <p>Масло трансмиссионное CVT 019 - 5л<br />{cvtf()}</p>
                                <p>Фильтр воздушный T15-1109111<br />{airFilterT151109111()}</p>
                                <p>Фильтр салонный T15-8107011<br />{cabinFilterT158107011()}</p>
                            </div>}
                            {model === 'TIGGO 8 PRO MAX 2.0T DCT' && <div> 
                                <p>Масло моторное Chery 0W-20 - 5.5л<br />{oil0w20()}</p>
                                <p>Фильтр масляный F4J20-1012010<br />{filterF4J201012010()}</p>
                                <p>Масло трансмиссионное WET 6DCT - 6л<br />{dct()}</p>
                                <p>Фильтр воздушный 151000151AA<br />{airFilter151000151AA()}</p>
                                <p>Фильтр салонный 301001157AA<br />{cabinFilter301001157AA()}</p>
                            </div>}
                            {model === 'TIGGO 8 PRO e+ PHEV 1.5+3DHT' && <div>
                                <p>Масло моторное Chery 5W-40 - 4.7л<br />{oil5w40()}</p>
                                <p>Фильтр масляный 480-1012010<br />{filter4801012010()}</p>
                                <p>Масло трансмиссионное X-1PHEV - 5л<br />{phev()}</p>
                                <p>Фильтр воздушный 151000148AA<br />{airFilter151000148AA()}</p>
                                <p>Фильтр салонный 301001157AA<br />{cabinFilter301001157AA()}</p>
                            </div>}

                        </div>
                    </div>
                </Grid2>
            </div>
        </ThemeProvider>
    );
}
