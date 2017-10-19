export default class SampleApp {
  static initialize() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
  }

  static onDeviceReady() {
    this.receivedEvent()
  }

  static receivedEvent() {
    const inputUrl = document.getElementById("url")
    const button = document.getElementById("button")
    button.addEventListener('click', () => {
      window.location.replace(inputUrl.value)
    }, false)
  }
}

SampleApp.initialize()

