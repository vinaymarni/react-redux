self.onmessage = function (event) {
    const result = event.data * 2; // Perform a calculation
    self.postMessage(result); // Send result back to the main thread
};
