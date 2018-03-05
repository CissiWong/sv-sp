import React from "react"

// styles //
import "./footer.css"

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="grid-container">
        <div className="first">
          <div className="footer-text">
          <h4>Så här ansluter ni er</h4>
          <h3>Anslut förening</h3>
          <p>1. Gå in på svenskaspel.se/grasroten/partner</p>
          <p>2. Logga in med dina inloggningsuppgifter:</p>
          <p>Användrarnamn & Lösenord:</p>
          <p>3. Läs och godkänn villkoren</p>
          </div>
          <div className="bottom-text">
          <p>Logga in förening / skapa konto här ></p>
          </div>
        </div>
        <div className="second">
          <div className="footer-text">
          <h4>föreningar</h4>
          <h3>Så här gick det!</h3>
          <p>Finns de föreningar du valt att stödja med på</p>
          <p>topp tio listan? Eller varför inte kolla in hur</p>
          <p>mycket pengar som fördelats per län.</p>
          </div>
          <div className="bottom-text">
          <p>Se hela föreningslistan från A-Ö (Pdf) ></p>
          </div>
          <div className="bottom-text">
          <p>Se hur pengarna fördelades ></p>
          </div>
        </div>
        <div className="third">
          <div className="footer-text">
          <h3>Om Gräsroten</h3>
          <p>Varje år satsar Svenska Spel 50 miljoner</p>
          <p>kronor på gräsrötterna i svensk idrott. Förra</p>
          <p>året hjälpte vi och våra kunder mer än 6300</p>
          <p>föreningar i 69 olika idrotter runt om i landet</p>
          <p>att utveckla sin verksamhet och till exempel</p>
          <p>bygga omklädningsrum, åka på träningsläger</p>
          <p>eller köpa matchtröjor.</p>
          </div>
          <div className="bottom-text">
          <p>Läs mer om Gräsroten ></p>
          </div>
        </div>
        </div>
      </footer>
    )
  }
}
