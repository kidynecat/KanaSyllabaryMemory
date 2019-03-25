export class MemoryData {
}

export class MemoObject{
    constructor(display,remind = "",labels = []){
      this.DisplayText = display
      this.Remind = remind
      this.Labels = labels
    }
  
    public DisplayText = ""
    public Remind = ""
    public Labels = []
  }