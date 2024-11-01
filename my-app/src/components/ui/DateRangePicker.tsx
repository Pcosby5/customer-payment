import React from 'react';
import { Input } from "./input"

interface DateRangePickerProps {
    startDate: string
    endDate: string
    onStartDateChange: (date: string) => void
    onEndDateChange: (date: string) => void
}

export default function DateRangePicker({ startDate, endDate, onStartDateChange, onEndDateChange }: DateRangePickerProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Input
                type="date"
                value={startDate}
                onChange={(e) => onStartDateChange(e.target.value)}
                placeholder="Start Date"
                aria-label="Start Date"
            />
            <Input
                type="date"
                value={endDate}
                onChange={(e) => onEndDateChange(e.target.value)}
                placeholder="End Date"
                aria-label="End Date"
            />
        </div>
    )
}
