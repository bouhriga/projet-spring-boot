import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { emprunt } from './emprunt';
import { document } from "../document/document";

import { empruntService } from './emprunt.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent implements OnInit {
  public emprunts: emprunt[] = [];
  public documents: document[] = [];
  public deleteemprunt!: emprunt;
  public editemprunt : emprunt | undefined;
  s:number | undefined;
  
  constructor(private empruntService : empruntService) { }
  ngOnInit() {
    this.getemprunts();
    this.getdispoemprunts();
  }


  public getemprunts(): void {
    this.empruntService.getemprunts().subscribe(
      (response: emprunt[]) =>{
        this.emprunts =response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
    }

    public getdispoemprunts(): void {
      this.empruntService.getdisponiblesemprunts().subscribe(
        (response: document[]) =>{
          this.documents=response;
          console.log(response);
          console.log(this.documents);
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
        );
      }


    public onOpenModel(emprunt: emprunt,mode: string): void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'edit'){
        this.editemprunt= emprunt;
        button.setAttribute('data-target', '#updateempruntModel')
      }
      if (mode === 'delete'){
        this.deleteemprunt = emprunt;
        console.log(this.deleteemprunt);
        button.setAttribute('data-target', '#deleteempruntModel')
      }
      container?.appendChild(button);
      button.click();
    }
    
    public onOpenModel1(mode: string): void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add'){
        button.setAttribute('data-target', '#addempruntModel')
      }
      container?.appendChild(button);
      button.click();
    }
    public onAddemprunt(addForm: NgForm): void {
      document.getElementById('add-emprunt-form')?.click();
      console.log(addForm.value);
      this.empruntService.addemprunt(addForm.value).subscribe(
        (response: emprunt) => {
          console.log(response);
          this.getemprunts();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }
    
    public onUpdateemprunt(emprunt: emprunt): void {
      console.log(emprunt);
      this.empruntService.updateemprunt(emprunt.id_emprunt,emprunt).subscribe(
        (response: emprunt) => {
          console.log(response);
          this.getemprunts();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
    public onDeleteemprunt(empruntid: number): void {
      this.empruntService.deleteemprunt(empruntid).subscribe(
        (response: void) => {
          console.log(response);
          this.getemprunts();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    public searchemprunts(dateRet: String): void {
      console.log();
      const results: emprunt[] = [];
      for (const emprunt of this.emprunts) {
        if (emprunt.dateRet === dateRet) {
          results.push(emprunt);
        }
      }
      this.emprunts = results;
      if (results.length === 0 || !dateRet){
        this.getemprunts();
      }
    }
  





  }