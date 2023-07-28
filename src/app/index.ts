class App {
  private running = false;

  public start() {
    this.running = true;
    console.log("Hello World");
  }

  public close() {
    console.log("Bye!");
    this.running = false;
  }

  public isRunning() {
    return this.running;
  }
}

export default App;
