import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import './Home.css';
import * as UqudoSDK from 'uqudosdk-capacitor';


const Home: React.FC = () => {
  const enroll = async() => {
    const plugin = new UqudoSDK.UqudoPlugin();
    plugin.init();
    plugin.setLocale("en");

    window.addEventListener("TraceEvent", function (msg) {
      console.log("Trace Event: " + JSON.stringify(msg));
    });

    try{
      var token = "ACCESS_TOKEN_HERE";

      var doc = new UqudoSDK.DocumentBuilder()
      	.setDocumentType(UqudoSDK.DocumentType.PASSPORT)
          .enableReading().build();
      var enrollObj = new UqudoSDK.EnrollmentBuilder()
			.setToken(token)
			.add(doc)
          .enableFacialRecognition()
                        .enableBackgroundCheck(new UqudoSDK.BackgroundCheckConfigurationBuilder().build())
                  	.build();

      const plugin = new UqudoSDK.UqudoPlugin();
      const result = await plugin.enroll(enrollObj);
      alert("Result: " + result.value);
      console.log("---- result" + result.value);
    } catch (err){
      console.log("---- error " + err);
    }
  }





  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Uqudo Demo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton expand="block" fill="outline" color="undefined" class="btn-color" onClick={() => enroll()}><strong>Enroll</strong></IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
