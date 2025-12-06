# story_blog

Feature	Static Files	Media Files

Source	The developer (part of the codebase).	The user or application (uploaded/generated at runtime).

Nature	Fixed assets, bundled with the application.	Dynamic content, constantly changing.

Examples	CSS, JavaScript, application images (logos, icons), fonts.	User-uploaded profile pictures, documents, blog post images.

Management	Collected using python manage.py **collectstatic**.	Stored directly upon upload (e.g., via a FileField or ImageField).

Settings	STATIC_URL (URL prefix) and STATIC_ROOT (deployment directory).	MEDIA_URL (URL prefix) and MEDIA_ROOT (storage directory).

Version Control	Yes, they should be tracked in Git.	No, they should generally be ignored by Git.
----------------------------------------------------------------------------------------------------------------

1. Static Files (STATIC_ROOT)
Static files are the supporting assets that make your website look and function correctly.
 They are part of your code and are written by the developer.


Key Points:
Purpose: To build the user interface and functionality (styling, scripting).

Deployment: In development, Django serves them automatically. In production, you run python manage.py collectstatic, which copies all static files from across your apps into a single directory defined by STATIC_ROOT. This directory is then served by a dedicated web server (like Nginx or Apache) or a CDN for performance.

Settings:

STATIC_URL = '/static/': The URL prefix (e.g., mysite.com/static/css/style.css).

STATIC_ROOT = 'staticfiles/': The absolute path where collectstatic puts all files.