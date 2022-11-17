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

function updateAboutMe(profileData) {
  const aboutMe = document.getElementById("profile.aboutMe");

  aboutMe.innerHTML = profileData.aboutMe
    .map((aboutMe) => `<p>${aboutMe}</p>`)
    .join("");
}

function updateCertificate(profileData) {
  const certificate = document.getElementById("profile.certificate");

  certificate.innerHTML = profileData.certificate
    .map(
      (certificate) => `
    <li class="certificados">
      <h3 class="title">${certificate.name} <br>
      <span class="institution">(${certificate.institution})</span></h3>
      <p class="certificate">Certificado: <a href="${certificate.certificate}">${certificate.certificate}</a></p>
      </h3>
    </li>`
    )
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");

  portfolio.innerHTML = profileData.portfolio
    .map(
      (portfolio) => `
    <li>
      <h3 class="title github">${portfolio.name}<br>
          <span class="description">${portfolio.description}</span>
      </h3>
      <p class="repositorio">Repositório: <a href="${portfolio.repository}">${portfolio.repository}</a></p>
    </li>
    `
    )
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateAboutMe(profileData);
  updateCertificate(profileData);
  updatePortfolio(profileData);
})();
