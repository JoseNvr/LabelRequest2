import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { CancelarPedidosService } from "src/app/modules/cancelarpedidos/cancelarpedidos.service"; 
import { Subscription } from "rxjs";
import { Constants } from "../../helpers/constats";
import { Notify } from "../../modules/notify/notify";
import { constants } from "buffer";
@Component({
  selector: "app-cancelarpedidos",
  templateUrl: "./cancelarpedidos.component.html",
  styleUrls: ["./cancelarpedidos.component.scss"]
})
export class CancelarPedidosComponent implements OnInit, OnDestroy {
  @ViewChild("modalCharg", { static: true }) charging: ModalDirective;
  @ViewChild("modalConfirm", { static: true }) confirm: ModalDirective;
  public serial_number: string;
  public part_number: string;
  public reference1: string;
  public RevList = [];;
  private subscriptions: Array<Subscription>;
  constructor(private cancelarpedidosService: CancelarPedidosService,private notify: Notify) {
    this.subscriptions = [];
  }
  ngOnInit() {
    //Cargar interfaz
    
    this.mClearCollector();
    this.mGetEmployeeNumberFromLocalStorage();
    for (let i = 0; i < 10; i++) {
      this.RevList.push(i);
    }
    const getTestSub: Subscription = this.cancelarpedidosService
      .getTest({ test: "test_get" })
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        },
        () => {
          console.log("Get Ok");
        }
      );
    const postTestSub: Subscription = this.cancelarpedidosService
      .postTest({ test: "test_post" })
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        },
        () => {
          console.log("Post Ok");
        }
      );
    this.subscriptions.push(getTestSub);
    this.subscriptions.push(postTestSub);
  }

  mGetEmployeeNumberFromLocalStorage(){
    //localStorage.getItem(Constants.localStorage);
    console.log(localStorage.getItem(Constants.localStorage));
    var vlocalStorage = localStorage.getItem(Constants.localStorage);
    var JsonData = JSON.parse(vlocalStorage);
    $('#txtEmployee').val(JsonData.userInfo.employeeNumber)
  }
 
  mClearCollector() {
    document.getElementById('txtEmployee').setAttribute('disabled', 'disabled');
    document.getElementById('txtPassword').setAttribute('disabled', 'disabled');
    document.getElementById('txtPasswordBarcode').setAttribute('disabled', 'disabled');
    document.getElementById('txtSerialNumber').setAttribute('disabled', 'disabled');
    $('#txtEmployee').val('');
    $('#txtPassword').val('');
    $('#txtPasswordBarcode').val('');
    $('#txtSerialNumber').val('');
    document.getElementById('txtPassword').setAttribute('value', '');
    document.getElementById('lblsfdcid').textContent = "NA";
    document.getElementById('lblStationType').textContent = "NA";
    document.getElementById('lblStation').textContent = "NA";
  }
  mCancelUnit() {
    if ($('#txtPasswordBarcode').val().toString().trim() != "") {
      this.mSetRquestOnConsole("The password barcode (" + $('#txtPasswordBarcode').val() + ") was canceled.");
      document.getElementById('txtPasswordBarcode').removeAttribute('disabled');
      $('#txtPasswordBarcode').val('');
      $('#txtPasswordBarcode').focus();
      document.getElementById('txtSerialNumber').setAttribute('disabled', 'disabled');
      $('#txtSerialNumber').val('');
    }
  }
  mClearConsole() {
    $('#taConsole').html('')
    $('#taConsole').css('background-color', "#FFFFFF");
  }
  onKeypressEvent_Employee(event: any) {
    if (event.keyCode == 13) {
      //console.log(event.target.value)
      var vEmployee = $('#txtEmployee').val().toString().trim();
      var vEmployeePassword = $('#txtPassword').val().toString().trim();
      //var vEmployee = $('#txtEmployee').val().toString().trim();
      if (vEmployee == "") {
        $('#txtEmployee').focus();
      } else {
        $('#txtPassword').focus();
      }
    } else {
      if (event.target.value.toString().trim() == "") {
        document.getElementById('txtPasswordBarcode').setAttribute('disabled', 'disabled');
        document.getElementById('txtSerialNumber').setAttribute('disabled', 'disabled');
        $('#txtPasswordBarcode').val('');
        $('#txtSerialNumber').val('');
      }
    }
  }
  onKeypressEvent_PasswordEmployee(event: any) {
    if (event.keyCode == 13) {
      //console.log(event.target.value)
      var x = event.target.value.toString().trim();
      var vEmployee = $('#txtEmployee').val().toString().trim();
      var vEmployeePassword = $('#txtPassword').val().toString().trim();
      if (vEmployeePassword == "" && vEmployee != "") {
        $('#txtPassword').focus();
        document.getElementById('txtPasswordBarcode').setAttribute('disabled', 'disabled');
        document.getElementById('txtSerialNumber').setAttribute('disabled', 'disabled');
        $('#txtPasswordBarcode').val('');
        $('#txtSerialNumber').val('');
      } else {
        document.getElementById('txtPasswordBarcode').removeAttribute('disabled');
        $('#txtPasswordBarcode').focus();
      }
    } else {
      if (event.target.value.toString().trim() == "") {
        document.getElementById('txtPasswordBarcode').setAttribute('disabled', 'disabled');
        document.getElementById('txtSerialNumber').setAttribute('disabled', 'disabled');
        $('#txtPasswordBarcode').val('');
        $('#txtSerialNumber').val('');
      }
    }
  }

  
  mProcessUnitSerialNumber(data: any) {
    this.cancelarpedidosService.ProcessUnitSerialNumber(data).subscribe(Result => {
      console.log(Result);
      if (!Result.success) {
        document.getElementById('txtSerialNumber').removeAttribute('disabled');
        $('#txtSerialNumber').focus();
        $('#txtSerialNumber').val("");
        this.notify.setNotification(
          "No Autorizado",
          Result.message,
          "notice"
        );
        this.mSetResponseOnConsole(false, Result.message);
      } else {
        document.getElementById('txtPasswordBarcode').removeAttribute('disabled');
        $('#txtPasswordBarcode').val("");
        $('#txtPasswordBarcode').focus();
        $('#txtSerialNumber').val("");
        // this.notify.setNotification("Success", "Unit processed correctly.", "success");
        // this.mSetResponseOnConsole(true, Result.message);
        this.notify.setNotification("Success", Result.message, "success");
        // alert(Result.data.password_response);
        // alert(Result.data.unit_response);
        this.mSetResponseOnConsole(true, Result.data.password_response);
        this.mSetResponseOnConsole(true, Result.data.unit_response);
        Constants.BarcodeUggly = "";
      }
    },
      error => {
        console.log(error);
        this.notify.setNotification("Error", error, "error");
      },
      () => {
        console.log("Post Ok");
      });
  }
  mValidatePasswordBarcode(data: any) {
    this.cancelarpedidosService.ValidatePasswordBarcode(data).subscribe(Result => {
      console.log(Result);
      document.getElementById('txtPasswordBarcode').removeAttribute('disabled');
      $('#txtPasswordBarcode').val("");
      $('#txtPasswordBarcode').focus();
      if (!Result.success) {
        this.notify.setNotification(
          "No Autorizado",
          Result.message,
          "notice"
        );
        this.mSetResponseOnConsole(false, Result.message);
      } else {
        this.notify.setNotification("Success", "Password barcode is correct.", "success");
        this.mSetResponseOnConsole(true, Result.message);
        var vBarcodeUggly = Result.data.uggly_barcode;
        var vPrettyBarcode =  Result.data.pretty_barcode;
        var vPartnumberBarcode = Result.data.part_number;
        document.getElementById('txtPasswordBarcode').setAttribute('disabled', 'disabled');
        $('#txtPasswordBarcode').val(vPrettyBarcode);
        Constants.BarcodeUggly = vBarcodeUggly;
        Constants.BarcodePretty = vPrettyBarcode;
        Constants.PartnumberBarcode = vPartnumberBarcode;
        document.getElementById('txtSerialNumber').removeAttribute('disabled');
        $('#txtSerialNumber').focus()
      }
    },
      error => {
        console.log(error);
        this.notify.setNotification("Error", error, "error");
      },
      () => {
        console.log("Post Ok");
      });
  }
  mSetResponseOnConsole(pBool, pMessage) {
    var vHTML = $('#taConsole').html();
    var formatted = this.mGetDatetime();
    if (pMessage.toUpperCase().includes("PASS TO") || pMessage.toUpperCase().includes("SUCCESS"))
      $('#taConsole').css('background-color', "lime")
    else if (pMessage.toUpperCase().includes("FAIL") || pMessage.toUpperCase().includes("MOVE"))
      $('#taConsole').css('background-color', "#F73B3B")
    else
      $('#taConsole').css('background-color', "#FFD700");
    if (pBool) {
      $('#taConsole').html(vHTML + "<div class='d-flex justify-content-start mt-0 mb-0'><h5><span class='badge badge-secondary'>[" + formatted + "]</span></h5> - <h5><span class='badge badge-pill badge-primary'>[Response] </span></h5> - <h5><span class='badge badge-success'>" + pMessage + "</span></h5></div>");
    } else {
      if (pMessage.toUpperCase().includes("FAIL TO"))
        $('#taConsole').html(vHTML + "<div class='d-flex justify-content-start mt-0 mb-0'><h5><span class='badge badge-secondary'>[" + formatted + "]</span></h5> - <h5><span class='badge badge-pill badge-primary'>[Response] </span></h5> - <h5><span class='badge badge-danger'>" + pMessage + "</span></h5></div>");
      else
        $('#taConsole').html(vHTML + "<div class='d-flex justify-content-start mt-0 mb-0'><h5><span class='badge badge-secondary'>[" + formatted + "]</span></h5> - <h5><span class='badge badge-pill badge-primary'>[Response] </span></h5> - <h5><span class='badge badge-warning'>" + pMessage + "</span></h5></div>");
    }
    var d = $('#taConsole');
    d.scrollTop(d.prop("scrollHeight"));
    setTimeout(this.mChangeColorlbl.bind(true, pMessage), 2000);
  }
  mSetRquestOnConsole(pInput) {
    var vHTML = $('#taConsole').html();
    var formatted = this.mGetDatetime();
    $('#taConsole').html(vHTML + "<div class='d-flex justify-content-start mt-0 mb-0'><h5><span class='badge badge-secondary'>[" + formatted + "]</span></h5> - <h5><span class='badge badge-pill badge-info'>[Request] </span></h5> - <h5><span class='badge badge-secondary'>" + pInput + "</span></h5></div>");
    var d = $('#taConsole');
    d.scrollTop(d.prop("scrollHeight"));
  }
  mGetDatetime() {
    var d = new Date($.now());
    return this.addZero(d.getDate(), 2) + "-" + this.addZero((d.getMonth() + 1), 2) + "-" + d.getFullYear() + " " + this.addZero(d.getHours(), 2) + ":" + this.addZero(d.getMinutes(), 2) + ":" + this.addZero(d.getSeconds(), 2) + "," + this.addZero(d.getMilliseconds(), 3);
  }
  addZero(x, n) {
    while (x.toString().length < n) {
      x = "0" + x;
    }
    return x;
  }
  mChangeColorlbl(pResponse) {
    if (pResponse.toUpperCase().includes("PASS TO") || pResponse.toUpperCase().includes("SUCCESS"))
        $('#taConsole').css('background-color', "#96F8AE")
    else if (pResponse.toUpperCase().includes("FAIL") || pResponse.toUpperCase().includes("MOVE"))
        $('#taConsole').css('background-color', "#F38686")
    else
        $('#taConsole').css('background-color', "#F9E773")
}
  eventHandler(event) {
    if (event.keyCode === 13) {
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}