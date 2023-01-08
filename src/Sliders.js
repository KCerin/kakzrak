import Slider from '@mui/material/Slider';

const Sliders = ({ datas, title}) => {


    const marksM = [
        { value: 1, label: 'Jan' },
        { value: 2, label: 'Feb' },
        { value: 3, label: 'Mar' },
        { value: 4, label: 'Apr' },
        { value: 5, label: 'Maj' },
        { value: 6, label: 'Jun' },
        { value: 7, label: 'Jul' },
        { value: 8, label: 'Avg' },
        { value: 9, label: 'Sep' },
        { value: 10, label: 'Okt' },
        { value: 11, label: 'Nov' },
        { value: 12, label: 'Dec' }];

    const marksL = [
        { value: 1997, label: '1997' },
        { value: 2000, label: '2000' },
        { value: 2005, label: '2005' },
        { value: 2010, label: '2010' },
        { value: 2015, label: '2015' },
        { value: 2020, label: '2020' },
        { value: 2022, label: '2022' }];
    

    return ( 
        <div className="blog-list">
            {/*
            <h2>{ title }</h2>
            {datas.map((data) => (
                <div className="blog-preview" key={ datas.id }>
                    <h2>{ data.obcina }</h2>
                    <p>PM10: { data.pm10},  SO2: { data.so2 }</p>
                </div>
            ))}*/}
            <Slider min={1997} max={2022} defaultValue={1997} size="big" aria-label="Default" valueLabelDisplay="auto" marks={marksL}/>
            <Slider min={1} max={12} defaultValue={2000} size="big" track={false} marks={marksM}/>
        </div>
     );
}
 
export default Sliders;