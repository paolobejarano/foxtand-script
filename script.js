function cleanPhoneNumber() {
    var inputString = document.getElementById("form-field-tel").value;
    var cleanedString = inputString.replace(/[^+0-9]/g, '');
    if (cleanedString != inputString){
        document.getElementById("form-field-tel").value = cleanedString;
    }
}

function updateFormFieldTel(){
    // Concatenate the values and update the hidden input
    document.getElementById("form-field-tel").value = document.getElementById("country_code").value + document.getElementById("cellphone").value;
    cleanPhoneNumber();
}

function create_event_listeners() {
    var countrySelect = document.getElementById("country_code");
    var cellphoneInput = document.getElementById("cellphone");
    var formFieldTelInput = document.getElementById("form-field-tel");

    // Add event listeners to both elements
    countrySelect.addEventListener("change", updateFormFieldTel);
    cellphoneInput.addEventListener("input", function(){
        this.value = this.value.replace(/[^0-9]/g, '');
        updateFormFieldTel();
    }
    );

    updateFormFieldTel();

}

function make_tel_input_hidden() {
    var tel_input = document.getElementById("form-field-tel");
    tel_input.type = "hidden";
}

function create_country_code_select(countries) {
    var select_country_code = document.createElement("select");
    select_country_code.id = "country_code";
    select_country_code.classList.add("elementor-field-textual");
    select_country_code.classList.add("elementor-size-sm");

    if (document.getElementById("form-field-tel").required){
        select_country_code.required = true;
    }

    var default_option = document.createElement("option");
    default_option.value = "";
    default_option.text = "Seleccionar país";
    select_country_code.appendChild(default_option);
    
    for (var code in countries) {
        var option = document.createElement("option");
        option.value = countries[code].phone_code;
        option.text = countries[code].name + " (" + countries[code].phone_code + ")";
        select_country_code.appendChild(option);
    }
    return select_country_code;
}

function create_cellphone_input() {
    var cellphone_input = document.createElement("input");
    cellphone_input.type = "text";
    cellphone_input.id = "cellphone";
    cellphone_input.placeholder = "Celular";
    cellphone_input.pattern = "[0-9]*";
    if (document.getElementById("form-field-tel").required){
        cellphone_input.required = true;
    }
    return cellphone_input;
}


var countries = {
    "PE": {
        name: "Perú",
        phone_code: "+51",
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg"
    },
    "CO": {
        name: "Colombia",
        phone_code: "+52",
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg"
    }
}

var newDiv = document.createElement("div");
var select_country_code = create_country_code_select(countries)
var input_cellphone = create_cellphone_input()

newDiv.appendChild(select_country_code)
newDiv.appendChild(input_cellphone)

make_tel_input_hidden();
document.getElementById("form-field-tel").parentElement.innerHTML += newDiv.innerHTML;

create_event_listeners();
