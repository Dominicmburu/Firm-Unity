let nationalIdFiles = [];
        let passportPhotoFiles = [];

        document.getElementById('national-id').addEventListener('change', function(event) {
            const preview = document.getElementById('national-id-preview');
            const error = document.getElementById('national-id-error');
            error.textContent = '';
            preview.innerHTML = ''; // Clear previous content
            const file = event.target.files[0];
            if (file) {
                if (nationalIdFiles.length < 2) {
                    nationalIdFiles.push(file);
                } else {
                    error.textContent = 'You can only upload up to two images of your national ID/Passport.';
                    return;
                }
            }
            nationalIdFiles.forEach(file => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'img-thumbnail';
                    img.style.maxWidth = '100px';
                    img.style.marginRight = '10px';
                    preview.appendChild(img);
                };
                reader.readAsDataURL(file);
            });
        });

        document.getElementById('passport-photos').addEventListener('change', function(event) {
            const preview = document.getElementById('passport-photos-preview');
            const error = document.getElementById('passport-photos-error');
            error.textContent = '';
            preview.innerHTML = ''; // Clear previous content
            const files = event.target.files;
            for (const file of files) {
                if (passportPhotoFiles.length < 2) {
                    passportPhotoFiles.push(file);
                } else {
                    error.textContent = 'You can only upload up to two passport size photos.';
                    return;
                }
            }
            passportPhotoFiles.forEach(file => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'img-thumbnail';
                    img.style.maxWidth = '100px';
                    img.style.marginRight = '10px';
                    preview.appendChild(img);
                };
                reader.readAsDataURL(file);
            });
        });

        document.getElementById('membership-form').addEventListener('submit', function(event) {
            const nationalIdError = document.getElementById('national-id-error');
            const passportPhotosError = document.getElementById('passport-photos-error');

            if (nationalIdFiles.length === 0) {
                nationalIdError.textContent = 'Please upload an image of your national ID/Passport.';
                event.preventDefault();
            }

            if (passportPhotoFiles.length !== 2) {
                passportPhotosError.textContent = 'Please upload exactly two passport size photos.';
                event.preventDefault();
            }
        });