import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { revue } from './revue';
import { revueService } from './revue.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-revue',
  templateUrl: './revue.component.html',
  styleUrls: ['./revue.component.css']
})
export class RevueComponent implements OnInit {
  public revues: revue[] = [];
  public deleterevue : revue | undefined;
  public delrevue!: revue;
  public editrevue : revue | undefined;
  constructor(private revueService : revueService) { }
  ngOnInit() {
    this.getrevues();
  }

  public getrevues(): void {
    this.revueService.getrevues().subscribe(
      (response: revue[]) =>{
        this.revues =response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
    }
  
    public onOpenModel(revue: revue,mode: string): void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'edit'){
        this.editrevue= revue;
        button.setAttribute('data-target', '#updaterevueModel')
      }
      if (mode === 'delete'){
        this.deleterevue = revue;
        this.delrevue = revue;
        button.setAttribute('data-target', '#deleterevueModel')
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
        button.setAttribute('data-target', '#addrevueModel')
      }
      container?.appendChild(button);
      button.click();
    }

    public onAddrevue(addForm: NgForm): void {
      document.getElementById('add-adherent-form')?.click();
      this.revueService.addrevue(addForm.value).subscribe(
        (response: revue) => {
          console.log(response);
          this.getrevues();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }

    public onUpdaterevue(revue: revue): void {
      this.revueService.updaterevue(revue.id,revue).subscribe(
        (response: revue) => {
          console.log(response);
          this.getrevues();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
    public onDeleterevue(revueid: number): void {
      this.revueService.deleterevue(revueid).subscribe(
        (response: void) => {
          console.log(response);
          this.getrevues();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public searchrevues(nom: String): void {
      console.log();
      const results: revue[] = [];
      for (const revue of this.revues) {
        if (revue.nom === nom) {
          results.push(revue);
        }
      }
      this.revues = results;
      if (results.length === 0 || !nom){
        this.getrevues();
      }
    }
  }