import { Component, OnInit } from '@angular/core';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedFile: ImageSnippet;
  constructor() { }
  
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log(this.selectedFile.src)

    });

    reader.readAsDataURL(file);
  }
  ngOnInit(): void {
  }

}
