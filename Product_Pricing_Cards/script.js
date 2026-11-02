
const billingToggle = document.getElementById("billing-toggle");

const monthlyLabel = document.getElementById("monthly-label");
const yearlyLabel = document.getElementById("yearly-label");

const prices = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");

billingToggle.addEventListener("click", () => {

    const isYearly =
        billingToggle.getAttribute("aria-pressed") === "true";

    const newYearlyState = !isYearly;

    billingToggle.setAttribute(
        "aria-pressed",
        String(newYearlyState)
    );

    // Update prices using HTML data attributes
    prices.forEach(price => {

        price.style.opacity = "0";

        setTimeout(() => {

            price.textContent = newYearlyState
                ? price.dataset.yearly
                : price.dataset.monthly;

            price.style.opacity = "1";

        }, 150);

    });

    // Update billing period
    periods.forEach(period => {
        period.textContent = newYearlyState
            ? "/month, billed yearly"
            : "/month";
    });

    // Update active label
    monthlyLabel.classList.toggle("active", !newYearlyState);
    yearlyLabel.classList.toggle("active", newYearlyState);

});
