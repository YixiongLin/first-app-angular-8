import { Component } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { of, pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a Test!'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  numbers = [1, 2, 3, 4, 5];
  odds = [1,3,5];
  evens = [2,4];
  onlyOdd = false;

  ngOnInit(){
    const nums = of(1,2,3);
    const squareValues = map((val: number) => val * val);
    const squareOddVals = pipe(
      filter((n : number) => n % 2 !== 0),
      map(a => a * a) 
    );
    const squareNums = squareValues(nums);
    const squareOddNums = squareOddVals(nums);
    squareNums.subscribe(x => console.log(x));
    squareOddNums.subscribe(x => console.log(x));
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirstElement(){
    this.serverElements[0].name="Changed!";
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }

  onIntervalFired(firedNumber: number){
    if(firedNumber % 2 == 0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }
}
