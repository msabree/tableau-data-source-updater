import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import parse from 'csv-parse';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

const convertToSurveyFormat = (csvMatrix = []) => {
    const CSV_HEADER_TEXTUAL_QUESTIONS = [
        'product name',
        'product feature 1',
        'product feature 2',
        'product feature 3',
        'product feature 4',
        'product feature 5',
    ];
    
    const CSV_HEADER_IMAGE_QUESTIONS = [
        'hero image',
        'secondary image 1',
        'secondary image 2',
        'secondary image 3',
        'secondary image 4',
        'secondary image 5',
        'secondary image 6',
    ] 

    const pages = [];
    let lastLabelValue = '';
    let questionType = '';
    for(let i = 2; i < csvMatrix.length; i++){
        let questions = [];
        let scrapeDate = csvMatrix[2][0];
        let product = csvMatrix[2][1];
        for(let j = 2; j < csvMatrix[i].length; j++){
            let columnHeader = csvMatrix[1][j];
            if(CSV_HEADER_TEXTUAL_QUESTIONS.indexOf(columnHeader.trim().toLowerCase()) !== -1){
                questionType = 'text';
                lastLabelValue = csvMatrix[i][j];
            }
            else if(CSV_HEADER_IMAGE_QUESTIONS.indexOf(columnHeader.trim().toLowerCase()) !== -1){
                questionType = 'image';
                lastLabelValue = csvMatrix[i][j];
            }
            else{
                // We are on a field where we should create a question
                questions.push({
                    question: columnHeader,
                    type: questionType,
                    text: (questionType === 'text') ? lastLabelValue : '',
                    image: (questionType === 'image') ? lastLabelValue : '',
                    matrixUpdateLocation: [i,j],
                })
            }
        }
        pages.push({
            questions,
            scrapeDate,
            product
        })
    }

    return pages;
} 

app.use(express.static('./build'));

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.get('/csv', (req, res) => {
    var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'test.csv');
    console.log(filePath)
    console.log(__dirname)
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            parse(data, {}, function(err, csvArray){
                res.send({
                    data: convertToSurveyFormat(csvArray)
                })
            })
        } else {
            console.log(err);
        }
    });
});

app.post('/csv', (req, res) => {
    console.log(req.body);
    res.send(req.body)
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});