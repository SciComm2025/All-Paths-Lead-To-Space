
function startJourney() {
    // Hide the intro section and show the paths section
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("paths").classList.remove("hidden");
}

function choosePath(path) {
    let resultTitle = "";
    let resultDescription = "";

    // Define results based on user choice
    switch (path) {
        case 'STEM':
            resultTitle = "STEM - The Scientific Explorer";
            resultDescription = "You are destined for a career in scientific research, engineering, or technology. Space exploration needs innovative minds like yours!";
            break;
        case 'ArtsAndDesign':
            resultTitle = "Arts & Design - The Creative Visionary";
            resultDescription = "Your creativity can transform the way we view space exploration. Designers and artists shape the public's imagination and understanding of space!";
            break;
        case 'Marcomm':
            resultTitle = "Marcomm/Journalism - The Storyteller";
            resultDescription = "Space exploration needs storytellers to communicate its wonders to the world. Your skills will inspire the next generation!";
            break;
        case 'Military':
            resultTitle = "Military - The Protector";
            resultDescription = "Your strategic thinking can ensure the security of space missions. Space exploration has a strong military presence in various ways.";
            break;
        case 'LifeSciences':
            resultTitle = "Life Sciences - The Life Saver";
            resultDescription = "From space medicine to bioengineering, life sciences play a vital role in making human life possible in space.";
            break;
        case 'LawPolicy':
            resultTitle = "Law & Policy - The Regulator";
            resultDescription = "You’ll help shape the rules and regulations that govern space exploration, ensuring it’s safe, ethical, and fair for all.";
            break;
        case 'SocialSciences':
            resultTitle = "Social Sciences - The Humanitarian";
            resultDescription = "Understanding human behavior in space is crucial. You’ll study the psychological and sociological aspects of living beyond Earth.";
            break;
    }

    // Show the result section
    document.getElementById("resultTitle").textContent = resultTitle;
    document.getElementById("resultDescription").textContent = resultDescription;

    // Hide paths section and show results
    document.getElementById("paths").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
}

function resetJourney() {
    // Reset to the initial state
    document.getElementById("intro").classList.remove("hidden");
    document.getElementById("paths").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
}
