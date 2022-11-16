function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;

  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softsSkills");

  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");

  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) => `
    <li>
    <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
    </li>
    `
    )
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");

  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updateCertificate(profileData) {
  const certificate = document.getElementById("profile.certificate");

  certificate.innerHTML = profileData.certificate
    .map(
      (certificate) => `
    <li>
    <h3>${certificate.name}</h3>
    <p>${certificate.institution}</p>
    <a href="https://www.dio.me/certificate/F6658B76">https://www.dio.me/certificate/F6658B76</a>
    </li>`
    )
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
})();
