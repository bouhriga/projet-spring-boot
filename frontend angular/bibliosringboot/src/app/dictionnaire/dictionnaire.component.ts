import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { dictionnaire } from './dictionnaire';
import { dictionnaireService } from './dictionnaire.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dictionnaire',
  templateUrl: './dictionnaire.component.html',
  styleUrls: ['./dictionnaire.component.css']
})

export class DictionnaireComponent implements OnInit {
  public dictionnaires: dictionnaire[] = [];
  public deletedictionnaire!: dictionnaire;
  public delictionnaire: dictionnaire | undefined;
  public editdictionnaire : dictionnaire | undefined;
  constructor(private dictionnaireService : dictionnaireService) { }
  ngOnInit() {
    this.getdictionnaires();
  }

  public getdictionnaires(): void {
    this.dictionnaireService.getdictionnaires().subscribe(
      (response: dictionnaire[]) =>{
        this.dictionnaires =response;
        console.log(this.dictionnaires);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
    }
  
    public onOpenModel(dictionnaire: dictionnaire,mode: string): void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'edit'){
        this.editdictionnaire= dictionnaire;
        button.setAttribute('data-target', '#updatedictionnaireModel')
      }
      if (mode === 'delete'){
        this.delictionnaire = dictionnaire;
        this.deletedictionnaire = dictionnaire;
        button.setAttribute('data-target', '#deletedictionnaireModel')
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
        button.setAttribute('data-target', '#adddictionnaireModel')
      }
      container?.appendChild(button);
      button.click();
    }

    public onAdddictionnaire(addForm: NgForm): void {
      document.getElementById('add-adherent-form')?.click();
      this.dictionnaireService.adddictionnaire(addForm.value).subscribe(
        (response: dictionnaire) => {
          console.log(response);
          this.getdictionnaires();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }

    public onUpdatedictionnaire(dictionnaire: dictionnaire): void {
      this.dictionnaireService.updatedictionnaire(dictionnaire.id,dictionnaire).subscribe(
        (response: dictionnaire) => {
          console.log(response);
          this.getdictionnaires();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
    public onDeletedictionnaire(dictionnaireid: number): void {
      this.dictionnaireService.deletedictionnaire(dictionnaireid).subscribe(
        (response: void) => {
          console.log(response);
          this.getdictionnaires();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public searchdictionnaires(nom: String): void {
      console.log();
      const results: dictionnaire[] = [];
      for (const dictionnaire of this.dictionnaires) {
        if (dictionnaire.nom === nom) {
          results.push(dictionnaire);
        }
      }
      this.dictionnaires = results;
      if (results.length === 0 || !nom){
        this.getdictionnaires();
      }
    }
  }