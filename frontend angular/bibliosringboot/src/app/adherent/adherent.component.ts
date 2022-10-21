import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { adherent } from './adherent';
import { AdherentService } from './adherent.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.css']
})
export class AdherentComponent implements OnInit {
  public adherents: adherent[] = [];
  public deleteadherent!: adherent;
  public deladherent : adherent | undefined;
  public editadherent : adherent | undefined;
  constructor(private adherentService : AdherentService) { }
  ngOnInit() {
    this.getAdherents();
  }

  public getAdherents(): void {
    this.adherentService.getAdherents().subscribe(
      (response: adherent[]) =>{
        this.adherents =response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
    }
  
    public onOpenModel(adherent: adherent,mode: string): void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'edit'){
        this.editadherent= adherent;
        button.setAttribute('data-target', '#updateAdherentModel')
      }
      if (mode === 'delete'){
        this.deleteadherent = adherent;
        this.deladherent = adherent;
        button.setAttribute('data-target', '#deleteAdherentModel')
      }
      if (mode === 'profil'){
        this.editadherent= adherent;
        button.setAttribute('data-target', '#profilAdherentModel')
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
        button.setAttribute('data-target', '#addAdherentModel')
      }
      container?.appendChild(button);
      button.click();
    }

    public onAddEmloyee(addForm: NgForm): void {
      document.getElementById('add-adherent-form')?.click();
      this.adherentService.addAdherent(addForm.value).subscribe(
        (response: adherent) => {
          console.log(response);
          this.getAdherents();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }

    public onUpdateadherent(adherent: adherent): void {
      this.adherentService.updateAdherent(adherent.cin,adherent).subscribe(
        (response: adherent) => {
          console.log(response);
          this.getAdherents();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
   
    public onDeleteadherent(adherentCIN: String): void {
      this.adherentService.deleteAdherent(adherentCIN).subscribe(
        (response: void) => {
          console.log(response);
          this.getAdherents();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public searchAdherents(cin: string): void {
      console.log(cin);
      const results: adherent[] = [];
      for (const adherent of this.adherents) {
        if (adherent.cin === cin) {
          results.push(adherent);
        }
      }
      this.adherents = results;
      if (results.length === 0 || !cin) {
        this.getAdherents();
      }
    }
  }