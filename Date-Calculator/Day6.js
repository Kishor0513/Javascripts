'use strict';

const calculateButton = document.querySelector('.calculate');
const dateInput = document.querySelector('.date');
const yearOutput = document.querySelector('.year');
const monthOutput = document.querySelector('.month');
const daysOutput = document.querySelector('.days');

function getSelectedDate() {
    if (!dateInput.value) {
        return null;
    }

    const [year, month, day] = dateInput.value.split('-').map(Number);
    return { year, month: month - 1, day };
}

function addMonths(date, count) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + count;
    const lastDay = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    const day = Math.min(date.getUTCDate(), lastDay);
    return new Date(Date.UTC(year, month, day));
}

function calculateDifference() {
    const selected = getSelectedDate();

    if (!selected) {
        yearOutput.textContent = '0';
        monthOutput.textContent = '0';
        daysOutput.textContent = '0';
        return;
    }

    const today = new Date();
    let start = new Date(Date.UTC(selected.year, selected.month, selected.day));
    let end = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));

    // Always show a positive difference, even for a future date.
    if (start > end) {
        [start, end] = [end, start];
    }

    let years = end.getUTCFullYear() - start.getUTCFullYear();
    if (addMonths(start, years * 12) > end) {
        years -= 1;
    }

    let anchor = addMonths(start, years * 12);
    let months = (end.getUTCFullYear() - anchor.getUTCFullYear()) * 12
        + (end.getUTCMonth() - anchor.getUTCMonth());
    if (addMonths(anchor, months) > end) {
        months -= 1;
    }

    anchor = addMonths(anchor, months);
    const days = Math.round((end - anchor) / 86400000);

    yearOutput.textContent = years;
    monthOutput.textContent = months;
    daysOutput.textContent = days;
}

calculateButton.addEventListener('click', calculateDifference);
