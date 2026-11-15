AGWAD WEBSITE - FIRST DASHBOARD PAGE
Technology: HTML, CSS, JavaScript
Design: Modern environmental monitoring dashboard (blue, teal, white)

PROJECT FILES
- index.html : page structure and dashboard content
- style.css  : colors, layout, responsive design
- script.js  : date display, navigation highlighting, refresh feedback, Leaflet map

HOW TO RUN (BEGINNER-FRIENDLY)
1. Download and extract AGWAD-Website.zip.
2. Open Visual Studio Code.
3. Click File > Open Folder.
4. Select the extracted AGWAD-Website folder.
5. In the Explorer panel, open index.html.
6. Right-click index.html and choose "Open with Live Server" if you have the
   Live Server extension installed.
   If you do not have Live Server, open the folder in File Explorer and
   double-click index.html to open it in your browser.
7. Keep index.html, style.css, and script.js in the same folder.

IMPORTANT
This is the first front-end dashboard page only. It is not connected to the
ESP32, nitrate sensor, MQTT broker, or online database yet. The "--" values,
Offline status, and empty charts are intentional placeholders, not measured
results. The sampling locations are taken from the research plan:
Rompeolas (Sorsogon City), Macalaya Port (Castilla), coastal Juban, and
coastal Casiguran. Exact GPS coordinates still need to be supplied before
real map markers can be added.

NEXT DEVELOPMENT STEPS
1. Confirm the nitrate sensor's exact output format and units.
2. Decide on an MQTT broker and topic structure.
3. Decide on a database / backend service for storing readings.
4. Add Leaflet.js map markers using verified GPS coordinates (the regional map is now included).
5. Connect the dashboard to actual device data and display real readings.

MAP NOTE
The current Leaflet map is a broad regional view of Sorsogon Bay. It intentionally
has no site markers yet because the research plan names the sampling areas but
does not give exact GPS coordinates for the actual water-sampling points.
