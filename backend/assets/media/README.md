# story_blog
# story_blog

Feature	Static Files	Media Files

Source	The developer (part of the codebase).	The user or application (uploaded/generated at runtime).

Nature	Fixed assets, bundled with the application.	Dynamic content, constantly changing.

Examples	CSS, JavaScript, application images (logos, icons), fonts.	User-uploaded profile pictures, documents, blog post images.

Management	Collected using python manage.py **collectstatic**.	Stored directly upon upload (e.g., via a FileField or ImageField).

Settings	STATIC_URL (URL prefix) and STATIC_ROOT (deployment directory).	MEDIA_URL (URL prefix) and MEDIA_ROOT (storage directory).

Version Control	Yes, they should be tracked in Git.	No, they should generally be ignored by Git.
----------------------------------------------------------------------------------------------------------------

2. Media Files (MEDIA_ROOT)
Media files are user-generated content or files dynamically created by the application during its normal operation.

Key Points:
Purpose: To store data uploaded by users. This content is unique to the database records that reference them.

Deployment: Django does not automatically serve media files in production. In development (DEBUG=True), you must add a configuration snippet to your project's urls.py to serve them. In production, they are served directly by a web server (like Nginx) or, more commonly for scalability, stored on a dedicated cloud storage service like Amazon S3 or Google Cloud Storage.

Settings:

MEDIA_URL = '/media/': The URL prefix (e.g., mysite.com/media/profile_pics/user1.jpg).

MEDIA_ROOT = 'media/': The absolute path where uploaded files are physically stored on the filesystem (or reference for cloud storage).