function cleanPhoneNumber() {
    var inputString = document.getElementById("form-field-tel").value;
    var cleanedString = inputString.replace(/[^+0-9]/g, '');
    if (cleanedString !== inputString) {
        document.getElementById("form-field-tel").value = cleanedString;
    }
}

function updateFormFieldTel() {
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
    cellphoneInput.addEventListener("input", function () {
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

function create_country_code_selector(defaultCountry, locValue) {
    let countriesData =
        {
            "FK": {
                name: "Islas Malvinas",
                phone_code: "+500",
                flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg"
            },
            "BZ": {
                name: "Belice",
                phone_code: "+501",
                flag: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg"
            },
            "GT": {
                name: "Guatemala",
                phone_code: "+502",
                flag: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg"
            },
            "SV": {
                name: "El Salvador",
                phone_code: "+503",
                flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg"
            },
            "HN": {
                name: "Honduras",
                phone_code: "+504",
                flag: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg"
            },
            "NI": {
                name: "Nicaragua",
                phone_code: "+505",
                flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg"
            },
            "CR": {
                name: "Costa Rica",
                phone_code: "+506",
                flag: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg"
            },
            "PA": {
                name: "Panamá",
                phone_code: "+507",
                flag: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg"
            },
            "PM": {
                name: "San Pedro y Miquelón",
                phone_code: "+508",
                flag: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg"
            },
            "HT": {
                name: "Haití",
                phone_code: "+509",
                flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg"
            },
            "PE": {
                name: "Perú",
                phone_code: "+51",
                flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg"
            },
            "MX": {
                name: "México",
                phone_code: "+52",
                flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg"
            },
            "CU": {
                name: "Cuba",
                phone_code: "+53",
                flag: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg"
            },
            "AR": {
                name: "Argentina",
                phone_code: "+54",
                flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
            },
            "BR": {
                name: "Brasil",
                phone_code: "+55",
                flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
            },
            "CL": {
                name: "Chile",
                phone_code: "+56",
                flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg"
            },
            "CO": {
                name: "Colombia",
                phone_code: "+57",
                flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            },
            "VE": {
                name: "Venezuela",
                phone_code: "+58",
                flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg"
            },
            "GP": {
                name: "Guadalupe",
                phone_code: "+590",
                flag: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg"
            },
            "BO": {
                name: "Bolivia",
                phone_code: "+591",
                flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg"
            },
            "GY": {
                name: "Guyana",
                phone_code: "+592",
                flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg"
            },
            "EC": {
                name: "Ecuador",
                phone_code: "+593",
                flag: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg"
            },
            "GF": {
                name: "Guayana Francesa",
                phone_code: "+594",
                flag: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg"
            },
            "PY": {
                name: "Paraguay",
                phone_code: "+595",
                flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg"
            },
            "MQ": {
                name: "Martinica",
                phone_code: "+596",
                flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag-of-Martinique.svg"
            },
            "SR": {
                name: "Surinam",
                phone_code: "+597",
                flag: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg"
            },
            "UY": {
                name: "Uruguay",
                phone_code: "+598",
                flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg"
            },
            "DO": {
                name: "República Dominicana",
                phone_code: "+809",
                flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg"
            },
            "ES": {
                name: "España",
                phone_code: "+34",
                flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg"
            },
            "US": {
                name: "Estados Unidos",
                phone_code: "+1",
                flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg"
            }
        };

    let countriesArray = [];
    for (let key in countriesData) {
        countriesArray.push({
            name: key,
            value: countriesData[key]
        });
    }
    // Ordenar el objeto alfabéticamente por nombre
    var countriesArraySorted = countriesArray.sort(function (a, b) {
        return (a.value.name > b.value.name) ? 1 : ((b.value.name > a.value.name) ? -1 : 0)
    });

    // Buscar el país con el valor de "loc"
    let foundCountry = countriesData[locValue];
    foundCountry.code = locValue;

    // Verificar si se encontró el país
    if (foundCountry) {
        // Crear elementos HTML
        let newDiv = document.createElement("div");
        let selectCountryCode = create_country_code_select(countriesArraySorted, defaultCountry, foundCountry);
        let inputCellphone = create_cellphone_input();

        // Agregar elementos al div
        newDiv.appendChild(selectCountryCode);
        newDiv.appendChild(inputCellphone);

        // Ocultar el input de teléfono
        make_tel_input_hidden();

        // Agregar el div al formulario
        document.getElementById("form-field-tel").parentElement.innerHTML += newDiv.innerHTML;

        // Agregar event listeners
        create_event_listeners();

        // Devolver el país encontrado
        return foundCountry;
    } else {
        console.log("País no encontrado para el valor de 'loc' proporcionado.");
        return null;
    }
}

function create_country_code_select(countries, defaultCountry, selectedCountry) {
    let select_country_code = document.createElement("select");
    select_country_code.id = "country_code";
    select_country_code.classList.add("elementor-field-textual");
    select_country_code.classList.add("elementor-size-sm");

    if (document.getElementById("form-field-tel").required) {
        select_country_code.required = true;
    }

    let default_option = document.createElement("option");

    // Verificar si se proporcionó un país seleccionado
    if (selectedCountry) {
        default_option.value = selectedCountry.phone_code;
        default_option.text = selectedCountry.name + " (" + selectedCountry.phone_code + ")";
        default_option.selected = true;
        select_country_code.appendChild(default_option);
    } else {
        default_option.value = "";
        default_option.text = "Seleccionar país";
        select_country_code.appendChild(default_option);
    }

    // Iterar sobre los países y agregar opciones
    for (let i in countries) {
        // Evitar agregar el país seleccionado nuevamente como una opción
        let key = countries[i].name
        if (key !== selectedCountry.code) {
            let option = document.createElement("option");
            option.value = key;
            option.text = countries[i].value.name + " (" + countries[i].value.phone_code + ")";
            select_country_code.appendChild(option);

            // Establecer el país por defecto seleccionado
            if (defaultCountry && defaultCountry.toUpperCase() === key) {
                option.selected = true;
            }
        }
    }

    return select_country_code;
}

// Llamada a la función getDefaultCountry
getDefaultCountry();

function create_cellphone_input() {
    let cellphone_input = document.createElement("input");
    cellphone_input.type = "text";
    cellphone_input.id = "cellphone";
    cellphone_input.placeholder = "Celular";
    cellphone_input.pattern = "[0-9]*";
    if (document.getElementById("form-field-tel").required) {
        cellphone_input.required = true;
    }
    return cellphone_input;
}

function getDefaultCountry() {
    // Utilizar el servicio de geolocalización de Cloudflare para obtener la ubicación del usuario
    fetch('https://www.cloudflare.com/cdn-cgi/trace')
        .then(response => response.text())
        .then(data => {
            // Mostrar los datos obtenidos en la consola para su revisión
            console.log('Cloudflare Data:', data);

            // Dividir la cadena en líneas
            const lines = data.split('\n');

            // Encontrar el valor de "loc" en los datos obtenidos
            let locValue;
            for (const line of lines) {
                if (line.includes('loc=')) {
                    // Obtener el valor de "loc"
                    locValue = line.split('=')[1].trim();
                    console.log("Valor de 'loc':", locValue);
                    break;
                }
            }

            // Verificar si se encontró el valor de "loc"
            if (locValue) {
                // Llamar a la función para crear el selector y establecer el país por defecto
                create_country_code_selector(null, locValue);
            } else {
                console.error('Error fetching IP info: Country code not found');
                // Si no se encuentra la información del código del país, establecer por defecto a Perú (PE)
                create_country_code_selector('PE', null);
            }
        })
        .catch(error => {
            console.error('Error fetching IP info:', error);
            // Si hay un error al obtener la información de la IP, establecer por defecto a Perú (PE)
            create_country_code_selector('US', null);
        });
}