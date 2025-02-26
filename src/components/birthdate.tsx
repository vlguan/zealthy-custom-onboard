import React, {useEffect, useState} from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
// import TextField from '@mui/material/TextField';

// import axios from 'axios';
interface BirthdatePageProps {
    onDataChange: (birthdate: string) => void;
}

const BirthdatePage: React.FC<BirthdatePageProps> = ({ onDataChange }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        if (date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            onDataChange(formattedDate);
        } else {
            onDataChange('');
        }
    };
    return(
        <div className='form-object'>
            <h2>Birthdate</h2>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Select Birthdate"
                    value={selectedDate}
                    onChange={handleDateChange}
                    // renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
};
export default BirthdatePage;