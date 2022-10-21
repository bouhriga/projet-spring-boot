import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { livre } from './livre';
import { livreService } from './livre.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  public livres: livre[] = [];
  public deletelivre : livre | undefined;
  public dellivre!: livre;
  public editlivre : livre | undefined;
  constructor(private livreService : livreService) { }
  ngOnInit() {
    this.getlivres();
  }

  public getlivres(): void {
    this.livreService.getlivres().subscribe(
      (response: livre[]) =>{
        this.livres =response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
    }
  
    public onOpenModel(livre: livre,mode: string): void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'edit'){
        this.editlivre= livre;
        button.setAttribute('data-target', '#updateLivreModel')
      }
      if (mode === 'delete'){
        this.deletelivre = livre;
        this.dellivre = livre;
        button.setAttribute('data-target', '#deleteLivreModel')
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
        button.setAttribute('data-target', '#addLivreModel')
      }
      container?.appendChild(button);
      button.click();
    }

    public onAddlivre(addForm: NgForm): void {
      document.getElementById('add-adherent-form')?.click();
      this.livreService.addlivre(addForm.value).subscribe(
        (response: livre) => {
          console.log(response);
          this.getlivres();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }

    public onUpdatelivre(livre: livre): void {
      this.livreService.updatelivre(livre.id,livre).subscribe(
        (response: livre) => {
          console.log(response);
          this.getlivres();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
    public onDeletelivre(livreid: number): void {
      this.livreService.deletelivre(livreid).subscribe(
        (response: void) => {
          console.log(response);
          this.getlivres();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public searchlivres(nom: String): void {
      console.log();
      const results: livre[] = [];
      for (const livre of this.livres) {
        if (livre.nom === nom) {
          results.push(livre);
        }
      }
      this.livres = results;
      if (results.length === 0 || !nom){
        this.getlivres();
      }
    }
  }