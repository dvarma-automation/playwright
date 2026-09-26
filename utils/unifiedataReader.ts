import path from 'path';
import {readCSV} from '../utils/csvReader';
import {readExcel} from  '../utils/excelReader';
import fs from 'fs';

export function readData(filePath:string,sheetName?:string){
   
    const ext = path.extname(filePath).toLowerCase();

    switch(ext){
        case ".csv":
          console.log('..I AM READING CSv');
          return readCSV(filePath);

         case ".xlsx":
            console.log('..I AM READING EXCEL');
            return readExcel(filePath,sheetName||'LoginData'); 

              case ".json":
            console.log('..I AM READING JSON');
            const JSONData = fs.readFileSync(filePath,'utf8'); 
            return JSON.parse(JSONData);

            default:
                throw new Error(`Unsupported file type = ${ext}`);

    }











}