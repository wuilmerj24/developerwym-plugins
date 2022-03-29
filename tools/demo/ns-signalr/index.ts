import { DemoSharedBase } from '../utils';
import {NsSignalr,ConectarI} from '@developerwym/ns-signalr';
import {isAndroid} from "@nativescript/core";

export class DemoSharedNsSignalr extends DemoSharedBase {
  s=new NsSignalr();

  testIt() {
    
    this.s.conectar({
      url: "http://192.168.100.5:3000/chatHub",
      headers: [{ key: "Content-type", value: "application/json" }, { key: "Content-type", value: "application/json" }],
      shouldSkipNegotiate: true,
      withHandshakeResponseTimeout:0,
      withTransport:"WEBSOCKETS",
      withAccessTokenProvider:"sad",
    }).then((res)=>{
      console.log("conectar ",res);
    }).catch((er)=>{
      console.log("conectar ",er);
    })
    console.log('test ns-signalr!');
  }

  desconectar(){
    this.s.desconectar().then((res)=>{
      console.log("s");
    }).catch((er)=>{
      console.log("er",er);
    })
  }

  estado(){
    console.log("COnectado ", this.s.conectado);
  }

  getIdCon(){
    console.log("ID ", this.s.idconexion);
  }

  getIns(){
    console.log("nstancia ", this.s.instanceId);
  }

  setEvento(){
    console.log("Seteado el evento")
    this.s.on("ReceiveMessage",(data)=>{
      console.log("Esto ReceiveMessage se mostro en la app", typeof (data));
      console.log("Esto ReceiveMessage se mostro en la app",data);
    })
  }

  sendEvento(){
    console.log("send el evento")
    this.s.send("SendMessage",["1","1"]);
  }

  invokeEvento(){
    console.log("send el evento")
    this.s.invoke("SendMessage",["1","1"]);
  }
  
}