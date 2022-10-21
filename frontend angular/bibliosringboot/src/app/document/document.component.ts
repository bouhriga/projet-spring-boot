import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { document } from './document';
import { documentService } from './document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  public documents: document[] = [];

  constructor(private documentService : documentService) { }
  ngOnInit() {
    this.getdocuments();
  }

  public getdocuments(): void {
    this.documentService.GetDocuments().subscribe(
      (response: document[]) =>{
        this.documents =response;
        console.log(this.documents);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
    }
}
