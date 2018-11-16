function goToBus(arg) {
	router.goto("Bus");
}

function cancel(arg) {
	router.goto("Main");
}

module.exports = {

	goToBus: goToBus,

    cancel: cancel
};