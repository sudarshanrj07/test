// 3D Scroll Effect
window.addEventListener("scroll", function () {
	const scrolled = window.scrollY;

	// Apply 3D effect for sections
	document.querySelectorAll(".section").forEach(function (section) {
		const depth = scrolled * 0.1;
		section.style.transform = `translateZ(${depth}px)`;
	});

	document.querySelectorAll(".experience-item").forEach(function (card) {
		const offset = scrolled * 0.5;
		card.style.transform = `translateZ(${offset}px) rotateY(${
			scrolled / 50
		}deg)`;
	});
	// Apply 3D effect for project cards
	document.querySelectorAll(".project-card").forEach(function (card) {
		const offset = scrolled * 0.5;
		card.style.transform = `translateZ(${offset}px) rotateY(${
			scrolled / 90
		}deg)`;
	});
});

// // Infinite Scroll Effect (Loops to the top when end is reached)
// let scrollPosition = 0;
// function loopScroll() {
// 	scrollPosition += 1;
// 	window.scrollTo(0, scrollPosition);
// 	if (scrollPosition >= document.body.scrollHeight - window.innerHeight) {
// 		scrollPosition = 0; // Reset scroll position to top
// 	}
// 	requestAnimationFrame(loopScroll); // Continue the animation
// }

// loopScroll(); // Start the infinite scroll loop
