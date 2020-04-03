import { Component, OnInit } from '@angular/core';

import { Np, Fun} from '../../models/functions/functions.model';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {

    np : Np;

    fun: Fun;
    id_f: number;
    name : string;
    description: string;

    public name_fs: "GetCateory(ITEM)";
    public name_ds: "MUESTRA LA CATEGORIA DE UN NUMERO DE PARTE";

    funs: Fun[]=[{
      id: 1,
      name: "GetCateory(ITEM)",
      description: "MUESTRA LA CATEGORIA DE UN NUMERO DE PARTE",

    },
  ];

  GetFuncSelected(){
    
  }

    nps: Np[]=[
      {
        id: 1,
        np: "ABC12345",
        category: "Categoría 1"
      },
      {
        id: 2,
        np: "ABC12346",
        category: "Categoría 2"
    },
    {
        id: 3,
        np: "ABC1237",
        category: "Categoría 3"
    },
    {
      id: 3,
      np: "ABC1237",
      category: "Categoría 3"
  },
  {
    id: 3,
    np: "ABC1237",
    category: "Categoría 3"
},
    {
      id: 3,
      np: "ABC1237",
      category: "Categoría 3"
  },
  {
    id: 3,
    np: "ABC1237",
    category: "Categoría 3"
},
{
  id: 3,
  np: "ABC1237",
  category: "Categoría 3"
},
{
  id: 3,
  np: "ABC1237",
  category: "Categoría 3"
},
{
  id: 3,
  np: "ABC1237",
  category: "Categoría 3"
},
{
  id: 3,
  np: "ABC1237",
  category: "Categoría 3"
},
{
  id: 3,
  np: "ABC1237",
  category: "Categoría 3"
},
{
  id: 3,
  np: "ABC1237",
  category: "Categoría 3"
},
{
  id: 3,
  np: "ABC1237",
  category: "Categoría 3"
},
{
  id: 3,
  np: "ABC1237",
  category: "Categoría 3"
},
{
  id: 3,
  np: "ABC1237",
  category: "Categoría 3"
},
{
  id: 3,
  np: "ABC1237",
  category: "Categoría 3"
},
{
  id: 3,
  np: "ABC1237",
  category: "Categoría 3"
},
{
  id: 3,
  np: "ABC1237",
  category: "Categoría 3"
},

    ];

   

  constructor() { }

  ngOnInit() {

  }

}
