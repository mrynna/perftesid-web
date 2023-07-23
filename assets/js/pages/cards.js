document.getElementById("footer-year").innerHTML = new Date().getFullYear() + " © Politeknik Negeri Ujung Pandang";

async function getDataFromDatabase() {
    // Make a request to the server to get the data from the database
    fetch('api/service.data.php')
        .then(response => response.json())
        .then(data => {
        document.getElementById('card-data').innerHTML = cards(data);
        // Process the data received from the server
        })
        .catch(error => {
        // Handle any errors that occur during the request
        // console.error(error);
        });
}
  
  // Call the function initially
getDataFromDatabase();

// Set interval to call the function every 5 seconds
setInterval(getDataFromDatabase, 5000);

function cards(data){
return `<div class="row">
            <div class="col-lg-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <h4 class="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Tegangan (Voc)</h4>
                                <h3 class="my-2 py-1">
                                    ${data.tegangan} V
                                </h3>
                                <p class="mb-0 text-muted">
                                    <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> Volt</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <h4 class="text-muted fw-normal mt-0 text-truncate" title="New Leads">Arus</h4>
                                <h3 class="my-2 py-1">
                                    ${data.arus} A
                                </h3>
                                <p class="mb-0 text-muted">
                                    <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> Ampere</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <h4 class="text-muted fw-normal mt-0 text-truncate" title="Deals">Suhu Panel</h4>
                                <h3 class="my-2 py-1">
                                    ${data.suhuPanel} C
                                </h3>
                                <p class="mb-0 text-muted">
                                    <span class="text-danger me-2"><i class="mdi mdi-arrow-up-bold"></i> Celcius</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <h4 class="text-muted fw-normal mt-0 text-truncate" title="Booked Revenue">Suhu Lingkungan</h4>
                                <h3 class="my-2 py-1">
                                    ${data.suhuLingkungan} C
                                </h3>
                                <p class="mb-0 text-muted">
                                    <span class="text-danger me-2"><i class="mdi mdi-arrow-up-bold"></i> Celcius</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <h4 class="text-muted fw-normal mt-0 text-truncate" title="New Leads">Iradiasi</h4>
                                <h3 class="my-2 py-1">
                                    ${data.iradiasi} w/m2
                                </h3>
                                <p class="mb-0 text-muted">
                                    <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> w/m2</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <h4 class="text-muted fw-normal mt-0 text-truncate" title="New Leads">Performa</h4>
                                <h3 class="my-2 py-1">
                                    ${data.performa} %
                                </h3>
                                <p class="mb-0 text-muted">
                                    <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> Percentage</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        `
}



