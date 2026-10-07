# Kochorakel 0.2.4 auf GitHub aktualisieren

## Empfohlen: automatische Veröffentlichung

1. Die ZIP-Datei `Kochorakel_0.2.4_GITHUB_ACTIONS.zip` entpacken.
2. Im Repository `daviinM/Kochorakel` **Add file → Upload files** öffnen.
3. Den gesamten entpackten Inhalt hochladen. Wichtig: Auch der Ordner `.github`
   muss dabei sein.
4. Unten **Commit changes** auswählen.
5. Einmalig unter **Settings → Pages → Build and deployment → Source** den Eintrag
   **GitHub Actions** wählen.
6. Unter **Actions** warten, bis „Kochorakel veröffentlichen“ grün abgeschlossen ist.
7. Die App öffnen und bei Bedarf einmal vollständig neu laden. Die Versionsnummer
   unter Einstellungen muss `0.2.4` anzeigen.

Bei allen folgenden Updates genügt wieder Schritt 1 bis 4. Test, Build und
Veröffentlichung laufen dann automatisch.

## Alternative: fertige Website direkt hochladen

Die ZIP-Datei `Kochorakel_0.2.4_DIREKT_UPLOAD.zip` enthält nur die bereits gebaute
Website. Sie ist für eine bestehende manuelle GitHub-Pages-Einrichtung gedacht.
Ihr Inhalt muss direkt im veröffentlichten Ordner liegen, nicht in einem zusätzlichen
Unterordner.

## Bestehende Daten

Konten und Cloud-Profile in Supabase bleiben erhalten. Beim ersten Start wandelt die
App alte Favoriten, Wochenpläne, Entdeckungen und Kochprotokolle automatisch auf die
neuen stabilen Rezept-IDs um.
