#define MyAppName "Weltec3D Copiar Propriedades"
#define MyAppVersion "1.0.0"
#define MyAppPublisher "Weltec3D Solucoes em Detalhamento"
#define MyAppURL "https://weltec3d-site.vercel.app"
#define MyOutputName "Weltec3D_CopiarPropriedades_Setup_v1.0.0"

[Setup]
AppId={{8B7A795E-6D0E-4E35-A892-7C66FA94A2DA}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={userappdata}\pyRevit\Extensions\Weltec3D.extension
DisableDirPage=yes
DisableProgramGroupPage=yes
OutputDir=Output
OutputBaseFilename={#MyOutputName}
Compression=lzma
SolidCompression=yes
WizardStyle=modern
PrivilegesRequired=lowest
ArchitecturesInstallIn64BitMode=x64compatible
UninstallDisplayName={#MyAppName}
UninstallDisplayIcon={app}\Weltec3D.tab\Automacao.panel\Copiar Propriedades.launcherbutton\icon.png

[Languages]
Name: "brazilianportuguese"; MessagesFile: "compiler:Languages\BrazilianPortuguese.isl"

[Tasks]
Name: "manual"; Description: "Abrir manual de instalacao ao finalizar"; GroupDescription: "Opcoes adicionais:"; Flags: checkedonce

[Files]
Source: "Source\Weltec3D.extension\*"; DestDir: "{userappdata}\pyRevit\Extensions\Weltec3D.extension"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "Manual_Instalacao_Copiar_Propriedades.txt"; DestDir: "{userappdata}\pyRevit\Extensions\Weltec3D.extension\docs"; Flags: ignoreversion

[Icons]
Name: "{autoprograms}\Weltec3D\Manual - Copiar Propriedades"; Filename: "{userappdata}\pyRevit\Extensions\Weltec3D.extension\docs\Manual_Instalacao_Copiar_Propriedades.txt"

[Run]
Filename: "{userappdata}\pyRevit\Extensions\Weltec3D.extension\docs\Manual_Instalacao_Copiar_Propriedades.txt"; Description: "Abrir manual de instalacao"; Flags: postinstall shellexec skipifsilent; Tasks: manual

[UninstallDelete]
Type: filesandordirs; Name: "{userappdata}\pyRevit\Extensions\Weltec3D.extension\Weltec3D.tab\Automacao.panel\Copiar Propriedades.launcherbutton"
Type: filesandordirs; Name: "{userappdata}\pyRevit\Extensions\Weltec3D.extension\bin\CopiarPropriedades"
