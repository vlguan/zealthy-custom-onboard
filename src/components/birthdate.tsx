import React, {useEffect, useState} from 'react';
// import axios from 'axios';
interface BirthdatePageProps {
    onDataChange: (birthdate: string) => void;
}

const BirthdatePage: React.FC<BirthdatePageProps> = ({ onDataChange }) => {
    const [day, setDay] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');

    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
    const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => (1900 + i).toString());
    useEffect(() => {
        if (day && month && year) {
            const birthdate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            onDataChange(birthdate);
        }
    }, [day, month, year]);
    return(
        <div>
            <h2>Birthdate</h2>
            <div>
                <label>
                    Day:
                    <select value={day} onChange={(e) => setDay(e.target.value)}>
                        <option value="">Select Day</option>
                        {days.map((d) => (
                            <option key={d} value={d}>
                                {d}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Month:
                    <select value={month} onChange={(e) => setMonth(e.target.value)}>
                        <option value="">Select Month</option>
                        {months.map((m) => (
                            <option key={m} value={m}>
                                {m}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Year:
                    <select value={year} onChange={(e) => setYear(e.target.value)}>
                        <option value="">Select Year</option>
                        {years.map((y) => (
                            <option key={y} value={y}>
                                {y}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </div>
    )
};
export default BirthdatePage;